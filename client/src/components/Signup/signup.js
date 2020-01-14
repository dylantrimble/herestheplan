import React from "react";


function SignUp() {
    return (
        <div className="col-md-4">
            <div className="card text-center bg-light mb-3 signUpCard">
                <div className="card-body">
                    <h2 className="display-5">Sign Up<i className="fas fa-rocket"></i></h2>
                    <p class="lead">Get the plan started!</p>
                    <form>
                        <div className="form-group">
                            <label for="Fullname-text"></label>
                            <input type="text" name="fullname" className="form-control" id="fullname-text" placeholder="Full Name"></input>
                        </div>
                        <div className="form-group">
                            <label for="Username-text"></label>
                            <input type="text" name="username" className="form-control" id="username-text" placeholder="Username"></input>
                        </div>
                        <div className="form-group">
                            <label for="Password-Text"></label>
                            <input type="password" name="password" className="form-control" id="password-text" placeholder="New Password"></input>
                        </div>
                        <button class="btn btn-success btn-block" id="submit-registration">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default SignUp;