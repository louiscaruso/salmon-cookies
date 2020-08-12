'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeLocations = [];


function Shop(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.sales = [];
  this.dailyTotal = 0;
}
var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var paris = new Shop('Paris', 20, 38, 2.3);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var lima = new Shop('Lima', 2, 16, 4.6);
storeLocations.push(seattle, tokyo, paris, dubai, lima);

Shop.prototype.getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

Shop.prototype.salesData = function () {
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = Math.ceil(this.getRandomInteger(this.minCustomer, this.maxCustomer) * this.avgCookieSale);
    this.sales.push(hourlyTotal);
    this.dailyTotal += hourlyTotal;
  }
};

//tablestuff
var tableBody = document.getElementById('shop');

function renderHeader() {
  var headerRow = document.createElement('tr');
  var headerStore = document.createElement('th');
  headerStore.textContent = 'Locations';
  headerRow.appendChild(headerStore);
  tableBody.appendChild(headerRow);

  for (var i = 0; i < hours.length; i++) {
    var headerHours = document.createElement('th');
    headerHours.textContent = hours[i];
    headerRow.appendChild(headerHours);
  }
}

Shop.prototype.renderBody = function () {
  var bodyRow = document.createElement('tr');
  tableBody.appendChild(bodyRow);
  var bodyStore = document.createElement('td');
  bodyStore.textContent = this.name;
  bodyRow.appendChild(bodyStore);
  for (var i = 0; i < hours.length; i++) {
    var bodyHours = document.createElement('td');
    bodyHours.textContent = this.sales[i];
    bodyRow.appendChild(bodyHours);
  }
};


function render() {
  tableBody.innerHtml = null;
  renderHeader();
  for (var i = 0; i < storeLocations.length;) {
    console.log(storeLocations[i]);
  }
}
render();

