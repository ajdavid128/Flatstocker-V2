import { Button, Segment, Table } from "semantic-ui-react";
import DashLowStock from "./DashLowStock";

function Dashboard({currentUser, inventory}) {

    let date = new Date().toLocaleDateString();
    console.log(date)

    const lowstock = inventory.map((eachInv) => {
        return <DashLowStock key={eachInv.id} {...eachInv}/>
    })

    // console.log(currentUser)

    let itemCount = currentUser.items.length;
    let retailerCount = currentUser.unique_retailers.length;

   
    return (
        <div id="dash">
            <div>
                <h1>Welcome back, {currentUser.name}!</h1>
            </div>
            <div> Is this really happening</div>
            <div>
                <h4>Current Date/Time: {date}</h4>
            </div>
            <div>
                <Segment>Current low-stock/out-of-stock
                    <Table celled selectable collapsing color="red" inverted>
                    <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Item</Table.HeaderCell>
                                <Table.HeaderCell>Color</Table.HeaderCell>
                                <Table.HeaderCell>Current Stock</Table.HeaderCell>
                                <Table.HeaderCell>Min. Stock</Table.HeaderCell>
                                <Table.HeaderCell>Category</Table.HeaderCell>
                                <Table.HeaderCell>URL</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {lowstock}
                    </Table>
                </Segment>
            </div>
            
            <div id="item-retail-count">
                <Segment>
                    <h2>Inventory Count:</h2>
                    {itemCount} items
                </Segment>
                <Segment>
                    <h2>Ordering From:</h2>
                    {retailerCount} retailers
                </Segment>
                <Segment>
                Days since last full inventory of all items:
                 <Button>Reset</Button>
                </Segment>
            </div>
            
            

           
        </div>
    )
};

export default Dashboard;