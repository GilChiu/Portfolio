"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function useOptionalTexture(path: string) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    let active = true;
    const loader = new THREE.TextureLoader();

    loader.load(
      path,
      (loadedTexture) => {
        if (!active) {
          return;
        }

        loadedTexture.colorSpace = THREE.SRGBColorSpace;
        setTexture(loadedTexture);
      },
      undefined,
      () => {
        if (!active) {
          return;
        }

        setTexture(null);
      },
    );

    return () => {
      active = false;
    };
  }, [path]);

  return texture;
}

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsInnerRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: -0.85, y: 0 });
  const orbitBase = useRef({ x: -0.85, y: 0 });
  const hoverOffset = useRef({ x: 0, y: 0 });
  const lastPointer = useRef<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);
  const rotationLerp = useRef(0.018);
  const initialized = useRef(false);
  const introSpinActive = useRef(true);
  const introSpinElapsed = useRef(0);

  const nightTexture = useOptionalTexture("/textures/earth-night.jpg");
  const specularTexture = useOptionalTexture("/textures/earth-specular.jpg");
  const cloudsTexture = useOptionalTexture("/textures/earth-clouds.png");

  const earthMaterial = useMemo(() => {
    const uniforms = {
      uNightMap: { value: nightTexture },
      uSpecularMap: { value: specularTexture },
      uSunDirection: { value: new THREE.Vector3(0.82, 0.28, 0.5).normalize() },
      uSpecLayerStrength: { value: 0.38 },
      uHasNight: { value: nightTexture ? 1 : 0 },
      uHasSpec: { value: specularTexture ? 1 : 0 },
    };

    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform sampler2D uNightMap;
        uniform sampler2D uSpecularMap;
        uniform vec3 uSunDirection;
        uniform float uSpecLayerStrength;
        uniform float uHasNight;
        uniform float uHasSpec;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 sunDir = normalize(uSunDirection);
          float diffuse = max(dot(normal, sunDir), 0.0);
          float dayMix = smoothstep(-0.08, 0.18, diffuse);

          vec3 fallbackNight = vec3(0.95, 0.73, 0.35) * 0.35;
          vec3 nightMapColor = uHasNight > 0.5 ? texture2D(uNightMap, vUv).rgb : fallbackNight;
          vec3 specMapColor = uHasSpec > 0.5 ? texture2D(uSpecularMap, vUv).rgb : vec3(0.25);
          float waterMask = dot(specMapColor, vec3(0.333333));
          float landMask = 1.0 - waterMask;

          vec3 daySideFromNight = nightMapColor * 0.42 + vec3(0.02, 0.05, 0.1);
          daySideFromNight += vec3(0.04, 0.09, 0.16) * waterMask * 0.45;
          daySideFromNight -= vec3(0.015, 0.01, 0.006) * landMask * 0.3;

          vec3 nightSide = nightMapColor * 1.35;
          nightSide += vec3(0.02, 0.06, 0.12) * waterMask * 0.22;

          vec3 viewDir = normalize(cameraPosition - vWorldPos);
          vec3 halfVec = normalize(sunDir + viewDir);
          float specBase = pow(max(dot(normal, halfVec), 0.0), 96.0);
          float specular = specBase * waterMask * dayMix;

          vec3 specLayer = mix(vec3(0.01, 0.025, 0.05), vec3(0.08, 0.14, 0.24), waterMask);
          float specLayerMask = mix(0.55, 1.0, dayMix);
          vec3 layeredSpec = specLayer * specLayerMask * uSpecLayerStrength;

          vec3 twilightTint = vec3(0.9, 0.35, 0.1) * smoothstep(-0.1, 0.1, diffuse) * (1.0 - dayMix);
          vec3 lit = mix(nightSide, daySideFromNight, dayMix);
          vec3 finalColor = lit + layeredSpec + vec3(specular) * 0.45 + twilightTint * 0.06;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    });
  }, [nightTexture, specularTexture]);

  useEffect(() => {
    return () => {
      earthMaterial.dispose();
    };
  }, [earthMaterial]);

  useEffect(() => {
    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

    const handlePointerMove = (event: MouseEvent) => {
      if (introSpinActive.current) {
        return;
      }

      const normalizedX = event.clientX / window.innerWidth - 0.5;
      const normalizedY = event.clientY / window.innerHeight - 0.5;

      if (isDragging.current) {
        const previousPointer = lastPointer.current;
        if (!previousPointer) {
          lastPointer.current = { x: event.clientX, y: event.clientY };
          return;
        }

        const deltaX = event.clientX - previousPointer.x;
        const deltaY = event.clientY - previousPointer.y;

        orbitBase.current.y += deltaX * 0.0055;
        orbitBase.current.x = clamp(orbitBase.current.x + deltaY * 0.0035, -1.1, 0.65);

        targetRotation.current.y = orbitBase.current.y;
        targetRotation.current.x = orbitBase.current.x;
        lastPointer.current = { x: event.clientX, y: event.clientY };
        rotationLerp.current = 0.22;
        return;
      }

      hoverOffset.current.y = normalizedX * 0.08;
      hoverOffset.current.x = normalizedY * 0.045;

      targetRotation.current.y = orbitBase.current.y + hoverOffset.current.y;
      targetRotation.current.x = clamp(orbitBase.current.x + hoverOffset.current.x, -1.1, 0.65);
      rotationLerp.current = 0.025;
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (introSpinActive.current) {
        return;
      }

      isDragging.current = true;
      lastPointer.current = { x: event.clientX, y: event.clientY };
    };

    const handlePointerUp = () => {
      if (introSpinActive.current) {
        return;
      }

      isDragging.current = false;
      lastPointer.current = null;
      targetRotation.current.y = orbitBase.current.y + hoverOffset.current.y;
      targetRotation.current.x = clamp(orbitBase.current.x + hoverOffset.current.x, -1.1, 0.65);
      rotationLerp.current = 0.025;
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("mouseleave", handlePointerUp);
    window.addEventListener("mousemove", handlePointerMove);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("mouseleave", handlePointerUp);
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  useFrame((_, delta) => {
    if (!earthRef.current) {
      return;
    }

    if (!initialized.current) {
      earthRef.current.rotation.y = targetRotation.current.y;
      earthRef.current.rotation.x = targetRotation.current.x;
      initialized.current = true;
    }

    if (introSpinActive.current) {
      introSpinElapsed.current += delta;
      earthRef.current.rotation.y += delta * Math.PI * 0.8;
      earthRef.current.rotation.x += (orbitBase.current.x - earthRef.current.rotation.x) * 0.08;

      if (introSpinElapsed.current >= 1.4) {
        introSpinActive.current = false;
        orbitBase.current.y = earthRef.current.rotation.y;
        targetRotation.current.y = orbitBase.current.y;
        targetRotation.current.x = orbitBase.current.x;
        rotationLerp.current = 0.025;
      }
    } else {
      earthRef.current.rotation.y += (targetRotation.current.y - earthRef.current.rotation.y) * rotationLerp.current;
      earthRef.current.rotation.x += (targetRotation.current.x - earthRef.current.rotation.x) * rotationLerp.current;
    }

    if (cloudsInnerRef.current) {
      cloudsInnerRef.current.rotation.y = earthRef.current.rotation.y + 0.022;
      cloudsInnerRef.current.rotation.x = earthRef.current.rotation.x + 0.003;
    }

  });

  return (
    <group position={[1.25, -2.9, 0]}>
      <mesh ref={earthRef}>
        <sphereGeometry args={[3.1, 128, 128]} />
        <primitive object={earthMaterial} attach="material" />
      </mesh>

      {cloudsTexture ? (
        <mesh ref={cloudsInnerRef}>
          <sphereGeometry args={[3.2, 128, 128]} />
          <meshBasicMaterial
            map={cloudsTexture}
            color="#eaf4ff"
            transparent
            opacity={0.28}
            alphaTest={0.04}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ) : null}
    </group>
  );
}

export function EarthCanvas() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.45, 4.2], fov: 35 }}
        gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.12} />
        <directionalLight position={[4.2, 1.8, 2.2]} intensity={1.65} />
        <Earth />
      </Canvas>
    </div>
  );
}
