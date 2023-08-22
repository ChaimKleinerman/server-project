//libraries
import express from "express";
const router = express.Router();
import {
    allUsers,
    userById,
    addUser,
    updateUser,
    deleteProduct,
    reduce,
    increase
} from "../controller/sendResp.js";
//get all product
router.get("/product", allUsers);
//get product by id
router.get("/product/:id", userById);
//add product
router.post("/product", addUser);
//update product
router.put("/product/:id", updateUser);
//delete product
router.delete("/product/:id", deleteProduct);
//increase product by 1
router.put("/product/increase/:id",increase);
//reduce product by 1
router.put("/product/reduce/:id",reduce);
export { router };
