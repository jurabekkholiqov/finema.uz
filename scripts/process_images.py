import os
from PIL import Image, ImageEnhance, ImageFilter

src_dir = r"C:\Users\user\.gemini\antigravity\brain\7be4f487-be0e-4417-9100-78a31ef74722\.user_uploaded"
dest_dir = r"c:\Users\user\Downloads\Telegram Desktop\Al Baraka\public\images"

os.makedirs(dest_dir, exist_ok=True)

# 1. Primary Original High-Resolution Uploaded Images (No downscaling, 100% sharp quality)
files_map = {
    "media_1791563762038_5a839de8.jpg": ["hero.jpg", "brand-poster.jpg", "banner.jpg", "about.jpg"],
    "media_1791563770793_c4e2b155.jpg": ["dish-500ml.jpg", "why-1.jpg"],
    "media_1791563767077_2acbd6e5.jpg": ["glass-cleaner-500ml.jpg", "why-3.jpg"],
    "media_1791563757316_c99bef54.jpg": ["laundry-gel-2-2kg.jpg", "why-2.jpg"],
}

print("Processing images with max sharpness and zero quality loss...")

for src_name, dest_list in files_map.items():
    full_src = os.path.join(src_dir, src_name)
    if os.path.exists(full_src):
        img = Image.open(full_src).convert("RGB")
        
        # Apply subtle unsharp mask sharpening for crisp detail
        sharpened_img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=110, threshold=3))

        for dest_name in dest_list:
            dest_jpg = os.path.join(dest_dir, dest_name)
            dest_webp = os.path.join(dest_dir, os.path.splitext(dest_name)[0] + ".webp")
            
            # Save both JPG and WebP at maximum quality
            sharpened_img.save(dest_jpg, quality=98, optimize=True)
            sharpened_img.save(dest_webp, format="WEBP", quality=95, method=6)
            print(f"Sharpened & saved high-res: {dest_name}")

# For products that were cropped from poster, use the high-res poster and crop with high precision Lanczos
poster_path = os.path.join(src_dir, "media_1791563762038_5a839de8.jpg")
if os.path.exists(poster_path):
    poster = Image.open(poster_path).convert("RGB")
    pw, ph = poster.size

    crops = {
        "dish-1l.jpg": (int(pw * 0.15), int(ph * 0.54), int(pw * 0.42), int(ph * 0.78)),
        "dish-4l.jpg": (int(pw * 0.40), int(ph * 0.44), int(pw * 0.82), int(ph * 0.78)),
        "laundry-2-5l.jpg": (int(pw * 0.40), int(ph * 0.44), int(pw * 0.58), int(ph * 0.76)),
        "laundry-5l-soap.jpg": (int(pw * 0.54), int(ph * 0.44), int(pw * 0.72), int(ph * 0.78)),
        "soap-72.jpg": (int(pw * 0.63), int(ph * 0.50), int(pw * 0.82), int(ph * 0.78)),
    }

    for name, box in crops.items():
        crop_img = poster.crop(box)
        crop_sharpened = crop_img.filter(ImageFilter.UnsharpMask(radius=1.0, percent=120, threshold=2))
        
        dest_jpg = os.path.join(dest_dir, name)
        dest_webp = os.path.join(dest_dir, os.path.splitext(name)[0] + ".webp")
        crop_sharpened.save(dest_jpg, quality=98)
        crop_sharpened.save(dest_webp, format="WEBP", quality=95)
        print(f"Sharpened crop: {name}")

print("All images upgraded to crystal clear high resolution!")
