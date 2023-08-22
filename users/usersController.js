import { addUser,connectUser} from "./usersBL.js";
//add user
const addControl = (req, res) => {
    const userData = req.body;
    addUser(userData)
        .then((resolve) => res.send(resolve))
        .catch((error) => {
            console.error("An error occurred:", error);
            res.status(500).send("Internal Server Error");
        });
};
//user connect
const connectControl = (req,res)=>{
    const userData = req.body;
    connectUser(userData)
    .then(resolve => res.send(resolve))
    .catch((error)=>{
        console.error('An error occurred',error)
        res.status(500).send('Internal Server Error')
    })
}

export {addControl,connectControl}