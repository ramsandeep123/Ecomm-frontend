import express from "express"
import Product from "../models/Product.js";


const router = express.Router();


router.get("/products", async (rq, res) => {

    try {

        const products = await Product.find();

        res.status(200).json(products)

    } catch (e) {

        res.status(404).json({ message: e.message })
    }



});

export default router;