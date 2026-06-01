function division(){
return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Dividing 10 by 2...")
        const div=10/2;
        resolve(div)
    },3000);
});
}

function divcheck(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Dividing 10 by 0..");
            const result=10/0;
            if(!isFinite(result)){
                reject("Division by zero is not allowed");
            }else{
                 resolve(result);
            }
        },3000)
    });
}
function calculate(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const a=30;
            const b=10;
            const res=a/b;
            resolve({a,b,res})
        },1000);
    });
}
division()
.then((div)=>{
    console.log("Result:",div);
    return divcheck();
})
.catch((err)=>{
    console.log("Error occured ",err);
    return calculate();
})
// .then((result)=>{
// console.log(result);
 
// })
 
.then((data)=>{
  console.log("Result",data.res);
})
.catch((err)=>{
    console.log(err);
})

