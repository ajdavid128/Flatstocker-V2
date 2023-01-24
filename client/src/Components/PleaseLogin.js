import { Link } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";


function PleaseLogin() {
    return (
        <div>
            <h1>Please Login or Signup to continue!</h1>
            <Container>
                <Link to="/">
                    <Button>Login</Button>
                </Link>
                <Link to="/signup">
                    <Button>Signup</Button>
                </Link>
            </Container>
        </div>
    )
};

export default PleaseLogin;