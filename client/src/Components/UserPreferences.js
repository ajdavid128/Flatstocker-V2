import { Button, Container, Modal, Segment, Table } from "semantic-ui-react";
import ChangeEmail from "./ChangeEmail";
import ModalDeleteUser from "./ModalDeleteUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function UserPreferences({errors, setErrors, currentUser, setCurrentUser, setUpdateEmail, updateEmail}) {

    let navigate = useNavigate();

    const [displayEmailForm, setDisplayEmailForm] = useState(false);
    const [buttonText, setButtonText] = useState(false);


    const handleChangeEmailForm = () => {
        setDisplayEmailForm(!displayEmailForm);
        setButtonText(!buttonText);
        setErrors([]);
    }

    const handleDeleteUser = () => {
        fetch(`/users/${currentUser.id}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok){
                setCurrentUser(null);
                navigate("/");
            }
        })
    };

    

    return (
        <div id="user-preferences">
            <div>
                <div id="userPref-seg-cont">
                <Segment.Group>
                    <Segment size="massive">
                        <u>
                            <b>User Preferences:</b>
                        </u>
                    </Segment>
                    <Segment.Group>
                        <Segment textAlign='center' size="huge">
                            <u>
                                <b>User Details</b>
                            </u>
                        </Segment>
                        <Segment.Group>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Name:</Table.HeaderCell>
                                        <Table.HeaderCell>Username:</Table.HeaderCell>
                                        <Table.HeaderCell>Business:</Table.HeaderCell>
                                        <Table.HeaderCell>E-mail:</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            {currentUser && currentUser.name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {currentUser && currentUser.username}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {currentUser && currentUser.business_name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {currentUser && currentUser.email}
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Segment.Group>
                    </Segment.Group>
                    <Segment.Group>
                        <Segment size="huge">
                            <u>
                                <b>Change Email Address</b>
                            </u>
                        </Segment>
                        <Segment>
                            <Button onClick={handleChangeEmailForm}>{!buttonText ? "Change Email" : "Hide Form"}
                            </Button>
                            <br/>
                            {displayEmailForm ? 
                                <Segment><ChangeEmail currentUser={currentUser} updateEmail={updateEmail} setUpdateEmail={setUpdateEmail} errors={errors} setErrors={setErrors}/>
                                </Segment> : 
                                    null}
                        </Segment>
                    </Segment.Group>
                    <Segment.Group>
                        <Segment id="delete-account-seg" size="huge" clearing>
                            <b>Delete Account:</b>
                            <ModalDeleteUser handleDeleteUser={handleDeleteUser}/>
                        </Segment>
                    </Segment.Group>
                </Segment.Group>
                </div>
            </div>
        </div>
    )
};

export default UserPreferences;
