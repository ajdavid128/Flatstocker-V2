import { Container, Divider, Form, Input, Segment, Select, Button, Popup, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

function InventoryForm({newItem, setNewItem, retailers, setInventory, errors, setErrors, setRerender, currentUser}) {
    
    let navigate = useNavigate();

    // console.log(newItem)
    
    // "currentUser.unique_retailers" <- use this in place of "retailers" to map over if I want to only display which retailers a user already utilizes with their inventory

    const handleRetailers = retailers.map((r) => {
        return (
            <option key={r.id} value={r.id} >
                {r.retailer_name}
            </option>
        )
    });


    const handleSubmitNewItem = (e) => {
        e.preventDefault();
        fetch("/items", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newItem)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setInventory([data]);
                    setRerender(data);
                    navigate("/inventory");
                })
            } else {
                res.json().then(data => setErrors(data.errors));
            }
        })
        setNewItem({
            item_name: "",
            brand: "",
            color: "",
            category: "",
            current_stock: 0,
            minimum_stock: 0,
            unit_type: "",
            notes: "",
            retailer_id: 0,
            item_url: "",
            image_url: ""
        });
    };


    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewItem({
            ...newItem, [key]: value
        });
        // console.log(e.target.value)
    };
    
    const iconTag = <p>Category: <Popup content='Add users to your feed' trigger={<Icon name='tags' />} /></p>

    return (
        <div id="inventory-form-page">
            <div>
            
                <div id="invForm-cont">
                    <Segment size="huge" id="invForm-seg"><b>Add Item to Inventory:</b>
                    <Divider></Divider>
                        <Form onSubmit={handleSubmitNewItem}>
                            <Form.Group>
                                <Form.Input 
                                    control={Input}
                                    label="Item Name:"
                                    type="text"
                                    name="item_name"
                                    placeholder="Acrylic Screen Print Ink"
                                    value={newItem.item_name}
                                    onChange={handleChange}
                                />
                                <Form.Input 
                                    control={Input}
                                    label="Brand:"
                                    type="text"
                                    name="brand"
                                    placeholder="Speedball"
                                    value={newItem.brand}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input 
                                    control={Input}
                                    label="Color:"
                                    type="text"
                                    name="color"
                                    placeholder="Black"
                                    value={newItem.color}
                                    onChange={handleChange}
                                />
                                <Form.Input 
                                    control={Input}
                                    label={iconTag}
                                    type="text"
                                    name="category"
                                    placeholder="Ink"
                                    value={newItem.category}
                                    onChange={handleChange}
                                />
                                <Popup id="cat-icon" content='Add users to your feed' trigger={<Icon name='tags' />} />
                            </Form.Group>
                            <Form.Group>
                            <Form.Input 
                                    control={Input}
                                    label="Current Stock:"
                                    type="number"
                                    name="current_stock"
                                    // placeholder=""
                                    value={newItem.current_stock}
                                    onChange={handleChange}
                                />
                                <Form.Input 
                                    control={Input}
                                    label="Minimum Stock:"
                                    type="number"
                                    name="minimum_stock"
                                    // placeholder=""
                                    value={newItem.minimum_stock}
                                    onChange={handleChange}
                                />
                                <Form.Field                                 
                                    control='select' 
                                    label='Unit Type:'
                                    name="unit_type" 
                                    value={newItem.unit_type}
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
                                    <option value='item(s)'>items</option>
                                    <option value='pack(s)'>packs</option>
                                    <option value='can(s)'>cans</option>
                                    <option value='bottle(s)'>bottles</option>
                                    <option value='roll(s)'>rolls</option>
                                    <option value='box(es)'>boxes</option>
                                    <option value='case(s)'>cases</option>
                                    <option value='carton(s)'>cartons</option>
                                    <option value='container(s)'>containers</option>
                                    <option value='drum(s)'>drums</option>
                                    <option value='pallet(s)'>pallets/skids</option>
                                    <option value='crate(s)'>crates</option>
                                </Form.Field>
                            </Form.Group>
                            <Form.TextArea 
                                label='Notes about item or special ordering details:' 
                                type="text"
                                name="notes"
                                placeholder='Order multiple gallons at a time...'
                                value={newItem.notes}
                                onChange={handleChange}
                            />
                            <Form.Field                            
                                control='select'
                                label='Retailer:' 
                                name="retailer_id" 
                                value={newItem.retailer_id} 
                                onChange={handleChange} 
                                
                            >
                                <option value=''>select</option>
                                {handleRetailers}
                            </Form.Field>
                            <p >Is your Retailer not listed? <u onClick={()=> {navigate('/form/new/retailer');}}>Click here to add a new one.</u></p>
                            <Form.Group>
                                <Form.Input 
                                    control={Input}
                                    label="Item URL:"
                                    type="url"
                                    name="item_url"
                                    placeholder="https://screenprinting..."
                                    value={newItem.item_url}
                                    onChange={handleChange}
                                />
                                <Form.Input 
                                    control={Input}
                                    label="Image URL:"
                                    type="url"
                                    name="image_url"
                                    placeholder="https://screenprinting..."
                                    value={newItem.image_url}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <div>
                                {errors? errors.map(e => { return <p className="error" key={e}>• {e}</p>}) : null}
                            </div>
                            <div id="invent-form-submit">
                                <Form.Button>Submit</Form.Button>
                            </div>
                        </Form>
                    </Segment>
                </div>
            </div>
        </div>
    )
};

export default InventoryForm;