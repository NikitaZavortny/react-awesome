import React from 'react';

function Form() {
    return (
        <div class="center-block col-sm-7">
            <form class="form-group">
                <fieldset class="jumbotron">
                    <h1>Base Form</h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"/>
                    </div>
                    <div align="right" class="form-group">
                        <button type="submit" class="btn btn-primary mt-4">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;