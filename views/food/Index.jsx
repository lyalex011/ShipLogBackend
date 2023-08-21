import React from "react";

export default function Index({food}) {
    return(
        <div>
            <ul>
                {food.map((element) => 
                <li>{element.title} 
                <br />
                <a href={`foods/${element._id}`}>Details</a>
                <br />
                <form action={`foods/${element._id}?_method=DELETE`} method="POST">
                    <button>Delete</button>
                </form>
                <a href={`foods/${element._id}/edit`} >
                    <button>Edit</button>
                </a>
          </li>)}
            </ul>
            <a href="/foods/new">Create</a>

        </div>
    )
}