import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import "../styles/StudentPopup.css"

let campuses = [
    { label: "Hunter College", value: "Hunter College" },
    { label: "Queens College", value: "Queens College" },
    { label: "Stony Brook", value: "Stony Brook" },
    { label: "Bronx College", value: "Bronx College" },
    { label: "NYU", value: "NYU" },
    { label: "City College", value: "City College" }
  ];

class StudentPopup extends Component {
    constructor(props){  
        super(props);  
        this.state = { 
            category: ""
        };  
    }  

    // handlefirstNameChange = event => {
    //     this.setState({
    //         firstName = event.target.value
    //     });
    // }

    // handlelastNameChange = event => {
    //     this.setState({
    //         lastName = event.target.value
    //     });
    // }

    handleCategory = event => {
        this.setState({
            category :event.target.value
        });
    }
    render () {
        return (
            <div className = "popup">
                <div className = "popup-inner"><h1>{this.props.firstName} {this.props.lastName}</h1>
                <TextField
                helperText="Please enter your first name"
                label="First Name"
                // value={this.state.name}
                // onChange={this.handleChange("name")}
                margin="normal"
                variant="outlined"
                style = {{marginLeft: 10, width: 500}}
                />
                <TextField
                helperText="Please enter your last name"
                label="Last Name"
                // value={this.state.name}
                // onChange={this.handleChange("name")}
                margin="normal"
                variant="outlined"
                style = {{marginLeft: 5, width: 500}}
                />
                <TextField
                helperText="Please enter your email address"
                label="Email"
                // value={this.state.name}
                // onChange={this.handleChange("name")}
                margin="normal"
                variant="outlined"
                style = {{marginLeft: 10, width: 500}}
                />
                <TextField
                label="GPA"
                // value={this.state.name}
                // onChange={this.handleChange("name")}
                helperText="Please select a GPA"
                margin="normal"
                variant="outlined"
                style = {{marginLeft: 10}}
                />
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
                {campuses.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                 </TextField>
                    <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={this.props.closePopup}
                    style = {{position: "absolute",
                        bottom: 5,
                        right: 5}}
                    >
                        Submit
                    </Button>
                </div>
                
            </div>
             
        );
    }
}

export default StudentPopup;