// ************ don't change between here **********

function orderSupplies(item, callback) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
  
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        }
      };
  
      callback(warehouse[item]);
    }, deliveryTime);
  }
  
  // ************ and here **********


//   function receivedItem(item) {
//     console.log(`Received ${item.product}, time to ${item.directions() }`);
//   }

 function brushLast(item) {
    // console.log('calling brushFirst with item= ', item);
    if(item.product == 'Horsehair brush'){
        setTimeout(
            function() {
                // console.log('in brush Timeout');
                console.log(`Received ${item.product}, time to ${item.directions() }`);
            }, 
            3000);
    } else {
        console.log(`Received ${item.product}, time to ${item.directions() }`);
    }
}
    
//   orderSupplies('paint', receivedItem);
//   orderSupplies('brush', receivedItem);

  orderSupplies('paint', brushLast);
  orderSupplies('brush', brushLast);