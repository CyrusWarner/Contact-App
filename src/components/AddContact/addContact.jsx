import React from 'react';

class AddContact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        

    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.name === "" || this.state.email === ""){
            alert('All fields are mandatory')
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({
            name: "",
            email: "",
        })
    }

    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Name</label>
                        <input type='text' name="name" placeholder="name" onChange={this.handleChange} value={this.state.name}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type='text' name="email" placeholder="email" onChange={this.handleChange} value={this.state.email}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;