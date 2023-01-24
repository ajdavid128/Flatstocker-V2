import { Card, Container, Input } from "semantic-ui-react";
import InventoryCard from "./InventoryCard";

function ItemizedInventory({inventory, setSearchItemized, setUpdateInventory, setRerender, errors, setErrors, retailers}) {

    const inventoryArray = inventory.map((eachInv) => {
        return <InventoryCard 
            key={eachInv.id} 
            {...eachInv} 
            retailers={retailers}
            errors={errors}
            setErrors={setErrors}
            inventory={inventory}
            setUpdateInventory={setUpdateInventory}
            setRerender={setRerender}
            />
    })

    const handleChange = (e) => {
        setSearchItemized(e.target.value);
    };

    return (
        <div>
            <h1>ITEMIZED INVENTORY PAGE</h1>
            <Container>
                <Input 
                    icon='search' 
                    placeholder='Search...' 
                    onChange={handleChange}
                />
            </Container>
            
            <Container>
                <Card.Group>
                    {inventoryArray}
                </Card.Group>
            </Container>
        </div>
    )
};

export default ItemizedInventory;