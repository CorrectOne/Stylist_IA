/* =========================
   DADOS: categorias e produtos
   ========================= */

const CATEGORIES = {
  "Streetwear": { 
    desc: `Com base nas suas respostas no formulário do Stylist.ai, a categoria que mais combina com você é Streetwear.<br><br>
    Com influências urbanas, traz modelagens amplas, sobreposições e tecidos como jeans e sarja.
    É um estilo autêntico e atual, que une conforto e atitude no dia a dia.` 
  },
  "Essential":  { 
    desc: `Com base nas suas respostas no formulário do Stylist.ai, a categoria que mais combina com você é Essential.<br><br>
    Uma proposta minimalista e elegante, com cortes retos e tecidos estruturados.
    Ideal para quem busca praticidade e sofisticação em peças versáteis e atemporais.` 
  },
  "Flex":       { 
    desc: `Com base nas suas respostas no formulário do Stylist.ai, a categoria que mais combina com você é Flex.<br><br>
    Focada em conforto e praticidade, essa estética valoriza tecidos tecnológicos e modelagens funcionais.
    Peças versáteis que acompanham rotinas ativas e um estilo de vida dinâmico.` 
  },
  "Golden Hour":{ 
    desc: `Com base nas suas respostas no formulário do Stylist.ai, a categoria que mais combina com você é Golden Hour.
    Um visual leve e natural, com tecidos como linho, viscose e algodão.
    Cores claras e cortes fluídos trazem frescor e leveza, perfeitos para dias ensolarados.` 
  },
  "Darkcore":   { 
    desc: `Com base nas suas respostas no formulário do Stylist.ai, a categoria que mais combina com você é Darkcore.<br><br>
    Um estilo que aposta em tons escuros, tecidos marcantes e cortes estruturados.
    Couro, veludo e renda são destaque, compondo visuais sóbrios e cheios de presença.` 
  }
};

const PRODUCTS = {
  "Darkcore": [
    {
      name: "ROMWE Grunge Punk Moletom com Capuz Estampa de Leopardo Y2K",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJmgjf9KUOJ_8&localcountry=BR&url_from=GM71085664449",
      img: "image/darkcore1.png"
    },
    {
      name: "ROMWE Grunge Punk Calça Denim Flare Vintage Y2K Bordado Asa",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJmgCPmEzne_8&localcountry=BR&url_from=GM71085664449",
      img: "image/darkcore2.png"
    },
    {
      name: "Bolsa de Ombro de Couro Sintético Estilo Y2K Motocicleta",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJmgUMRTF7t_8&localcountry=BR&url_from=GM71085664449",
      img: "image/darkcore3.png"
    },
    {
      name: "Manfinity EMRG Calça de Moletom com Cordão na Cintura e Bordado de Centopeia",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJmmFNrwrWE_8_1&localcountry=BR&url_from=GM75743155710",
      img: "image/darkcore4.png"
    },
    {
      name: "GENIUS ODE Moletom com Capuz de Manga Longa Casual Masculino",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJmeXFXZDjA_8_1&localcountry=BR&url_from=GM75743155710",
      img: "image/darkcore5.png"
    },
    {
      name: "ROMWE MEN Street Life Camiseta Estampa Silhueta de Rua Vintage",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJmf1zxseUV_8&localcountry=BR&url_from=GM71085664449",
      img: "image/darkcore6.png"
    }
  ],

  "Golden Hour": [
    {
      name: "Aloruh Vestido Longo Floral de Tule com Costas Abertas",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1k9TwjygL_8&localcountry=BR&url_from=GM71085664449",
      img: "image/golden1.png"
    },
    {
      name: "Poéselle Vestido Slim Estampa Floral Feminino",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1kGAwxCKH_8&localcountry=BR&url_from=GM71085664449",
      img: "image/golden2.png"
    },
    {
      name: "Sunnyshic Saia Estampada Bohemia Feminina",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1katXaBFR_8&localcountry=BR&url_from=GM71085664449",
      img: "image/golden3.png"
    },
    {
      name: "HIMLAND Conjunto Polo e Shorts de Malha Masculino Bege",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1iY56oVm1_8&localcountry=BR&url_from=GM71085664449",
      img: "image/golden4.png"
    },
    {
      name: "SUMWON Camisa Boxy Revere Toque de Linho",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1i8VheGHo_8&localcountry=BR&url_from=GM71085664449",
      img: "image/golden5.png"
    },
    {
      name: "Manfinity Dauomo Camisa Casual Listrada Masculina",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1iFhV4oYV_8&localcountry=BR&url_from=GM71085664449",
      img: "image/golden6.png"
    }
  ],

  "Flex": [
    {
      name: "Exploreva Conjunto Esportivo Casual Feminino",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1kWYXE6Ot_8&localcountry=BR&url_from=GM71085664449",
      img: "image/flex1.png"
    },
    {
      name: "FWH Conjunto 2 Peças Cintura Alta + Jaqueta Zíper",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1kLTO0b46_8&localcountry=BR&url_from=GM71085664449",
      img: "image/flex2.png"
    },
    {
      name: "Manfinity Fitness Jaqueta Esportiva com Zíper Sólida Estilo",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1vZyNCWOA_8&localcountry=BR&url_from=GM71085664449",
      img: "image/flex3.png"
    },
    {
      name: "STYNVO Conjunto de Jaqueta com Zíper e Gola Contrastante de Manga Longa e Calça ",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1vi5EIR63_8&localcountry=BR&url_from=GM71085664449",
      img: "image/flex4.png"
    }
  ],

  "Essential": [
    {
      name: "SHEIN X Scheana Musero Calça Social Oversized Listras",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1cebPFMrb_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Essen1.png"
    },
    {
      name: "Manfinity Homme Calça Social Masculina Preta Elegante",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1c2dodMVu_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Essen2.png"
    },
    {
      name: "Manfinity Homme Camisa Polo Casual Contraste de Cor",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1csoHGYlC_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Essen3.png"
    },
    {
      name: "Comfortcana Camisa Listrada + Saia Plissada",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ18dJuaWpV_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Essen4.png"
    },
    {
      name: "Aloruh Colete de Terno Fino de Algodão com Listras",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1wbD8n0xB_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Essen5.png"
    },
    {
      name: "SHEIN EZwear Calça de Terno Casual Feminina",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1wBDTv4H4_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Essen6.png"
    }
  ],

  "Streetwear": [
    {
      name: "AXEPEAK Camisa Xadrez de Manga Curta",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1pbKBn1uL_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Street1.png"
    },
    {
      name: "Jaqueta de Couro Sintético Casual Masculina",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1pJpCIBrt_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Street2.png"
    },
    {
      name: "Jeans Solta Casual Streetwear",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1SanY8jHu_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Street3.png"
    },
    {
      name: "Denim Preto Retrô Feminino",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1SfSSktKA_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Street4.png"
    },
    {
      name: "SUMWON Moletom com Capuz e Zíper Oversized",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1S7Nt0PTh_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Street5.png"
    },
    {
      name: "Rovax Camiseta Casual Estampa de Lábios",
      link: "http://api-shein.shein.com/h5/sharejump/appjump?link=lJ1S5U6BLLk_8&localcountry=BR&url_from=GM71085664449",
      img: "image/Street6.png"
    }
  ]
};

/* =========================
   UTIL / INICIALIZAÇÕES
   ========================= */

   /*metodo para pegar o ano e colocar no rodape */
document.getElementById('year').textContent = new Date().getFullYear();

/* CARROSSEL */
(function initCarousel(){
  const slidesEl = document.getElementById('slides');
  const slides = slidesEl.children;
  const dotsEl = document.getElementById('dots');
  let idx = 0;

  for(let i=0;i<slides.length;i++){
    const d = document.createElement('div');
    d.className = 'dot';
    if(i===0) d.classList.add('active');
    dotsEl.appendChild(d);
  }
  const dots = dotsEl.children;

  function show(i){
    idx = (i + slides.length) % slides.length;
    slidesEl.style.transform = `translateX(${-idx * 100}%)`;
    Array.from(dots).forEach((dd,ii)=> dd.classList.toggle('active', ii===idx));
  }

  setInterval(()=> show(idx + 1), 4200);
})();

/* =========================
   INTERAÇÃO DAS OPÇÕES
   ========================= */
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('opt')) {
    const parent = e.target.parentElement;
    parent.querySelectorAll('.opt').forEach(x => x.classList.remove('selected'));
    e.target.classList.add('selected');
  }
});

/* =========================
   RENDERIZAÇÃO DE CATEGORIAS E PRODUTOS
   ========================= */
const catButtonsEl = document.getElementById('cat-buttons');
const catDescEl = document.getElementById('cat-desc');
const productsEl = document.getElementById('products');

function renderCatButtons(){
  catButtonsEl.innerHTML = '';
  Object.keys(CATEGORIES).forEach(cat=>{
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.textContent = cat;
    btn.addEventListener('click', ()=> showCategory(cat));
    catButtonsEl.appendChild(btn);
  });
}
renderCatButtons();

function showCategory(name){
  Array.from(catButtonsEl.children).forEach(b => b.classList.toggle('active', b.textContent === name));
  catDescEl.innerHTML = CATEGORIES[name].desc || '';
  productsEl.innerHTML = '';

  const items = PRODUCTS[name] || [];
  if (items.length === 0) {
    productsEl.innerHTML = '<p class="empty">Nenhum produto disponível ainda para esta categoria.</p>';
    return;
  }

  items.forEach((p) => {
    const a = document.createElement('a');
    a.href = p.link;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `
      <div class="product-item">
        <img src="${p.img}" alt="${p.name}">
        <div class="meta">
          <div class="name">${p.name}</div>
          <div class="cta">Abrir na Shein</div>
        </div>
      </div>
    `;
    productsEl.appendChild(a);
  });

  productsEl.classList.add('visible');
}

/* =========================
   CÁLCULO DE PONTUAÇÃO
   ========================= */
function computeCategory() {
  const scores = {
    "Streetwear": 0,
    "Essential": 0,
    "Flex": 0,
    "Golden Hour": 0,
    "Darkcore": 0
  };

  document.querySelectorAll('.question').forEach(q => {
    const selected = q.querySelector('.opt.selected');
    if (selected) {
      const categories = selected.dataset.category.split(' ');
      categories.forEach(cat => {
        const name = normalizeCategory(cat);
        if (scores[name] !== undefined) scores[name]++;
      });
    }
  });

  let best = Object.keys(scores)[0];
  Object.keys(scores).forEach(cat => {
    if (scores[cat] > scores[best]) best = cat;
  });

  return best;
}

function normalizeCategory(c) {
  c = c.toLowerCase();
  if (c.includes('dark')) return 'Darkcore';
  if (c.includes('golden')) return 'Golden Hour';
  if (c.includes('street')) return 'Streetwear';
  if (c.includes('flex')) return 'Flex';
  if (c.includes('essential')) return 'Essential';
  return 'Essential';
}

/* =========================
   BOTÕES DE AÇÃO
   ========================= */
document.getElementById('btn-submit').addEventListener('click', ()=>{
  const questions = document.querySelectorAll('.question');
  let allAnswered = true;
  questions.forEach(q=>{
    const sel = q.querySelector('.opt.selected');
    if(!sel) allAnswered = false;
  });

  if(!allAnswered){
    alert('Por favor, responda todas as perguntas antes de finalizar o formulário.');
    return;
  }

  const cat = computeCategory();
  showCategory(cat);
  Array.from(catButtonsEl.children).forEach(b => b.classList.toggle('active', b.textContent === cat));
  document.getElementById('catalogo').scrollIntoView({behavior:'smooth', block:'center'});
});

document.getElementById('btn-reset').addEventListener('click', ()=>{
  document.querySelectorAll('.opt.selected').forEach(el => el.classList.remove('selected'));
  productsEl.classList.remove('visible');
  productsEl.innerHTML = '';
  catDescEl.innerHTML = '<em>Responda o teste para ver uma categoria recomendada.</em>';
  Array.from(catButtonsEl.children).forEach(b => b.classList.remove('active'));
  document.getElementById('teste').scrollIntoView({behavior:'smooth', block:'start'});
});
