import React from 'react';
import TextField from "@material-ui/core/TextField";
import '../styles/PopUp.css'

function PopUp ({close,submit,handleChange}){
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <h1>New Campus</h1>
        <div className="fields">
          <form onSubmit={submit}>
            <TextField
              helperText="Please Enter New Campus"
              label="Campus Name"
              onChange={handleChange("name")}
              margin="normal"
              variant="outlined"
            />
            <TextField
              helperText="Please Campus Address"
              label="Campus Address"
              onChange={handleChange("address")}
              margin="normal"
              variant="outlined"
            />
            <TextField
              helperText="Please Campus description"
              label="Campus description"
              onChange={handleChange("description")}
              margin="normal"
              variant="outlined"
            />
            <div className="button">
              <button type="submit" value="Submit">Submit</button>
              <button onClick={close}>Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopUp;