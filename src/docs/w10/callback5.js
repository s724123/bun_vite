console.log("before");
const getRepos = (username)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Get repos of user: ${username} from github');
            resolve (['repo1','repo2','repo3']);
        },3000
        )
    });
}
const getUser = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Get user data of id: ${id} from db');
            resolve({id:id,name:"David"});
            console.log("second");
        },2000
        )
    });
}
getUser(1)
.then((user)=>getRepos(user.name))
.then((repos)=>{
    console.log('repos of user remote:',repos);
    console.log("after");
})
.catch((err)=>{
    console.log('Error:',err);
});
//promise.all()
//promise.race()