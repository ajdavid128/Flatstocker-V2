import { Image, Table, Segment } from "semantic-ui-react";
// import InventoryCard from "./InventoryCard";
import InventoryTable from "./InventoryTable";
import Inky_knives from "../images/Inky_knives.png";

function Inventory({inventory}) {

let inventoryCopy = [...inventory]

// console.log(inventoryCopy)
const { compare } = Intl.Collator('en-US');

    const inventoryArray = inventoryCopy.sort((a, b) => compare(a.updated_at, b.updated_at)).reverse().map((eachInv) => {
        return <InventoryTable key={eachInv.id} {...eachInv}/>
    })


    return (
        <div id="all-inventory-page">
            <div id="inventory-header" >
                <Image className="inventory-header-images" src={Inky_knives}/>
                <h1 id="inventory-header-text">Inventory</h1>
                <Image className="inventory-header-images" src={Inky_knives}/>
            </div>

            <div id="legend">
                    <Segment.Group raised>
                        <Segment>White: Stock Levels Normal</Segment>
                        <Segment inverted color='green' tertiary>Green: Recently Added/Updated Item</Segment>
                        <Segment inverted color='yellow' tertiary>Yellow: Stock Level Approaching Minimum</Segment>
                        <Segment inverted color='red' tertiary>Red: Stock Level At/Below Minimum</Segment>
                    </Segment.Group>   
            </div>

            <div id="inventory-table-cont">
                <Segment id="inventory-table-seg">
                    <Table celled selectable collapsing>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Item</Table.HeaderCell>
                                <Table.HeaderCell>Color</Table.HeaderCell>
                                <Table.HeaderCell>Current Stock</Table.HeaderCell>
                                <Table.HeaderCell>Min. Stock</Table.HeaderCell>
                                <Table.HeaderCell>Category</Table.HeaderCell>
                                <Table.HeaderCell>Updated On</Table.HeaderCell>
                                <Table.HeaderCell>Retailer</Table.HeaderCell>
                                <Table.HeaderCell>URL</Table.HeaderCell>
                                {/* <Table.HeaderCell>Notes</Table.HeaderCell> */}
                            </Table.Row>
                        </Table.Header>
                        {inventoryArray}
                    </Table> 
                </Segment>
                </div>
           <div id="inventory-table-spacer">space</div>
        </div>
    )
};

export default Inventory;