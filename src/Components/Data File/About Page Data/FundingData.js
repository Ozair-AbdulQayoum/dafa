const rawFundingData = [
  { year: 1990, amount: 1070045.32 },
  { year: 1991, amount: 1658536.26 },
  { year: 1992, amount: 1849151.67 },
  { year: 1993, amount: 1880888.12 },
  { year: 1994, amount: 2285785.87 },
  { year: 1995, amount: 2332610.66 },
  { year: 1996, amount: 2046622 },
  { year: 1997, amount: 2198135.11 },
  { year: 1998, amount: 1874416.15 },
  { year: 1999, amount: 2507019.88 },
  { year: 2000, amount: 2225211.07 },
  { year: 2001, amount: 2032328.23 },
  { year: 2002, amount: 2696020 },
  { year: 2003, amount: 2696020 },
  { year: 2004, amount: 7054644.92 },
  { year: 2005, amount: 6827756 },
  { year: 2006, amount: 6145102 },
  { year: 2007, amount: 6182257.99 },
  { year: 2008, amount: 5994055 },
  { year: 2009, amount: 6349000 },
  { year: 2010, amount: 10866765 },
  { year: 2011, amount: 8031599 },
  { year: 2012, amount: 6755630 },
  { year: 2013, amount: 6595296 },
  { year: 2014, amount: 5556000 },
  { year: 2015, amount: 7305659 },
  { year: 2016, amount: 1690000 },
  { year: 2017, amount: 3709706 },
  { year: 2018, amount: 1551434 },
  { year: 2019, amount: 5167574.69 },
  { year: 2020, amount: 4713169.04 },
  { year: 2021, amount: 1926985 },
  { year: 2022, amount: 1506566.44 },
  { year: 2023, amount: 1217772.59 },
  { year: 2024, amount: 589825 },
  { year: 2025, amount: 1854544 },
  { year: 2026, amount: 558744 },
];

// =====================================================
// TOTAL FUNDING
// =====================================================

const totalFunding = rawFundingData.reduce(
  (total, item) => total + item.amount,
  0,
);

// =====================================================
// FULL USD FORMAT
// Example: 1217772.59 → $1,217,772.59
// =====================================================

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

// =====================================================
// FINAL FUNDING DATA
// =====================================================

export const fundingData = rawFundingData.map((item) => ({
  ...item,

  // Full amount
  formattedAmount: formatCurrency(item.amount),

  // Percentage of total funding
  percentage: ((item.amount / totalFunding) * 100).toFixed(2),
}));

// =====================================================
// OPTIONAL EXPORTS
// =====================================================

export { rawFundingData, totalFunding, formatCurrency };
