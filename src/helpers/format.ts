type Currency = "EUR";

const getCurrencyFormater = (currency: Currency) => {
  return Intl.NumberFormat("de-DE", { style: "currency", currency });
};

const getUserCurrency = (): Currency => {
  return "EUR";
};

export const formatCurrency = (value: number) => {
  const currency = getUserCurrency();
  const price = value || 0;
  return getCurrencyFormater(currency).format(price);
};
