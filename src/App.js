import React from "react";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import "./App.css";

class App extends React.Component
{
    constructor()
    {
        super();
        this.InputHandler = this.InputHandler.bind(this);
        this.Popuptoggle = this.Popuptoggle.bind(this);
        this.state = {
            firstname: "Your first name",
            familyname: "Your family name",
            phonenumber: "Your number",
            role: "Your role",
            message: "Your message",
            popupvisibity: false
        }
    }

    render()
    {
        return(
            <div className="container">
                <Form handler={this.InputHandler} popuphandler={this.Popuptoggle}/>
                <h1>This is your input:</h1>
                <View firstname={this.state.firstname} familyname={this.state.familyname}
                      phonenumber={this.state.phonenumber} role={this.state.role}
                      message={this.state.message} />
                {this.state.popupvisibity && <Popup
                    firstname={this.state.firstname} familyname={this.state.familyname}
                    phonenumber={this.state.phonenumber} role={this.state.role}
                    message={this.state.message} />
                }
            </div>
        );
    }

    InputHandler(event)
    {
        this.setState({[event.target.name] : event.target.value});
    }

    Popuptoggle(e)
    {
        e.preventDefault();
        this.setState({popupvisibity : true});
    }
}

export default App;