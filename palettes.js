// Extracted and Expanded Palettes from PDF Research & Paletteer Simulation

const PREBUILT_PALETTES = {
  cinematic: [
    // Wes Anderson
    { id: "wes-anderson", name: "Wes Anderson / Pastel Symmetry", mood: "Storybook, nostalgic, handmade", tags: ["#storybook","#nostalgic","#pastel"], colors: ["#F4D9B0","#E8A598","#8FB8CB","#C7484B","#D29C49"], description: "Soft pastels, warm yellows, and striking primary colors creating a diorama-like world." },
    // Wong Kar-wai
    { id: "wong-kar-wai", name: "Wong Kar-wai Nights", mood: "Nostalgia, longing, rainy neon poetry", tags: ["#neon","#moody","#longing"], colors: ["#8B0029","#1A866A","#CEB53C","#2A0041","#0C0812"], description: "Deep reds, emerald greens, neon yellows, rainy-night warmth." },
    // Pedro Almodóvar
    { id: "pedro-almodovar", name: "Pedro Almodóvar", mood: "Melodrama painted in primary colors", tags: ["#bold","#passion","#vibrant"], colors: ["#D91616","#F8D826","#1247A8","#077A3F","#F3ECE2"], description: "Bold reds, blues, yellows, emotionally loud interiors." },
    // David Fincher
    { id: "david-fincher", name: "David Fincher", mood: "Psychological tension, unease", tags: ["#murky","#desaturated","#tension"], colors: ["#1C231F","#3A4B40","#7D8471","#D1C792","#0A0B09"], description: "Muted greens, sickly yellows, cold blues. Controlled clinical darkness." },
    // Damien Chazelle
    { id: "damien-chazelle", name: "Damien Chazelle", mood: "Romantic, cinematic, dreamy", tags: ["#romantic","#twilight","#dreamy"], colors: ["#2B4162","#FA9C7A","#E0C56E","#C92A42","#121032"], description: "Blues, yellows, reds, magical twilight palettes." },
    // Denis Villeneuve
    { id: "denis-villeneuve", name: "Denis Villeneuve", mood: "Epic, atmospheric, architectural", tags: ["#dystopian","#contrast","#atmospheric"], colors: ["#D85C27","#18586A","#7F8A91","#F49040","#0E1419"], description: "Dust-orange, steel blue, shadow-black." },
    // Guillermo del Toro
    { id: "guillermo-del-toro", name: "Guillermo del Toro", mood: "Romantic darkness, fantasy melancholy", tags: ["#fairytale","#gothic","#rich"], colors: ["#072132","#165768","#5C0029","#D4AF37","#0B0C10"], description: "Deep teals, reds, fairy-tale darkness, symbolic color." },
    // Dario Argento
    { id: "dario-argento", name: "Dario Argento", mood: "Nightmare painting", tags: ["#horror","#surreal","#neon"], colors: ["#E50000","#0000AA","#550055","#FF00FF","#050505"], description: "Wild reds, blues, surreal lighting. Horror becomes visual art." },
    // Akira Kurosawa
    { id: "akira-kurosawa", name: "Akira Kurosawa", mood: "Moving historical painting", tags: ["#painterly","#historical","#epic"], colors: ["#8B0000","#DAA520","#2F4F4F","#D2B48C","#111111"], description: "Painterly and symbolic historical colors." },
    // Quentin Tarantino
    { id: "quentin-tarantino", name: "Kill Bill", mood: "Cinema as a mixtape, loud, referential", tags: ["#tarantino","#killbill","#action"], colors: ["#FCD615","#F8C00F","#F4A409","#D8222A","#040404"], description: "Yellow iconography, blood red drama, electric blue tension, hard contrast." },
    // Christopher Nolan
    { id: "christopher-nolan", name: "Christopher Nolan", mood: "Serious ideas carved into concrete and shadow", tags: ["#epic","#teal","#imax"], colors: ["#102E3A","#4B7B8D","#E7D3A6","#C97645","#0B0E14"], description: "Blue-grey steel tones, muted contrast, warm practical highlights." },
    // The Wachowskis
    { id: "the-matrix", name: "The Matrix", mood: "Digital dystopia, simulated reality", tags: ["#cyberpunk","#matrix","#hacker"], colors: ["#000000","#003B20","#008F11","#00FF41","#008080"], description: "Phosphor green code, deep digital blacks, cold simulated teals." }
  ],
  oldmoney: [
    { id: "east-coast-prep", name: "East Coast Prep", mood: "Clean, understated, polished", tags: ["#ivy","#prep","#yacht"], colors: ["#000080","#F5F5DC","#228B22","#800020","#FFFFFF"], description: "Boarding school + yacht club + inherited library." },
    { id: "european-aristocratic", name: "European Aristocratic", mood: "Refined and heritage-heavy", tags: ["#tweed","#estate","#heritage"], colors: ["#8B4513","#FFFDD0","#556B2F","#36454F","#2F4F4F"], description: "Countryside estates, castles, generational portraits." },
    { id: "italian-riviera", name: "Italian Riviera Old Money", mood: "Expensive but effortless", tags: ["#linen","#riviera","#summer"], colors: ["#FAF0E6","#000080","#D2B48C","#4682B4","#FFFFFF"], description: "Sunlight on linen shirts, yacht summer." },
    { id: "british-countryside", name: "British Countryside", mood: "Quiet luxury with muddy boots", tags: ["#tweed","#hunting","#rain"], colors: ["#006400","#8B4513","#556B2F","#800000","#2F4F4F"], description: "Rugged aristocratic, waxed coats, tartans." },
    { id: "dark-academia-old-money", name: "Dark Academia Old Money", mood: "Intellectual, classical, literary", tags: ["#academia","#library","#tweed"], colors: ["#3b2f2f","#1a1a1a","#004b23","#4a0404","#f5deb3"], description: "Old libraries, rainy windows, inherited bookshelves." },
    { id: "quiet-luxury", name: "Quiet Luxury", mood: "Luxury hidden in quality", tags: ["#minimal","#tailored","#neutral"], colors: ["#f5f0eb","#e8ddd0","#c4b5a0","#8b7d6b","#4a3f35"], description: "Expensive because the fabric whispers." },
    { id: "coastal-old-money", name: "Coastal Old Money", mood: "Beach-house wealth", tags: ["#hamptons","#coastal","#tennis"], colors: ["#FFFFFF","#ADD8E6","#F5DEB3","#000080","#E0FFFF"], description: "Hamptons soft mornings, tennis club weekends." },
    { id: "equestrian-old-money", name: "Equestrian Old Money", mood: "Horse-riding aristocrat energy", tags: ["#equestrian","#boots","#earthy"], colors: ["#8B4513","#D2B48C","#556B2F","#2F4F4F","#F5DEB3"], description: "Riding boots, structured blazers, earthy tones." }
  ],
  streetwear: [
    { id: "skater", name: "Skater Streetwear", mood: "Rough-edged and effortless", tags: ["#skate","#baggy","#effortless"], colors: ["#4F4F4F","#1C1C1C","#A0522D","#8B0000","#F0F8FF"], description: "Born from skate culture, baggy jeans, worn textures." },
    { id: "tech-wear", name: "Matrix", mood: "Futuristic, utility-heavy, dystopian", tags: ["#techwear","#utility","#cyber"], colors: ["#111111","#2B2B2B","#5A5A5A","#4682B4","#00FF00"], description: "Surviving rain in a neon city. Waterproof jackets, tactical palettes." },
    { id: "luxury-streetwear", name: "Luxury Streetwear", mood: "Quiet flex, expensive hoodie energy", tags: ["#luxury","#streetwear","#premium"], colors: ["#0A0A0A","#1A1A1A","#F5F5F5","#8B0000","#C0C0C0"], description: "Streetwear meets expensive tailoring. Monochrome fits." },
    { id: "y2k", name: "Y2K", mood: "Early-2000s internet nostalgia", tags: ["#y2k","#chrome","#nostalgia"], colors: ["#C0C0C0","#FF69B4","#ADD8E6","#111111","#FFFFFF"], description: "Futuristic optimism mixed with pop culture chaos. Silver, baby blue, hot pink." },
    { id: "vintage-retro", name: "Vintage / Retro Streetwear", mood: "Accidental, secretly curated", tags: ["#vintage","#thrift","#layered"], colors: ["#8B0000","#DAA520","#2F4F4F","#D2B48C","#4F4F4F"], description: "Thrift-core with nostalgia. Faded denim, layered textures." },
    { id: "japanese", name: "Japanese Streetwear", mood: "Fashion-forward, silhouette-driven", tags: ["#japanese","#avantgarde","#tokyo"], colors: ["#1A1A1A","#333333","#E0E0E0","#8B0000","#000000"], description: "Wide fits, asymmetry, intentional chaos." },
    { id: "minimalist", name: "Minimalist Streetwear", mood: "Calm, modern, effortless", tags: ["#minimal","#oversized","#clean"], colors: ["#F5F5F5","#D3D3D3","#808080","#333333","#111111"], description: "Streetwear without visual noise. Clean oversized basics." },
    { id: "gorpcore", name: "Gorpcore Streetwear", mood: "Ready for a mountain and coffee shop", tags: ["#gorpcore","#hiking","#tech"], colors: ["#556B2F","#8B4513","#2F4F4F","#D2B48C","#111111"], description: "Outdoor gear became fashion. Earth tones + technical fabrics." },
    { id: "hip-hop", name: "Hip-Hop / Urban", mood: "High presence, confident styling", tags: ["#hiphop","#urban","#bold"], colors: ["#000000","#FFFFFF","#FF0000","#FFD700","#111111"], description: "Classic rap-culture influence. Oversized fits, chains." },
    { id: "grunge", name: "Grunge Streetwear", mood: "Messy-on-purpose rebellion", tags: ["#grunge","#flannel","#dark"], colors: ["#1C1C1C","#4F4F4F","#2F4F4F","#8B0000","#D2B48C"], description: "Rainy-night playlist energy. Distressed denim, flannels." },
    { id: "opium-vamp", name: "Opium / Avant-Garde", mood: "Dark, distorted, aggressive", tags: ["#opium","#rickowens","#vamp"], colors: ["#0a0a0a","#1c1c1c","#3d3d3d","#8f0000","#C0C0C0"], description: "True black, washed black, blood red, polished silver." },
    { id: "archive", name: "Archive / Avant-Garde", mood: "Wearable art, fashion nerd territory", tags: ["#archive","#conceptual","#avantgarde"], colors: ["#0A0A0A","#1A1A1A","#2F4F4F","#8B0000","#C0C0C0"], description: "Rare silhouettes, deconstructed fits." },
    { id: "workwear", name: "Workwear Streetwear", mood: "Built-to-work, styled-to-walk", tags: ["#workwear","#carhartt","#utility"], colors: ["#CD853F","#8B4513","#556B2F","#708090","#2F4F4F"], description: "Utility clothing turned cool. Carpenter pants, rugged fabrics." }
  ],
  formal: [
    { id: "business-formal", name: "Business Formal", mood: "Boardroom, presentations, leadership", tags: ["#business","#corporate","#suit"], colors: ["#000080","#36454F","#000000","#FFFFFF","#C0C0C0"], description: "Classic corporate, serious, executive energy." },
    { id: "business-casual", name: "Business Casual", mood: "Startup founder, office-smart", tags: ["#businesscasual","#smart","#office"], colors: ["#000080","#F5F5DC","#556B2F","#808080","#FFFFFF"], description: "Professional, but less rigid. Blazers + chinos." },
    { id: "classic-formal", name: "Classic / Traditional Formal", mood: "Timeless elegance, event-ready", tags: ["#classic","#formal","#wedding"], colors: ["#1A1F24","#36454F","#FFFFFF","#800020","#B5A642"], description: "Tailored suits, crisp shirts, feels refined." },
    { id: "black-tie", name: "Black Tie Formal", mood: "Gala, red carpet, luxury dinner", tags: ["#blacktie","#gala","#tuxedo"], colors: ["#000000","#111111","#222222","#FFFFFF","#C0C0C0"], description: "Evening luxury, event prestige. Tuxedo, bow tie." },
    { id: "white-tie", name: "White Tie Formal", mood: "Highly ceremonial, ultra-elite", tags: ["#whitetie","#ceremonial","#elite"], colors: ["#000000","#FFFFFF","#F5F5F5","#C0C0C0","#111111"], description: "The highest level of formalwear. Tailcoat, white bow tie." },
    { id: "sprezzatura", name: "Italian Formal (Sprezzatura)", mood: "Elegant but intentionally effortless", tags: ["#italian","#sprezzatura","#relaxed"], colors: ["#FAF0E6","#000080","#D2B48C","#4682B4","#FFFFFF"], description: "Relaxed tailoring, linen, open collars." },
    { id: "british-tailoring", name: "British Tailoring / Savile Row", mood: "Sharp, structured, heritage", tags: ["#british","#savilerow","#structured"], colors: ["#36454F","#1A1F24","#556B2F","#800020","#FFFFFF"], description: "Structured shoulders, tweed or wool, precise tailoring." },
    { id: "french-minimal", name: "French Minimal Formal", mood: "Quiet elegance, less but better", tags: ["#french","#minimal","#elegant"], colors: ["#111111","#333333","#F5F5F5","#808080","#C0C0C0"], description: "Slim silhouettes, understated luxury." },
    { id: "modern-corporate", name: "Modern Corporate Luxury", mood: "Money whispers", tags: ["#quietluxury","#ceo","#premium"], colors: ["#111111","#36454F","#808080","#F5F5F5","#FFFFFF"], description: "The quiet-luxury CEO look. Perfectly fitted suits, premium fabrics." },
    { id: "smart-casual", name: "Smart Casual", mood: "Relaxed sophistication", tags: ["#smartcasual","#bridge","#knitwear"], colors: ["#000080","#F5F5DC","#556B2F","#808080","#8B4513"], description: "Between formal and casual. Knitwear, polos, blazers." },
    { id: "dark-academia-formal", name: "Dark Academia Formal", mood: "Library-meets-tailoring energy", tags: ["#academia","#intellectual","#tweed"], colors: ["#3b2f2f","#1a1a1a","#004b23","#4a0404","#f5deb3"], description: "Formalwear with intellectual drama. Turtlenecks under blazers." },
    { id: "old-money-formal", name: "Old Money Formal", mood: "Generational-wealth elegance", tags: ["#oldmoney","#heritage","#conservative"], colors: ["#000080","#F5F5DC","#8B4513","#006400","#FFFFFF"], description: "Conservative tailoring, heritage fabrics, signet rings." }
  ],
  cores: [
    { id: "blokette", name: "Blokette Core", mood: "Sporty but cute, playful", tags: ["#blokette","#sporty","#coquette"], colors: ["#FFFFFF","#FF0000","#0000FF","#FFC0CB","#D3D3D3"], description: "Football culture meeting bows, ballet flats, pearls." },
    { id: "goth-trad", name: "Traditional Goth", mood: "Post-punk music roots", tags: ["#goth","#tradgoth","#dark"], colors: ["#000000","#111111","#222222","#C0C0C0","#333333"], description: "Big teased hair, dark eyeliner, fishnets, boots." },
    { id: "goth-romantic", name: "Romantic Goth", mood: "Victorian poetry in outfit form", tags: ["#romanticgoth","#velvet","#lace"], colors: ["#000000","#800020","#4B0082","#C0C0C0","#111111"], description: "Velvet, lace, flowing garments, gothic romance." },
    { id: "goth-victorian", name: "Victorian Goth", mood: "Historical elegance with dark drama", tags: ["#victorian","#corset","#antique"], colors: ["#000000","#333333","#8B0000","#2F4F4F","#C0C0C0"], description: "High collars, corsetry, long coats, antique influence." },
    { id: "goth-punk", name: "Punk Goth / Deathrock", mood: "Rougher, rebellious, louder", tags: ["#punkgoth","#leather","#spikes"], colors: ["#000000","#FF0000","#111111","#C0C0C0","#FFFFFF"], description: "Leather, spikes, DIY styling, heavy music influence." },
    { id: "goth-nu", name: "Nu Goth", mood: "Modern minimalist goth", tags: ["#nugoth","#minimalist","#monochrome"], colors: ["#000000","#111111","#222222","#333333","#F5F5F5"], description: "Clean silhouettes, streetwear influence, monochrome black." },
    { id: "goth-pastel", name: "Pastel Goth", mood: "Cute meets creepy", tags: ["#pastelgoth","#creepy","#cute"], colors: ["#000000","#FFB6C1","#E6E6FA","#C0C0C0","#111111"], description: "Black mixed with pastel pink/purple. Soft details + gothic symbolism." }
  ]
};

// Generate 100 Unique Pantone Trends Collection
const PANTONE_TRENDS = [];

function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const styles = ["Trending", "Warm", "Cool", "Aesthetic", "Pantone Core"];

for(let i=0; i<100; i++) {
  // Use the golden angle approximation to ensure 100 uniquely distributed hues around the wheel without clumping
  const baseH = Math.round((i * 137.5) % 360); 
  const style = styles[i % styles.length];
  
  let s, l;
  let schemeType = i % 4; // 0: analogous, 1: complementary, 2: split, 3: monochromatic
  
  // Adjust saturation and lightness strictly based on the requested style
  if (style === "Trending") { s = 35; l = 45; } // Earthy/Muted
  else if (style === "Warm") { s = 65; l = 60; } // Richer
  else if (style === "Cool") { s = 50; l = 35; } // Deeper
  else if (style === "Aesthetic") { s = 20; l = 75; } // Pastel/Neutral
  else { s = 80; l = 50; } // Pantone Core (pure, vibrant)
  
  // Force Warm style to be strictly warm hues (0-90, 270-360)
  let h = baseH;
  if (style === "Warm" && h > 90 && h < 270) h = (h + 180) % 360;
  // Force Cool style to be strictly cool hues (90-270)
  if (style === "Cool" && (h <= 90 || h >= 270)) h = (h + 180) % 360;

  let h2, h3, h4, h5;
  if (schemeType === 0) { // analogous
      h2 = (h + 25) % 360; h3 = (h + 50) % 360; h4 = (h - 25 + 360) % 360; h5 = (h - 50 + 360) % 360;
  } else if (schemeType === 1) { // complementary
      h2 = (h + 180) % 360; h3 = (h + 15) % 360; h4 = (h + 195) % 360; h5 = (h - 15 + 360) % 360;
  } else if (schemeType === 2) { // split
      h2 = (h + 150) % 360; h3 = (h + 210) % 360; h4 = (h + 15) % 360; h5 = (h + 195) % 360;
  } else { // monochromatic shades
      h2 = h; h3 = h; h4 = h; h5 = h;
  }
  
  // Helper to shift lightness while staying in bounds
  const shiftL = (baseL, amount) => Math.max(10, Math.min(95, baseL + amount));

  // Build colors array. For monochromatic, heavily shift the lightness.
  let colors;
  if (schemeType === 3) {
      colors = [
          hslToHex(h, s, shiftL(l, 0)),
          hslToHex(h, s, shiftL(l, -20)),
          hslToHex(h, Math.max(0, s-10), shiftL(l, 25)),
          hslToHex(h, Math.max(0, s-20), shiftL(l, 40)),
          hslToHex(h, Math.max(0, s-30), shiftL(l, -35))
      ];
  } else {
      colors = [
          hslToHex(h, s, l),
          hslToHex(h2, s, shiftL(l, 10)),
          hslToHex(h3, s, shiftL(l, -10)),
          hslToHex(h4, s, shiftL(l, 20)),
          hslToHex(h5, s, shiftL(l, -20))
      ];
  }

  PANTONE_TRENDS.push({
    id: `pantone-${i+1}`,
    name: `Pantone Vol. ${i+1} (${style})`,
    mood: `${style} Concept`,
    tags: ["#pantone", `#${style.toLowerCase().replace(" ","")}`, `#outfit`],
    colors: colors,
    description: `A 100% unique ${style.toLowerCase()} combination based on precise color theory.`
  });
}
PREBUILT_PALETTES.pantone = PANTONE_TRENDS;

const ALL_PALETTES = [];
for(const cat in PREBUILT_PALETTES) {
  PREBUILT_PALETTES[cat].forEach(p => {
    p.category = cat;
    ALL_PALETTES.push(p);
  });
}

// Ensure this file is exported correctly for browser usage
window.PREBUILT_PALETTES = PREBUILT_PALETTES;
window.ALL_PALETTES = ALL_PALETTES;
