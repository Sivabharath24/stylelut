// --- Constants ---
// PREBUILT_PALETTES loaded from palettes.js

const OUTFIT_SUGGESTIONS = {
  "streetwear-opium": {
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
  "streetwear-y2k": {
    student: { top: "Thrifted baby tee or oversized graphic shirt", bottom: "Low-rise baggy cargo pants", shoes: "Chunky skate shoes", acc: "Silver chain + trucker hat", fabrics: "Washed denim, ribbed cotton, nylon." },
    smart: { top: "Fitted knit polo", bottom: "Wide-leg dark denim", shoes: "Platform boots", acc: "Wraparound sunglasses + star belt", fabrics: "Heavyweight cotton, matte leather, distressed details." },
    luxury: { top: "Designer oversized hoodie", bottom: "Parachute pants with excessive hardware", shoes: "Metallic moon boots", acc: "Headphones + multiple silver rings", fabrics: "Tech-fleece, heavy canvas, polished metal." },
    vintage: { top: "Authentic 90s band tee", bottom: "Baggy parachute pants", shoes: "Retro running sneakers", acc: "Tinted rimless sunglasses", fabrics: "Faded cotton, ripstop nylon." }
  },
  "streetwear-gorpcore": {
    student: { top: "Fleece half-zip pullover", bottom: "Nylon climbing pants", shoes: "Trail runners", acc: "Crossbody sling bag", fabrics: "Fleece, ripstop nylon, mesh." },
    smart: { top: "Technical mid-layer jacket", bottom: "Articulated cargo pants", shoes: "Rugged hiking sneakers", acc: "Carabiner keychain + beanie", fabrics: "GORE-TEX, softshell, cordura." },
    luxury: { top: "Arc'teryx hard shell", bottom: "Zip-off convertible trail pants", shoes: "Designer trail boots", acc: "Hydration pack + reflective sunglasses", fabrics: "Waterproof technical fabrics, taped seams." },
    vintage: { top: "Vintage Patagonia fleece", bottom: "Archive technical trousers", shoes: "Salomon XT-6", acc: "Utility vest", fabrics: "Deep pile fleece, vintage technical." }
  },
  "old-money-formal": {
    student: { top: "Crisp white Oxford button-down", bottom: "Tailored charcoal trousers", shoes: "Black leather oxfords", acc: "Leather strap watch", fabrics: "Oxford cotton, worsted wool, smooth leather." },
    smart: { top: "Navy blazer over light blue shirt", bottom: "Light grey wool trousers", shoes: "Dark brown suede loafers", acc: "Silk pocket square", fabrics: "Merino wool, silk twill, suede." },
    luxury: { top: "Tuxedo jacket with silk lapels", bottom: "High-waisted tuxedo trousers", shoes: "Patent leather wholecuts", acc: "Onyx studs + silk bow tie", fabrics: "Silk barathea, fine worsted wool, patent leather." },
    vintage: { top: "Vintage Ralph Lauren blazer", bottom: "High-waisted pleated trousers", shoes: "Penny loafers", acc: "Heirloom watch", fabrics: "Tweed, heavy wool, aged leather." }
  },
  "quiet-luxury": {
    student: { top: "Minimalist heavy tee", bottom: "Straight-leg chinos", shoes: "Clean white sneakers", acc: "Unbranded canvas tote", fabrics: "Heavyweight cotton, twill." },
    smart: { top: "Fine gauge crewneck sweater", bottom: "Flat-front cotton twill trousers", shoes: "Minimalist leather sneakers", acc: "Unbranded leather tote", fabrics: "Merino wool, brushed cotton." },
    luxury: { top: "Chunky cable knit cashmere rollneck", bottom: "Wide-leg pleated flannel trousers", shoes: "Goodyear welted chelsea boots", acc: "Cashmere overcoat", fabrics: "Cashmere, vicuña, flannel." },
    vintage: { top: "Archive Margiela knit", bottom: "Fluid tailored trousers", shoes: "Derby shoes", acc: "Minimalist silver cuff", fabrics: "Fine gauge knits, wool crepe." }
  },
  "casual": {
    student: { top: "Classic Oxford shirt", bottom: "Straight-leg dark chinos", shoes: "Minimalist white sneakers", acc: "Canvas tote", fabrics: "Cotton twill, oxford cloth." },
    smart: { top: "Textured knit polo", bottom: "Relaxed pleated trousers", shoes: "Suede desert boots", acc: "Leather belt + sunglasses", fabrics: "Cotton knit, brushed twill, suede." },
    luxury: { top: "Fine silk-blend polo", bottom: "Tailored drawstring trousers", shoes: "Premium leather slip-ons", acc: "Designer sunglasses", fabrics: "Silk blend, superfine wool." },
    vintage: { top: "Vintage Levi's jacket", bottom: "Faded straight leg jeans", shoes: "Classic Converse", acc: "Woven belt", fabrics: "Raw denim, heavy canvas." }
  },
  "cinematic": {
    student: { top: "Dark turtleneck sweater", bottom: "Tailored wool trousers", shoes: "Polished chelsea boots", acc: "Classic aviators", fabrics: "Merino blend, wool blend." },
    smart: { top: "Silk cuban collar shirt", bottom: "High-waisted pleated pants", shoes: "Leather loafers", acc: "Vintage leather briefcase", fabrics: "Silk, worsted wool, polished leather." },
    luxury: { top: "Floor-length belted trench coat", bottom: "Slim dark denim", shoes: "Pointed leather boots", acc: "Fedora or dramatic scarf", fabrics: "Gabardine, raw denim, calfskin." },
    vintage: { top: "70s style oversized collar shirt", bottom: "Flared tailored trousers", shoes: "Cuban heel boots", acc: "Tinted aviators", fabrics: "Silk, corduroy, suede." }
  },
  "streetwear-japanese": {
    student: { top: "Heavyweight loopwheel hoodie", bottom: "Straight leg selvedge denim", shoes: "Canvas high-tops", acc: "Simple canvas tote", fabrics: "Loopwheel cotton, selvedge denim." },
    smart: { top: "Sashiko stitched chore coat", bottom: "Wide leg fatigue pants", shoes: "Suede loafers", acc: "Silver pendant", fabrics: "Sashiko cotton, herringbone twill." },
    luxury: { top: "Patchwork kimono-style jacket", bottom: "Ultra-wide pleated balloon pants", shoes: "Tabi boots", acc: "Heavy silver bracelet", fabrics: "Boro patchwork, fine wool." },
    vintage: { top: "Vintage Kapital fleece", bottom: "Distressed wide denim", shoes: "Chunky derbies", acc: "Vintage bandana", fabrics: "Distressed denim, deep fleece." }
  },
  "riviera-chic": {
    student: { top: "White linen button-down", bottom: "Navy linen drawstring trousers", shoes: "Espadrilles", acc: "Woven belt", fabrics: "Linen, canvas." },
    smart: { top: "Knit polo shirt", bottom: "Cream tailored gurkha shorts", shoes: "Suede driving loafers", acc: "Panama hat", fabrics: "Cotton knit, linen blend." },
    luxury: { top: "Silk patterned camp collar shirt", bottom: "High-waisted white linen trousers", shoes: "Woven leather huaraches", acc: "Vintage Rolex", fabrics: "Silk, pure linen, woven leather." },
    vintage: { top: "Retro terry cloth polo", bottom: "Short tailored swim trunks", shoes: "Classic boat shoes", acc: "Retro sunglasses", fabrics: "Terry cloth, nylon." }
  }
};

const LUT_SUGGESTIONS = [
  { mood: "Retro Film", camera: "Kodak Portra 400", light: "Push warm highlights, crush shadows, add heavy grain." },
  { mood: "Cinematic Teal/Orange", camera: "Arri Alexa", light: "Desaturate greens, boost orange midtones, cool shadows." },
  { mood: "Melancholic Indie", camera: "Cinestill 800T", light: "Halation on highlights, shift greens to cyan, lift black point." },
  { mood: "Disposable Camera", camera: "Fuji Superia", light: "High contrast, slight magenta tint, harsh direct flash look." }
];

const CATEGORY_LABELS = {
  cinematic: "Cinematic Vibes", nostalgia: "Nostalgic Feelings", minimal: "Minimalist Aesthetics",
  streetwear: "Streetwear", luxury: "Luxury", pantone: "Pantone", seasonal: "Seasonal", trend: "Trends",
  themes: "Themes & Aesthetics", oldmoney: "Old Money Ecosystem", formal: "Formalwear Dialects",
  cores: "Aesthetic Cores", paletteer: "Paletteer Collection", custom: "Custom Palettes"
};

// ALL_PALETTES loaded from palettes.js

// Global Image Extension Fallback
window.tryNextExtension = function(imgEl, baseName) {
    if (!baseName) {
        imgEl.classList.add('hidden');
        return;
    }
    const currentSrc = imgEl.src.toLowerCase();
    if (currentSrc.endsWith('.jpg')) {
        imgEl.src = `./frames/${baseName}.jpeg`;
    } else if (currentSrc.endsWith('.jpeg')) {
        imgEl.src = `./frames/${baseName}.png`;
    } else {
        // All extensions failed, hide it
        imgEl.classList.add('hidden');
        if (imgEl.id === 'director-meme') {
            const container = document.getElementById('director-meme-container');
            if (container) container.classList.add('hidden');
        } else if (imgEl.id === 'american-psycho-img') {
            const container = document.getElementById('psycho-meme-container');
            if (container) container.classList.add('hidden');
        }
    }
};

// --- State ---
let viewState = "home"; 
let activePalette = null; 
let activeStyle = "streetwear-y2k";
let outfitIntensity = "smart"; // Maps to context/budget
let exportType = "css";
let currentFilter = "all";
let cameraStream = null;

// --- DOM Elements ---
const views = {
    home: document.getElementById('view-home'),
    browse: document.getElementById('view-browse'),
    palette: document.getElementById('view-palette'),
    creator: document.getElementById('view-creator')
};

const navBtns = {
    home: document.getElementById('nav-home'),
    browse: document.getElementById('nav-browse-btn'),
    creator: document.getElementById('nav-creator-btn'),
    upload: document.getElementById('nav-upload-btn'),
    active: document.getElementById('nav-active-btn')
};

// Setup Navigation
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinksContainer = document.getElementById('nav-links');

if (hamburgerBtn && navLinksContainer) {
    hamburgerBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('open');
    });
}

function closeMobileMenu() {
    if (navLinksContainer) navLinksContainer.classList.remove('open');
}

navBtns.home.addEventListener('click', () => { switchView('home'); closeMobileMenu(); });
navBtns.browse.addEventListener('click', () => { switchView('browse'); closeMobileMenu(); });
navBtns.creator.addEventListener('click', () => { switchView('creator'); closeMobileMenu(); });
navBtns.upload.addEventListener('click', () => { switchView('home'); document.getElementById('image-input').click(); closeMobileMenu(); });
navBtns.active.addEventListener('click', () => { switchView('palette'); closeMobileMenu(); });
document.getElementById('hero-browse-btn').addEventListener('click', () => switchView('browse'));
document.getElementById('hero-custom-btn').addEventListener('click', () => switchView('creator'));
document.getElementById('view-all-featured').addEventListener('click', () => switchView('browse'));

// Custom Creator Logic
const creatorSwatches = document.querySelectorAll('.creator-swatch');
creatorSwatches.forEach(swatch => {
    const input = swatch.querySelector('input');
    input.addEventListener('input', (e) => {
        swatch.style.background = e.target.value;
    });
});

document.getElementById('creator-cycle-btn').addEventListener('click', () => {
    const randomHex = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    creatorSwatches.forEach(swatch => {
        const input = swatch.querySelector('input');
        const color = randomHex();
        swatch.style.background = color;
        input.value = color;
    });
});

document.getElementById('creator-save-btn').addEventListener('click', () => {
    const colors = Array.from(creatorSwatches).map(s => s.querySelector('input').value);
    activePalette = {
        id: "custom-" + Date.now(),
        name: "My Custom Vibe",
        colors: colors,
        mood: "Custom generated color cycle",
        tags: ["#custom", "#user-created", "#cycle"],
        description: "A uniquely generated palette crafted by you.",
        category: "custom"
    };
    renderPaletteDetail();
    switchView('palette');
});

function switchView(v) {
    viewState = v;
    Object.values(views).forEach(el => el.classList.add('hidden'));
    views[v].classList.remove('hidden');
    window.scrollTo(0, 0);
    
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    if (v === 'browse') navBtns.browse.classList.add('active');
    if (v === 'palette') navBtns.active.classList.add('active');

    if (activePalette) navBtns.active.classList.remove('hidden');
    else navBtns.active.classList.add('hidden');
}

// --- Camera Logic ---
const camOverlay = document.getElementById('camera-overlay');
const videoEl = document.getElementById('camera-stream');
const canvasEl = document.getElementById('camera-canvas');

document.getElementById('hero-camera-btn').addEventListener('click', async () => {
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        videoEl.srcObject = cameraStream;
        camOverlay.classList.remove('hidden');
    } catch (err) {
        alert("Camera access denied or unavailable.");
    }
});

document.getElementById('close-camera-btn').addEventListener('click', stopCamera);

function stopCamera() {
    if(cameraStream) {
        cameraStream.getTracks().forEach(t => t.stop());
        cameraStream = null;
    }
    camOverlay.classList.add('hidden');
}

document.getElementById('capture-btn').addEventListener('click', () => {
    const ctx = canvasEl.getContext('2d');
    canvasEl.width = videoEl.videoWidth;
    canvasEl.height = videoEl.videoHeight;
    ctx.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
    const dataUrl = canvasEl.toDataURL('image/jpeg');
    
    stopCamera();
    
    // Convert dataUrl to a blob/file to run through our existing handleFile logic
    fetch(dataUrl)
        .then(res => res.blob())
        .then(blob => {
            const file = new File([blob], "capture.jpg", { type: "image/jpeg" });
            handleFile(file);
        });
});


// --- Render Helpers ---
function createPaletteCard(p) {
    const card = document.createElement('div');
    card.className = `pal-card ${activePalette?.id === p.id ? 'selected' : ''}`;
    
    let stripHtml = '';
    p.colors.forEach(c => stripHtml += `<div class="strip-color" style="background:${c}"></div>`);
    
    let miniSwatchesHtml = '';
    p.colors.slice(0,4).forEach(c => miniSwatchesHtml += `<div class="card-mini-swatch" style="background:${c}"></div>`);
    
    let tagsHtml = '';
    p.tags.forEach(t => tagsHtml += `<span class="tag">${t}</span>`);

    card.innerHTML = `
        <div class="strip">${stripHtml}</div>
        <div class="card-mini-swatches">${miniSwatchesHtml}</div>
        <p class="card-name">${p.name}</p>
        <p class="card-mood">${p.mood}</p>
        <div class="card-tags">${tagsHtml}</div>
    `;
    
    card.addEventListener('click', () => {
        activePalette = p;
        renderPaletteDetail();
        switchView('palette');
    });
    
    return card;
}

// --- Init Home ---
function initHome() {
    const featuredContainer = document.getElementById('featured-palettes');
    const featured = [
        PREBUILT_PALETTES.cinematic[9], // Kill Bill
        PREBUILT_PALETTES.streetwear[3], // Y2K
        PREBUILT_PALETTES.cinematic[11], // The Matrix
        PREBUILT_PALETTES.streetwear[5]  // Japanese Streetwear
    ];
    featured.forEach(p => featuredContainer.appendChild(createPaletteCard({ ...p, category: Object.keys(PREBUILT_PALETTES).find(c => PREBUILT_PALETTES[c] && PREBUILT_PALETTES[c].find(pp => pp.id === p.id)) })));
    
    const dropZone = document.getElementById('drop-zone');
    const imageInput = document.getElementById('image-input');
    
    dropZone.addEventListener('click', () => imageInput.click());
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.backgroundColor = 'rgba(168, 0, 0, 0.1)'; });
    dropZone.addEventListener('dragleave', () => dropZone.style.backgroundColor = 'transparent');
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault(); dropZone.style.backgroundColor = 'transparent';
        if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
    });
    imageInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleFile(e.target.files[0]);
    });
}

function handleFile(file, highResSrc = null) {
    if (!file || !file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
    }
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.remove('hidden');

    const reader = new FileReader();
    reader.onload = e => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            try {
                // Using ColorThief to bypass complex canvas quirks safely
                const colorThief = new ColorThief();
                const paletteRGB = colorThief.getPalette(img, 10);
                
                if (!paletteRGB || paletteRGB.length === 0) {
                    throw new Error("Could not extract colors.");
                }

                const getSat = (r,g,b) => {
                    r/=255; g/=255; b/=255;
                    const max = Math.max(r,g,b), min = Math.min(r,g,b);
                    let l = (max+min)/2, s = 0;
                    if(max !== min) s = l > 0.5 ? (max-min)/(2-max-min) : (max-min)/(max+min);
                    return s;
                };
                const getLum = (r,g,b) => 0.299*r + 0.587*g + 0.114*b;
                
                // Map ColorThief output to our object structure
                const pool = paletteRGB.map(rgb => {
                    const r = rgb[0], g = rgb[1], b = rgb[2];
                    return { r, g, b, s: getSat(r,g,b), l: getLum(r,g,b) };
                });
                
                // Enforce color distance to avoid picking 3 shades of the same color
                const colorDist = (c1, c2) => Math.sqrt(Math.pow(c1.r - c2.r, 2) + Math.pow(c1.g - c2.g, 2) + Math.pow(c1.b - c2.b, 2));
                const distinctPool = [];
                const MIN_DIST = 50; // Distance threshold (max is ~441)
                for (const c of pool) {
                    let isDistinct = true;
                    for (const dc of distinctPool) {
                        if (colorDist(c, dc) < MIN_DIST) {
                            isDistinct = false;
                            break;
                        }
                    }
                    if (isDistinct) distinctPool.push(c);
                }
                // Fallback to raw pool if distinct pool is too small
                const finalPool = distinctPool.length >= 3 ? distinctPool : pool;
                
                const dom = finalPool[0] || pool[0];
                const darks = [...finalPool].sort((a,b) => a.l - b.l);
                const lights = [...finalPool].sort((a,b) => b.l - a.l);
                const vibs = [...finalPool].sort((a,b) => b.s - a.s);
                
                const rawSelection = [
                    dom, 
                    darks[0] || dom, 
                    vibs[0] || dom, 
                    lights[0] || dom, 
                    vibs[1] || vibs[0] || dom
                ];
                
                const safeHex = (r,g,b) => "#" + [r,g,b].map(x => Math.min(255, Math.max(0, x)).toString(16).padStart(2, '0')).join('');
                
                const hexes = [];
                rawSelection.forEach(c => {
                    if(!c) return;
                    const hex = safeHex(c.r, c.g, c.b);
                    if(!hexes.includes(hex)) hexes.push(hex);
                });
                
                for(let i=0; hexes.length < 5 && i < pool.length; i++) {
                    const c = pool[i];
                    const hex = safeHex(c.r, c.g, c.b);
                    if(!hexes.includes(hex)) hexes.push(hex);
                }
                while(hexes.length < 5) hexes.push("#111111");

                activePalette = {
                    id: "upload-" + Date.now(),
                    name: "Extracted Vibe",
                    colors: hexes.slice(0,5),
                    mood: "Custom extracted aesthetic",
                    tags: ["#custom", "#extracted", "#vibe"],
                    description: "Colors drawn directly from your scene or photo.",
                    category: "custom",
                    uploadSrc: highResSrc || e.target.result
                };
                
                renderPaletteDetail();
                switchView('palette');
                loadingOverlay.classList.add('hidden');
                
            } catch(err) {
                console.error("Extraction error:", err);
                loadingOverlay.classList.add('hidden');
                alert(`Extraction failed: ${err.name} - ${err.message}`);
            }
        };
        img.onerror = () => {
            loadingOverlay.classList.add('hidden');
            alert("Image load failed. The file may be unsupported.");
        };
        img.src = e.target.result;
    };
    reader.onerror = () => {
        loadingOverlay.classList.add('hidden');
        alert("File read error.");
    };
    reader.readAsDataURL(file);
}

// --- Init Browse ---
function initBrowse() {
    document.getElementById('library-count').innerText = `${ALL_PALETTES.length} vibes across ${Object.keys(PREBUILT_PALETTES).length} aesthetics`;
    
    const filterContainer = document.getElementById('category-filters');
    const categories = ["all", ...Object.keys(PREBUILT_PALETTES)];
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `btn ${currentFilter === cat ? 'active' : ''}`;
        btn.innerText = cat === 'all' ? 'All' : (CATEGORY_LABELS[cat] || cat);
        btn.addEventListener('click', () => {
            currentFilter = cat;
            document.querySelectorAll('#category-filters .btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBrowseGrid();
        });
        filterContainer.appendChild(btn);
    });
    
    renderBrowseGrid();
}

function renderBrowseGrid() {
    const grid = document.getElementById('browse-palettes');
    grid.innerHTML = '';
    const filtered = currentFilter === 'all' ? ALL_PALETTES : ALL_PALETTES.filter(p => p.category === currentFilter);
    filtered.forEach(p => grid.appendChild(createPaletteCard(p)));
}

// --- Color Helpers ---
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return {r,g,b};
}
function luminance(hex) {
  const {r,g,b} = hexToRgb(hex);
  return 0.299*r + 0.587*g + 0.114*b;
}

function colorDistance(hex1, hex2) {
    const c1 = hexToRgb(hex1), c2 = hexToRgb(hex2);
    return Math.sqrt(Math.pow(c1.r-c2.r, 2) + Math.pow(c1.g-c2.g, 2) + Math.pow(c1.b-c2.b, 2));
}

function getColorVibrancy(hex) {
    const {r,g,b} = hexToRgb(hex);
    const max = Math.max(r,g,b)/255, min = Math.min(r,g,b)/255;
    let l = (max + min) / 2, s = 0;
    if(max !== min) s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
    // Score based on saturation, penalizing extremely dark or extremely light colors
    return s * (1 - Math.abs(l - 0.5));
}

function getDistinctColors(colors, count) {
    if (colors.length <= count) return colors;
    
    // Sort all colors by vibrancy (most colorful/saturated first)
    const sorted = [...colors].sort((a,b) => getColorVibrancy(b) - getColorVibrancy(a));
    
    const distinct = [sorted[0]]; // Start with the most vibrant pop color
    const remaining = sorted.slice(1);
    
    while(distinct.length < count && remaining.length > 0) {
        let bestScore = -1;
        let bestIdx = -1;
        
        for(let i=0; i<remaining.length; i++) {
            // Find minimum distance to any already selected color
            let minDist = Infinity;
            for(let d of distinct) {
                const dist = colorDistance(d, remaining[i]);
                if (dist < minDist) minDist = dist;
            }
            
            // We want a color that is distant, but also vibrant if possible
            // We weight distance heavily, but add vibrancy as a bonus
            const vibrancy = getColorVibrancy(remaining[i]);
            // normalize distance roughly (max distance is around 441)
            const score = (minDist / 441) * 0.7 + vibrancy * 0.3;
            
            if (score > bestScore) {
                bestScore = score;
                bestIdx = i;
            }
        }
        distinct.push(remaining[bestIdx]);
        remaining.splice(bestIdx, 1);
    }
    return distinct;
}

function colorName(hex) {
  const {r,g,b} = hexToRgb(hex);
  const names = [
    // Monochromes / Neutrals
    [0,0,0,"Noir Black"], [255,255,255,"Chalk White"], [128,128,128,"Stone Grey"], [169,169,169,"Dark Grey"], [192,192,192,"Silver"],
    [105,105,105,"Dim Grey"], [47,79,79,"Dark Slate"], [112,128,144,"Slate Grey"], [211,211,211,"Light Grey"], [220,220,220,"Gainsboro"],
    [245,245,245,"White Smoke"], [248,248,255,"Ghost White"], [255,250,250,"Snow"], [240,248,255,"Alice Blue"], [255,245,238,"Seashell"],
    
    // Browns / Earth Tones
    [139,69,19,"Saddle Brown"], [160,82,45,"Sienna"], [210,105,30,"Chocolate"], [205,133,63,"Peru"], [222,184,135,"Burlywood"],
    [245,245,220,"Beige"], [245,222,179,"Wheat"], [253,245,230,"Old Lace"], [250,235,215,"Antique White"], [255,235,205,"Blanched Almond"],
    [255,228,196,"Bisque"], [255,218,185,"Peach Puff"], [255,222,173,"Navajo White"], [255,228,181,"Moccasin"], [255,248,220,"Cornsilk"],
    [255,250,240,"Floral White"], [255,255,240,"Ivory"], [61,43,31,"Bistre"], [112,66,20,"Sepia"], [165,42,42,"Brown"], [139,69,19,"Leather"],

    // Reds / Pinks
    [255,0,0,"Crimson Red"], [128,0,0,"Maroon"], [139,0,0,"Dark Red"], [165,42,42,"Brown Red"], [178,34,34,"Firebrick"],
    [220,20,60,"Crimson"], [255,99,71,"Tomato"], [255,127,80,"Coral"], [205,92,92,"Indian Red"], [240,128,128,"Light Coral"],
    [233,150,122,"Dark Salmon"], [250,128,114,"Salmon"], [255,160,122,"Light Salmon"], [255,140,0,"Dark Orange"], [255,165,0,"Orange"],
    [128,0,32,"Burgundy"], [227,38,54,"Alizarin Crimson"], [216,27,96,"Ruby Red"], [153,0,51,"Oxblood"],
    
    [255,192,203,"Pink"], [255,182,193,"Light Pink"], [255,105,180,"Hot Pink"], [255,20,147,"Deep Pink"], [199,21,133,"Medium Violet Red"],
    [219,112,147,"Pale Violet Red"], [255,228,225,"Misty Rose"], [255,240,245,"Lavender Blush"],

    // Yellows / Oranges
    [255,215,0,"Gold"], [255,255,0,"Yellow"], [255,255,224,"Light Yellow"], [250,250,210,"Light Goldenrod"], [250,240,230,"Linen"],
    [255,239,213,"Papaya Whip"], [218,165,32,"Goldenrod"], [184,134,11,"Dark Goldenrod"], [240,230,140,"Khaki"], [189,183,107,"Dark Khaki"],
    [255,191,0,"Amber"], [255,219,88,"Mustard"], [204,85,0,"Burnt Orange"], [183,65,14,"Rust"],

    // Greens
    [0,128,0,"Green"], [0,100,0,"Dark Green"], [34,139,34,"Forest Green"], [0,255,0,"Neon Green"], [124,252,0,"Lawn Green"],
    [127,255,0,"Chartreuse"], [173,255,47,"Green Yellow"], [154,205,50,"Yellow Green"], [107,142,35,"Olive Drab"], [128,128,0,"Olive"],
    [85,107,47,"Dark Olive Green"], [102,205,170,"Medium Aquamarine"], [143,188,143,"Dark Sea Green"], [32,178,170,"Light Sea Green"], [46,139,87,"Sea Green"],
    [60,179,113,"Medium Sea Green"], [0,250,154,"Medium Spring Green"], [0,255,127,"Spring Green"], [144,238,144,"Light Green"], [152,251,152,"Pale Green"],
    [240,255,240,"Honeydew"], [53,94,59,"Hunter Green"], [135,159,132,"Sage"], [80,200,120,"Emerald"], [85,107,47,"Olive"],

    // Blues / Cyans
    [0,0,255,"Royal Blue"], [0,0,205,"Medium Blue"], [0,0,139,"Dark Blue"], [0,0,128,"Navy"], [25,25,112,"Midnight Blue"],
    [65,105,225,"Royal Blue"], [138,43,226,"Blue Violet"], [72,61,139,"Dark Slate Blue"], [106,90,205,"Slate Blue"], [123,104,238,"Medium Slate Blue"],
    [147,112,219,"Medium Purple"], [135,206,235,"Sky Blue"], [135,206,250,"Light Sky Blue"], [0,191,255,"Deep Sky Blue"], [30,144,255,"Dodger Blue"],
    [100,149,237,"Cornflower Blue"], [70,130,180,"Steel Blue"], [176,196,222,"Light Steel Blue"], [173,216,230,"Light Blue"], [176,224,230,"Powder Blue"],
    [224,255,255,"Light Cyan"], [0,255,255,"Aqua"], [0,206,209,"Dark Turquoise"], [72,209,204,"Medium Turquoise"], [64,224,208,"Turquoise"],
    [175,238,238,"Pale Turquoise"], [127,255,212,"Aquamarine"], [0,128,128,"Teal"], [0,139,139,"Dark Cyan"], [95,158,160,"Cadet Blue"],

    // Purples
    [128,0,128,"Purple"], [139,0,139,"Dark Magenta"], [255,0,255,"Magenta"], [148,0,211,"Dark Violet"], [153,50,204,"Dark Orchid"],
    [186,85,211,"Medium Orchid"], [218,112,214,"Orchid"], [238,130,238,"Violet"], [221,160,221,"Plum"], [216,191,216,"Thistle"],
    [230,230,250,"Lavender"], [224,176,255,"Mauve"], [204,204,255,"Periwinkle"], [153,102,204,"Amethyst"], [102,51,153,"Rebecca Purple"]
  ];
  let best = names[0], dist = Infinity;
  for (const [nr,ng,nb,name] of names) {
    const d = Math.sqrt((r-nr)**2+(g-ng)**2+(b-nb)**2);
    if (d < dist) { dist = d; best = [nr,ng,nb,name]; }
  }
  return best[3];
}

// --- Init Palette Detail ---
function renderPaletteDetail() {
    if (!activePalette) return;
    const p = activePalette;
    
    document.getElementById('detail-category').innerText = `${p.category || 'custom'} palette`;
    document.getElementById('detail-name').innerText = p.name;
    document.getElementById('detail-desc').innerText = p.description;
    document.getElementById('detail-mood').innerText = p.mood;
    
    const tagsCont = document.getElementById('detail-tags');
    tagsCont.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    
    const imgEl = document.getElementById('upload-preview');
    if (p.uploadSrc) { imgEl.src = p.uploadSrc; imgEl.classList.remove('hidden'); }
    else { imgEl.classList.add('hidden'); imgEl.src = ''; }

    const directorMemeEl = document.getElementById('director-meme');
    const directorMemeContainer = document.getElementById('director-meme-container');
    const directorMemeCaption = document.getElementById('director-meme-caption');
    if (p.category === 'cinematic') {
        directorMemeEl.classList.remove('hidden');
        directorMemeEl.dataset.basename = p.id;
        directorMemeEl.src = `./frames/${p.id}.jpg`;
        const directorName = p.name.split('/')[0].trim();
        directorMemeEl.title = `Directed by ${directorName}`;
        
        let quote = directorName;
        switch(p.id) {
            case 'wes-anderson': quote = "Asteroid City"; break;
            case 'wong-kar-wai': quote = "Love is a matter of timing."; break;
            case 'pedro-almodovar': quote = "Women on the verge..."; break;
            case 'david-fincher': quote = "What's in the box?"; break;
            case 'damien-chazelle': quote = "Not quite my tempo."; break;
            case 'denis-villeneuve': quote = "Fear is the mind-killer."; break;
            case 'guillermo-del-toro': quote = "Monsters are real."; break;
            case 'dario-argento': quote = "Suspiria..."; break;
            case 'akira-kurosawa': quote = "The rain won't stop."; break;
            case 'quentin-tarantino': quote = "Kill Bill Vol. 1"; break;
            case 'christopher-nolan': quote = "A dream within a dream."; break;
            case 'the-matrix': quote = "Red pill or blue pill?"; break;
        }
        
        if (directorMemeCaption) directorMemeCaption.innerText = quote;
        directorMemeContainer.classList.add('hidden');
    } else {
        directorMemeContainer.classList.add('hidden');
        directorMemeEl.src = "";
    }
    
    document.getElementById('detail-strip').innerHTML = p.colors.map(c => `<div style="flex:1; background:${c}"></div>`).join('');
    document.getElementById('detail-cards').innerHTML = p.colors.map(c => `
        <div class="detail-color-card">
            <div class="detail-swatch" style="background:${c}" onclick="copyToClipboard('${c}', this)"></div>
            <div>
                <p class="color-name">${colorName(c)}</p>
                <button class="hex-badge" onclick="copyToClipboard('${c}', this)">${c.toUpperCase()}</button>
            </div>
        </div>
    `).join('');
    
    renderOutfitTab();
    renderGalleryTab();
    renderDesignTab();
    updateExportCode();
}

function copyToClipboard(text, el) {
    navigator.clipboard.writeText(text);
    if(el.tagName === 'BUTTON') {
        el.innerText = '✓ copied';
        setTimeout(() => el.innerText = text.toUpperCase(), 1500);
    }
}

// Tabs setup
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById(e.target.dataset.target).classList.add('active');
    });
});

// --- Tab: Outfit ---
function renderOutfitTab() {
    const styleGroup = document.getElementById('outfit-style-group');
    if (styleGroup.children.length === 0) {
        Object.keys(OUTFIT_SUGGESTIONS).forEach(s => {
            const b = document.createElement('button');
            b.className = `btn ${s === activeStyle ? 'active' : ''}`;
            b.innerText = s.replace("-", " ");
            b.onclick = () => {
                activeStyle = s;
                Array.from(styleGroup.children).forEach(btn => btn.classList.remove('active'));
                b.classList.add('active');
                updateOutfitPieces();
            };
            styleGroup.appendChild(b);
        });
    }
    
    document.querySelectorAll('.intensity-btn').forEach(btn => {
        btn.onclick = (e) => {
            outfitIntensity = e.target.dataset.intensity;
            document.querySelectorAll('.intensity-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            updateOutfitPieces();
        }
    });
    
    updateOutfitPieces();
    
    const wearGrid = document.getElementById('wear-grid');
    const distinctWearColors = getDistinctColors(activePalette.colors, 3);
    
    // Sort from most vibrant to least vibrant so the defining colors map to the main garments
    distinctWearColors.sort((a,b) => getColorVibrancy(b) - getColorVibrancy(a));
    
    const topColor = distinctWearColors[0];
    const botColor = distinctWearColors[1];
    const accColor = distinctWearColors[2];
    
    // Most vibrant -> Top, Second -> Bottom, Least vibrant -> Accessories
    const mappedRoles = [
        { c: topColor, title: "Top / Outerwear", desc: "Primary pop color" },
        { c: botColor, title: "Bottom / Trousers", desc: "Secondary defining color" },
        { c: accColor, title: "Shoes / Accessories", desc: "Grounding / Accent" }
    ];

    wearGrid.innerHTML = mappedRoles.map(item => `
        <div class="wear-item">
            <div class="wear-swatch" style="background:${item.c}"></div>
            <div>
                <p class="wear-title">${item.title}</p>
                <p class="wear-desc">${item.desc}</p>
            </div>
        </div>
    `).join('');

    // Pinterest Button Logic
    document.getElementById('outfit-pinterest-btn').onclick = openPinterestSearch;
}

function updateOutfitPieces() {
    const data = OUTFIT_SUGGESTIONS[activeStyle] || OUTFIT_SUGGESTIONS["streetwear-y2k"];
    const pieces = data[outfitIntensity] || data.smart;
    
    const container = document.getElementById('outfit-pieces');
    container.innerHTML = '';
    const map = [["Top","top"],["Bottom","bottom"],["Shoes","shoes"],["Accessories","acc"]];
    
    map.forEach(([label, key]) => {
        if (pieces[key] && pieces[key] !== "None") {
            container.innerHTML += `
                <div class="outfit-piece-card" style="border-top-color: ${activePalette.colors[0] || '#c8a951'}">
                    <p class="piece-label">${label.toUpperCase()}</p>
                    <p class="piece-value">${pieces[key]}</p>
                </div>
            `;
        }
    });
    
    const texEl = document.getElementById('texture-suggestions');
    if (texEl) {
        texEl.innerText = pieces.fabrics || "Raw cotton, smooth leather, matte accents.";
    }
}

function openPinterestSearch(e) {
    const p = activePalette;
    
    // Select 3 visually distinct colors
    const distinctPinterestColors = getDistinctColors(p.colors, 3);
    
    // Sort from most vibrant to least vibrant
    distinctPinterestColors.sort((a,b) => getColorVibrancy(b) - getColorVibrancy(a));
    
    const topColorName = colorName(distinctPinterestColors[0]);
    const botColorName = colorName(distinctPinterestColors[1]);
    const accColorName = colorName(distinctPinterestColors[2]);
    
    const style = activeStyle.replace('-', ' ');
    
    // Add context/budget to query for extremely specific Pinterest searches
    let context = "";
    if (outfitIntensity === 'vintage') context = "vintage archive";
    else if (outfitIntensity === 'luxury') context = "luxury high fashion";
    else if (outfitIntensity === 'student') context = "thrifted casual";
    else context = "smart casual";

    // Get gender based on which button was clicked
    let gender = "";
    if (e && e.target) {
        if (e.target.id === 'outfit-pinterest-btn') {
            const selectEl = document.getElementById('pinterest-gender-outfit');
            if (selectEl) gender = selectEl.value;
        } else if (e.target.id === 'gallery-pinterest-btn') {
            const selectEl = document.getElementById('pinterest-gender-gallery');
            if (selectEl) gender = selectEl.value;
        }
    }

    // Build a highly specific structured query for Pinterest
    const queryParts = [];
    if (gender === 'mens') queryParts.push("mens");
    else if (gender === 'womens') queryParts.push("womens");
    
    queryParts.push(style, context, "aesthetic", topColorName, "top", botColorName, "pants");

    const query = encodeURIComponent(queryParts.join(" "));
    window.open(`https://www.pinterest.com/search/pins/?q=${query}`, '_blank');
}

// --- Tab: Gallery ---
function renderGalleryTab() {
    const container = document.getElementById('masonry-gallery');
    const colors = activePalette.colors;
    
    const data = [
        { title: "Morning Ritual", desc: "Linen overshirt draped over a ribbed tank, pressed trousers with a raw hem. Morning light catching the fabric.", aspect: 1.4 },
        { title: "The Long Walk", desc: "Trench coat in the dominant tone, loose wide-leg trousers, leather boots. Intentionally imperfect.", aspect: 0.8 },
        { title: "Golden Hour Drip", desc: "The accent color as the statement — one bold piece against a neutral base. Sunglasses. Unhurried.", aspect: 1.2 },
        { title: "Editorial Quiet", desc: "Monochrome head-to-toe in the lightest palette tone. Architectural silhouette. No jewelry.", aspect: 1.6 },
        { title: "Street Archive", desc: "Vintage pieces in earth tones. Chunky sneakers. The jacket everyone asks about.", aspect: 0.9 },
        { title: "After Dark", desc: "The darkest palette tone from head to toe. One unexpected texture. Minimal footprint.", aspect: 1.3 },
    ];
    
    container.innerHTML = data.map((item, i) => {
        const c1 = colors[i % colors.length] || "#333";
        const c2 = colors[(i+2) % colors.length] || "#555";
        const tc = luminance(c1) > 128 ? "#0a0a0f" : "#f0ece4";
        const h = item.aspect * 160;
        
        const tags = (activePalette.tags || []).slice(0,2).map(t => `<span class="tag">${t}</span>`).join('');
        
        return `
        <div class="gallery-item">
            <div class="gallery-img-area" style="background: linear-gradient(135deg, ${c1} 0%, ${c2} 100%); height: ${h}px;">
                <div class="gallery-overlay"></div>
                <p class="gallery-title" style="color: ${tc}">${item.title}</p>
            </div>
            <div class="gallery-info">
                <p>${item.desc}</p>
                <div class="card-tags" style="margin-top:10px;">
                    ${tags} <span class="tag">#moodboard</span>
                </div>
            </div>
        </div>`;
    }).join('');

    document.getElementById('gallery-pinterest-btn').onclick = openPinterestSearch;
}

// --- Tab: Design ---
function renderDesignTab() {
    const c = activePalette.colors;
    
    // Pick a LUT randomly based on the palette ID or time to keep it consistent per palette
    const lutIndex = activePalette.colors[0].charCodeAt(1) % LUT_SUGGESTIONS.length;
    const lut = LUT_SUGGESTIONS[lutIndex] || LUT_SUGGESTIONS[0];
    
    document.getElementById('lut-camera').innerText = `Camera Match: ${lut.camera}`;
    document.getElementById('lut-desc').innerText = lut.mood;
    document.getElementById('lut-lighting').innerText = `Lighting: ${lut.light}`;
    
    const DESIGN_SUGGESTIONS = [
      { cat: "UI/UX", dir: "Dashboard interface with sidebar navigation", typo: "Inter + JetBrains Mono", mood: "focused, efficient, premium" },
      { cat: "Poster Design", dir: "Editorial typography-forward layouts with heavy color blocking", typo: "Impact + Helvetica Neue", mood: "confident, arresting, memorable" },
      { cat: "Branding", dir: "Minimal logomark with extended color system", typo: "Gerasol + Roboto", mood: "timeless, distinctive, authoritative" },
      { cat: "Editorial Layout", dir: "Magazine spread with asymmetric grid", typo: "Playfair Display + Lato", mood: "refined, intelligent, cultured" }
    ];
    
    document.getElementById('design-cards').innerHTML = DESIGN_SUGGESTIONS.map((d, i) => `
        <div class="design-card" style="border-left-color: ${c[i % c.length] || '#c8a951'}">
            <p class="design-cat">${d.cat.toUpperCase()}</p>
            <p class="design-dir">${d.dir}</p>
            <p class="design-typo">Typography: ${d.typo}</p>
            <p class="design-mood">Mood: ${d.mood}</p>
        </div>
    `).join('');
    
    const tp = document.getElementById('theme-preview');
    tp.style.background = c[4] || "#f5f0e8";
    
    const tpHeader = tp.querySelector('.tp-avatar');
    tpHeader.style.background = c[0] || "#333";
    tp.querySelector('.tp-line1').style.background = c[3] || "#333";
    tp.querySelector('.tp-line2').style.background = c[2] || "#666";
    
    tp.querySelector('.tp-bar1').style.background = c[3] || "#333";
    tp.querySelector('.tp-bar2').style.background = c[3] || "#333";
    tp.querySelector('.tp-bar3').style.background = c[3] || "#333";
    
    const b1 = tp.querySelector('.tp-box1');
    b1.style.background = c[0] || "#333";
    b1.querySelector('.tp-inner-bar').style.background = luminance(c[0]||"#333") > 128 ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.8)";
    
    tp.querySelector('.tp-box2').style.borderColor = c[0] || "#333";
    
    document.getElementById('pantone-refs-list').innerHTML = c.slice(0,4).map(hex => `
        <div class="pref-item">
            <div class="pref-swatch" style="background:${hex}"></div>
            <div>
                <p class="pref-name">${colorName(hex)}</p>
                <p class="pref-info">P${Math.floor(luminance(hex)*3+100)}-${Math.floor(luminance(hex)*7+10)}C · ${hex.toUpperCase()}</p>
            </div>
        </div>
    `).join('');
}

// --- Tab: Export ---
document.querySelectorAll('.export-type-btn').forEach(btn => {
    btn.onclick = (e) => {
        exportType = e.target.dataset.type;
        document.querySelectorAll('.export-type-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        updateExportCode();
    };
});

function updateExportCode() {
    const c = activePalette.colors;
    let code = '';
    
    const varNames = c.map(hex => colorName(hex).toLowerCase().replace(/\s+/g, '-'));
    
    if (exportType === 'css') {
        const vars = c.map((hex, i) => `  --color-${varNames[i]}: ${hex};`).join('\n');
        code = `:root {\n${vars}\n}`;
    } else if (exportType === 'json') {
        const obj = {};
        c.forEach((hex, i) => { obj[varNames[i]] = hex; });
        code = JSON.stringify(obj, null, 2);
    } else if (exportType === 'tailwind') {
        const entries = c.map((hex, i) => `      '${varNames[i]}': '${hex}'`).join(',\n');
        code = `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n${entries}\n      }\n    }\n  }\n}`;
    }
    
    document.getElementById('export-code-block').innerText = code;
}

document.getElementById('copy-export-btn').onclick = () => {
    navigator.clipboard.writeText(document.getElementById('export-code-block').innerText);
};

document.getElementById('download-export-btn').onclick = () => {
    const code = document.getElementById('export-code-block').innerText;
    const blob = new Blob([code], { type: "text/plain" });
    const a = document.createElement("a"); 
    a.href = URL.createObjectURL(blob);
    a.download = `stylelut-${activePalette.id}.${exportType === "tailwind" ? "js" : exportType}`;
    a.click();
};

window.onload = () => {
    initHome();
    initBrowse();
};

window.loadDemoFrame = async function(src) {
    try {
        const loadingOverlay = document.getElementById('loading-overlay');
        loadingOverlay.classList.remove('hidden');

        const filename = src.split('/').pop();
        if (!DEMO_FRAMES || !DEMO_FRAMES[filename]) throw new Error("Frame not found.");
        
        // Fetching a base64 Data URI is completely immune to file:// CORS restrictions!
        const response = await fetch(DEMO_FRAMES[filename]);
        const blob = await response.blob();
        
        // Wrap the blob in a File object so the existing handleFile logic works seamlessly
        const file = new File([blob], filename, { type: 'image/jpeg' });
        handleFile(file, src);
    } catch (e) {
        alert("Failed to load base64 frame.");
        const loadingOverlay = document.getElementById('loading-overlay');
        loadingOverlay.classList.add('hidden');
    }
};
