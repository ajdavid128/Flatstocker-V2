import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";


function AboutGuest() {
    return (
        <div id="about-guest-page">
            <h1>about guest babbsbababfdy</h1>
            <Link to="/">
                <Button>Login</Button>
            </Link>

            <Link to="/signup">
                <Button>Signup</Button>
            </Link>
        </div>
    )
};

export default AboutGuest;