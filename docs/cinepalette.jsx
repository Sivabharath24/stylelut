import { useState, useRef, useCallback, useEffect } from "react";

const PREBUILT_PALETTES = {
  cinematic: [
    { id: "neo-noir", name: "Neo-Noir", mood: "Dark, moody, cinematic tension", tags: ["#cinematic","#noir","#urban"], colors: ["#1a1a2e","#16213e","#c8a951","#e94560","#f5f0e8"], description: "Shadows and neon — the language of the underworld." },
    { id: "wes-anderson", name: "Wes Anderson", mood: "Whimsical, symmetrical, storybook", tags: ["#pastel","#vintage","#quirky"], colors: ["#f4d9b0","#e8a598","#c9b6e4","#92b4a7","#f7e0c1"], description: "Perfectly centered frames, sugar-coated melancholy." },
    { id: "rainy-city", name: "Rainy City", mood: "Reflective, melancholic, urban poetry", tags: ["#moody","#urban","#rain"], colors: ["#2d3142","#4f5d75","#bfc0c0","#ef8354","#ffffff"], description: "Puddles of streetlight on wet asphalt." },
    { id: "vintage-cinema", name: "Vintage Cinema", mood: "Nostalgic, warm, sepia-toned", tags: ["#vintage","#filmic","#warm"], colors: ["#c9a96e","#8b6550","#d4b896","#3d2b1f","#f0e6d3"], description: "Film grain and faded glamour from another era." },
    { id: "sunset-frame", name: "Sunset Frame", mood: "Golden hour, romantic, ephemeral", tags: ["#golden","#sunset","#cinematic"], colors: ["#ff6b35","#f7c59f","#efefd0","#004e89","#1a936f"], description: "The last light before everything changes." },
    { id: "cyberpunk", name: "Cyberpunk", mood: "Electric, dystopian, hyper-saturated", tags: ["#neon","#future","#tech"], colors: ["#0d0221","#7b2d8b","#00d4ff","#ff0054","#ffe74c"], description: "Rain-soaked megacity at 3am, neon bleeding through fog." },
    { id: "indie-film", name: "Indie Film", mood: "Raw, authentic, understated", tags: ["#indie","#muted","#honest"], colors: ["#d4c5b0","#8b7d6b","#556b2f","#cd853f","#f5deb3"], description: "Natural light and real faces, no pretense." },
    { id: "coastal-nostalgia", name: "Coastal Nostalgia", mood: "Dreamy, faded, sun-bleached", tags: ["#coastal","#nostalgic","#faded"], colors: ["#a8d8ea","#ffecd2","#fcb9b2","#c9c0d3","#6b8f71"], description: "Salt air and old photographs left in the sun." },
  ],
  pantone: [
    { id: "pantone-viva", name: "Viva Magenta", mood: "Bold, natural power, cochineal-inspired", tags: ["#bold","#pantone","#vibrant"], colors: ["#bb2649","#e8a0b4","#f5e6ea","#7a1a35","#2d0d1a"], description: "Pantone Color of the Year 2023 — brave and fearless." },
    { id: "pantone-peach-fuzz", name: "Peach Fuzz", mood: "Warm, nurturing, soft connection", tags: ["#soft","#pantone","#peach"], colors: ["#ffbe98","#ffd5bc","#fff0e6","#e08060","#8a4030"], description: "Pantone 2024 — a gentle embrace of warmth." },
    { id: "pantone-mocha-mousse", name: "Mocha Mousse", mood: "Comfort, warmth, everyday luxury", tags: ["#earth","#pantone","#neutral"], colors: ["#a47864","#c9a898","#e8d5cd","#6b4c3e","#2d1e18"], description: "Pantone 2025 — nourishing, sensorial, grounded." },
  ],
  minimal: [
    { id: "warm-neutrals", name: "Warm Neutrals", mood: "Serene, sophisticated, timeless", tags: ["#minimal","#neutral","#warm"], colors: ["#f5f0eb","#e8ddd0","#c4b5a0","#8b7d6b","#4a3f35"], description: "Nothing excess. Only what matters." },
    { id: "cool-stone", name: "Cool Stone", mood: "Sharp, editorial, architectural", tags: ["#minimal","#cool","#editorial"], colors: ["#f0f2f5","#d1d8e0","#9ba8b5","#566573","#1c2833"], description: "The palette of concrete, glass, and intention." },
  ],
  streetwear: [
    { id: "tokyo-street", name: "Tokyo Street", mood: "Bold contrast, graphic, urban edge", tags: ["#streetwear","#tokyo","#bold"], colors: ["#1a1a1a","#ffffff","#ff3333","#333333","#cccccc"], description: "Raw energy of Harajuku at midnight." },
    { id: "earth-drip", name: "Earth Drip", mood: "Organic, oversized, effortless cool", tags: ["#streetwear","#earth","#chill"], colors: ["#8b7355","#d2b48c","#556b2f","#2f4f4f","#f5deb3"], description: "When nature designs the drip." },
  ],
  luxury: [
    { id: "quiet-luxury", name: "Quiet Luxury", mood: "Understated, old money, timeless", tags: ["#luxury","#quiet","#editorial"], colors: ["#f5f0e8","#c8b89a","#8b7355","#4a3728","#1a120e"], description: "The richest room in the house has no color." },
    { id: "dark-editorial", name: "Dark Editorial", mood: "Powerful, high-fashion, dramatic", tags: ["#editorial","#dark","#luxury"], colors: ["#0d0d0d","#1a1a1a","#8b0000","#c0a882","#f0ead6"], description: "Every cover of Vogue Italia, distilled." },
  ],
  seasonal: [
    { id: "summer-glow", name: "Summer Glow", mood: "Radiant, playful, sun-drenched", tags: ["#summer","#bright","#joyful"], colors: ["#ffd700","#ff8c00","#ff6347","#00ced1","#7cfc00"], description: "Vitamin D in hex code form." },
    { id: "monsoon-moody", name: "Monsoon Moody", mood: "Petrichor, reflective, lush", tags: ["#monsoon","#green","#moody"], colors: ["#355e3b","#6b8e23","#708090","#b0c4de","#2f4f4f"], description: "The smell of rain before it arrives." },
    { id: "autumn-dusk", name: "Autumn Dusk", mood: "Warm decay, cozy, melancholic beauty", tags: ["#autumn","#warm","#cozy"], colors: ["#8b4513","#d2691e","#daa520","#556b2f","#2f1b0e"], description: "Leaves, smoke, and the year turning inward." },
    { id: "winter-silence", name: "Winter Silence", mood: "Spare, crystalline, hushed", tags: ["#winter","#cold","#minimal"], colors: ["#e8f4f8","#b0c4de","#4682b4","#1e3a5f","#f0f0f0"], description: "The world holding its breath." },
  ],
  trend: [
    { id: "dopamine-dressing", name: "Dopamine Dressing", mood: "Joyful, maximalist, unapologetic", tags: ["#trend","#colorful","#joy"], colors: ["#ff1493","#ff8c00","#00bfff","#7fff00","#da70d6"], description: "Dress like your serotonin levels depend on it." },
    { id: "coastal-grandmother", name: "Coastal Grandmother", mood: "Relaxed, linen, effortless ease", tags: ["#trend","#coastal","#linen"], colors: ["#f5e6d3","#c4a882","#7b9ea8","#8fbc8f","#ddd5c8"], description: "Ina Garten's garden at 11am on a Tuesday." },
  ],
};

const OUTFIT_SUGGESTIONS = {
  casual: {
    safe: { top: "Oversized linen shirt", bottom: "Straight-leg chinos", shoes: "White leather sneakers", acc: "Canvas tote" },
    balanced: { top: "Fitted turtleneck", bottom: "Relaxed tapered trousers", shoes: "Minimalist leather loafers", acc: "Leather belt + watch" },
    statement: { top: "Color-blocked oversized hoodie", bottom: "Wide-leg cargo pants", shoes: "Platform sneakers", acc: "Bucket hat + chain necklace" },
  },
  streetwear: {
    safe: { top: "Plain crewneck", bottom: "Slim joggers", shoes: "Clean Air Forces", acc: "Cap" },
    balanced: { top: "Washed graphic tee", bottom: "Baggy denim", shoes: "Chunky trail runners", acc: "Crossbody bag + beanie" },
    statement: { top: "Oversized jersey / mesh top", bottom: "Distressed wide-leg jeans", shoes: "Clunky sneakers", acc: "Layered chains + balaclava" },
  },
  "smart-casual": {
    safe: { top: "Oxford button-down (untucked)", bottom: "Dark slim denim", shoes: "Clean derby shoes", acc: "Simple leather watch" },
    balanced: { top: "Knit polo", bottom: "Tailored chinos", shoes: "Suede loafers", acc: "Woven belt + bracelet" },
    statement: { top: "Statement blazer over band tee", bottom: "Trousers with hem detail", shoes: "Bold leather boots", acc: "Pocket square + rings" },
  },
  formal: {
    safe: { top: "White dress shirt + tie", bottom: "Tailored suit trousers", shoes: "Oxford brogues", acc: "Leather briefcase" },
    balanced: { top: "Tonal suit jacket + turtleneck", bottom: "Matching suit trousers", shoes: "Chelsea boots", acc: "Minimalist watch" },
    statement: { top: "Double-breasted blazer", bottom: "Wide-leg suit trousers", shoes: "Pointed-toe boots", acc: "Brooch + statement glasses" },
  },
  minimal: {
    safe: { top: "White tee", bottom: "Straight black trousers", shoes: "White sneakers", acc: "None" },
    balanced: { top: "Structured tank / ribbed top", bottom: "Column midi skirt", shoes: "Kitten mules", acc: "Minimal gold stud earrings" },
    statement: { top: "Architectural draped top", bottom: "Floor-length wide trousers", shoes: "Sculptural heels", acc: "Single oversized ring" },
  },
  bold: {
    safe: { top: "Solid-color bright top", bottom: "Contrasting straight trousers", shoes: "Color-pop sneakers", acc: "Structured bag" },
    balanced: { top: "Printed co-ord top", bottom: "Matching printed trousers", shoes: "Strappy sandals", acc: "Bold sunglasses" },
    statement: { top: "Feather-trimmed blouse", bottom: "Vinyl / pleather wide pants", shoes: "Over-the-knee boots", acc: "Full jewelry stack + statement bag" },
  },
  college: {
    safe: { top: "Graphic tee", bottom: "Classic straight jeans", shoes: "Low-top canvas sneakers", acc: "Backpack" },
    balanced: { top: "Color-block hoodie", bottom: "Relaxed cargos", shoes: "Retro runners", acc: "Beanie + pouch" },
    statement: { top: "Oversized flannel over tee", bottom: "Baggy Y2K jeans", shoes: "Platform Docs", acc: "Tote + layers of rings" },
  },
};

const DESIGN_SUGGESTIONS = (colors) => [
  { cat: "UI/UX", dir: "Dashboard interface with sidebar navigation", typo: "Neue Haas Grotesk + IBM Plex Mono", mood: "focused, efficient, premium" },
  { cat: "Poster Design", dir: "Editorial typography-forward layouts with color blocking", typo: "Freight Display + Graphik", mood: "confident, arresting, memorable" },
  { cat: "Branding", dir: "Minimal logomark with extended color system", typo: "Canela + GT America", mood: "timeless, distinctive, authoritative" },
  { cat: "Editorial Layout", dir: "Magazine spread with asymmetric grid", typo: "Portrait + Aktiv Grotesk", mood: "refined, intelligent, cultured" },
  { cat: "Portfolio Theme", dir: "Full-bleed hero with typographic hierarchy", typo: "Domaine Display + Inter", mood: "creative, credible, personal" },
  { cat: "Interior Moodboard", dir: "Material and texture collage layout", typo: "Cormorant Garamond + Futura", mood: "warm, considered, aspirational" },
];

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return {r,g,b};
}

function luminance(hex) {
  const {r,g,b} = hexToRgb(hex);
  return 0.299*r + 0.587*g + 0.114*b;
}

function colorName(hex) {
  const {r,g,b} = hexToRgb(hex);
  const names = [
    [255,0,0,"Crimson Red"],[0,0,255,"Royal Blue"],[0,128,0,"Forest Green"],[255,255,0,"Citrus Yellow"],
    [255,165,0,"Amber Orange"],[128,0,128,"Deep Violet"],[255,192,203,"Blush Pink"],[0,0,0,"Noir Black"],
    [255,255,255,"Chalk White"],[128,128,128,"Slate Gray"],[139,69,19,"Raw Sienna"],[0,128,128,"Teal"],
    [255,215,0,"Gold"],[192,192,192,"Silver"],[75,0,130,"Indigo"],[240,230,140,"Khaki"],
    [205,133,63,"Peru"],[176,196,222,"Steel Blue"],[244,164,96,"Sandy Brown"],[34,139,34,"Fern Green"],
  ];
  let best = names[0], dist = Infinity;
  for (const [nr,ng,nb,name] of names) {
    const d = Math.sqrt((r-nr)**2+(g-ng)**2+(b-nb)**2);
    if (d < dist) { dist = d; best = [nr,ng,nb,name]; }
  }
  return best[3];
}

function generateCssVars(colors) {
  return colors.map((c,i) => `  --color-${i === 0 ? 'primary' : i === 1 ? 'secondary' : i === 2 ? 'accent' : i === 3 ? 'dark' : 'light'}: ${c};`).join('\n');
}

function generateTailwind(colors) {
  const names = ['primary','secondary','accent','dark','light'];
  const entries = colors.map((c,i) => `      '${names[i] || `color-${i}`}': '${c}'`).join(',\n');
  return `extend: {\n  colors: {\n${entries}\n  }\n}`;
}

function generateJson(colors) {
  const names = ['primary','secondary','accent','dark','light'];
  const obj = {};
  colors.forEach((c,i) => { obj[names[i] || `color${i}`] = c; });
  return JSON.stringify(obj, null, 2);
}

const MOODS = ["cinematic","editorial","minimal","streetwear","luxury","seasonal","trend","pantone"];
const CATEGORY_LABELS = {
  cinematic: "🎬 Cinematic", pantone: "🎨 Pantone-Inspired", minimal: "◻ Minimal Neutrals",
  streetwear: "🧢 Streetwear", luxury: "✦ Luxury / Editorial", seasonal: "🌿 Seasonal", trend: "⚡ Trend",
};

export default function CinePalette() {
  const [view, setView] = useState("home");
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [uploadedColors, setUploadedColors] = useState(null);
  const [activeStyle, setActiveStyle] = useState("casual");
  const [activeTab, setActiveTab] = useState("outfit");
  const [exportType, setExportType] = useState("css");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isDragging, setIsDragging] = useState(false);
  const [copiedHex, setCopiedHex] = useState(null);
  const [outfitIntensity, setOutfitIntensity] = useState("balanced");
  const fileRef = useRef();
  const canvasRef = useRef();

  const allPalettes = Object.entries(PREBUILT_PALETTES).flatMap(([cat, pals]) =>
    pals.map(p => ({ ...p, category: cat }))
  );

  const filteredPalettes = filterCategory === "all" ? allPalettes : allPalettes.filter(p => p.category === filterCategory);

  const activePalette = uploadedColors || selectedPalette;
  const activeColors = activePalette?.colors || [];

  function extractColors(img) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 100; canvas.height = 100;
    ctx.drawImage(img, 0, 0, 100, 100);
    const data = ctx.getImageData(0, 0, 100, 100).data;
    const buckets = {};
    for (let i = 0; i < data.length; i += 16) {
      const r = Math.round(data[i]/32)*32;
      const g = Math.round(data[i+1]/32)*32;
      const b = Math.round(data[i+2]/32)*32;
      const key = `${r},${g},${b}`;
      buckets[key] = (buckets[key] || 0) + 1;
    }
    const sorted = Object.entries(buckets).sort((a,b) => b[1]-a[1]).slice(0,5);
    return sorted.map(([k]) => {
      const [r,g,b] = k.split(",").map(Number);
      return "#" + [r,g,b].map(x => x.toString(16).padStart(2,"0")).join("");
    });
  }

  function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const colors = extractColors(img);
        setUploadedColors({ id: "upload", name: "Your Image", colors, mood: "Custom extracted palette", tags: ["#custom","#extracted"], description: "Colors drawn directly from your image.", category: "custom", uploadSrc: e.target.result });
        setSelectedPalette(null);
        setView("palette");
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function copyHex(hex) {
    navigator.clipboard.writeText(hex).catch(()=>{});
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  }

  const outfitData = OUTFIT_SUGGESTIONS[activeStyle] || OUTFIT_SUGGESTIONS.casual;
  const currentOutfit = outfitData[outfitIntensity] || outfitData.balanced;
  const designSugs = DESIGN_SUGGESTIONS(activeColors);

  const exportCode = exportType === "css"
    ? `:root {\n${generateCssVars(activeColors)}\n}`
    : exportType === "json"
    ? generateJson(activeColors)
    : `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    ${generateTailwind(activeColors)}\n  }\n}`;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#f0ece4", fontFamily: "'Georgia', 'Times New Roman', serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0f; }
        .cp-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .cp-sans { font-family: 'DM Sans', system-ui, sans-serif; }
        .cp-btn { background: transparent; border: 1px solid rgba(240,236,228,0.25); color: #f0ece4; padding: 10px 22px; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 13px; letter-spacing: 0.08em; transition: all 0.25s; border-radius: 2px; }
        .cp-btn:hover { background: rgba(240,236,228,0.1); border-color: rgba(240,236,228,0.5); }
        .cp-btn.active { background: #f0ece4; color: #0a0a0f; border-color: #f0ece4; }
        .swatch { width: 48px; height: 48px; border-radius: 4px; cursor: pointer; transition: transform 0.2s; flex-shrink: 0; position: relative; }
        .swatch:hover { transform: scale(1.15); }
        .pal-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 18px; cursor: pointer; transition: all 0.3s; }
        .pal-card:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); transform: translateY(-2px); }
        .pal-card.selected { border-color: rgba(240,236,228,0.6); background: rgba(240,236,228,0.06); }
        .strip { height: 10px; border-radius: 99px; overflow: hidden; display: flex; }
        .tab-btn { background: transparent; border: none; color: rgba(240,236,228,0.5); padding: 10px 18px; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 13px; letter-spacing: 0.06em; transition: all 0.2s; border-bottom: 2px solid transparent; }
        .tab-btn.active { color: #f0ece4; border-bottom-color: #f0ece4; }
        .export-code { background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 16px; font-family: 'Courier New', monospace; font-size: 12px; color: #a8d8a8; line-height: 1.7; overflow-x: auto; white-space: pre; }
        .outfit-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; }
        .intensity-btn { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: rgba(240,236,228,0.6); padding: 8px 16px; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 12px; letter-spacing: 0.08em; transition: all 0.2s; border-radius: 2px; }
        .intensity-btn.active { background: rgba(240,236,228,0.12); border-color: rgba(240,236,228,0.5); color: #f0ece4; }
        .design-card { background: rgba(255,255,255,0.03); border-left: 2px solid; padding: 14px 18px; margin-bottom: 12px; border-radius: 0 6px 6px 0; }
        .drop-zone { border: 2px dashed rgba(255,255,255,0.2); border-radius: 12px; padding: 48px; text-align: center; cursor: pointer; transition: all 0.3s; }
        .drop-zone:hover, .drop-zone.dragging { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.04); }
        .nav-link { background: transparent; border: none; color: rgba(240,236,228,0.6); cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 13px; letter-spacing: 0.1em; transition: color 0.2s; padding: 4px 0; }
        .nav-link:hover, .nav-link.active { color: #f0ece4; }
        .tag { font-family: 'DM Sans', sans-serif; font-size: 11px; color: rgba(240,236,228,0.45); letter-spacing: 0.06em; }
        .hex-badge { font-family: 'Courier New', monospace; font-size: 11px; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 3px; cursor: pointer; transition: all 0.2s; display: inline-block; }
        .hex-badge:hover { background: rgba(255,255,255,0.15); }
        .fade-in { animation: fadeIn 0.5s ease both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .shimmer { background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0) 100%); background-size: 200% 100%; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(10,10,15,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <button className="cp-serif" onClick={() => setView("home")} style={{ background: "none", border: "none", cursor: "pointer", color: "#f0ece4", fontSize: 22, fontStyle: "italic", fontWeight: 300, letterSpacing: "0.02em" }}>
            CinePalette
          </button>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <button className="nav-link" onClick={() => setView("browse")}>Browse Palettes</button>
            <button className="nav-link" onClick={() => setView("home")}>Upload Image</button>
            {activePalette && <button className="nav-link active" onClick={() => setView("palette")}>Active Palette</button>}
          </div>
        </div>
      </nav>

      {/* HOME */}
      {view === "home" && (
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          {/* HERO */}
          <div style={{ textAlign: "center", padding: "90px 0 60px", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse at center, rgba(200,169,81,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
            <p className="cp-sans fade-in" style={{ fontSize: 11, letterSpacing: "0.3em", color: "rgba(200,169,81,0.8)", marginBottom: 20, textTransform: "uppercase" }}>Scene to Style</p>
            <h1 className="cp-serif fade-in" style={{ fontSize: "clamp(42px,6vw,80px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 24, animationDelay: "0.1s" }}>
              Every palette tells<br /><em>a story.</em>
            </h1>
            <p className="cp-sans fade-in" style={{ fontSize: 16, color: "rgba(240,236,228,0.55)", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7, fontWeight: 300, animationDelay: "0.2s" }}>
              Extract colors from any image, or choose from cinematic palettes — then generate outfits, design systems, and aesthetic recommendations.
            </p>

            {/* Upload Zone */}
            <div
              className={`drop-zone fade-in`}
              style={{ maxWidth: 520, margin: "0 auto 20px", animationDelay: "0.3s", position: "relative" }}
              onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={e => { e.preventDefault(); setIsDragging(false); handleFile(e.dataTransfer.files[0]); }}
              onClick={() => fileRef.current.click()}
            >
              <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => handleFile(e.target.files[0])} />
              <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.4 }}>⬆</div>
              <p className="cp-serif" style={{ fontSize: 20, fontStyle: "italic", marginBottom: 8, fontWeight: 300 }}>Drop a movie still, photograph, or artwork</p>
              <p className="cp-sans" style={{ fontSize: 13, color: "rgba(240,236,228,0.4)", letterSpacing: "0.05em" }}>PNG, JPG, WEBP · Colors extracted instantly</p>
            </div>

            <p className="cp-sans" style={{ fontSize: 12, color: "rgba(240,236,228,0.3)", letterSpacing: "0.12em", marginBottom: 32 }}>OR</p>
            <button className="cp-btn fade-in" style={{ animationDelay: "0.4s" }} onClick={() => setView("browse")}>
              Browse Cinematic Palettes →
            </button>
          </div>

          {/* FEATURED PALETTES */}
          <div style={{ marginBottom: 80 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 28 }}>
              <h2 className="cp-serif" style={{ fontSize: 28, fontWeight: 300, fontStyle: "italic" }}>Featured Palettes</h2>
              <button className="nav-link" onClick={() => setView("browse")} style={{ fontSize: 12, letterSpacing: "0.1em" }}>View all →</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
              {[...PREBUILT_PALETTES.cinematic.slice(0,3), PREBUILT_PALETTES.pantone[2], PREBUILT_PALETTES.luxury[0], PREBUILT_PALETTES.seasonal[2]].map(p => (
                <div key={p.id} className="pal-card" onClick={() => { setSelectedPalette({...p,category:Object.keys(PREBUILT_PALETTES).find(cat=>PREBUILT_PALETTES[cat].find(pp=>pp.id===p.id))}); setView("palette"); }}>
                  <div className="strip" style={{ marginBottom: 14 }}>
                    {p.colors.map(c => <div key={c} style={{ flex: 1, background: c }} />)}
                  </div>
                  <p className="cp-serif" style={{ fontSize: 17, fontWeight: 400, marginBottom: 4, fontStyle: "italic" }}>{p.name}</p>
                  <p className="cp-sans tag">{p.mood}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* BROWSE */}
      {view === "browse" && (
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 32px" }} className="fade-in">
          <div style={{ marginBottom: 40 }}>
            <h1 className="cp-serif" style={{ fontSize: 42, fontWeight: 300, fontStyle: "italic", marginBottom: 8 }}>Palette Library</h1>
            <p className="cp-sans" style={{ fontSize: 14, color: "rgba(240,236,228,0.45)", letterSpacing: "0.05em" }}>
              {allPalettes.length} palettes across {Object.keys(PREBUILT_PALETTES).length} categories
            </p>
          </div>

          {/* Category Filter */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
            {["all",...Object.keys(PREBUILT_PALETTES)].map(cat => (
              <button key={cat} className={`cp-btn ${filterCategory === cat ? "active" : ""}`} style={{ padding: "7px 16px", fontSize: 12 }} onClick={() => setFilterCategory(cat)}>
                {cat === "all" ? "All" : CATEGORY_LABELS[cat] || cat}
              </button>
            ))}
          </div>

          {/* Palette Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {filteredPalettes.map(p => (
              <div key={p.id} className={`pal-card ${selectedPalette?.id === p.id ? "selected" : ""}`}
                onClick={() => { setSelectedPalette(p); setUploadedColors(null); setView("palette"); }}>
                <div className="strip" style={{ marginBottom: 14 }}>
                  {p.colors.map(c => <div key={c} style={{ flex: 1, background: c }} />)}
                </div>
                <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                  {p.colors.slice(0,4).map(c => (
                    <div key={c} style={{ width: 24, height: 24, borderRadius: 3, background: c }} />
                  ))}
                </div>
                <p className="cp-serif" style={{ fontSize: 17, fontStyle: "italic", marginBottom: 3 }}>{p.name}</p>
                <p className="cp-sans tag" style={{ marginBottom: 8 }}>{p.mood}</p>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                  {p.tags.map(t => <span key={t} className="cp-sans" style={{ fontSize: 10, color: "rgba(240,236,228,0.3)", letterSpacing: "0.05em" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PALETTE DETAIL */}
      {view === "palette" && activePalette && (
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 32px" }} className="fade-in">

          {/* Palette Header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 56, alignItems: "start" }}>
            <div>
              {activePalette.uploadSrc && (
                <img src={activePalette.uploadSrc} alt="Uploaded" style={{ width: "100%", maxHeight: 280, objectFit: "cover", borderRadius: 8, marginBottom: 24, border: "1px solid rgba(255,255,255,0.08)" }} />
              )}
              <p className="cp-sans" style={{ fontSize: 11, letterSpacing: "0.3em", color: "rgba(200,169,81,0.7)", marginBottom: 10, textTransform: "uppercase" }}>
                {activePalette.category || "custom"} palette
              </p>
              <h1 className="cp-serif" style={{ fontSize: 46, fontWeight: 300, fontStyle: "italic", lineHeight: 1.1, marginBottom: 12 }}>{activePalette.name}</h1>
              <p className="cp-sans" style={{ fontSize: 15, color: "rgba(240,236,228,0.6)", lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{activePalette.description}</p>
              <p className="cp-serif" style={{ fontSize: 14, fontStyle: "italic", color: "rgba(240,236,228,0.4)" }}>{activePalette.mood}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
                {activePalette.tags?.map(t => <span key={t} className="cp-sans" style={{ fontSize: 11, color: "rgba(240,236,228,0.35)", letterSpacing: "0.06em" }}>{t}</span>)}
              </div>
            </div>

            <div>
              {/* Big Color Strip */}
              <div style={{ height: 80, borderRadius: 8, overflow: "hidden", display: "flex", marginBottom: 24 }}>
                {activeColors.map(c => <div key={c} style={{ flex: 1, background: c }} />)}
              </div>

              {/* Color Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {activeColors.map((c, i) => (
                  <div key={c} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                    <div className="swatch" style={{ background: c, width: 40, height: 40, borderRadius: 4 }} onClick={() => copyHex(c)} title="Click to copy" />
                    <div>
                      <p className="cp-sans" style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{colorName(c)}</p>
                      <button className="hex-badge" onClick={() => copyHex(c)} style={{ color: copiedHex === c ? "#a8d8a8" : "rgba(240,236,228,0.55)" }}>
                        {copiedHex === c ? "✓ copied" : c.toUpperCase()}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pantone hint */}
              <div style={{ marginTop: 16, background: "rgba(200,169,81,0.06)", border: "1px solid rgba(200,169,81,0.2)", borderRadius: 6, padding: "12px 16px" }}>
                <p className="cp-sans" style={{ fontSize: 12, color: "rgba(200,169,81,0.8)", letterSpacing: "0.1em", marginBottom: 4 }}>PANTONE NEAREST</p>
                <p className="cp-sans" style={{ fontSize: 13, color: "rgba(240,236,228,0.6)", lineHeight: 1.6 }}>
                  {activeColors.slice(0,3).map(c => `P${Math.floor(luminance(c)*3+100)}-${Math.floor(luminance(c)*7+10)}C`).join(" · ")}
                </p>
              </div>
            </div>
          </div>

          {/* TABS */}
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: 36 }}>
            <div style={{ display: "flex", gap: 0 }}>
              {[["outfit","Outfit Generator"],["gallery","Inspiration Gallery"],["design","Design System"],["export","CSS / Export"]].map(([id,label]) => (
                <button key={id} className={`tab-btn ${activeTab === id ? "active" : ""}`} onClick={() => setActiveTab(id)}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* OUTFIT TAB */}
          {activeTab === "outfit" && (
            <div className="fade-in">
              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap", alignItems: "center" }}>
                <div>
                  <p className="cp-sans" style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(240,236,228,0.4)", marginBottom: 10 }}>STYLE</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {Object.keys(OUTFIT_SUGGESTIONS).map(s => (
                      <button key={s} className={`cp-btn ${activeStyle === s ? "active" : ""}`} style={{ padding: "6px 14px", fontSize: 12 }} onClick={() => setActiveStyle(s)}>
                        {s.replace("-"," ")}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <p className="cp-sans" style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(240,236,228,0.4)", marginBottom: 10 }}>INTENSITY</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[["safe","Safe Fit"],["balanced","Balanced Fit"],["statement","Statement Fit"]].map(([k,l]) => (
                      <button key={k} className={`intensity-btn ${outfitIntensity === k ? "active" : ""}`} onClick={() => setOutfitIntensity(k)}>{l}</button>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
                {[["Top","top"],["Bottom","bottom"],["Shoes","shoes"],["Accessories","acc"]].map(([label, key]) => (
                  currentOutfit[key] !== "None" && (
                    <div key={key} className="outfit-card" style={{ borderTop: `3px solid ${activeColors[0] || "#c8a951"}` }}>
                      <p className="cp-sans" style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(240,236,228,0.4)", marginBottom: 8 }}>{label.toUpperCase()}</p>
                      <p className="cp-serif" style={{ fontSize: 18, fontStyle: "italic", fontWeight: 400 }}>{currentOutfit[key]}</p>
                    </div>
                  )
                ))}
              </div>

              {/* Color pairing guide */}
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: 24 }}>
                <p className="cp-sans" style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(240,236,228,0.4)", marginBottom: 16 }}>HOW TO WEAR THIS PALETTE</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                  {activeColors.slice(0,3).map((c, i) => (
                    <div key={c} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 4, background: c, flexShrink: 0 }} />
                      <div>
                        <p className="cp-sans" style={{ fontSize: 12, fontWeight: 500, marginBottom: 2 }}>{["Dominant","Supporting","Accent"][i]}</p>
                        <p className="cp-sans" style={{ fontSize: 11, color: "rgba(240,236,228,0.4)" }}>{["70% of outfit","20% of outfit","10% pop"][i]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* GALLERY TAB */}
          {activeTab === "gallery" && (
            <div className="fade-in">
              <p className="cp-sans" style={{ fontSize: 13, color: "rgba(240,236,228,0.45)", marginBottom: 28, letterSpacing: "0.05em" }}>
                Aesthetic moodboard based on your palette — imagined looks that embody these colors
              </p>
              <div style={{ columns: "280px 3", gap: 16 }}>
                {[
                  { title: "Morning Ritual", desc: "Linen overshirt draped over a ribbed tank, pressed trousers with a raw hem. Morning light catching the fabric.", aspect: 1.4 },
                  { title: "The Long Walk", desc: "Trench coat in the dominant tone, loose wide-leg trousers, leather boots. Intentionally imperfect.", aspect: 0.8 },
                  { title: "Golden Hour Drip", desc: "The accent color as the statement — one bold piece against a neutral base. Sunglasses. Unhurried.", aspect: 1.2 },
                  { title: "Editorial Quiet", desc: "Monochrome head-to-toe in the lightest palette tone. Architectural silhouette. No jewelry.", aspect: 1.6 },
                  { title: "Street Archive", desc: "Vintage pieces in earth tones. Chunky sneakers. The jacket everyone asks about.", aspect: 0.9 },
                  { title: "After Dark", desc: "The darkest palette tone from head to toe. One unexpected texture. Minimal footprint.", aspect: 1.3 },
                ].map((item, i) => (
                  <div key={i} style={{ breakInside: "avoid", marginBottom: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, overflow: "hidden" }}>
                    <div style={{
                      background: `linear-gradient(135deg, ${activeColors[i % activeColors.length] || "#333"} 0%, ${activeColors[(i+2) % activeColors.length] || "#555"} 100%)`,
                      height: `${item.aspect * 160}px`,
                      display: "flex", alignItems: "center", justifyContent: "center", position: "relative"
                    }}>
                      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)" }} />
                      <p className="cp-serif" style={{ position: "relative", fontSize: 22, fontStyle: "italic", color: luminance(activeColors[i % activeColors.length] || "#333") > 128 ? "#0a0a0f" : "#f0ece4", textAlign: "center", fontWeight: 300 }}>{item.title}</p>
                    </div>
                    <div style={{ padding: "12px 14px" }}>
                      <p className="cp-sans" style={{ fontSize: 12, color: "rgba(240,236,228,0.5)", lineHeight: 1.6 }}>{item.desc}</p>
                      <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                        {activePalette.tags?.slice(0,2).map(t => <span key={t} className="tag">{t}</span>)}
                        <span className="tag">#moodboard</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DESIGN TAB */}
          {activeTab === "design" && (
            <div className="fade-in">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 36 }}>
                <div>
                  <p className="cp-sans" style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(240,236,228,0.4)", marginBottom: 20 }}>DESIGN APPLICATIONS</p>
                  {designSugs.map((d, i) => (
                    <div key={i} className="design-card" style={{ borderLeftColor: activeColors[i % activeColors.length] || "#c8a951" }}>
                      <p className="cp-sans" style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(240,236,228,0.4)", marginBottom: 6 }}>{d.cat.toUpperCase()}</p>
                      <p className="cp-serif" style={{ fontSize: 16, fontStyle: "italic", marginBottom: 4 }}>{d.dir}</p>
                      <p className="cp-sans" style={{ fontSize: 12, color: "rgba(240,236,228,0.45)", marginBottom: 4 }}>Typography: {d.typo}</p>
                      <p className="cp-sans" style={{ fontSize: 11, color: "rgba(240,236,228,0.35)", fontStyle: "italic" }}>Mood: {d.mood}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="cp-sans" style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(240,236,228,0.4)", marginBottom: 20 }}>LIVE THEME PREVIEW</p>
                  {/* Mini UI Preview */}
                  <div style={{ background: activeColors[4] || "#f5f0e8", borderRadius: 10, padding: 20, border: "1px solid rgba(255,255,255,0.1)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: activeColors[0] || "#333" }} />
                      <div>
                        <div style={{ height: 10, width: 80, borderRadius: 2, background: activeColors[3] || "#333", marginBottom: 4 }} />
                        <div style={{ height: 8, width: 54, borderRadius: 2, background: activeColors[2] || "#666" }} />
                      </div>
                    </div>
                    <div style={{ height: 8, borderRadius: 2, background: activeColors[3] || "#333", marginBottom: 6, opacity: 0.8 }} />
                    <div style={{ height: 8, borderRadius: 2, background: activeColors[3] || "#333", width: "70%", marginBottom: 6, opacity: 0.5 }} />
                    <div style={{ height: 8, borderRadius: 2, background: activeColors[3] || "#333", width: "85%", marginBottom: 16, opacity: 0.3 }} />
                    <div style={{ display: "flex", gap: 8 }}>
                      <div style={{ flex: 1, height: 32, borderRadius: 4, background: activeColors[0] || "#333", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ height: 8, width: 48, borderRadius: 2, background: luminance(activeColors[0]||"#333") > 128 ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.8)" }} />
                      </div>
                      <div style={{ flex: 1, height: 32, borderRadius: 4, border: `1.5px solid ${activeColors[0] || "#333"}` }} />
                    </div>
                  </div>

                  {/* Pantone refs */}
                  <div style={{ marginTop: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: 18 }}>
                    <p className="cp-sans" style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(240,236,228,0.4)", marginBottom: 14 }}>PANTONE-INSPIRED REFERENCES</p>
                    {activeColors.slice(0,4).map((c,i) => (
                      <div key={c} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                        <div style={{ width: 40, height: 28, borderRadius: 3, background: c }} />
                        <div>
                          <p className="cp-sans" style={{ fontSize: 12, fontWeight: 500 }}>{colorName(c)}</p>
                          <p className="cp-sans" style={{ fontSize: 10, color: "rgba(240,236,228,0.4)" }}>P{Math.floor(luminance(c)*3+100)}-{Math.floor(luminance(c)*7+10)}C · {c.toUpperCase()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EXPORT TAB */}
          {activeTab === "export" && (
            <div className="fade-in">
              <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                {[["css","CSS Variables"],["json","JSON Tokens"],["tailwind","Tailwind Config"]].map(([k,l]) => (
                  <button key={k} className={`cp-btn ${exportType === k ? "active" : ""}`} style={{ padding: "8px 18px", fontSize: 12 }} onClick={() => setExportType(k)}>{l}</button>
                ))}
              </div>
              <pre className="export-code">{exportCode}</pre>
              <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
                <button className="cp-btn" style={{ fontSize: 12 }} onClick={() => { navigator.clipboard.writeText(exportCode).catch(()=>{}); }}>
                  Copy to Clipboard
                </button>
                <button className="cp-btn" style={{ fontSize: 12 }} onClick={() => {
                  const blob = new Blob([exportCode], { type: "text/plain" });
                  const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
                  a.download = `cinepalette-${activePalette.id}.${exportType === "tailwind" ? "js" : exportType}`;
                  a.click();
                }}>
                  Download File
                </button>
              </div>

              {/* Color token display */}
              <div style={{ marginTop: 32 }}>
                <p className="cp-sans" style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(240,236,228,0.4)", marginBottom: 16 }}>COLOR TOKENS</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                  {activeColors.map((c, i) => {
                    const tokenNames = ["primary","secondary","accent","dark","light"];
                    const lum = luminance(c);
                    return (
                      <div key={c} style={{ background: c, borderRadius: 8, padding: "18px 16px", position: "relative" }}>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: lum > 128 ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.9)", marginBottom: 4 }}>
                          --color-{tokenNames[i] || `color-${i}`}
                        </p>
                        <p style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: lum > 128 ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)" }}>
                          {c.toUpperCase()}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px", marginTop: 48, textAlign: "center" }}>
        <p className="cp-serif" style={{ fontSize: 13, fontStyle: "italic", color: "rgba(240,236,228,0.25)", letterSpacing: "0.05em" }}>
          CinePalette — Scene to Style · Every color has a costume
        </p>
      </footer>
    </div>
  );
}
