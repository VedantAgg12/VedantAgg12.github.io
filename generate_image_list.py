# generate_image_list.py

import os
import json

IMAGE_DIR = "images"
ALLOWED_EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp")

images = sorted([
    filename for filename in os.listdir(IMAGE_DIR)
    if filename.lower().endswith(ALLOWED_EXTENSIONS)
])

with open("imageList.json", "w") as f:
    json.dump(images, f, indent=2)

print(f"✅ Generated imageList.json with {len(images)} images.")
