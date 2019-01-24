import config from '../config';
const url = config.ip;

export default {
  DataDefault() {
    return fetch(url + '/latest?symbols=IDR,EUR,GBP,SGD,CAD,CHF,INR,MYR,JPY,KRW,USD&base=USD').then(
      (res) => res.json()
    );
  },
  Add(currency){
    return fetch(url + '/latest?symbols=' + currency +'&base=USD').then(
      (res) => {
        if (res.status === 200) {
          return res.json();
        }else{
          return res;
        }
      }
    );
  },
  country(e){
    var list = {
      "PHP": "Philippines Peso",
      "HUF": "Hungary Forint",
      "IDR": "Indonesia Rupiah",
      "TRY": "Turkey Lira",
      "RON": "Romania Leu",
      "ISK": "Iceland Krona",
      "ILS": "Israel Shekel",
      "CNY": "China Yuan Renminbi",
      "USD": "United States Dollar",
      "EUR": "Euro Member Countries",
      "PLN": "Poland Zloty",
      "GBP": "British Pound",
      "CAD": "Canada Dollar",
      "AUD": "Australia Dollar",
      "MYR": "Malaysia Ringgit",
      "NZD": "New Zealand Dollar",
      "CHF": "Switzerland Franc",
      "HRK": "Croatia Kuna",
      "SGD": "Singapore Dollar",
      "DKK": "Denmark Krone",
      "BGN": "",
      "CZK": "Czech Republic Koruna",
      "BRL": "",
      "JPY": "Japan Yen",
      "KRW": "Korea (South) Won",
      "INR": "Indian Rupee",
      "SEK": "Sweden Krona",
      "MXN": "Mexico Peso",
      "RUB": "Russia Ruble",
      "HKD": "Hong Kong Dollar",
      "ZAR": "South Africa Rand",
      "THB": "Thailand Baht",
      "NOK": "Norway Krone",
    }
    return list[e];
    

  },




}

