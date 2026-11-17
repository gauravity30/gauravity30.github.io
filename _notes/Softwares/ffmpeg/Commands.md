---
title: Commands
publish: true
category: Softwares/ffmpeg
render_with_liquid: false
---

```sh
ffmpeg -framerate 1 -i unet.%04d.png unet.gif

ffmpeg -i broken.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p working.mp4
```
