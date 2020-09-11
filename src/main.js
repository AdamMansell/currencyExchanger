import { moneySorter } from "./js/moneySorter";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  let usd = $("#usdVal").val();
  let altCur = $("#altCur").val();

  $("#getMoney").click(function () {
    let promiseToRetrieveCurrencies = new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
    promiseToRetrieveCurrencies.then(function (response) {
      const allMoney = JSON.parse(response);
      let moneyArray = allMoney.conversion_rates;
      console.log(moneyArray);
      moneySorter(usd, altCur, moneyArray);
      $(".showDist").text(`${moneySorter(moneyArray)}`);
    },
    function (error) {
      const allMoney = JSON.parse(error);
      // const astResponse = JSON.parse(error);
      console.log("hello");
      $(".showDist").text(`error: ${allMoney.error_message}`);
    });
  });
});