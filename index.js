// async always returns a promise
// async function hi() {
//   return "Hello, There";
// }

// console.log(hi());

// hi().then((msg) => console.log(msg));

let reach_A = new Promise((resolve, reject) => {
  const reached = true;
  if (reached) setTimeout(() => resolve("Mr.A Reached"), 3000);
  else reject("Mr.A is not yet Reached");
});

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
