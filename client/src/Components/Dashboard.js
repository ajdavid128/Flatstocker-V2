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
            <div id="dash-grid-cont">
                <div id="dash-grid-layout">
                    <div id="dash-welcome-cont">
                        <div>
                            <h1>Welcome back, {currentUser.name}!</h1>
                        </div>
                    </div>
                    
                    <div>
                        <div id="dash-date-cont">
                            <h4>Current Date/Time: {date}</h4>
                        </div>
                    </div>

                    <div id="dash-table-cont">
                        <Segment> 
                            <h2>Low Stock Warning:</h2>
                            <Table celled selectable color="red" inverted>
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

                    <div>
                        <Segment id="dash-avatar-seg">
                            <h1>Avatar?</h1>
                        </Segment>
                    </div>
                    
                    <div id="dash-itemRetCoun-cont">
                        <div id="item-retail-count">
                            <Segment className="item-retail-count-seg">
                                <h2>Inventory Count:</h2>
                                {itemCount} items
                            </Segment>
                            <Segment className="item-retail-count-seg">
                                <h2>Ordering From: a bunch of stuff</h2>
                                {retailerCount} retailers
                            </Segment>
                            <Segment className="item-retail-count-seg">
                            Days since last full inventory of all items:
                            <Button>Reset</Button>
                            </Segment>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;