(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;
  tobuy.items = ShoppingListCheckOffService.getItems();
  tobuy.switchItem = function(itemIndex) {
    ShoppingListCheckOffService.switchItem(itemIndex);
  }
  tobuy.isEmpty = function() {
    return tobuy.items.length === 0 ? true : false;
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
  bought.isEmpty = function() {
    return bought.items.length !== 0 ? false : true;
  }
}

//Service
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [
                {
                  name: "Caffè Americano", 
                  quantity: "5"
                },
                {
                  name: "Caffè Latte", 
                  quantity: "10"
                }, 
                {
                  name: "Caramel Macchiato", 
                  quantity: "3"
                }, 
                {
                  name: "Espresso Con Panna", 
                  quantity: "6"
                }, 
                {
                  name: "Iced Coconut Milk Mocha Macchiato", 
                  quantity: "1"
                },
                {
                  name: "White Chocolate Mocha", 
                  quantity: "2"
                }
              ];

  var bitems = [];

  service.switchItem = function (itemIdex) {
    bitems.push(items[itemIdex]);
    items.splice(itemIdex, 1);
  }

  service.getItems = function () {
    return items;
  }

  service.getBoughtItems = function () {
    return bitems;
  }
}

})();