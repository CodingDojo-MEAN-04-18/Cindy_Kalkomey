//simulated really slow DB call.
function getStuffFromDatabase(callback){
  var data;
  var myTimer = setTimeout(function(){
    if (typeof(callback) == 'function'){
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      callback(data);
    }
  }, 10000);
  return data;
}    
// ************CHANGES HERE **************
function requestDataFromDatabase(){
  var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  console.log(data, "Synchronous");
}
//***************** END CHANGES **********************
function catchFly(){
  console.log('I just caught a fly!');
}
requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.
 
// =======================================================


// Promises and Callbacks allow us to make sure that we have our data before moving on. A promise says to the interpreter: “I promise to give you data back, so you can move on with your code.” (Just like your friends promise to pay you back!). This is what we had done with our callback above. A number of libraries exist to make promises in ES5 (q is a popular one), but in ES6 they added promises to the core language
// A promise listens for resolve, and reject, and ends the promise after one of these methods runs. In the code below, find resolve and reject in the getStuffFromDatabase function.
// In the requestDataFromDatabase, identify the promise and .then (fires with resolve), and .catch (fires with reject).

function getStuffFromDatabase(resolve,reject){
    var data = "whee"
    setTimeout(function(){
      // if (typeof(callback) == 'function'){
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        resolve(data);
      // }
    }, 1000);
    //reject(); comment this line in and out!
    // return data;
}
function requestDataFromDatabase(){
  console.log('running');
  //creates promise
  var data = new Promise(function(resolve,reject){
    getStuffFromDatabase(resolve,reject); // kind of like a shiny callback
  });
  // if promise is successful (keeps me from putting all the logic in the callback)
  data.then(function(data){
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  data.catch(function(){
    console.log('failure');
  })
  console.log('end');
}
requestDataFromDatabase();