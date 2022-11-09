import React from "react";

function Form(props)
{
    return(
        <form>
            <label htmlFor="FN">First Name</label>
            <input type="text" id="FN" name="firstname" onChange={props.handler.bind(this)}/>
            <label htmlFor="FMN">Family Name</label>
            <input type="text" id="FMN" name="familyname" onChange={props.handler.bind(this)}/>
            <label htmlFor="NUM">Your number</label>
            <input type="number" id="NUM" name="phonenumber" onChange={props.handler.bind(this)}/>
            <label htmlFor="RL">Your role</label>
            <select id="RL" name="role" onChange={props.handler.bind(this)}>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="administration">Administration</option>
            </select>
            <label htmlFor="TM">Leave your message</label>
            <textarea id="TM" name="message" onChange={props.handler.bind(this)}/>
            <input type="submit" name="popupvisibity" value="Submit" onClick={props.popuphandler.bind(this)}/>
        </form>
    );
}

export default Form;