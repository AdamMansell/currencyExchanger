// import { moneySorter } from "./js/moneySorter";
import "./css/styles.css";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

$(document).ready(function () {
  $("#getMoney").click(function () {
    event.preventDefault();
    let altCur = $("#altCur").val();
    let usd = $("#usdVal").val();
    console.log(usd);
    console.log(altCur);
  });
});
  
// console.log(usd);

// let altCur = $("#altCur").val();

// let promiseToRetrieveCurrencies = new Promise(function (resolve, reject) {
//   let request = new XMLHttpRequest();
//   const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//   request.onload = function () {
//     if (this.status === 200) {
//       resolve(request.response);
//     } else {
//       reject(request.response);
//     }
//   };
//   request.open("GET", url, true);
//   request.send();
// });
// promiseToRetrieveCurrencies.then(function (response) {
//   const allMoney = JSON.parse(response);
//   let moneyArray = allMoney.conversion_rates;
//   // console.log(moneyArray);
//   moneySorter(usd, altCur, moneyArray);
//   $(".showDist").text(`${moneySorter(moneyArray)}`);
// },
// function (error) {
//   const allMoney = JSON.parse(error);
//   // const astResponse = JSON.parse(error);
//   // console.log("hello");
//   $(".showDist").text(`error: ${allMoney.error_message}`);
// });
//   });
// });