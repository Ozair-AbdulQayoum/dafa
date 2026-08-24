// src/Components/Main Page Data/CoverageData.js

export const provinces = [
  {
    id: "badakhshan",
    name: "Badakhshan",
    areasCleared: "8.2M m²",
    dafaWork: true,
  },
  { id: "badghis", name: "Badghis", areasCleared: "7.6M m²", dafaWork: true },
  { id: "baghlan", name: "Baghlan", areasCleared: "11.4M m²", dafaWork: true },
  { id: "balkh", name: "Balkh", areasCleared: "13.8M m²", dafaWork: true },
  { id: "bamyan", name: "Bamyan", areasCleared: "5.1M m²", dafaWork: true },

  // No DAFA coverage
  { id: "daykundi", name: "Daykundi", areasCleared: "—", dafaWork: false },

  { id: "farah", name: "Farah", areasCleared: "10.3M m²", dafaWork: true },
  { id: "faryab", name: "Faryab", areasCleared: "9.7M m²", dafaWork: true },
  { id: "ghazni", name: "Ghazni", areasCleared: "12.1M m²", dafaWork: true },

  // No DAFA coverage
  { id: "ghor", name: "Ghor", areasCleared: "—", dafaWork: false },

  { id: "helmand", name: "Helmand", areasCleared: "21.6M m²", dafaWork: true },
  { id: "herat", name: "Herat", areasCleared: "18.9M m²", dafaWork: true },
  { id: "jowzjan", name: "Jowzjan", areasCleared: "6.8M m²", dafaWork: true },
  { id: "kabul", name: "Kabul", areasCleared: "7.4M m²", dafaWork: true },
  {
    id: "kandahar",
    name: "Kandahar",
    areasCleared: "19.5M m²",
    dafaWork: true,
  },
  { id: "kapisa", name: "Kapisa", areasCleared: "3.2M m²", dafaWork: true },
  { id: "khost", name: "Khost", areasCleared: "8.6M m²", dafaWork: true },
  { id: "kunar", name: "Kunar", areasCleared: "7.1M m²", dafaWork: true },
  { id: "kunduz", name: "Kunduz", areasCleared: "10.8M m²", dafaWork: true },
  { id: "laghman", name: "Laghman", areasCleared: "5.9M m²", dafaWork: true },
  { id: "logar", name: "Logar", areasCleared: "4.7M m²", dafaWork: true },
  {
    id: "nangarhar",
    name: "Nangarhar",
    areasCleared: "16.2M m²",
    dafaWork: true,
  },
  { id: "nimroz", name: "Nimroz", areasCleared: "9.1M m²", dafaWork: true },
  { id: "nuristan", name: "Nuristan", areasCleared: "2.8M m²", dafaWork: true },
  { id: "paktia", name: "Paktia", areasCleared: "8.9M m²", dafaWork: true },
  { id: "paktika", name: "Paktika", areasCleared: "10.7M m²", dafaWork: true },
  { id: "panjshir", name: "Panjshir", areasCleared: "2.1M m²", dafaWork: true },
  { id: "parwan", name: "Parwan", areasCleared: "4.5M m²", dafaWork: true },
  { id: "samangan", name: "Samangan", areasCleared: "6.3M m²", dafaWork: true },
  {
    id: "sar-e-pol",
    name: "Sar-e Pol",
    areasCleared: "7.9M m²",
    dafaWork: true,
  },
  { id: "takhar", name: "Takhar", areasCleared: "9.4M m²", dafaWork: true },
  { id: "uruzgan", name: "Uruzgan", areasCleared: "8.1M m²", dafaWork: true },
  { id: "wardak", name: "Wardak", areasCleared: "6.7M m²", dafaWork: true },
  { id: "zabul", name: "Zabul", areasCleared: "8.8M m²", dafaWork: true },
];

// ---------------------------------------------------------
// Normalize names
// ---------------------------------------------------------

export const normalizeProvinceName = (name = "") => {
  return name
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[’']/g, "")
    .replace(/province/g, "")
    .replace(/wilayat/g, "")
    .replace(/ ولایت/g, "")
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ");
};

// ---------------------------------------------------------
// Province aliases
// This makes different GeoJSON spellings work.
// ---------------------------------------------------------

const provinceAliases = {
  daykundi: "daykundi",
  daikundi: "daykundi",
  "day kandi": "daykundi",
  daikondi: "daykundi",

  ghor: "ghor",
  gour: "ghor",

  jowzjan: "jowzjan",
  jawzjan: "jowzjan",
  jawzjan: "jowzjan",

  helmand: "helmand",
  hilmand: "helmand",

  kandahar: "kandahar",
  kandhar: "kandahar",

  kunar: "kunar",
  kunarha: "kunar",

  panjshir: "panjshir",
  panjsher: "panjshir",

  parwan: "parwan",
  parvan: "parwan",

  takhar: "takhar",
  takhār: "takhar",

  uruzgan: "uruzgan",
  "u ruzgan": "uruzgan",
  oruzgan: "uruzgan",

  wardak: "wardak",
  "maidan wardak": "wardak",
};

// ---------------------------------------------------------
// Get province by ID
// ---------------------------------------------------------

export const getProvinceById = (id) => {
  return provinces.find((province) => province.id === id);
};

// ---------------------------------------------------------
// Find province from GeoJSON name
// ---------------------------------------------------------

export const getProvinceFromGeoJSON = (name) => {
  const normalized = normalizeProvinceName(name);

  const alias = provinceAliases[normalized] || normalized;

  return provinces.find(
    (province) =>
      province.id === alias || normalizeProvinceName(province.name) === alias,
  );
};

// ---------------------------------------------------------
// DAFA covered provinces
// ---------------------------------------------------------

export const coveredProvinces = provinces.filter(
  (province) => province.dafaWork,
).length;
