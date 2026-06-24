from PIL import Image
import sys

def make_white_transparent(image_path, output_path):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    
    newData = []
    # threshold for white: RGB > 230
    for item in datas:
        if item[0] >= 230 and item[1] >= 230 and item[2] >= 230:
            # white or very light grey -> transparent
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # Optional: simple anti-aliasing or smoothing around edges could be done, 
    # but basic threshold is usually okay for a start.
    
    img.save(output_path, "PNG")
    print("Saved transparent image to", output_path)

if __name__ == "__main__":
    make_white_transparent("public/logo.png", "public/logo.png")
