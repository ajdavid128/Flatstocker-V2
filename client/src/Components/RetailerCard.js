import { Card, Label, Icon, Form, Input } from "semantic-ui-react";
// import ModalDeleteRetailer from "./ModelDeleteRetailer";
import { useState } from "react";

function RetailerCard({id, retailer_name, website_url, phone, email, errors, setErrors, setUpdateRetailer, setRerender, retailers}) {


    const [toggleEdit, setToggleEdit] = useState(false);
    const [editRetailer, setEditRetailer] = useState({
        retailer_name: retailer_name,
        website_url: website_url,
        phone: phone,
        email: email
    });

    const handleEditRetailer = () => {
        setToggleEdit(!toggleEdit)
    };

    const handleChange = (e) => {
        setEditRetailer({
            ...editRetailer,
            [e.target.name]: e.target.value
        })
    };

    const confirmedEdit = (e) => {
        e.preventDefault();
        e.preventDefault();
        fetch(`/retailers/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editRetailer)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setUpdateRetailer([...retailers, data])
                    setRerender(data)
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
        setToggleEdit(!toggleEdit)
    };

    const handleDeleteRetailer = () => {
        fetch(`/retailers/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setRerender(data)
                })
            } else {
                res.json().then(console.log("oops, it's a no go"))
            }
        })
    };

    return (
        <div>
            {!toggleEdit ?
            <Card.Group>
                <Card>


                    {/* THIS FUNCTIONALITY CONNOT BE PREFORMED WITH CURRENT MODEL ASSOCIATIONS BECAUSE ALL USERS WILL BE EFFECTED */}


                    {/* <Label as="a" attached='bottom left' size="small" onClick={handleEditRetailer}>
                        <Icon name="edit"/>Edit
                    </Label>
                    <ModalDeleteRetailer handleDeleteRetailer={handleDeleteRetailer}/> */}


                    
                    <Card.Content>
                        <Card.Header>{retailer_name}</Card.Header>
                        <Card.Meta><a href={website_url} target="_blank" rel="noopener noreferrer">website</a></Card.Meta>
                        <Card.Description>phone: {phone}</Card.Description>
                        <Card.Description>email: {email}</Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>

            :

            <Card.Group>
                <Card>
                    <Label as="a" attached='bottom left' size="small" onClick={handleEditRetailer}>
                        <Icon name="x"/>NEVERMIND
                    </Label>
                    <Label as="a" attached='bottom right' color="green" size="small" onClick={confirmedEdit}>
                        <Icon name="check"/>Confirm
                    </Label>
                    <Card.Content>
                        <Form onSubmit={confirmedEdit}>
                            
                            <Form.Input 
                                    control={Input}
                                    label="Retailer Name:"
                                    type="text"
                                    name="retailer_name"
                                    value={editRetailer.retailer_name}
                                    onChange={handleChange}
                                />
                            <Form.Input 
                                control={Input}
                                label="Website URL:"
                                type="url"
                                name="website_url"
                                value={editRetailer.website_url}
                                onChange={handleChange}
                            />
                            <Form.Input 
                                control={Input}
                                label="Phone Number:"
                                type="tel"
                                name="phone" 
                                value={editRetailer.phone}
                                onChange={handleChange}
                            />
                            <small>Format: 234-567-8901</small>
                            <br/><br/>
                            <Form.Input 
                                control={Input}
                                label="Email:"
                                type="email"
                                name="email"
                                value={editRetailer.email}
                                onChange={handleChange}
                            />
                        </Form>
                    </Card.Content>
                </Card>
            </Card.Group>

            }
        </div>
    )
};

export default RetailerCard;