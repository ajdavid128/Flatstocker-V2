import { useState } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";


function ModalDeleteUser({handleDeleteUser}) {
    const [open, setOpen] = useState(false)

    const handleDeleteAndClose = () => {
        handleDeleteUser();
        setOpen(false);
    };

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Button floated="right">Delete Account</Button>}
        >
            <Modal.Header>Delete Account</Modal.Header>
            <Modal.Content>ARE YOU ABSOLUTELY SURE YOU WANT TO DO THIS?</Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>No Just Kidding</Button>
                <Button negative color='red' inverted onClick={handleDeleteAndClose}>
                <Icon name='trash alternate' />DELETE MY ACCOUNT</Button>
            </Modal.Actions>
        </Modal>
    )
};

export default ModalDeleteUser;