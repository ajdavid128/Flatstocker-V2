import { useState } from "react";
import { Card, Image, Icon, Divider, Label, Form, Input} from "semantic-ui-react";
import ModalDeleteItem from "./ModalDeleteItem";

function InventoryCard({id, item_name, image_url, current_stock, minimum_stock, notes, category, item_url, brand, color, unit_type, retailer_id, updated_date, retailer, setUpdateInventory, setRerender, inventory, errors, setErrors, retailers}) {

    // console.log(retailer_id)
   
    const [toggleEdit, setToggleEdit] = useState(false);
    const [editStockNote, setEditStockNote] = useState({
        current_stock: current_stock,
        unit_type: unit_type,
        minimum_stock: minimum_stock,
        retailer_id: retailer_id,
        notes: notes
    });

    const handleRetailers = retailers.map((r) => {
        return (
            <option key={r.id} value={r.id} >
                {r.retailer_name}
            </option>
        )
    });

    const handleEditItem = () => {
        setToggleEdit(!toggleEdit)
    };
    
    const handleChange = (e) => {
        setEditStockNote({
            ...editStockNote,
            [e.target.name]: e.target.value
        })
    };

    const confirmedEdit = (e) => {
        e.preventDefault();
        fetch(`/items/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editStockNote)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setUpdateInventory([...inventory, data])
                    setRerender(data)
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
        setToggleEdit(!toggleEdit)
    }


    const handleDeleteItem = () => {
        fetch(`/items/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setRerender(data)
                })
            } else {
                res.json().then(console.log("well dang"))
            }
        })   
    };





    return (
        <>
            {!toggleEdit ?
            <Card>
                <Label as="a" attached='bottom left' size="small" onClick={handleEditItem}>
                    <Icon name="edit"/>Edit
                </Label>
                <ModalDeleteItem handleDeleteItem={handleDeleteItem}/>
                
                <Card.Content>    
                    <div className="item-card-image">             
                        <Image src={image_url}  size="small"/>  
                    </div>                    
                    <Card.Content>
                    
                        <Card.Header>
                            <h2>{brand === "" ? item_name : `${brand}: ${item_name}`}</h2>
                        </Card.Header>
                        <Divider></Divider>
                        <div className="card-detail-content">
                            <Card.Description size="large">
                                <h3>Category:</h3> {category}
                            </Card.Description>
                        
                            <Card.Description><h3>Color:</h3> {color}</Card.Description>
                        
                            <Card.Description><h3>Current Stock:</h3> {current_stock} {unit_type}</Card.Description>
                            <Card.Description><h3>Minimum Stock:</h3> {minimum_stock} {unit_type}</Card.Description>
                            <Card.Description>
                            <h3>Retailer:</h3> <a href={item_url} target="_blank" rel="noopener noreferrer">{retailer.retailer_name}</a>
                            </Card.Description>
                        </div>
                        <Card.Description><h3>Notes:</h3> {notes}</Card.Description>
                    </Card.Content>    
                </Card.Content>
                <Card.Content extra>
                    
                </Card.Content>
            </Card>

            :

            <Card>   
                <Label as="a" attached='bottom left' size="small" onClick={handleEditItem}>
                    <Icon name="x"/>NEVERMIND
                </Label>
                <Label as="a" attached='bottom right' color="green" size="small" onClick={confirmedEdit}>
                     <Icon name="check"/>Confirm
                </Label>
                <Card.Content>
                    <div className="item-card-image">                     
                        <Image src={image_url}  size="small"/>
                    </div>                   
                    <Card.Content>
                        <Card.Header>
                            <h2>{brand === "" ? item_name : `${brand}: ${item_name}`}</h2>
                        </Card.Header>
                        <Divider></Divider>

                        <div className="card-detail-content">

                            <Card.Description size="large">
                                <h3>Category:</h3> {category}
                            </Card.Description>
                            <Card.Description><h3>Color:</h3> {color}</Card.Description>

                            <Form onSubmit={confirmedEdit}>
                                <Card.Description>
                                    <h3>Current Stock:</h3>
                                    <Form.Input
                                        control={Input}
                                        name="current_stock"
                                        value={editStockNote.current_stock}
                                        onChange={handleChange}
                                    />                       
                                </Card.Description>
                                <Card.Description>
                                    <h3>Minimum Stock:</h3> Currently: {minimum_stock} {unit_type}
                                    <Form.Input
                                        control={Input}
                                        name="minimum_stock"
                                        value={editStockNote.minimum_stock}
                                        onChange={handleChange}
                                    />
                                <Form.Field                                 
                                    control='select' 
                                    label='Unit Type:'
                                    name="unit_type" 
                                    value={editStockNote.unit_type}
                                    onChange={handleChange}                                
                                >
                                    <option value=''>select</option>
                                    <option value='mm'>millimeters (mm)</option>
                                    <option value='cm'>centimeters (cm)</option>
                                    <option value='m'>meters (m)</option>       
                                    <option value='in'>inches (in)</option>
                                    <option value='ft'>feet (ft)</option>
                                    <option value='yd'>yards (yd)</option>
                                    <option value='ml'>millileters (ml)</option>
                                    <option value='L'>liters (L)</option>
                                    <option value='fl oz'>fluid ounces (fl oz)</option>
                                    <option value='pt'>pints (pt)</option>
                                    <option value='qt'>quarts (qt)</option>
                                    <option value='gal'>gallons (gal)</option>
                                    <option value='g'>grams (g)</option>
                                    <option value='kg'>kilograms (kg)</option>
                                    <option value='oz'>ounces (oz)</option>
                                    <option value='lb(s)'>pounds (lbs)</option>
                                    <option value='ton(s)'>tons (tons)</option>
                                    <option value='pack(s)'>packs</option>
                                    <option value='roll(s)'>rolls</option>
                                    <option value='box(es)'>boxes</option>
                                    <option value='case(s)'>cases</option>
                                    <option value='carton(s)'>cartons</option>
                                    <option value='container(s)'>containers</option>
                                    <option value='drum(s)'>drums</option>
                                    <option value='pallet(s)'>pallets/skids</option>
                                    <option value='crate(s)'>crates</option>
                                    </Form.Field>
                                </Card.Description>
                                <Card.Description>
                                <h3 id="itemized-card-retailer-h3">Retailer:</h3> 
                                <Form.Field                            
                                    control='select'
                                    label='Retailer:' 
                                    name="retailer_id" 
                                    value={editStockNote.retailer_id} 
                                    onChange={handleChange} 
                                    
                                >
                                <option value=''>select</option>
                                {handleRetailers}
                            </Form.Field>
                                </Card.Description>
                                
                                <Card.Description>
                                    <h3>Notes:</h3>
                                    <Form.TextArea 
                                        type="text"
                                        name="notes"
                                        value={editStockNote.notes}
                                        onChange={handleChange}
                                    />
                                </Card.Description>
                            </Form>
                        </div>
                    </Card.Content> 
      
                </Card.Content>
                <Card.Content extra>                
                {errors? errors.map(e => { return <p key={e}>{e}</p>}) : null}             
                </Card.Content>
            </Card>
            }
        </>
    )
};

export default InventoryCard;