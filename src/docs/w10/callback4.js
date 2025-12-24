//Promise
const p = new Promise((resolve,reject)=>{
    //kick off some async work
    setTimeout(()=>{
        //resolve({id:1,name:"David"});
        reject (new Error('Something went wrong'));
    },2000);
});

p.then((user)=>{
    console.log('user data remote: id:${user.id}, name:${user.name}');
}).catch((err)=>{
    console.log('Error:',err);
});