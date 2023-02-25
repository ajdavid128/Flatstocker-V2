import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Form, Input, Container, Divider, Image, Segment } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import FlatStocker from "../images/FlatStocker.png";
import Print_Pins from "../images/Print_Pins.png";


function LandingPage({errors, setErrors, currentUser, setCurrentUser}) {

    let navigate = useNavigate();

    // **************************************************************** 
    // STATE CODE
    // **************************************************************** 

    const [toggleLoginSignup, setToggleLoginSignup] = useState(true);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        business_name: "",
        username: "",
        password: "",
        password_confirmation: ""
    })
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    // **************************************************************** 
    // LOGIN CODE
    // **************************************************************** 

    const handleLoginChange = (e) => {
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

    // **************************************************************** 
    // SIGNUP CODE
    // **************************************************************** 

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

    const handleSignupChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewUser({
            ...newUser, [key]: value
        })
    };

    const handleClearError = () => {
        setToggleLoginSignup(!toggleLoginSignup);
        setErrors([]);
    }
    
    return (
        <>
        {toggleLoginSignup ?
        <div id="background-login">

        <div id="landing-page">
            
            <div id="landing-logo">
                <Segment id="logo-seg">
                    <Image src={FlatStocker} size="huge"/>
                </Segment>
            </div>
            
            <div >
                <div id="land-container">
                    <Segment id="land-seg">
                        {/* <LoginForm 
                            setCurrentUser={setCurrentUser}
                            errors={errors}
                            setErrors={setErrors}
                        /> */}
                        <Container>
                            <h1 id="login-title" >Please Login</h1>
                            <Form onSubmit={handleLogin}>
                                <Form.Field 
                                    control={Input}
                                    label="Username:"
                                    name="username"
                                    placeholder="Username"
                                    value={user.username}
                                    onChange={handleLoginChange}
                                />
                                <Form.Field 
                                    control={Input}
                                    label="Password:"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={handleLoginChange}
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

                        <Divider horizontal>OR</Divider>
                        <div id="sign-up-about">
                            <div className="sign-about-buttons">

                            
                                <Button onClick={handleClearError}>Signup!</Button>
                               
                                
                                {/* <Link to="/signup">
                                    <Button onClick={handleClearError}>Signup!</Button>
                                </Link> */}
                            </div>
                            <div className="sign-about-buttons">
                                
                                {/* <Link to="/info">
                                    <Button>About Page</Button>
                                </Link> */}
                            </div>
                        </div>
                    </Segment>
                </div>
            </div>   
        </div>
        </div>

        :
        
        // <SignupForm/>
        <div id="signup-page">

            <div>
                <div id="landing-logo">
                    <Segment id="logo-seg">
                        <Image src={FlatStocker} size="huge"/>
                    </Segment>
                </div>

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
                                onChange={handleSignupChange}
                            />
                            <Form.Field 
                                control={Input}
                                label="Email:"
                                type="text"
                                name="email"
                                placeholder="print@example.com"
                                value={newUser.email}
                                onChange={handleSignupChange}
                            />
                            <Form.Field 
                                control={Input}
                                label="Business Name:"
                                type="text"
                                name="business_name"
                                placeholder="Print Shop"
                                value={newUser.business_name}
                                onChange={handleSignupChange}
                            />
                            <Form.Field 
                                control={Input}
                                label="Username:"
                                type="text"
                                name="username"
                                placeholder="anythingYoUw4nT!"
                                value={newUser.username}
                                onChange={handleSignupChange}
                            />
                            <Form.Field 
                                control={Input}
                                label="Password:"
                                type="password"
                                name="password"
                                value={newUser.password}
                                onChange={handleSignupChange}
                            />
                            <Form.Field 
                                control={Input}
                                label="Password Confirmation:"
                                type="password"
                                name="password_confirmation"
                                value={newUser.password_confirmation}
                                onChange={handleSignupChange}
                            />
                            <div>
                                {errors && errors? errors && errors.map(e => { return <p className="error" key={e}>• {e}</p>}) : null}
                            </div>
                            <div id="create-account-button">
                                <Form.Button type="submit">Create Account</Form.Button>
                            </div>
                        </Form>
                
                        <Divider horizontal>OR</Divider>
                    
                        
                        <div id="signup-form-login-button">
                            <Button onClick={handleClearError}>Login</Button>
                        </div>
                    </Segment>
                    
                </div>
            </div>

        </div>
        }
        </>
    )
};

export default LandingPage;