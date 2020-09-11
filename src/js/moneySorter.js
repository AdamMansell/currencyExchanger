export function moneySorter(usd, altCur, moneyArray) {
  let selectedCurrency;
  
  altCur == "AUD" ? selectedCurrency = moneyArray.AUD : selectedCurrency;
  altCur == "EUR" ? selectedCurrency = moneyArray.EUR : selectedCurrency;
  altCur == "AED" ? selectedCurrency = moneyArray.AED : selectedCurrency;
  altCur == "CAD" ? selectedCurrency = moneyArray.CAD : selectedCurrency;
  altCur == "HKD" ? selectedCurrency = moneyArray.HKD : selectedCurrency;
  altCur == "JPY" ? selectedCurrency = moneyArray.JPY : selectedCurrency;
  console.log(usd, altCur, moneyArray);
  let newAmount = parseFloat(usd * selectedCurrency);
  console.log(newAmount);
  return newAmount;
}
