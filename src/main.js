// import { moneySorter } from "./js/moneySorter";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  $("#").click(function () {

    let promise = new Promise(function (resolve, reject) {
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

    promise.then(function (response) {
      const allMoney = JSON.parse(response);
      let moneyArray = allMoney.conversion_rates;
      console.log(moneyArray);
      // moneySorter(moneyArray);
  
      // $(".showDist").text(`${moneySorter(moneyArray)}`);
    });
    // function(error) {
    //   const astResponse = JSON.parse(error);
    //   console.log(astResponse);
    //   $(".showDist").text(`error: ${allMoney.error_message}`);
    // });

  });
});