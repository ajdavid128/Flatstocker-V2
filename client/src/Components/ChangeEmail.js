import { Container, Form, Input } from "semantic-ui-react";
import { useState } from "react";

function ChangeEmail({currentUser, setUpdateEmail, updateEmail, errors, setErrors}) {

    const [newEmail, setNewEmail] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    });

    // console.log(newEmail)

    // SENDS PATCH REQUEST FOR EMAIL UPDATE
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmail)
        })
        .then(res => {
            if(res.ok){
                res.json()
                .then(data => {setUpdateEmail([{...currentUser}, data])});
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        setNewEmail({
            email: "",
            password: "",
            password_confirmation: ""
        })
        })
    }

    // UPDATES EMAIL IN STATE
    const handleEmailChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewEmail({
            ...newEmail, [key]: value
        })
        // console.log(e.target.value)
    }


    return (
        <div>
            <Container>
                <Form onSubmit={handleEmailSubmit}>
                    <Form.Field
                        control={Input}
                        label="Please enter new email address:"
                        id="email"
                        name="email"
                        placeholder="new_email@example.com"
                        value={newEmail.email}
                        onChange={handleEmailChange}
                    />
                    <Form.Field 
                        control={Input}
                        label="Password:"
                        type="password"
                        name="password"
                        value={newEmail.password}
                        onChange={handleEmailChange}
                    />
                    <Form.Field 
                        control={Input}
                        label="Password Confirmation:"
                        type="password"
                        name="password_confirmation"
                        value={newEmail.password_confirmation}
                        onChange={handleEmailChange}
                    />
                    <div>
                    {errors? errors.map(e => { return <p className="error" key={e}>• {e}</p>}) : null}
                    </div>
                    <div id="change-email-submit">
                        <Form.Button>Submit New Email</Form.Button>
                    </div>
                </Form>
                
            </Container>
        </div>
    )
};

export default ChangeEmail;