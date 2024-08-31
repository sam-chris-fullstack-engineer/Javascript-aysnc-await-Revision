// async always returns a promise
// async function hi() {
//   return "Hello, There";
// }

// console.log(hi());

// hi().then((msg) => console.log(msg));

// let reach_A = new Promise((resolve, reject) => {
//   const reached = true;
//   if (reached) setTimeout(() => resolve("Mr.A Reached"), 3000);
//   else reject("Mr.A is not yet Reached");
// });

async function asyncstatus() {
  try {
    console.log("Hey, There");
    res = await reach_A;
    console.log(res);
    console.log("complete");
  } catch (error) {
    console.log(error);
  }
}

asyncstatus();

//Tatkal function using async
function tatkalBook(){
  return new Promise((resolve,reject) => {
      let bookingSuccess = true
      if (bookingSuccess)
          resolve(850)
      else   
          reject() 
  })
}

//async function (function expression)
const Booking_Deatail = async function (){
  try{
    first_Book = await tatkalBook();
    console.log(first_Book);
  }
  catch(error){
    console.log(error);
  }
}
Booking_Deatail()

// Another Example of using tosscoin function
function tossCoin(){
  return new Promise((resolve,reject)=>{
      //0-head(success) 1 -tail(failure)
      const rand = Math.floor(Math.random()*2)
      if(rand==0)
          resolve(1)
      else
          reject(0)
  })
}

//async function (function declaration)

async function CoinResult(){
    result = await tossCoin()
    console.log(result);
}
CoinResult()