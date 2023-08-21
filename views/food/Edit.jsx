import React from "react";

export default function Edit({food}){
    return (
        <div>
            <form action={`/foods/${food._id}?_method=PUT`} method="POST">
                <input type="text" name='title' defaultValue={food.title}></input>
                <input type="textarea" name='entry' rows="1" cols="1" defaultValue={food.entry}></input>
                <input type="number" defaultValue={food.quantity} name='quantity'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}