const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async op-1 from db");
        resolve([1,3]);
    },3000);
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async op-2 from API");
        resolve([2,4]);
    },2000);
});

//Promise.all():所有Promise都resolve後，才會進入then()
const time1 = new Date().getTime();
Promise.all([p1,p2])
.then((result)=>{   
    console.log('Results from all promises:',result);
    const time2 = new Date().getTime();
    console.log("Time taken in ms:",time2-time1);
});

//Promise.race():有一個Promise resolve後，便會進入then()
const time3 = new Date().getTime();
Promise.race([p1,p2]).then((result)=>{
    console.log("Promise.race result:",result);
    const time4 = new Date().getTime();
    console.log(`Total time: ${time4-time3}`);
});
