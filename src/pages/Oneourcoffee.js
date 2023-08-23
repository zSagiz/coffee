import React from 'react'
import { useParams } from 'react-router-dom'
import DataBase from "../db.json"
export default function Oneourcoffee() 
{ const params = useParams();
    const country = params.country;
    const paramsId = params.id;
    const ourCoffee = DataBase.coffee;
    const findOneCoffeeItem = ourCoffee.find((oneCoffeeItem)=>{
        return oneCoffeeItem.id === paramsId
    })    
    console.log(findOneCoffeeItem);


    return (<div>
        <h2>About it</h2>
        <img src={findOneCoffeeItem.url}></img>
        <h3>Country:    {findOneCoffeeItem.country}</h3>
        <h3>Description: {findOneCoffeeItem.description}</h3>
        <h3>Price:{findOneCoffeeItem.price}</h3>
    </div>)

}
