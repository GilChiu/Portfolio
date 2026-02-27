Add Earth textures in this folder for the rendered shader pipeline:

- earth-night.jpg (primary night city lights map)
- earth-specular.jpg (water/specular mask map)
- earth-clouds.png (transparent cloud map)

Suggested source: NASA Visible Earth / Blue Marble (public domain).

Expected runtime paths:
- /textures/earth-night.jpg
- /textures/earth-specular.jpg
- /textures/earth-clouds.png

If a map is missing, the scene now falls back instead of crashing, but visual quality will be reduced.
