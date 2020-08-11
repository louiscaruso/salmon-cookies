'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// function Shops(name, minCustomer, maxCustomer, avgCookieSale) {
//   this.name = name;
//   this.minCustomer = minCustomer;
//   this.maxCustomer = maxCustomer;
//   this.avgCookieSale = avgCookieSale;
// }
var seattle = new Shops ('Seattle', 23, 65, 6.3);


function Shops(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.sales = [];
  this.getRandomInteger = function (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  };
  this.salesData = function() {
    for(var i = 0; i < hours.length; i++){
      this.sales.push(Math.ceil(this.getRandomInteger(this.minCustomer, this.maxCustomer) * this.avgCookieSale));
    }
  };
  this.render = function() {
    this.salesData();
    var seattle = document.getElementById('seattle');
    for(var i =0; i < this.sales.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
      seattle.append(liEl);
    }
  };
}
seattle.render();
console.log(seattle);


// var tokyo = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   sales: [],
//   getRandomInteger: function (min, max){
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
//   salesData: function() {
//     for(var i = 0; i < hours.length; i++){
//       this.sales.push(Math.ceil(this.getRandomInteger(this.minCustomer, this.maxCustomer) * this.avgCookieSale));
//     }
//   },
//   render: function() {
//     this.salesData();
//     var tokyo = document.getElementById('tokyo');
//     for(var i =0; i < this.sales.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
//       tokyo.append(liEl);
//     }
//   }
// };
// tokyo.render();
// console.log(tokyo);

// var dubai = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,
//   sales: [],
//   getRandomInteger: function (min, max){
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
//   salesData: function() {
//     for(var i = 0; i < hours.length; i++){
//       this.sales.push(Math.ceil(this.getRandomInteger(this.minCustomer, this.maxCustomer) * this.avgCookieSale));
//     }
//   },
//   render: function() {
//     this.salesData();
//     var dubai = document.getElementById('dubai');
//     for(var i =0; i < this.sales.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
//       dubai.append(liEl);
//     }
//   }
// };
// dubai.render();
// console.log(dubai);

// var paris = {
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSale: 2.3,
//   sales: [],
//   getRandomInteger: function (min, max){
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
//   salesData: function() {
//     for(var i = 0; i < hours.length; i++){
//       this.sales.push(Math.ceil(this.getRandomInteger(this.minCustomer, this.maxCustomer) * this.avgCookieSale));
//     }
//   },
//   render: function() {
//     this.salesData();
//     var paris = document.getElementById('paris');
//     for(var i =0; i < this.sales.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
//       paris.append(liEl);
//     }
//   }
// };
// paris.render();
// console.log(paris);

// var lima = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   sales: [],
//   getRandomInteger: function (min, max){
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
//   salesData: function() {
//     for(var i = 0; i < hours.length; i++){
//       this.sales.push(Math.ceil(this.getRandomInteger(this.minCustomer, this.maxCustomer) * this.avgCookieSale));
//     }
//   },
//   render: function() {
//     this.salesData();
//     var lima = document.getElementById('lima');
//     for(var i =0; i < this.sales.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]} + ${this.sales[i]} cookies`;
//       lima.append(liEl);
//     }
//   }
// };
// lima.render();
// console.log(lima);


