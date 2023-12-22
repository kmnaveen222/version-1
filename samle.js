// var a=10;
// var b=20;
// function addtwodata(){
//     var c=a+b;
//     console.log(c);
// }
// addtwodata();

// var car={"nissan","audi",b}



function subs(success,error,complete){
    console.log("subscribe function starts here: ");
    success("hello how are you");
    error("error in the progm");
    complete("completed");
 
}
subs((data)=>console.log(data),err=>console.log(err),(comp)=>console.log(comp));