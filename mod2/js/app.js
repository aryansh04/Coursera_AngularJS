(function () {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buy = function (itemIndex){
      ShoppingListCheckOffService.buyItem(itemIndex);
    }


    toBuy.emptyMessage = function(){
      if(ShoppingListCheckOffService.IstoBuyItemsEmpty()){
          return "Everything is bought!"
      }
    }
}

function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
    alreadyBought.emptyMessage = function(){
      if(ShoppingListCheckOffService.IsBoughtItemsEmpty()){
          return "Nothing bought yet";
      }
    }
}

})();


function ShoppingListCheckOffService(){
  var service = this;

  //list of shopping items
  var toBuyitems = [{quantity: "10 packs", name : "chips"},
                    {quantity: "4 bottles", name : "coke"},
                    {quantity: "3 bags", name : "cookies"},
                    {quantity: "8 cubes", name : "cheese"},
                    {quantity: "12 packs", name : "popcorn"}];
  var boughtItems = [];

  service.buyItem = function(itemIndex){
    if(toBuyitems.length > 0){
      boughtItems.push(toBuyitems[itemIndex]);
      toBuyitems.splice(itemIndex,1);
    } else{
      throw new Error("Everything is bought!");
    }
  }

  service.getToBuyItems = function(){
    return toBuyitems;
  }

  service.getBoughtItems = function(){
    return boughtItems;
  }

  service.IstoBuyItemsEmpty = function(){
    return toBuyitems.length == 0;
  }

  service.IsBoughtItemsEmpty = function(){
    return boughtItems.length == 0;
  }

}
