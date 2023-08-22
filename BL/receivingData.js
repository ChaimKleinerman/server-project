//libraries
import * as myFunctions from "../dal/gettingData.js";

//get all data
async function getData() {
    const data = await myFunctions.read();
    return data.myData;
}
//get data by id
async function dataById(id) {
    const data = await myFunctions.read();
    const myId = parseInt(id);
    const filterData = data.myData.filter((user) => user.id === myId);
    return filterData;
}
//add product 
async function addToData(userData) {
    console.log(userData)
    const data = await myFunctions.read();
    data.myData.push(userData);
    myFunctions.write(data);
    return "the user as been added";
}

//update data
async function updateData(newData,userId) {
    const data = await myFunctions.read();
    const myUser = data.myData[userId - 1];
    for (let key in newData) {
        if (myUser[key]) {
            myUser[key] = newData[key];
        }
    }
    myFunctions.write(data);
    return "the user as been updated";
}
//delete data
async function deleteData(id) {
    const data = await myFunctions.read();
    const myId = parseInt(id);
    const filterData = data.myData.filter((user) => user.id != myId);
    const newData = {myData:filterData}
    myFunctions.write(newData);
    return "the product as been deleted";
}
//increase product by 1
async function increaseBy1(id) {
    const data = await myFunctions.read();
    const myId = parseInt(id);
    const myUser = data.myData[myId - 1];
    console.log(myUser)
    myUser.quantity ++
    myFunctions.write(data)
return 'the quantity increase by 1'
}
//reduce product by 1
async function reduceBy1(id) {
    const data = await myFunctions.read();
    const myId = parseInt(id);
    const myUser = data.myData[myId - 1];
    myUser.quantity --
    myFunctions.write(data)
    return 'the quantity reduce by 1'
}

//export functions
export { getData, dataById, addToData, updateData, deleteData,increaseBy1,reduceBy1};
