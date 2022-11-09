import React from "react";

function View(props)
{
    return(
        <section>
            <p>{props.firstname}</p>
            <p>{props.familyname}</p>
            <p>{props.phonenumber}</p>
            <p>{props.role}</p>
            <p>{props.message}</p>
        </section>
    );
}

export default View;