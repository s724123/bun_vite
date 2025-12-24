console.log("before");

const getUser = (id,cbFn)=>{
    setTimeout(()=>{
        console.log('Get user data of id: ${id} from db');
        cbFn({id:id,name:"David"});
        console.log("second");
    },2000
    )
};
const getRepos = (username,cbFn)=>{
    setTimeout(()=>{
        console.log('Get repos of user: ${username} from github');
        cbFn (['repo1','repo2','repo3']);
        console.log("after");
    },3000
    )
};
const getCommits = (repo,cbFn)=>{
    setTimeout(()=>{
        console.log('Get commits of repo: ${repo} from github');
        cbFn (['commit1','commit2','commit3']);
        console.log("final");
    },2000
    )
}
const cbFn1 = (user)=>{
    console.log ('user data remote: id:${user.id}, name:${user.name}');
    getRepos(user.name,cbFn2);
};
const cbFn2 = (repos)=>{
    console.log('repos of user remote:',repos);
    getCommits(repos[0],cbFn3);
};
const cbFn3 = (commits)=>{
    console.log('commits of repo remote:',commits);
};
getUser(1,cbFn1);
