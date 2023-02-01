import express, { Application, Request, Response } from 'express';
import cors from "cors";
import { CartRepo } from './CartRepo';
const app:Application = express();

//whatever port makes sense for you
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/items", async (req:Request, res:Response):Promise<Response> => {
    if(req.query.maxPrice === undefined){
        return res.status(200).json(CartRepo.GetAllItems());
    }
    else{
        return res.status(200).json(Cart.GetItemsBelowCost(Number(req.query.maxPrice)))
    }
});


app.listen(port, ():void => {
    console.log(`Listening on port ${port}`);
});