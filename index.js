
console.log("Hello, World!");
// function sumofsum(){
//     console.log(sum(30+40)+sum(10,400))
// }
// sumofsum();
// function info(RollNo,name,college,branch){
//     return "RollNo:"+RollNo+"name:"+name+"college:"+collage+"branch:"+branch;
// }
// function myinfo(){
//   const mydata = info("43","pu","abes","cse")
//   const mydata = info("44","ak","abes","cse")
//   console.log(mydata);
//   console.log(mydata);
// }
// myinfo();
// function GenrateNumber(){
//     return Math.floor(Math.random()*1000);
// }
// const randomNumber = GenrateNumber();
// function findEvenNo(){
//     if(rendomNumber%2==0) console.log("EvenNo");
// }
// console.log(randomNumber);
// findEvenNo();

// const sum=(a,b)=>{
//     return a+b;

// }
// const result=sum(20,50);
//(()=>{console.log("Hey....using IIFE")})();
// function sum(a,b){
//     return a+b;

// }
// function sumWtihmsg(clbk,msg){
//     const result=clbk(20,40);
//     return msg+result;

// }
//  const s= sumWtihmsg(sum,"Hii...sum=");
// console.log(s);
// function login(msg,error){
//     if(error){
//     console.log("Erro");
// }
// else{
//     console.log(msg);
// }
// }
// function loginHandler(username,password,clbk){
//     const myUsername="ptomer40";
//     const myPassword="1234";
//     if(username==myUsername && password== myPassword){
//         clbk("success",null);
//     }else{
//         clbk(null,"username or pass is incorrect")
//     }
// }
// const s= loginHandler("ptomer40","1234",login);
// console.log(s)
//collback hell
//setTimeout(()=>{console.log("Hello")},100)
// setTimeout(() => {
//     console.log("One");

//     setTimeout(() => {
//         console.log("Two");

//         setTimeout(() => {
//             console.log("Three");

//             setTimeout(() => {
//                 console.log("Four");

//                 setTimeout(() => {
//                     console.log("Five");

//                     setTimeout(() => {
//                         console.log("Six");

//                         setTimeout(() => {
//                             console.log("Seven");

//                             setTimeout(() => {
//                                 console.log("Eight");

//                                 setTimeout(() => {
//                                     console.log("Nine");

//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
//onsole.log("one")
//setTimeout(()=>{console.log("two") }, 1000);
//console.log("three")

//function sum of sqrt(){ 
 //   return 30+30;
//}
//fuction s=sumofsqurite(){
  //  return Math.sqrt(sum());
//}
//consol.log(s);
//function sum of sqrt(leta,letb)
//{
 //   Math.sqrt(a);
   // Math.sum(b);
//}
//consol.log(sumofsqrt(25+35));


//function sum(a,b){
  //  return a+b;
//}

//function sumWithMsg(clbk,msg){
  //  const result=clbk(20,40);
    //return msg+result;
//}
//const s=sumWithMsg(sum,"Pramod kumar...sum=");
//console.log(s)

const myPromise=new Promise((resolve,reject)=>{
    let username="pramod40";
    let password="1234";
    if(username== "pramod40" && password=="1234"){
        resolve("succuss")

    }
    else{
     reject("Invalid user")
    }

})
//myPromise.then((msg)=>{
  //  console.log(msg)

//})
//.catch(msg=>{
   //console.log(msg)
//})
//.finally(()=>console.log("All resource has been closed"))

async function loginHandler(){
    try{
        const loginStatus=await myPromise;
        console.log(loginStatus)
    }catch(e){
        console.log(e)
    
    }finally{
        console.log("Closin all the open resources...")
    }
}
loginHandler();

