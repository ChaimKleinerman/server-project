//libraries
import {
    getData,
    dataById,
    addToData,
    updateData,
    deleteData,
    reduceBy1,
    increaseBy1
} from "../BL/receivingData.js";
//get all users
const allUsers = (req, res) => {
    getData()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error("An error occurred:", error);
            res.status(500).send("Internal Server Error");
        });
};
//get user by id

const userById = (req, res) => {
    const userId = req.params.id;
    dataById(userId)
        .then((filterData) => {
            res.send(filterData);
        })
        .catch((error) => {
            console.error("An error occurred:", error);
            res.status(500).send("Internal Server Error");
        });
};
//add user
const addUser = (req, res) => {
    const userData = req.body;
    addToData(userData)
        .then((resolve) => res.send(resolve))
        .catch((error) => {
            console.error("An error occurred:", error);
            res.status(500).send("Internal Server Error");
        });
};
//update user
const updateUser = (req, res) => {
    const newData = req.body;
    const userId = req.params.id;
    const id = parseInt(userId);
    updateData(newData, id)
        .then((resolve) => res.send(resolve))
        .catch((error) => {
            console.error("An error occurred:", error);
            res.status(500).send("Internal Server Error");
        });
};
//delete product 
const deleteProduct = (req, res) => {
    const userId = req.params.id;
    deleteData(userId)
    .then(resolve => res.send(resolve))
    .catch((error) => {
        console.error("An error occurred:", error);
        res.status(500).send("Internal Server Error");
    });

};
//increase product by 1
const increase = (req,res)=>{
    const userId = req.params.id;
    increaseBy1(userId)
    .then(resolve => res.send(resolve)) 
    .catch((error) => {
        console.error("An error occurred:", error);
        res.status(500).send("Internal Server Error");
    })
}
//reduce product by 1
const reduce = (req,res)=>{
    const userId = req.params.id;
    reduceBy1(userId)
    .then(resolve => res.send(resolve)) 
    .catch((error) => {
        console.error("An error occurred:", error);
        res.status(500).send("Internal Server Error");
    })
}

//export functions
export { allUsers, userById, addUser, updateUser,deleteProduct,reduce,increase};
