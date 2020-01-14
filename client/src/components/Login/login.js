import React from "react";


function Login() {
    return (
        <div className="col-md-4">
            <div className="card text-center bg-light mb-3 loginCard">
                <div className="card-body">
                    <h5 className="card-title">Launch into HTP<i className="fas fa-rocket"></i></h5>
                    <form>
                        <div className="form-group">
                            <label for="username"></label>
                            <input type="text" className="form-control" id="username" placeholder="Username"></input>
                        </div>
                        <div className="form-group">
                            <label for="password"></label>
                            <input type="password" className="form-control" id="password" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" id="login-btn">Login</button>
                        <div className="separator">OR</div>
                        <button className="btn btn-success btn-block">Create New User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;