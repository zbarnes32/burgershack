import { Schema } from "mongoose";



export const BurgerSchema = new Schema({

    name: { type: String, maxLength: 30, required: true },
    price: {type: Number, max: 25, min: 0, required: true},
    ingredients: [{ type: String, maxLength: 30}]
})