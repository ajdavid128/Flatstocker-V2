import { Card, Image, Input } from "semantic-ui-react";
import InventoryCard from "./InventoryCard";
import Spill from "../images/Spill.png";
import Splatter from "../images/Splatter.png";

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
            
            <div id="itemized-header">
                <Image className="itemized-header-images" src={Splatter}/>
                <h1 id="itemized-header-text">Itemized Inventory</h1>
                <Image className="itemized-header-images" src={Spill}/>
            </div>
            <div id="itemized-search-bar">
                <Input 
                    icon='search' 
                    placeholder='Search...' 
                    onChange={handleChange}
                />
            </div>
                <div>
                    <Card.Group id="itemized-card-cont">
                        {inventoryArray}
                    </Card.Group>
                </div>
                <div id="itemized-spacer">Space</div>
        </div>
    )
};

export default ItemizedInventory;