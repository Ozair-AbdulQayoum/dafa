// src/Components/Main Page Data/CoverageData.js

export const provinces = [
  { id: "badakhshan", name: "Badakhshan", areasCleared: "—", dafaWork: true },
  { id: "badghis", name: "Badghis", areasCleared: "—", dafaWork: true },
  { id: "baghlan", name: "Baghlan", areasCleared: "—", dafaWork: true },
  { id: "balkh", name: "Balkh", areasCleared: "—", dafaWork: true },
  { id: "bamyan", name: "Bamyan", areasCleared: "—", dafaWork: true },
  { id: "daykundi", name: "Daykundi", areasCleared: "—", dafaWork: false },
  { id: "farah", name: "Farah", areasCleared: "—", dafaWork: true },
  { id: "faryab", name: "Faryab", areasCleared: "—", dafaWork: true },
  { id: "ghazni", name: "Ghazni", areasCleared: "—", dafaWork: true },
  { id: "ghor", name: "Ghor", areasCleared: "—", dafaWork: false },
  { id: "helmand", name: "Helmand", areasCleared: "—", dafaWork: true },
  { id: "herat", name: "Herat", areasCleared: "—", dafaWork: true },
  { id: "jowzjan", name: "Jowzjan", areasCleared: "—", dafaWork: true },
  { id: "kabul", name: "Kabul", areasCleared: "—", dafaWork: true },
  { id: "kandahar", name: "Kandahar", areasCleared: "—", dafaWork: true },
  { id: "kapisa", name: "Kapisa", areasCleared: "—", dafaWork: true },
  { id: "khost", name: "Khost", areasCleared: "—", dafaWork: true },
  { id: "kunar", name: "Kunar", areasCleared: "—", dafaWork: true },
  { id: "kunduz", name: "Kunduz", areasCleared: "—", dafaWork: true },
  { id: "laghman", name: "Laghman", areasCleared: "—", dafaWork: true },
  { id: "logar", name: "Logar", areasCleared: "—", dafaWork: true },
  { id: "nangarhar", name: "Nangarhar", areasCleared: "—", dafaWork: true },
  { id: "nimroz", name: "Nimroz", areasCleared: "—", dafaWork: true },
  { id: "nuristan", name: "Nuristan", areasCleared: "—", dafaWork: true },
  { id: "paktia", name: "Paktia", areasCleared: "—", dafaWork: true },
  { id: "paktika", name: "Paktika", areasCleared: "—", dafaWork: true },
  { id: "panjshir", name: "Panjshir", areasCleared: "—", dafaWork: true },
  { id: "parwan", name: "Parwan", areasCleared: "—", dafaWork: true },
  { id: "samangan", name: "Samangan", areasCleared: "—", dafaWork: true },
  { id: "sar-e-pol", name: "Sar-e Pol", areasCleared: "—", dafaWork: true },
  { id: "takhar", name: "Takhar", areasCleared: "—", dafaWork: true },
  { id: "uruzgan", name: "Uruzgan", areasCleared: "—", dafaWork: true },
  { id: "wardak", name: "Wardak", areasCleared: "—", dafaWork: true },
  { id: "zabul", name: "Zabul", areasCleared: "—", dafaWork: true },
];

export const coveredProvinces = 32;

export const getProvinceById = (id) =>
  provinces.find((province) => province.id === id);

export const normalizeProvinceName = (name = "") => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};
