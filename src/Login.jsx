import React, { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [formError, setFormError] = useState({
        emailErr: "",
        password: ""
    });

    const handleLogin = (e) => {

        e.preventDefault()
        const errors = validateForm(formData);
        setFormError(errors)
        console.log(formData);

    }
    const validateForm = (dataValidate) => {
        const errors = {};
        if (dataValidate.email.trim() == '') {
            errors.emailErr = " không được rỗng";
        }
        if (dataValidate.password.trim() == '') {
            errors.password = "Bat khong rong"
        }
        return errors;
    }
    return (
        <>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="text" className="form-control" value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                {formError.emailErr !== "" &&
                                    <div id="emailHelp" className="form-text text-danger">{formError.emailErr}</div>}

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                {formError.password !== "" &&
                                    <div id="emailHelp" className="form-text text-danger">{formError.password}</div>}
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="submit" >Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login