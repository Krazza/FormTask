import React from "react";
import "./App.css";

function Popup(props)
{
    return(
        <div className="background">
            <div className="Popup">
                <p>{props.firstname}</p>
                <p>{props.familyname}</p>
                <p>{props.phonenumber}</p>
                <p>{props.role}</p>
                <p>{props.message}</p>
                <input type="button" className="mybuttonclass" value="Reload" name="reload" onClick={function() {window.location.reload()}}/>
            </div>
        </div>
    );
}

export default Popup;