import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import "../styles/StudentPopup.css"


class StudentPopup extends Component {
    constructor(props){  
        super(props);  
        this.state = { 
            category: ""
        };  
    }  

    handleChange = name => ({ target }) =>{
        this.setState({ 
          [name]: target.value
        }); 
      }

    handleCategory = event => {
        this.setState({
            category :event.target.value
        });
    }

    handleSubmit = () =>{
        const arr= {
            "firstname":this.state.firstName,
            "lastname":this.state.lastName,
            "gpa": parseInt(this.state.gpa),
            "email":this.state.email,
            "image": "http://i.imgur.com/AItCxSs.jpg",
            "campusId": this.state.category
          }
          console.log(arr);
          this.props.editStudent(this.props.id,arr);
          this.props.closePopup();
    }

    render () {
        return (
            <div className = "popup">
                <div className = "popup-inner"><h1>{this.props.firstName} {this.props.lastName}</h1>
                <TextField
                helperText="Please enter your first name"
                label="First Name"
                // value={this.state.name}
                onChange={this.handleChange("firstName")}
                margin="normal"
                variant="outlined"
                style = {{marginLeft: 10, width: 500}}
                />
                <TextField
                helperText="Please enter your last name"
                label="Last Name"
                // value={this.state.name}
                onChange={this.handleChange("lastName")}
                margin="normal"
                variant="outlined"
                style = {{marginLeft: 5, width: 500}}
                />
                <TextField
                helperText="Please enter your email address"
                label="Email"
                // value={this.state.name}
                onChange={this.handleChange("email")}
                margin="normal"
                variant="outlined"
                style = {{marginLeft: 10, width: 500}}
                />
                <TextField
                label="GPA"
                // value={this.state.name}
                onChange={this.handleChange("gpa")}
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
                    {this.props.campuses.map(option => (
                        <MenuItem key={option.name} value={option.id}>
                            {option.name}
                        </MenuItem>
                        ))}
                    </TextField>
                    <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={this.handleSubmit}
                    style = {{position: "absolute",
                        bottom: 5,
                        right: 105}}
                    >
                        Submit
                    </Button>
                    <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={this.props.closePopup}
                    style = {{position: "absolute",
                        bottom: 5,
                        right: 5}}
                    >
                        Close
                    </Button>
                </div>
                
            </div>
             
        );
    }
}

export default StudentPopup;