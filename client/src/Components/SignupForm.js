import { Container, Form, Input, Button, Segment, Divider } from "semantic-ui-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignupForm({errors, setErrors, setCurrentUser}) {

    let navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        business_name: "",
        username: "",
        password: "",
        password_confirmation: ""
    })

    const handleSignup = (e) => {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(data => {
                    setCurrentUser(data);
                    navigate("/dashboard");
                })
            } else {
                res.json().then(data => setErrors(data.errors));
            }
        })
        setNewUser({
            name: "",
            email: "",
            business_name: "",
            username: "",
            password: "",
            password_confirmation: ""
        })
    };

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewUser({
            ...newUser, [key]: value
        })
    };


    return (
        <div>

            <div>
                <div id="signup-cont">
                    <Segment id="signup-seg">
                        <h1 id="signup-title">Please Sign Up</h1>
                        <Form onSubmit={handleSignup}>
                            <Form.Field 
                                control={Input}
                                label="Full Name:"
                                type="name"
                                name="name"
                                placeholder="Jon Smith"
                                value={newUser.name}
                                onChange={handleChange}
                            />
                            <Form.Field 
                                control={Input}
                                label="Email:"
                                type="text"
                                name="email"
                                placeholder="print@example.com"
                                value={newUser.email}
                                onChange={handleChange}
                            />
                            <Form.Field 
                                control={Input}
                                label="Business Name:"
                                type="text"
                                name="business_name"
                                placeholder="Print Shop"
                                value={newUser.business_name}
                                onChange={handleChange}
                            />
                            <Form.Field 
                                control={Input}
                                label="Username:"
                                type="text"
                                name="username"
                                placeholder="anythingYoUw4nT!"
                                value={newUser.username}
                                onChange={handleChange}
                            />
                            <Form.Field 
                                control={Input}
                                label="Password:"
                                type="password"
                                name="password"
                                value={newUser.password}
                                onChange={handleChange}
                            />
                            <Form.Field 
                                control={Input}
                                label="Password Confirmation:"
                                type="password"
                                name="password_confirmation"
                                value={newUser.password_confirmation}
                                onChange={handleChange}
                            />
                            <div>
                                {errors? errors.map(e => { return <p key={e}>{e}</p>}) : null}
                            </div>
                            <div id="create-account-button">
                                <Form.Button type="submit">Create Account</Form.Button>
                            </div>
                        </Form>
                
                        <Divider horizontal>OR</Divider>
                    
                        
                        <div id="signup-form-login-button">
                            <Link to="/">
                                <Button>Login</Button>
                            </Link>
                        </div>
                    </Segment>
                    
                </div>
            </div>

        </div>
    )
};

export default SignupForm;