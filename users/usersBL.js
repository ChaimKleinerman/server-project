import {read ,write} from "./usersDall.js";

//add user
async function addUser(userData) {
    const data = await read();
    data.myData.push(userData);
    write(data);
    return "the user as been added";
}  
//user connect
async function connectUser(userData){
    const data = await read();
    for(let user of data.myData){
        if (user.email === userData.email&& user.password === userData.password)
        return "user exist"
    
    }
    return "user isn't exist"
    
} 
//export functions
export {addUser,connectUser}