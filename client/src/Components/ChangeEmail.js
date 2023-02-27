import { Container, Form, Input } from "semantic-ui-react";
import { useState } from "react";

function ChangeEmail({currentUser, setUpdateEmail, updateEmail, errors, setErrors, handleChangeEmailForm}) {

    const [updateUserInfo, setupdateUserInfo] = useState({
        name: "",
        usernames: "",
        email: "",
        business: "",
        password: "",
        password_confirmation: ""
    });

    // console.log(updateUserInfo)

    // SENDS PATCH REQUEST FOR EMAIL UPDATE
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateUserInfo)
        })
        .then(res => {
            if(res.ok){
                res.json()
                .then(data => {setUpdateEmail([{...currentUser}, data])});
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        // handleChangeEmailForm();
        setupdateUserInfo({
            name: "",
            usernames: "",
            email: "",
            business: "",
            password: "",
            password_confirmation: ""
        })
        })
    }

    // UPDATES EMAIL IN STATE
    const handleEmailChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setupdateUserInfo({
            ...updateUserInfo, [key]: value
        })
        // console.log(e.target.value)
    }


    return (
        <div>
            <Container>
                <Form onSubmit={handleEmailSubmit}>
                    <Form.Field
                        control={Input}
                        label="Name"
                        id="name"
                        name="name"
                        placeholder={currentUser.name}
                        value={updateUserInfo.name}
                        onChange={handleEmailChange}
                    />
                    <Form.Field
                        control={Input}
                        label="Username"
                        id="username"
                        name="username"
                        placeholder={currentUser.username}
                        value={updateUserInfo.username}
                        onChange={handleEmailChange}
                    />
                    <Form.Field
                        control={Input}
                        label="Business"
                        id="business_name"
                        name="business_name"
                        placeholder={currentUser.business_name}
                        value={updateUserInfo.business_name}
                        onChange={handleEmailChange}
                    />
                    <Form.Field
                        control={Input}
                        label="Please enter new email address:"
                        id="email"
                        name="email"
                        placeholder={currentUser.email}
                        value={updateUserInfo.email}
                        onChange={handleEmailChange}
                    />
                    <Form.Field 
                        control={Input}
                        label="Password:"
                        type="password"
                        name="password"
                        placeholder="**********"
                        value={updateUserInfo.password}
                        onChange={handleEmailChange}
                    />
                    <Form.Field 
                        control={Input}
                        label="Password Confirmation:"
                        type="password"
                        name="password_confirmation"
                        placeholder="**********"
                        value={updateUserInfo.password_confirmation}
                        onChange={handleEmailChange}
                    />
                    <div>
                        {errors? errors.map(e => { return <p className="error" key={e}>• {e}</p>}) : null}
                    </div>
                    <div id="change-email-submit">
                        <Form.Button>Submit Changes</Form.Button>
                    </div>
                </Form>
                
            </Container>
        </div>
    )
};

export default ChangeEmail;