console.log("before");
const id = 1;
console.log("id: ",id);
const getUser = (id,cbf)=>{
    setTimeout(()=>{
        console.log('Get user data of id: ${id} from db')
    },2000
    )
};
const cbFn1 = (user)=>{
    console.log ("user",user);
};
getUser(id,cbFn1);
console.log("after");