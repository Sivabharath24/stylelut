import base64
import os
from PIL import Image

output = "const DEMO_FRAMES = {\n"
frames_dir = "frames"
files = ["frame1.jpg", "frame2.jpg", "frame3.jpg", "frame4.png", "frame5.jpg"]

for f in files:
    path = os.path.join(frames_dir, f)
    if os.path.exists(path):
        img = Image.open(path)
        # Resize to make the base64 tiny but keep colors
        img.thumbnail((200, 200))
        tmp_path = path + ".tmp.jpg"
        img.convert('RGB').save(tmp_path, format="JPEG", quality=80)
        with open(tmp_path, "rb") as image_file:
            encoded_string = base64.b64encode(image_file.read()).decode("utf-8")
        os.remove(tmp_path)
        output += f'  "{f}": "data:image/jpeg;base64,{encoded_string}",\n'

output += "};\n"

with open("demo_frames.js", "w") as out_file:
    out_file.write(output)
