import React from "react";

export default function Show({element}) {
    return(
        <div>
            <h1>{element.title}</h1>
            <h3>{element.entry}</h3>
            <h3>{element.quantity}</h3>
            <br />
            <h4>{element.createdAt.toISOString().slice(0, 16)}</h4>
            <a href='/foods'>
                <button>Back</button>
            </a>
        </div>
    )
}