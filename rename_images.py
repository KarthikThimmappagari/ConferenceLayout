import os

img_dir = r"c:\xampp\htdocs\foodscience.averconferences.com\foodscience.averconferences.com\modern_ui\public\img"

for filename in os.listdir(img_dir):
    if " " in filename:
        old_path = os.path.join(img_dir, filename)
        new_filename = filename.replace(" ", "_").replace("  ", "_")
        new_path = os.path.join(img_dir, new_filename)
        try:
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} -> {new_filename}")
        except Exception as e:
            print(f"Error renaming {filename}: {e}")
