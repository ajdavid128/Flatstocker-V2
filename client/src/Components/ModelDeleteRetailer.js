import { useState } from "react";
import { Label, Icon, Modal, Button } from "semantic-ui-react";

function ModalDeleteRetailer({handleDeleteRetailer}) {
    const [open, setOpen] = useState(false)

    const handleDeleteAndClose = () => {
        handleDeleteRetailer();
        setOpen(false);
    };

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={
                <Label as="a" attached='bottom right' color="red" size="small">
                    <Icon name="trash"/>Delete
                </Label>
            }
        >
            <Modal.Header>Delete Retailer</Modal.Header>
            <Modal.Content>ARE YOU ABSOLUTELY SURE YOU WANT TO DO THIS?</Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>No Just Kidding!</Button>
                <Button negative color='red' inverted onClick={handleDeleteAndClose}>
                <Icon name='trash alternate' />DELETE RETAILER!</Button>
            </Modal.Actions>
        </Modal>
    )
};
export default ModalDeleteRetailer;