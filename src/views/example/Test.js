import React from "react";
class Test extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    };
    handleEventFName = (event) =>{
        this.setState(
            {
                firstName: event.target.value
            }
        )
    }

    handleEventLName = (event) =>{
        this.setState(
            {
                lastName: event.target.value
            }
        )
    }

    handleSubmit=()=>{
        alert(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="firstName">firstName: {this.state.firstName}</label>
                    <br></br>
                    <input id="firstName" type="Text" value={this.state.firstName} placeholder="First Name" onChange={(event)=>{this.handleEventFName(event)}}></input>
                    <br></br>
                    <label htmlFor="lastName">lastName: {this.state.lastName}</label>
                    <br></br>
                    <input id="lastName" type="Text" value={this.state.lastName} placeholder="Last Name" onChange={(event)=>{this.handleEventLName(event)}}></input>
                    <input type="submit" value="submit" onClick={()=>{this.handleSubmit()}}></input>
                </form>
            </div>
        )
    }
}
export default Test