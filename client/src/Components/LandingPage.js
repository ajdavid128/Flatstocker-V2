import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Container, Divider, Image, Segment } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm2";
import FlatStocker from "../images/FlatStocker.png";
import Print_Pins from "../images/Print_Pins.png";


function LandingPage({errors, setErrors, currentUser, setCurrentUser}) {

    const [toggleLoginSignup, setToggleLoginSignup] = useState(true)

    const handleClearError = () => {
        setToggleLoginSignup(!toggleLoginSignup)
        setErrors([]);
    }
    
    return (
        <div id="background-login">
            <div id="landing-page">          
                <div>
                    <div id="land-container">
                        <Segment id="land-seg">
                            <Image src={FlatStocker} size="huge"/>
                            <Divider></Divider>
                            {toggleLoginSignup ? 
                                <>
                                    <LoginForm 
                                        setCurrentUser={setCurrentUser}
                                        errors={errors}
                                        setErrors={setErrors}
                                    />
                                    <Divider horizontal>OR</Divider>
                                    <div className="sign-about-buttons">
                                        <Button onClick={handleClearError}>Signup!</Button>
                                    </div>
                                </>
                                :
                                <>
                                    <SignupForm 
                                    setCurrentUser={setCurrentUser}
                                    errors={errors}
                                    setErrors={setErrors}
                                    />
                                    <Divider horizontal>OR</Divider>
                                    <div className="sign-about-buttons">
                                        <Button onClick={handleClearError}>Login</Button>
                                    </div>
                                </>
                            }
                        </Segment>
                    </div>
                </div>  
            </div>
        </div>
    )
};

export default LandingPage;


{/* <div id="landing-logo">
                <Segment id="logo-seg">
                    <Image src={FlatStocker} size="huge"/>
                </Segment>
            </div> */}

 {/* <Segment id="land-seg">
                        <LoginForm 
                            setCurrentUser={setCurrentUser}
                            errors={errors}
                            setErrors={setErrors}
                        />
                        <Divider horizontal>OR</Divider>
                        <div id="sign-up-about">
                            <div className="sign-about-buttons">

                            
                                <Button onClick={handleClearError}>Signup!</Button>
                               
                                
                                <Link to="/signup">
                                    <Button onClick={handleClearError}>Signup!</Button>
                                </Link>
                            </div>
                            <div className="sign-about-buttons">
                                
                                <Link to="/info">
                                    <Button>About Page</Button>
                                </Link>
                            </div>
                        </div>
                    </Segment> */}