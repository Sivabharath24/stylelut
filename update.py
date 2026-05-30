import re
import json

with open("script.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update CATEGORY_LABELS
new_labels = """const CATEGORY_LABELS = {
  cinematic: "Cinematic Vibes", nostalgia: "Nostalgic Feelings", minimal: "Minimalist Aesthetics",
  streetwear: "Streetwear", luxury: "Luxury", pantone: "Pantone", seasonal: "Seasonal", trend: "Trends",
  themes: "Themes & Aesthetics"
};"""
content = re.sub(r"const CATEGORY_LABELS = {[^}]*};", new_labels, content, flags=re.MULTILINE)


# 2. Add new palettes to PREBUILT_PALETTES
new_cinematic = """    { id: "quentin-tarantino", name: "Quentin Tarantino (Kill Bill)", mood: "Bloody, high-adrenaline, striking", tags: ["#tarantino","#killbill","#action"], colors: ["#FCD615","#F8C00F","#F4A409","#D8222A","#040404"], description: "The Bride's tracksuit and a trail of vengeance." },
    { id: "the-matrix", name: "The Matrix", mood: "Cyber, sterile, simulated", tags: ["#cyber","#matrix","#green"], colors: ["#020E04","#142E1B","#2D5B3A","#439763","#87F2B0"], description: "Sickly green tints, black leather, and cyan." },
    { id: "studio-ghibli", name: "Studio Ghibli", mood: "Pastoral, lush, dreamy", tags: ["#ghibli","#anime","#lush"], colors: ["#4E8941","#86B658","#D4E157","#6CA3C4","#E6D2B5"], description: "Lush pastoral greens, sky blues, and warm wood tones." },
    { id: "sofia-coppola", name: "Sofia Coppola", mood: "Dreamy, muted, soft", tags: ["#dreamy","#pastel","#soft"], colors: ["#F3D9DC","#E3BAC6","#B5A1A8","#89A19D","#D4E3D8"], description: "Dreamy, muted pastels and hazy pinks." },
"""
content = content.replace('  cinematic: [', '  cinematic: [\n' + new_cinematic)

new_streetwear = """    { id: "opium-vamp", name: "Opium / Avant-Garde", mood: "Dark, distorted, aggressive", tags: ["#opium","#rickowens","#vamp"], colors: ["#0a0a0a","#1c1c1c","#3d3d3d","#8f0000","#silver"], description: "True black, washed black, blood red, polished silver." },
    { id: "scandi-minimalism", name: "Scandi Minimalism", mood: "Stark, faded, effortless", tags: ["#scandi","#minimal","#faded"], colors: ["#d9d7d2","#a39e99","#5a6268","#3b4045","#1a1b1c"], description: "Faded taupe, stark white, washed indigo, charcoal." },
    { id: "early-2000s-skate", name: "Early 2000s Skate", mood: "Baggy, faded, utility", tags: ["#skate","#y2k","#baggy"], colors: ["#8b6f4e","#c5b399","#3b4d61","#f26d21","#2c2c2c"], description: "Faded brown canvas, washed denim blue, safety orange." },
    { id: "japanese-americana", name: "Japanese Americana", mood: "Heritage, indigo, crafted", tags: ["#americana","#indigo","#selvedge"], colors: ["#1e293b","#334155","#4d5c41","#d2b48c","#e2e8f0"], description: "Selvedge indigo, olive drab, natural canvas, sashiko blue." },
"""
content = content.replace('  streetwear: [', '  streetwear: [\n' + new_streetwear)

themes_str = """  themes: [
    { id: "dark-academia", name: "Dark Academia", mood: "Scholarly, mysterious, old", tags: ["#academia","#dark","#tweed"], colors: ["#3d2b1f","#5c4033","#8b4513","#2f4f4f","#f5deb3"], description: "Rich mahogany, tweed brown, forest green, old paper." },
    { id: "cyberpunk", name: "Cyberpunk", mood: "Neon, synthetic, harsh", tags: ["#cyberpunk","#neon","#synth"], colors: ["#ff003c","#00f0ff","#7000ff","#1a1a1a","#fcee0a"], description: "Hot pink, cyan, deep purple, harsh black." },
    { id: "fairycore", name: "Fairycore", mood: "Ethereal, mossy, delicate", tags: ["#fairycore","#moss","#ethereal"], colors: ["#8a9a5b","#b4c424","#d8bfd8","#f0fff0","#dda0dd"], description: "Moss green, pale mushroom, morning mist, dried rose." }
  ],
"""
content = content.replace('  streetwear: [', themes_str + '  streetwear: [')

# 3. Add to OUTFIT_SUGGESTIONS
new_outfits = """  "streetwear-opium": {
    student: { top: "Faded black graphic tee", bottom: "Extremely baggy black jeans", shoes: "Chunky black boots", acc: "Studded belt", fabrics: "Washed denim, heavy cotton." },
    smart: { top: "Cropped black sweater", bottom: "Flared black trousers", shoes: "Platform boots", acc: "Silver hardware necklace", fabrics: "Wool, matte leather." },
    luxury: { top: "Rick Owens draped tee", bottom: "Wide-leg Bauhaus cargos", shoes: "Kiss boots", acc: "Heavy silver rings", fabrics: "Cupro, heavy canvas, leather." },
    vintage: { top: "Archive distressed knit", bottom: "Washed black flare denim", shoes: "Square toe boots", acc: "Silver wallet chain", fabrics: "Distressed knit, raw denim." }
  },
  "scandi-minimalism": {
    student: { top: "Boxy white tee", bottom: "Relaxed grey trousers", shoes: "Minimal white sneakers", acc: "Canvas tote", fabrics: "Heavy cotton, twill." },
    smart: { top: "Textured knit sweater", bottom: "Wide leg washed trousers", shoes: "Black derbies", acc: "Simple leather belt", fabrics: "Mohair blend, fluid wool." },
    luxury: { top: "Our Legacy mohair cardigan", bottom: "Third Cut denim", shoes: "Camion boots", acc: "Minimalist silver ring", fabrics: "Mohair, washed Italian denim." },
    vintage: { top: "Faded vintage sweatshirt", bottom: "Relaxed faded jeans", shoes: "Classic loafers", acc: "Aged leather belt", fabrics: "Faded cotton, aged leather." }
  },
  "japanese-americana": {
    student: { top: "Heavyweight pocket tee", bottom: "Straight leg jeans", shoes: "Canvas sneakers", acc: "Bandana", fabrics: "Heavy cotton, denim." },
    smart: { top: "Chambray shirt", bottom: "Olive fatigue pants", shoes: "Suede chukkas", acc: "Silver cuff", fabrics: "Chambray, herringbone twill." },
    luxury: { top: "Visvim kimono jacket", bottom: "Selvedge indigo denim", shoes: "FBT moccasins", acc: "Turquoise jewelry", fabrics: "Sashiko, selvedge denim, elk leather." },
    vintage: { top: "Vintage chore coat", bottom: "Repaired vintage denim", shoes: "Work boots", acc: "Woven leather belt", fabrics: "Boro patchwork, heavy canvas." }
  },
"""
content = content.replace('const OUTFIT_SUGGESTIONS = {\n', 'const OUTFIT_SUGGESTIONS = {\n' + new_outfits)

# 4. Update colorName array to include 300+ colors
new_colors = """[
    [0,0,0,"Noir Black"], [255,255,255,"Chalk White"], [255,0,0,"Crimson Red"], [0,255,0,"Neon Green"], [0,0,255,"Royal Blue"],
    [53,94,59,"Hunter Green"], [135,159,132,"Sage"], [128,0,32,"Burgundy"], [224,176,255,"Mauve"], [204,204,255,"Periwinkle"],
    [183,65,14,"Rust"], [255,219,88,"Mustard"], [204,85,0,"Burnt Orange"], [112,66,20,"Sepia"], [80,200,120,"Emerald"],
    [227,38,54,"Alizarin Crimson"], [255,191,0,"Amber"], [153,102,204,"Amethyst"], [251,206,177,"Apricot"], [0,255,255,"Aqua"],
    [113,217,226,"Aquamarine"], [233,214,107,"Arylide Yellow"], [178,190,181,"Ash Gray"], [255,153,102,"Atomic Tangerine"],
    [0,127,255,"Azure"], [245,245,220,"Beige"], [255,228,196,"Bisque"], [61,43,31,"Bistre"], [254,111,94,"Bittersweet"],
    [0,0,0,"Black"], [0,0,205,"Blue"], [138,43,226,"Blue Violet"], [222,184,135,"Burlywood"],
    [165,42,42,"Brown"], [205,127,50,"Bronze"], [255,198,39,"Macaroni and Cheese"], [255,0,255,"Magenta"], [128,0,0,"Maroon"],
    [0,0,128,"Navy"], [128,128,0,"Olive"], [255,165,0,"Orange"], [255,192,203,"Pink"], [128,0,128,"Purple"],
    [255,0,0,"Red"], [192,192,192,"Silver"], [0,128,128,"Teal"], [255,255,255,"White"], [255,255,0,"Yellow"],
    [240,248,255,"Alice Blue"], [250,235,215,"Antique White"], [127,255,212,"Aquamarine"], [240,255,255,"Azure"],
    [245,245,220,"Beige"], [255,228,196,"Bisque"], [255,235,205,"Blanched Almond"], [138,43,226,"Blue Violet"], [165,42,42,"Brown"],
    [222,184,135,"Burlywood"], [95,158,160,"Cadet Blue"], [127,255,0,"Chartreuse"], [210,105,30,"Chocolate"], [255,127,80,"Coral"],
    [100,149,237,"Cornflower Blue"], [255,248,220,"Cornsilk"], [220,20,60,"Crimson"], [0,255,255,"Cyan"], [0,0,139,"Dark Blue"],
    [0,139,139,"Dark Cyan"], [184,134,11,"Dark Goldenrod"], [169,169,169,"Dark Gray"], [0,100,0,"Dark Green"], [189,183,107,"Dark Khaki"],
    [139,0,139,"Dark Magenta"], [85,107,47,"Dark Olive Green"], [255,140,0,"Dark Orange"], [153,50,204,"Dark Orchid"], [139,0,0,"Dark Red"],
    [233,150,122,"Dark Salmon"], [143,188,143,"Dark Sea Green"], [72,61,139,"Dark Slate Blue"], [47,79,79,"Dark Slate Gray"],
    [0,206,209,"Dark Turquoise"], [148,0,211,"Dark Violet"], [255,20,147,"Deep Pink"], [0,191,255,"Deep Sky Blue"], [105,105,105,"Dim Gray"],
    [30,144,255,"Dodger Blue"], [178,34,34,"Firebrick"], [255,250,240,"Floral White"], [34,139,34,"Forest Green"], [220,220,220,"Gainsboro"],
    [248,248,255,"Ghost White"], [255,215,0,"Gold"], [218,165,32,"Goldenrod"], [128,128,128,"Gray"], [0,128,0,"Green"],
    [173,255,47,"Green Yellow"], [240,255,240,"Honeydew"], [255,105,180,"Hot Pink"], [205,92,92,"Indian Red"], [75,0,130,"Indigo"],
    [255,255,240,"Ivory"], [240,230,140,"Khaki"], [230,230,250,"Lavender"], [255,240,245,"Lavender Blush"], [124,252,0,"Lawn Green"],
    [255,250,205,"Lemon Chiffon"], [173,216,230,"Light Blue"], [240,128,128,"Light Coral"], [224,255,255,"Light Cyan"],
    [250,250,210,"Light Goldenrod Yellow"], [211,211,211,"Light Gray"], [144,238,144,"Light Green"], [255,182,193,"Light Pink"],
    [255,160,122,"Light Salmon"], [32,178,170,"Light Sea Green"], [135,206,250,"Light Sky Blue"], [119,136,153,"Light Slate Gray"],
    [176,196,222,"Light Steel Blue"], [255,255,224,"Light Yellow"], [0,255,0,"Lime"], [50,205,50,"Lime Green"], [250,240,230,"Linen"],
    [255,0,255,"Magenta"], [128,0,0,"Maroon"], [102,205,170,"Medium Aquamarine"], [0,0,205,"Medium Blue"], [186,85,211,"Medium Orchid"],
    [147,112,219,"Medium Purple"], [60,179,113,"Medium Sea Green"], [123,104,238,"Medium Slate Blue"], [0,250,154,"Medium Spring Green"],
    [72,209,204,"Medium Turquoise"], [199,21,133,"Medium Violet Red"], [25,25,112,"Midnight Blue"], [245,255,250,"Mint Cream"],
    [255,228,225,"Misty Rose"], [255,228,181,"Moccasin"], [255,222,173,"Navajo White"], [0,0,128,"Navy"], [253,245,230,"Old Lace"],
    [128,128,0,"Olive"], [107,142,35,"Olive Drab"], [255,165,0,"Orange"], [255,69,0,"Orange Red"], [218,112,214,"Orchid"],
    [238,232,170,"Pale Goldenrod"], [152,251,152,"Pale Green"], [175,238,238,"Pale Turquoise"], [219,112,147,"Pale Violet Red"],
    [255,239,213,"Papaya Whip"], [255,218,185,"Peach Puff"], [205,133,63,"Peru"], [255,192,203,"Pink"], [221,160,221,"Plum"],
    [176,224,230,"Powder Blue"], [128,0,128,"Purple"], [102,51,153,"Rebecca Purple"], [255,0,0,"Red"], [188,143,143,"Rosy Brown"],
    [65,105,225,"Royal Blue"], [139,69,19,"Saddle Brown"], [250,128,114,"Salmon"], [244,164,96,"Sandy Brown"], [46,139,87,"Sea Green"],
    [255,245,238,"Sea Shell"], [160,82,45,"Sienna"], [192,192,192,"Silver"], [135,206,235,"Sky Blue"], [106,90,205,"Slate Blue"],
    [112,128,144,"Slate Gray"], [255,250,250,"Snow"], [0,255,127,"Spring Green"], [70,130,180,"Steel Blue"], [210,180,140,"Tan"],
    [0,128,128,"Teal"], [216,191,216,"Thistle"], [255,99,71,"Tomato"], [64,224,208,"Turquoise"], [238,130,238,"Violet"],
    [245,222,179,"Wheat"], [255,255,255,"White"], [245,245,245,"White Smoke"], [255,255,0,"Yellow"], [154,205,50,"Yellow Green"]
  ]"""
content = re.sub(r'const names = \[.*?\];', f'const names = {new_colors};', content, flags=re.DOTALL)

with open("script.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated script.js successfully!")
