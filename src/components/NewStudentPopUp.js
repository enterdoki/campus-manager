import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import "../styles/StudentPopup.css";



class NewStudentPopUp extends Component {
    constructor(props){  
        super(props);  
        this.state = { 
            category: ""
        };  
    }  
    handleCategory = event => {
        this.setState({
            category :event.target.value
        });
    }

    handleSubmit = () =>{
        this.props.submit(this.state.category);
    }
    render() {
        return (
            <div>
                <div className = "popup">
                    <div className = "popup-inner"><h1>New Student</h1>
                    <TextField
                    helperText="Please enter your first name"
                    label="First Name"
                    // value={this.state.name}
                    onChange={this.props.handleChange("firstName")}
                    margin="normal"
                    variant="outlined"
                    style = {{marginLeft: 10, width: 500}}
                    ></TextField>
                    <TextField
                    helperText="Please enter your last name"
                    label="Last Name"
                    // value={this.state.name}
                    onChange={this.props.handleChange("lastName")}
                    margin="normal"
                    variant="outlined"
                    style = {{marginLeft: 5, width: 500}}
                    ></TextField>
                    <TextField
                    helperText="Please enter your email address"
                    label="Email"
                    // value={this.state.name}
                    onChange={this.props.handleChange("email")}
                    margin="normal"
                    variant="outlined"
                    style = {{marginLeft: 10, width: 500}}
                    ></TextField>
                    <TextField
                    label="GPA"
                    // value={this.state.name}
                    onChange={this.props.handleChange("gpa")}
                    helperText="Please select a GPA"
                    margin="normal"
                    variant="outlined"
                    style = {{marginLeft: 10}}
                    ></TextField>
                    <TextField
                    select
                    label="Select a campus"
                    value={this.state.category}
                    onChange={this.handleCategory}
                    SelectProps={{}}
                    helperText="Please select a campus"
                    margin="normal"
                    variant="outlined"
                    style = {{marginLeft: 10}}
                    >
                    {this.props.campuses.map(option => (
                        <MenuItem key={option.name} value={option.id}>
                            {option.name}
                        </MenuItem>
                        ))}
                    </TextField>
                        <div className="button">
                            <button onClick={this.handleSubmit}>Submit</button>
                            <button onClick={this.props.close}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewStudentPopUp;