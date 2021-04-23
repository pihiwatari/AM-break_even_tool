//get input data from the form
const $tooling = document.querySelector("#tooling-cost");
const $injection = document.querySelector("#injection-cost");
const $mjf = document.querySelector("#mjf-cost");
const $injectedParts = document.querySelector("#qty-period");

//define tooling cost
let toolingCost = 50000; //hardcoded value for testing

//define injection cost
let injectionCost = 1.91; //hardcoded value for testing

//define mjf cost
let mjfCost = 77.91; //hardcoded value for testing

//define injection parts per period
let partPerPeriod = 1000; //hardcoded value for testing

//define range of time (period)
let range = 24; //hardcoded value fo testing

//create an array from the range (period of time to evaluate)
function rangeList(range) {
  let rangeList = [];
  for (let i = 1; i < range + 1; i++) {
    rangeList.push(i);
  }
  return rangeList;
}

//increase injected part qty by the amount of periods (injected parts * period)
function injectedPartsOverTime(range, injectedParts) {
  return rangeList(range).map((period) => period * injectedParts);
}

//calculate injection cost: ((tooling cost / injected parts) + injection cost)

//injection molding chart
function breakEvenChart(ctx) {
  //we create a new chart object
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      //x axis markers (part qty)
      labels: rangeList(range),
      datasets: [
        {
          //y axis data (price per parts)
          data: [10, 20, 30, 40, 40, 10, 5, 3],
        },
      ],
    },
    options: {},
  });
}

//function to render any chart needed
function renderCharts() {
  const ctx = document.querySelector("#chart").getContext("2d");
  breakEvenChart(ctx);
}

//chart rendering
renderCharts();
