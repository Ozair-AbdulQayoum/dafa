// src/Components/Main Page Data/CoverageData.js

// =========================================================
// PROVINCES
// =========================================================

export const provinces = [
  {
    id: "badakhshan",
    name: "Badakhshan",
    areasCleared: "8.2M m²",
    dafaWork: true,
  },
  {
    id: "badghis",
    name: "Badghis",
    areasCleared: "7.6M m²",
    dafaWork: true,
  },
  {
    id: "baghlan",
    name: "Baghlan",
    areasCleared: "11.4M m²",
    dafaWork: true,
  },
  {
    id: "balkh",
    name: "Balkh",
    areasCleared: "13.8M m²",
    dafaWork: true,
  },
  {
    id: "bamyan",
    name: "Bamyan",
    areasCleared: "5.1M m²",
    dafaWork: true,
  },

  {
    id: "daykundi",
    name: "Daykundi",
    areasCleared: "—",
    dafaWork: false,
  },

  {
    id: "farah",
    name: "Farah",
    areasCleared: "10.3M m²",
    dafaWork: true,
  },
  {
    id: "faryab",
    name: "Faryab",
    areasCleared: "9.7M m²",
    dafaWork: true,
  },
  {
    id: "ghazni",
    name: "Ghazni",
    areasCleared: "12.1M m²",
    dafaWork: true,
  },

  {
    id: "ghor",
    name: "Ghor",
    areasCleared: "—",
    dafaWork: false,
  },

  {
    id: "helmand",
    name: "Helmand",
    areasCleared: "21.6M m²",
    dafaWork: true,
  },

  // HERAT
  {
    id: "herat",
    name: "Herat",
    areasCleared: "18.9M m²",
    dafaWork: true,
  },

  {
    id: "jowzjan",
    name: "Jowzjan",
    areasCleared: "6.8M m²",
    dafaWork: true,
  },
  {
    id: "kabul",
    name: "Kabul",
    areasCleared: "7.4M m²",
    dafaWork: true,
  },
  {
    id: "kandahar",
    name: "Kandahar",
    areasCleared: "19.5M m²",
    dafaWork: true,
  },
  {
    id: "kapisa",
    name: "Kapisa",
    areasCleared: "3.2M m²",
    dafaWork: true,
  },
  {
    id: "khost",
    name: "Khost",
    areasCleared: "8.6M m²",
    dafaWork: true,
  },
  {
    id: "kunar",
    name: "Kunar",
    areasCleared: "7.1M m²",
    dafaWork: true,
  },
  {
    id: "kunduz",
    name: "Kunduz",
    areasCleared: "10.8M m²",
    dafaWork: true,
  },
  {
    id: "laghman",
    name: "Laghman",
    areasCleared: "5.9M m²",
    dafaWork: true,
  },
  {
    id: "logar",
    name: "Logar",
    areasCleared: "4.7M m²",
    dafaWork: true,
  },
  {
    id: "nangarhar",
    name: "Nangarhar",
    areasCleared: "16.2M m²",
    dafaWork: true,
  },
  {
    id: "nimroz",
    name: "Nimroz",
    areasCleared: "9.1M m²",
    dafaWork: true,
  },
  {
    id: "nuristan",
    name: "Nuristan",
    areasCleared: "2.8M m²",
    dafaWork: true,
  },
  {
    id: "paktia",
    name: "Paktia",
    areasCleared: "8.9M m²",
    dafaWork: true,
  },
  {
    id: "paktika",
    name: "Paktika",
    areasCleared: "10.7M m²",
    dafaWork: true,
  },
  {
    id: "panjshir",
    name: "Panjshir",
    areasCleared: "2.1M m²",
    dafaWork: true,
  },
  {
    id: "parwan",
    name: "Parwan",
    areasCleared: "4.5M m²",
    dafaWork: true,
  },
  {
    id: "samangan",
    name: "Samangan",
    areasCleared: "6.3M m²",
    dafaWork: true,
  },

  // SAR-E-PUL
  {
    id: "sar-e-pol",
    name: "Sar-e Pol",
    areasCleared: "7.9M m²",
    dafaWork: true,
  },

  {
    id: "takhar",
    name: "Takhar",
    areasCleared: "9.4M m²",
    dafaWork: true,
  },
  {
    id: "uruzgan",
    name: "Uruzgan",
    areasCleared: "8.1M m²",
    dafaWork: true,
  },

  // MAIDAN WARDAK
  {
    id: "wardak",
    name: "Maidan Wardak",
    areasCleared: "6.7M m²",
    dafaWork: true,
  },

  {
    id: "zabul",
    name: "Zabul",
    areasCleared: "8.8M m²",
    dafaWork: true,
  },
];

// =========================================================
// NORMALIZE PROVINCE NAME
// =========================================================

export const normalizeProvinceName = (name = "") => {
  return name
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’'`]/g, "")
    .replace(/province/g, "")
    .replace(/wilayat/g, "")
    .replace(/ ولایت/g, "")
    .replace(/[-_]/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
};

// =========================================================
// CREATE COMPACT NAME
// =========================================================

const compactProvinceName = (name = "") => {
  return normalizeProvinceName(name).replace(/\s+/g, "");
};

// =========================================================
// PROVINCE ALIASES
// =========================================================

const provinceAliases = {
  // -----------------------------
  // Badakhshan
  // -----------------------------
  badakhshan: "badakhshan",
  badakshan: "badakhshan",
  badahkshan: "badakhshan",

  // -----------------------------
  // Badghis
  // -----------------------------
  badghis: "badghis",
  badgis: "badghis",

  // -----------------------------
  // Baghlan
  // -----------------------------
  baghlan: "baghlan",
  baglan: "baghlan",

  // -----------------------------
  // Balkh
  // -----------------------------
  balkh: "balkh",
  balخ: "balkh",

  // -----------------------------
  // Bamyan
  // -----------------------------
  bamyan: "bamyan",
  bamian: "bamyan",
  bamiyan: "bamyan",

  // -----------------------------
  // Daykundi
  // -----------------------------
  daykundi: "daykundi",
  daikundi: "daykundi",
  daikondi: "daykundi",
  daykandi: "daykundi",
  "day kandi": "daykundi",
  "daik kandi": "daykundi",

  // -----------------------------
  // Farah
  // -----------------------------
  farah: "farah",

  // -----------------------------
  // Faryab
  // -----------------------------
  faryab: "faryab",
  fariab: "faryab",

  // -----------------------------
  // Ghazni
  // -----------------------------
  ghazni: "ghazni",
  ghazna: "ghazni",

  // -----------------------------
  // Ghor
  // -----------------------------
  ghor: "ghor",
  gour: "ghor",
  ghur: "ghor",

  // -----------------------------
  // Helmand
  // -----------------------------
  helmand: "helmand",
  hilmand: "helmand",
  helmnd: "helmand",

  // =====================================================
  // HERAT - IMPORTANT
  // =====================================================

  herat: "herat",
  hirat: "herat",
  herāt: "herat",
  hirāt: "herat",
  heratprovince: "herat",
  hiratprovince: "herat",
  heratwilayat: "herat",
  hiratwilayat: "herat",

  // -----------------------------
  // Jowzjan
  // -----------------------------
  jowzjan: "jowzjan",
  jawzjan: "jowzjan",
  jozjan: "jowzjan",
  jawzjān: "jowzjan",

  // -----------------------------
  // Kabul
  // -----------------------------
  kabul: "kabul",

  // -----------------------------
  // Kandahar
  // -----------------------------
  kandahar: "kandahar",
  kandhar: "kandahar",
  qandahar: "kandahar",

  // -----------------------------
  // Kapisa
  // -----------------------------
  kapisa: "kapisa",

  // -----------------------------
  // Khost
  // -----------------------------
  khost: "khost",

  // -----------------------------
  // Kunar
  // -----------------------------
  kunar: "kunar",
  kunarha: "kunar",
  konar: "kunar",

  // -----------------------------
  // Kunduz
  // -----------------------------
  kunduz: "kunduz",
  qunduz: "kunduz",

  // -----------------------------
  // Laghman
  // -----------------------------
  laghman: "laghman",
  lagman: "laghman",

  // -----------------------------
  // Logar
  // -----------------------------
  logar: "logar",
  loghar: "logar",

  // -----------------------------
  // Nangarhar
  // -----------------------------
  nangarhar: "nangarhar",
  nangrahar: "nangarhar",

  // -----------------------------
  // Nimroz
  // -----------------------------
  nimroz: "nimroz",
  nimruz: "nimroz",

  // -----------------------------
  // Nuristan
  // -----------------------------
  nuristan: "nuristan",
  nooristan: "nuristan",

  // -----------------------------
  // Paktia
  // -----------------------------
  paktia: "paktia",
  paktya: "paktia",
  paktiya: "paktia",
  paktyah: "paktia",

  // -----------------------------
  // Paktika
  // -----------------------------
  paktika: "paktika",
  paktyka: "paktika",
  paktiqa: "paktika",

  // -----------------------------
  // Panjshir
  // -----------------------------
  panjshir: "panjshir",
  panjsher: "panjshir",
  panjsheer: "panjshir",

  // -----------------------------
  // Parwan
  // -----------------------------
  parwan: "parwan",
  parvan: "parwan",

  // -----------------------------
  // Samangan
  // -----------------------------
  samangan: "samangan",
  samangān: "samangan",

  // =====================================================
  // SAR-E-PUL - IMPORTANT
  // =====================================================

  "sar e pol": "sar-e-pol",
  "sar e pul": "sar-e-pol",
  "sar pol": "sar-e-pol",
  "sar pul": "sar-e-pol",
  "sar i pol": "sar-e-pol",
  "sar i pul": "sar-e-pol",
  "sar e poul": "sar-e-pol",
  "sar e pool": "sar-e-pol",

  sarepol: "sar-e-pol",
  sarepul: "sar-e-pol",
  sarpol: "sar-e-pol",
  sarpul: "sar-e-pol",
  saripol: "sar-e-pol",
  saripul: "sar-e-pol",
  saripoul: "sar-e-pol",
  saripool: "sar-e-pol",

  "sar e pol province": "sar-e-pol",
  "sar e pul province": "sar-e-pol",

  // -----------------------------
  // Takhar
  // -----------------------------
  takhar: "takhar",
  takhār: "takhar",

  // -----------------------------
  // Uruzgan
  // -----------------------------
  uruzgan: "uruzgan",
  oruzgan: "uruzgan",
  urzgan: "uruzgan",

  // -----------------------------
  // Wardak
  // -----------------------------
  wardak: "wardak",
  maidanwardak: "wardak",
  "maidan wardak": "wardak",
  maidan: "wardak",

  // -----------------------------
  // Zabul
  // -----------------------------
  zabul: "zabul",
};

// =========================================================
// GET PROVINCE BY ID
// =========================================================

export const getProvinceById = (id) => {
  return provinces.find((province) => province.id === id);
};

// =========================================================
// GET PROVINCE FROM GEOJSON NAME
// =========================================================

export const getProvinceFromGeoJSON = (name = "") => {
  const normalized = normalizeProvinceName(name);
  const compact = compactProvinceName(name);

  // =====================================================
  // HERAT - HARD MATCH
  // =====================================================

  if (
    compact === "herat" ||
    compact === "hirat" ||
    compact.includes("herat") ||
    compact.includes("hirat")
  ) {
    return getProvinceById("herat");
  }

  // =====================================================
  // SAR-E-PUL - HARD MATCH
  // =====================================================

  if (
    compact === "sarepol" ||
    compact === "sarepul" ||
    compact === "sarpol" ||
    compact === "sarpul" ||
    compact === "saripol" ||
    compact === "saripul" ||
    compact.includes("sarepol") ||
    compact.includes("sarepul") ||
    compact.includes("saripol") ||
    compact.includes("saripul")
  ) {
    return getProvinceById("sar-e-pol");
  }

  // =====================================================
  // WARDAK - HARD MATCH
  // =====================================================

  if (
    compact === "wardak" ||
    compact === "maidanwardak" ||
    compact.includes("wardak")
  ) {
    return getProvinceById("wardak");
  }

  // =====================================================
  // ALIAS MATCH
  // =====================================================

  const alias = provinceAliases[normalized] || provinceAliases[compact];

  if (alias) {
    return getProvinceById(alias);
  }

  // =====================================================
  // NORMAL ID MATCH
  // =====================================================

  const directMatch = provinces.find(
    (province) => normalizeProvinceName(province.id) === normalized,
  );

  if (directMatch) {
    return directMatch;
  }

  // =====================================================
  // DISPLAY NAME MATCH
  // =====================================================

  const nameMatch = provinces.find(
    (province) => normalizeProvinceName(province.name) === normalized,
  );

  if (nameMatch) {
    return nameMatch;
  }

  return null;
};

// =========================================================
// COVERED PROVINCES
// =========================================================

export const coveredProvinces = provinces.filter(
  (province) => province.dafaWork,
).length;
