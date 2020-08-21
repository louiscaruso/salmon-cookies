'use strict';

var container = document.getElementById('container');
var table = document.getElementById('shop');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeLocations = [];
new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);
new Shop('Dubai', 11, 38, 3.7);
var allHourlyTotalsArr = [];
var totalGrand = 0;

function Shop(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.sales = [];
  this.dailyTotal = 0;
  storeLocations.push(this);
}

//even handler:
// function handleClick(event) {
//   if (event.target.id === 'container') {
//     var pEL = document.createElement('p');
//     parentEl.append(pEL);
//   }
// }

//define event handler
function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var minCustomer = event.target.mincustomer.value;
  var maxCustomer = event.target.maxcustomer.value;
  var avgCookieSale = event.target.avgcookiesale.value;
  //new stores
  new Shop(name, minCustomer, maxCustomer, avgCookieSale);
  //render new store
  //clear out all ext stores
  table.innerHTML = '';
  console.log(table.innerHTML);
  allHourlyTotalsArr = [];
  totalGrand = 0;
  //call functions again
  // make sure totals are correct
  renderHead();
  renderAll();
  renderFooter();
}

Shop.prototype.getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
Shop.prototype.salesData = function () {
  var hourlyTotal = 0;
  this.sales = [];
  this.dailyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = (Math.ceil(this.getRandomInteger(this.minCustomer, this.maxCustomer) * this.avgCookieSale));
    this.sales.push(hourlyTotal);
    // allHourlyTotalsArr[i] += hourlyTotal;
    this.dailyTotal += hourlyTotal;
    // totalGrand += hourlyTotal;
  }
};
Shop.prototype.render = function () {
  this.salesData();
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
  for (var i = 0; i < this.sales.length; i++) {
    var tableSales = document.createElement('td');
    tableSales.textContent = this.sales[i];
    tableRow.appendChild(tableSales);
  }
  var tableTotal = document.createElement('td');
  tableTotal.textContent = this.dailyTotal;
  tableRow.appendChild(tableTotal);

};

function calcTotal() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < storeLocations.length; j++) {
      hourlyTotal += storeLocations[j].sales[i];
    }
    totalGrand += hourlyTotal;
    allHourlyTotalsArr[i] = hourlyTotal;
  }
}

function renderHead() {
  var headRow = document.createElement('tr');
  var headStore = document.createElement('th');
  headStore.textContent = 'Store Locations';
  headRow.appendChild(headStore);
  table.appendChild(headRow);
  for (var i = 0; i < hours.length; i++) {
    var headHours = document.createElement('th');
    headHours.textContent = hours[i];
    headRow.appendChild(headHours);
  }
  var headTotal = document.createElement('th');
  headTotal.textContent = 'Location Total';
  headRow.appendChild(headTotal);
}

function renderFooter() {
  calcTotal();
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = 'Total';
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
  for (var i = 0; i < allHourlyTotalsArr.length; i++) {
    var tableSales = document.createElement('td');
    tableSales.textContent = allHourlyTotalsArr[i];
    tableRow.appendChild(tableSales);
  }
  var tableTotal = document.createElement('td');
  tableTotal.textContent = totalGrand;
  tableRow.appendChild(tableTotal);

}
function renderAll() {
  for (var i = 0; i < storeLocations.length; i++) {
    storeLocations[i].render();
  }

}

renderHead();
renderAll();
renderFooter();



container.addEventListener('submit', handleSubmit);
// parentEl.addEventListener('click', handleClick);
