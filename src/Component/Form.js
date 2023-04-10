import React from 'react';
function Form() {
    return(
        <div className="form-body">
        <div className="firstname">
            <label>First Name: &nbsp;</label>
            <input type="text" placeholder="First Name"/>
        </div>
        <div className="lastname">
            <label>Last Name: &nbsp; </label>
            <input  type="text" placeholder="LastName"/>
        </div> 
        <div>
              <button type="submit">Register</button>
        </div>     
    </div>     
    )       
}
export default Form;