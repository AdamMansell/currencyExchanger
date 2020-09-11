import { moneySorter } from "./js/moneySorter";
import "./css/styles.css";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

$(document).ready(function () {
  $("#getMoney").click(function () {
    event.preventDefault();
    let altCur = $("#altCur").val();
    let usd = $("#usdVal").val();
    let promiseToRetrieveCurrencies = new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `httptest/USD`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
          console.log("hello");
        }
      };
      request.open("GET", url, true);
      request.send();
    });
    promiseToRetrieveCurrencies.then(function (response) {
      const allMoney = JSON.parse(response);
      let moneyArray = allMoney.conversion_rates;
      // console.log(moneyArray);
      let result = moneySorter(usd, altCur, moneyArray);
      $(".showDist").text(result);
    }).catch (function (error) {
      console.log(JSON.parse(error));
      const allMoney = JSON.parse(error);
      $(".showDist").text(`error: ${allMoney.error_message}`);
    });
  });
});