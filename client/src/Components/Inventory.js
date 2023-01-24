import { Container, Table } from "semantic-ui-react";
import InventoryCard from "./InventoryCard";
import InventoryTable from "./InventoryTable";

function Inventory({inventory}) {

let inventoryCopy = [...inventory]

// console.log(inventoryCopy)
const { compare } = Intl.Collator('en-US');

    const inventoryArray = inventoryCopy.sort((a, b) => compare(a.updated_at, b.updated_at)).reverse().map((eachInv) => {
        return <InventoryTable key={eachInv.id} {...eachInv}/>
    })


    return (
        <div>
            <h1>INVENTORY PAGE</h1>
            
                <Container>
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
                </Container>
           
        </div>
    )
};

export default Inventory;