import { Container, Form, Input, Button } from 'semantic-ui-react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginForm({errors, setErrors, setCurrentUser}) {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setUser({
            ...user, [key]: value
        })
    };

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res =>{
            if(res.ok){
                res.json().then(user => {
                    setCurrentUser(user);
                    navigate("/dashboard");
                })
            } else {
                res.json().then(data =>{
                    for (const key in data){
                        setErrors(data[key]);
                    }
                })
            }
        });
        setUser({
            username: "",
            password: ""
        });
    };


    return (
        <Container>
            <h1 id="login-title" >Please Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Field 
                    control={Input}
                    label="Username:"
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChange}
                />
                <Form.Field 
                    control={Input}
                    label="Password:"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                />
                <div>
                    {errors && errors? <p className="error"> {errors}</p> : null}
                {/* {errors && errors? errors.map(e => { return <p className="error" key={e}>• {e}</p>}) : null} */}
                </div>
                <div id="login-form-button">
                    <Form.Button type="submit">Login</Form.Button>
                </div>
                
            </Form>

        </Container>
    )
};

export default LoginForm;