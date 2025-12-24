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
const getComments = (repo)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{    
            console.log('Get comments of repo: ${repo} from github');
            resolve (['comment1','comment2','comment3']);
        },2000
        )
    });
}
/*
getUser(1)
.then((user)=>{
    console.log(user);
    return getRepos(user.name);
})
.then((repos)=>{
    console.log('repos of user remote:',repos);
    console.log("after");
})
.catch((err)=>{
    console.log('Error:',err);
});
*/
//Async Await
const showComments = async ()=>{
    const user = await getUser(1);
    console.log(user);
    const repos = await getRepos(user.name);
    console.log('repos of user remote:',repos);
    const comments = await getComments(repos[0]);
    console.log('comments of repo remote:',comments);
    console.log("after");
}
showComments();