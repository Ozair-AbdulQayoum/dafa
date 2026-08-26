const rawFundingData = [
  { year: 1990, amount: 850000 },
  { year: 1991, amount: 920000 },
  { year: 1992, amount: 780000 },
  { year: 1993, amount: 1100000 },
  { year: 1994, amount: 1250000 },
  { year: 1995, amount: 980000 },
  { year: 1996, amount: 1350000 },
  { year: 1997, amount: 1420000 },
  { year: 1998, amount: 1180000 },
  { year: 1999, amount: 1500000 },

  { year: 2000, amount: 1650000 },
  { year: 2001, amount: 1750000 },
  { year: 2002, amount: 2100000 },
  { year: 2003, amount: 2350000 },
  { year: 2004, amount: 2500000 },
  { year: 2005, amount: 2750000 },
  { year: 2006, amount: 3100000 },
  { year: 2007, amount: 3400000 },
  { year: 2008, amount: 3900000 },
  { year: 2009, amount: 1850000 },

  { year: 2010, amount: 3200000 },
  { year: 2011, amount: 3600000 },
  { year: 2012, amount: 3800000 },
  { year: 2013, amount: 4100000 },
  { year: 2014, amount: 4300000 },
  { year: 2015, amount: 4500000 },
  { year: 2016, amount: 4200000 },
  { year: 2017, amount: 3900000 },
  { year: 2018, amount: 3500000 },
  { year: 2019, amount: 3300000 },

  { year: 2020, amount: 3000000 },
  { year: 2021, amount: 2800000 },
  { year: 2022, amount: 3100000 },
  { year: 2023, amount: 3400000 },
  { year: 2024, amount: 3700000 },
  { year: 2025, amount: 4000000 },
  { year: 2026, amount: 4250000 },
];

const totalFunding = rawFundingData.reduce(
  (total, item) => total + item.amount,
  0,
);

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

export const fundingData = rawFundingData.map((item) => ({
  ...item,
  formattedAmount: formatCurrency(item.amount),
  percentage: ((item.amount / totalFunding) * 100).toFixed(2),
}));
