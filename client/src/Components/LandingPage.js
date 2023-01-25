import { Link } from "react-router-dom";
import { Button, Container, Image, Segment } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import FlatStocker from "../images/FlatStocker.png";
import Print_Pins from "../images/Print_Pins.png";


function LandingPage({errors, setErrors, currentUser, setCurrentUser}) {
    return (
        <div id="landing-page">
            {/* <Image src={Print_Pins}/> */}
            
            <div id="landing-logo">
                <Image src={FlatStocker} size="huge"/>
            </div>
            
            <div >
                <div id="land-container">
                    <Segment id="land-seg">
                        <LoginForm 
                            setCurrentUser={setCurrentUser}
                            errors={errors}
                            setErrors={setErrors}
                        />

                        <div id="sign-up-about">
                            <div className="sign-about-buttons">
                                
                                <Link to="/signup">
                                    <Button>Signup!</Button>
                                </Link>
                            </div>
                            <div className="sign-about-buttons">
                                
                                <Link to="/info">
                                    <Button>About Page</Button>
                                </Link>
                            </div>
                        </div>
                    </Segment>
                </div>
            </div>

            

            
        </div>
    )
};

export default LandingPage;