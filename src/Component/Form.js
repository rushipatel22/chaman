import React from 'react';
function Form() {
    return(
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-7">
            <div class="card mt-3">
                <div class="card-body">
                        <div class="form-group">
                            <label for="Name">Name</label>
                            <input type="text" class="form-control"  placeholder="Enter name"/>
                        </div>
                        <div class="form-group">
                            <label for="Name">Email</label>
                            <input type="text" class="form-control" placeholder="Enter email"/>
                        </div>
                        <label for="password">Password</label>
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" class="form-control " placeholder="Enter Password"/>
                            </div>
                        </div>
                        <label for="confirm_password">Confirm Password</label>
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" class="form-control input-lg" placeholder="Enter Confirm Password"/>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>   
    )       
}
export default Form;