// ============================================================
//  Central content source. Every text field is bilingual: {en, es}.
//  Edit here to change site content everywhere.
//  ⚠️ PLACEHOLDER numbers — swap for Pablo's real figures before launch.
// ============================================================

export const cases = [
  {
    channel: 'seo',
    industry: { en: 'B2B SaaS', es: 'SaaS B2B' },
    title: { en: 'From invisible to category leader', es: 'De invisible a líder de categoría' },
    desc: {
      en: 'Rebuilt site architecture and content strategy for a 40-person SaaS, capturing high-intent search demand.',
      es: 'Reconstruí la arquitectura y estrategia de contenido de un SaaS de 40 personas, capturando demanda de alta intención.',
    },
    resultNum: { en: '+518%', es: '+518%' },
    resultLabel: { en: 'organic traffic in 9 months', es: 'tráfico orgánico en 9 meses' },
  },
  {
    channel: 'ppc',
    industry: { en: 'E-commerce', es: 'E-commerce' },
    title: { en: 'Scaling paid without killing margin', es: 'Escalar sin matar el margen' },
    desc: {
      en: 'Restructured Google and Meta accounts around profit instead of clicks, then doubled spend while improving return.',
      es: 'Reestructuré las cuentas de Google y Meta hacia la rentabilidad en vez de los clics, y dupliqué la inversión mejorando el retorno.',
    },
    resultNum: { en: '-63%', es: '-63%' },
    resultLabel: { en: 'cost per acquisition', es: 'costo por adquisición' },
  },
  {
    channel: 'email',
    industry: { en: 'DTC Brand', es: 'Marca DTC' },
    title: { en: 'Email became the top channel', es: 'El email se volvió el canal #1' },
    desc: {
      en: 'Built lifecycle flows from scratch for a DTC brand. Recovered abandoned revenue and lifted the repeat purchase rate.',
      es: 'Construí flujos de ciclo de vida desde cero para una marca DTC. Recuperé ingresos abandonados y subí la tasa de recompra.',
    },
    resultNum: { en: '8.4x', es: '8.4x' },
    resultLabel: { en: 'return on email revenue', es: 'retorno sobre ingresos de email' },
  },
  {
    channel: 'analytics',
    industry: { en: 'Marketplace', es: 'Marketplace' },
    title: { en: 'Finally trusting the numbers', es: 'Por fin confiar en los datos' },
    desc: {
      en: 'Fixed broken tracking and built a single-source dashboard, unlocking decisions that lifted conversion.',
      es: 'Arreglé la medición rota y armé un dashboard único, habilitando decisiones que subieron la conversión.',
    },
    resultNum: { en: '+41%', es: '+41%' },
    resultLabel: { en: 'checkout conversion rate', es: 'conversión en checkout' },
  },
  {
    channel: 'seo',
    industry: { en: 'Local Services', es: 'Servicios Locales' },
    title: { en: 'Owning the local map pack', es: 'Dominar el mapa local' },
    desc: {
      en: 'Local SEO overhaul that put a multi-location service business at the top of its market searches.',
      es: 'Renovación de SEO local que puso a un negocio multi-sede en el top de su mercado.',
    },
    resultNum: { en: '+287%', es: '+287%' },
    resultLabel: { en: 'inbound leads from search', es: 'leads desde búsqueda' },
  },
  {
    channel: 'ppc',
    industry: { en: 'Fintech', es: 'Fintech' },
    title: { en: 'Cutting wasted ad spend', es: 'Cortar el gasto desperdiciado' },
    desc: {
      en: 'Audit + rebuild of a fintech paid account, killing waste and reallocating budget to what actually converts.',
      es: 'Auditoría y reconstrucción de una cuenta fintech, eliminando desperdicio y reasignando presupuesto.',
    },
    resultNum: { en: '3.2x', es: '3.2x' },
    resultLabel: { en: 'return on ad spend', es: 'retorno sobre inversión publicitaria' },
  },
];

export const pricing = [
  {
    name: { en: 'Audit', es: 'Auditoría' },
    desc: { en: 'A deep look at one channel and a clear plan for what to do next.', es: 'Una mirada profunda a un canal y un plan claro de qué hacer.' },
    price: { en: '$1,500', es: '$1.500' },
    unit: { en: 'one-time', es: 'único' },
    featured: false,
    features: {
      en: ['Full channel audit', 'Prioritized roadmap', 'Loom walkthrough', '30-min debrief call'],
      es: ['Auditoría completa', 'Roadmap priorizado', 'Video explicativo', 'Llamada de 30 min'],
    },
  },
  {
    name: { en: 'Growth', es: 'Growth' },
    desc: { en: 'A senior partner in your corner, running your priority channels month to month.', es: 'Un socio senior de tu lado, gestionando tus canales prioritarios mes a mes.' },
    price: { en: '$3,000', es: '$3.000' },
    unit: { en: 'per month', es: 'por mes' },
    featured: true,
    badge: { en: 'Most popular', es: 'Más popular' },
    features: {
      en: ['1–2 channels, fully managed', 'Weekly optimization', 'Live dashboard & reporting', 'Ongoing communication', 'No lock-in'],
      es: ['1–2 canales gestionados', 'Optimización semanal', 'Dashboard en vivo', 'Comunicación continua', 'Sin permanencia'],
    },
  },
  {
    name: { en: 'A La Carte', es: 'A La Carta' },
    desc: { en: 'A custom scope for bigger goals. We shape it together around what you need.', es: 'Un alcance a medida para objetivos más grandes. Lo definimos juntos según lo que necesitas.' },
    price: { en: 'Custom', es: 'A medida' },
    unit: { en: 'let’s scope it', es: 'lo definimos juntos' },
    featured: false,
    features: {
      en: ['Custom channel mix', 'Dedicated strategy', 'Deeper analytics & CRO', 'Priority access'],
      es: ['Mezcla de canales a medida', 'Estrategia dedicada', 'Analítica y CRO más profundos', 'Acceso prioritario'],
    },
  },
];

// ------------------------------------------------------------
//  Deep service detail — sub-services + proof shown per channel.
// ------------------------------------------------------------
export const serviceDetail = {
  seo: {
    icon: 'search',
    name: { en: 'SEO & Content', es: 'SEO y Contenido' },
    intro: {
      en: 'Search isn’t one game anymore. Classic rankings, AI answers, and local intent all pull in different directions. I build one organic engine that captures demand wherever your buyers actually look.',
      es: 'La búsqueda ya no es un solo juego. Rankings clásicos, respuestas de IA e intención local tiran hacia lados distintos. Construyo un motor orgánico que capta demanda donde tus clientes realmente buscan.',
    },
    subs: [
      { icon: 'article', t: { en: 'Traditional SEO & Content', es: 'SEO y Contenido tradicional' }, d: { en: 'Topical authority that ranks and converts', es: 'Autoridad temática que posiciona y convierte' } },
      { icon: 'sparkles', t: { en: 'AI Search / GEO / AEO', es: 'Búsqueda IA / GEO / AEO' }, d: { en: 'Get cited in ChatGPT, Perplexity & AI Overviews', es: 'Aparecer en ChatGPT, Perplexity y AI Overviews' } },
      { icon: 'settings', t: { en: 'Technical SEO', es: 'SEO Técnico' }, d: { en: 'Crawlability, speed, schema & site health', es: 'Rastreo, velocidad, schema y salud del sitio' } },
      { icon: 'map-pin', t: { en: 'Google Business Profile', es: 'Perfil de Google Business' }, d: { en: 'Own the local map pack in your market', es: 'Domina el mapa local de tu mercado' } },
      { icon: 'shopping-cart', t: { en: 'E-commerce SEO', es: 'SEO para E-commerce' }, d: { en: 'Category & product pages that scale', es: 'Páginas de categoría y producto que escalan' } },
      { icon: 'world', t: { en: 'Bilingual SEO · EN/ES', es: 'SEO Bilingüe · EN/ES' }, d: { en: 'Rank in English and Spanish markets', es: 'Posiciona en mercados en inglés y español' } },
    ],
    proof: { num: '+160%', label: { en: 'organic leads generated', es: 'leads orgánicos generados' }, quote: { en: '“Arm had no organic engine. Now it is a primary channel across 13 countries.”', es: '“Arm no tenía motor orgánico. Ahora es un canal principal en 13 países.”' }, caseSlug: 'arm-global-seo', client: 'Arm' },
  },
  ppc: {
    icon: 'target-arrow',
    name: { en: 'PPC & Paid Media', es: 'PPC y Medios Pagados' },
    intro: {
      en: 'Most paid accounts optimize for clicks and quietly lose money. I rebuild yours around profit. Every dollar traces back to revenue, so when you scale spend, you scale returns too.',
      es: 'La mayoría de las cuentas optimizan por clics y pierden dinero sin notarlo. Reconstruyo la tuya alrededor de la rentabilidad. Cada dólar se rastrea a ingresos, así que al escalar la inversión, escalas también el retorno.',
    },
    subs: [
      { icon: 'brand-google', t: { en: 'Google Ads (Search/PMax)', es: 'Google Ads (Search/PMax)' }, d: { en: 'High-intent capture, done right', es: 'Captura de alta intención, bien hecha' } },
      { icon: 'brand-meta', t: { en: 'Meta & Paid Social', es: 'Meta y Social Pagado' }, d: { en: 'Creative-led demand generation', es: 'Generación de demanda con creativos' } },
      { icon: 'palette', t: { en: 'Creative & Offer Testing', es: 'Testeo de Creativos y Ofertas' }, d: { en: 'Systematic testing, not guessing', es: 'Testeo sistemático, sin adivinar' } },
      { icon: 'trending-up', t: { en: 'Profit-First Scaling', es: 'Escalado por Rentabilidad' }, d: { en: 'Grow spend without growing losses', es: 'Crece la inversión sin crecer pérdidas' } },
      { icon: 'refresh', t: { en: 'Retargeting Funnels', es: 'Embudos de Retargeting' }, d: { en: 'Recover the 97% who don’t convert first', es: 'Recupera al 97% que no convierte al inicio' } },
      { icon: 'world-longitude', t: { en: 'LATAM Market Expansion', es: 'Expansión al Mercado LATAM' }, d: { en: 'Localized campaigns for Spanish markets', es: 'Campañas localizadas para mercados hispanos' } },
    ],
    proof: { num: '-63%', label: { en: 'cost per acquisition', es: 'costo por adquisición' }, quote: { en: '“Every new policyholder now costs a fraction of what it used to.”', es: '“Cada nuevo asegurado cuesta hoy una fracción de lo que costaba.”' }, caseSlug: 'pib-insurance-ppc', client: 'PIB Insurance' },
  },
  email: {
    icon: 'mail',
    name: { en: 'Email', es: 'Email' },
    intro: {
      en: 'Email is the highest-ROI channel you actually own. No algorithm decides who sees it. I build automated flows that turn one-time buyers into repeat revenue while you sleep.',
      es: 'El email es el canal de mayor ROI que de verdad posees. Ningún algoritmo decide quién lo ve. Construyo flujos automáticos que convierten compradores únicos en ingresos recurrentes mientras duermes.',
    },
    subs: [
      { icon: 'mail-opened', t: { en: 'Welcome & Nurture Flows', es: 'Flujos de Bienvenida' }, d: { en: 'Turn subscribers into first purchases', es: 'Convierte suscriptores en primeras compras' } },
      { icon: 'shopping-cart', t: { en: 'Abandoned Cart Recovery', es: 'Recuperación de Carritos' }, d: { en: 'Win back revenue seconds from lost', es: 'Recupera ingresos casi perdidos' } },
      { icon: 'rotate', t: { en: 'Post-Purchase & Retention', es: 'Post-Compra y Retención' }, d: { en: 'Turn buyers into repeat customers', es: 'Convierte compradores en recurrentes' } },
      { icon: 'filter', t: { en: 'Segmentation', es: 'Segmentación' }, d: { en: 'Right message, right person, right time', es: 'Mensaje correcto, persona correcta' } },
      { icon: 'user-heart', t: { en: 'Win-Back Campaigns', es: 'Campañas de Reactivación' }, d: { en: 'Reactivate subscribers who drifted', es: 'Reactiva suscriptores que se alejaron' } },
      { icon: 'flask', t: { en: 'A/B Testing & Deliverability', es: 'A/B Testing y Entregabilidad' }, d: { en: 'More opens, more inbox placement', es: 'Más aperturas, más bandeja de entrada' } },
    ],
    proof: { num: '8.4x', label: { en: 'return on email revenue', es: 'retorno sobre ingresos de email' }, quote: { en: '“Email turned prospective students into enrolments while we slept.”', es: '“El email convirtió a estudiantes potenciales en inscripciones mientras dormíamos.”' }, caseSlug: 'edu4u-email', client: 'Edu4u' },
  },
  analytics: {
    icon: 'chart-histogram',
    name: { en: 'Analytics & CRO', es: 'Analítica y CRO' },
    intro: {
      en: 'You can’t improve what you can’t trust. I fix your tracking, build dashboards you actually use, and run conversion optimization that turns your existing traffic into more revenue.',
      es: 'No puedes mejorar lo que no puedes medir con confianza. Arreglo tu medición, construyo dashboards útiles y optimizo la conversión de tu tráfico actual.',
    },
    subs: [
      { icon: 'chart-dots', t: { en: 'GA4 & Tracking Setup', es: 'Configuración GA4' }, d: { en: 'Accurate data you can finally trust', es: 'Datos precisos en los que confiar' } },
      { icon: 'layout-dashboard', t: { en: 'Custom Dashboards', es: 'Dashboards a Medida' }, d: { en: 'One source of truth for decisions', es: 'Una fuente de verdad para decidir' } },
      { icon: 'flask', t: { en: 'Conversion Rate Optimization', es: 'Optimización de Conversión' }, d: { en: 'More revenue from the same traffic', es: 'Más ingresos del mismo tráfico' } },
      { icon: 'compass', t: { en: 'Attribution Modeling', es: 'Modelos de Atribución' }, d: { en: 'Know what’s really driving sales', es: 'Descubre qué impulsa las ventas' } },
      { icon: 'test-pipe', t: { en: 'A/B & Experimentation', es: 'A/B y Experimentación' }, d: { en: 'Decisions from data, not opinions', es: 'Decisiones con datos, no opiniones' } },
      { icon: 'route', t: { en: 'User Journey Analysis', es: 'Análisis de Recorrido' }, d: { en: 'Find and fix where revenue leaks', es: 'Encuentra dónde se fuga el ingreso' } },
    ],
    proof: { num: '+41%', label: { en: 'lead conversion rate', es: 'conversión de leads' }, quote: { en: '“We finally trust our numbers, and the phone rings more because of it.”', es: '“Por fin confiamos en nuestros números, y el teléfono suena más gracias a eso.”' }, caseSlug: 'orca-roofing-analytics', client: 'Orca Roofing' },
  },
};

// Key-services ticker (marquee). Real, in-demand service terms.
export const ticker = [
  { en: 'Technical SEO', es: 'SEO Técnico' },
  { en: 'Generative Engine Optimization (GEO)', es: 'Optimización Generativa (GEO)' },
  { en: 'Answer Engine Optimization (AEO)', es: 'Optimización para Motores de Respuesta (AEO)' },
  { en: 'AI Overviews Visibility', es: 'Visibilidad en AI Overviews' },
  { en: 'Bilingual SEO · EN/ES', es: 'SEO Bilingüe · EN/ES' },
  { en: 'Content & Topical Authority', es: 'Contenido y Autoridad Temática' },
  { en: 'Google Ads · Performance Max', es: 'Google Ads · Performance Max' },
  { en: 'Meta & Paid Social', es: 'Meta y Social Pagado' },
  { en: 'Email Marketing Automation', es: 'Automatización de Email' },
  { en: 'Conversion Rate Optimization', es: 'Optimización de Conversión' },
  { en: 'GA4 & Server-Side Tracking', es: 'GA4 y Medición Server-Side' },
  { en: 'LATAM Market Expansion', es: 'Expansión al Mercado LATAM' },
  { en: 'E-commerce SEO', es: 'SEO E-commerce' },
  { en: 'Entity & Schema Optimization', es: 'Optimización de Entidades y Schema' },
];

// Featured case studies for the Results page module + Services "Read more".
export const caseStudies = [
  {
    slug: 'arm-global-seo', index: '01', channel: 'seo', client: 'Arm', video: 'arm',
    tag: { en: 'Global SEO & Analytics', es: 'SEO y Analítica Global' },
    title: { en: 'A global organic engine, built from a blank page', es: 'Un motor orgánico global, desde una página en blanco' },
    summary: {
      en: 'Arm had no SEO or analytics system behind its worldwide talent brand. I designed both from scratch, launched the careers stories hub, and turned organic search into a primary channel across 13 countries.',
      es: 'Arm no tenía sistema de SEO ni analítica detrás de su marca de talento global. Diseñé ambos desde cero, lancé el hub de historias de careers y convertí la búsqueda orgánica en un canal principal en 13 países.',
    },
    metrics: [
      { num: '+160%', label: { en: 'organic leads', es: 'leads orgánicos' } },
      { num: '+518%', label: { en: 'organic traffic', es: 'tráfico orgánico' } },
    ],
  },
  {
    slug: 'pib-insurance-ppc', index: '02', channel: 'ppc', client: 'PIB Insurance', video: 'pib',
    tag: { en: 'PPC & Paid Media', es: 'PPC y Medios Pagados' },
    title: { en: 'Cutting the cost of every new policyholder', es: 'Bajando el costo de cada nuevo asegurado' },
    summary: {
      en: 'PIB was pouring budget into paid search and measuring clicks, not policies. I rebuilt the account around profit, killed the waste, and made every pound trace back to a real customer.',
      es: 'PIB invertía en búsqueda pagada midiendo clics, no pólizas. Reconstruí la cuenta alrededor de la rentabilidad, eliminé el desperdicio y logré que cada libra se rastreara a un cliente real.',
    },
    metrics: [
      { num: '-63%', label: { en: 'cost per acquisition', es: 'costo por adquisición' } },
      { num: '2×', label: { en: 'qualified leads', es: 'leads calificados' } },
    ],
  },
  {
    slug: 'edu4u-email', index: '03', channel: 'email', client: 'Edu4u', video: 'edu4u',
    tag: { en: 'Lifecycle Email', es: 'Email de Ciclo de Vida' },
    title: { en: 'Turning curious students into enrolments', es: 'Convirtiendo estudiantes curiosos en inscripciones' },
    summary: {
      en: 'This student-recruitment startup captured plenty of interest and lost most of it to silence. I built the lifecycle email flows that nurtured prospects to enrolment, and it became the engine behind their growth.',
      es: 'Esta startup de captación de estudiantes generaba mucho interés y lo perdía en el silencio. Construí los flujos de email de ciclo de vida que llevaron a los prospectos hasta la inscripción, y se volvió el motor de su crecimiento.',
    },
    metrics: [
      { num: '8.4×', label: { en: 'return on email', es: 'retorno del email' } },
      { num: '11×', label: { en: 'revenue growth', es: 'crecimiento de ingresos' } },
    ],
  },
  {
    slug: 'orca-roofing-analytics', index: '04', channel: 'analytics', client: 'Orca Roofing', video: 'orca',
    tag: { en: 'Analytics & CRO', es: 'Analítica y CRO' },
    title: { en: 'From blind spend to a lead machine', es: 'De gastar a ciegas a una máquina de leads' },
    summary: {
      en: 'Orca was flying blind: broken tracking, no idea which marketing brought the calls. I fixed the data, built one clear dashboard, and reworked the site so more visitors turned into booked jobs.',
      es: 'Orca volaba a ciegas: medición rota y sin saber qué marketing traía las llamadas. Arreglé los datos, armé un dashboard claro y rehíce el sitio para que más visitantes se volvieran trabajos agendados.',
    },
    metrics: [
      { num: '+41%', label: { en: 'lead conversion', es: 'conversión de leads' } },
      { num: '-38%', label: { en: 'cost per lead', es: 'costo por lead' } },
    ],
  },
];

// Tool / stack showcase for the About page.
export const tools = [
  { icon: 'search', cat: { en: 'SEO & Content', es: 'SEO y Contenido' }, items: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Search Console', 'Moz', 'AccuRanker'] },
  { icon: 'sparkles', cat: { en: 'AI Search / GEO', es: 'Búsqueda IA / GEO' }, items: ['ChatGPT', 'Perplexity', 'Claude', 'Gemini', 'Profound', 'Otterly', 'AirOps', 'Jasper'] },
  { icon: 'target-arrow', cat: { en: 'Paid Media', es: 'Medios Pagados' }, items: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'Merchant Center'] },
  { icon: 'mail', cat: { en: 'Email & CRM', es: 'Email y CRM' }, items: ['Klaviyo', 'HubSpot', 'Mailchimp', 'Braze', 'Salesforce Marketing Cloud', 'Zoho', 'GoHighLevel'] },
  { icon: 'chart-histogram', cat: { en: 'Analytics & CRO', es: 'Analítica y CRO' }, items: ['GA4', 'Tag Manager', 'Looker Studio', 'Hotjar', 'Clarity'] },
  { icon: 'map-pin', cat: { en: 'Local & Reputation', es: 'Local y Reputación' }, items: ['BrightLocal', 'BirdEye', 'Yext'] },
  { icon: 'phone-call', cat: { en: 'Sales & Outbound', es: 'Ventas y Outbound' }, items: ['Clay', 'ZoomInfo', 'Apollo.io', 'Five9'] },
  { icon: 'palette', cat: { en: 'Creative & Web', es: 'Creatividad y Web' }, items: ['Canva', 'Adobe', 'Kive AI', 'WordPress', 'Webflow', 'Shopify'] },
  { icon: 'settings', cat: { en: 'Automation & Ops', es: 'Automatización y Ops' }, items: ['Zapier', 'Make', 'Airtable', 'Notion', 'Slack', 'Asana', 'Trello', 'ClickUp', 'Wrike', 'Google Sheets'] },
];

// How-it-works steps for the homepage "Process" section.
export const process = [
  { icon: 'phone', t: { en: 'Discovery call', es: 'Llamada inicial' }, d: { en: 'We talk through your goals, your numbers, and where growth feels stuck.', es: 'Hablamos de tus objetivos, tus números y dónde se estanca el crecimiento.' } },
  { icon: 'file-search', t: { en: 'Audit & onboarding', es: 'Auditoría y onboarding' }, d: { en: 'I dig into your accounts and data, then get set up with access and context.', es: 'Analizo tus cuentas y datos, y me pongo al día con accesos y contexto.' } },
  { icon: 'binoculars', t: { en: 'Competitive analysis', es: 'Análisis competitivo' }, d: { en: 'I map what your competitors are doing and find the lanes left wide open.', es: 'Mapeo qué hacen tus competidores y encuentro los espacios que dejan libres.' } },
  { icon: 'map-2', t: { en: 'Strategy', es: 'Estrategia' }, d: { en: 'You get a prioritized plan built around your biggest opportunities first.', es: 'Recibes un plan priorizado que ataca primero tus mayores oportunidades.' } },
  { icon: 'rocket', t: { en: 'Execution', es: 'Ejecución' }, d: { en: 'I do the work, hands-on, across your priority channels.', es: 'Hago el trabajo, sin intermediarios, en tus canales prioritarios.' } },
  { icon: 'chart-line', t: { en: 'Reporting & optimization', es: 'Reportes y optimización' }, d: { en: 'Clear reporting, then we double down on whatever is working.', es: 'Reportes claros, y luego reforzamos lo que está funcionando.' } },
];

// The single Calendly link used everywhere. Replace with Pablo's real link.
export const CALENDLY = 'https://calendly.com/pgarciacardone/30min';
export const EMAIL = 'pgarciacardone@gmail.com';
