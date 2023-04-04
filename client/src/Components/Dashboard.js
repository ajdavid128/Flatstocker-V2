import { Image, Segment, Table } from "semantic-ui-react";
import DashLowStock from "./DashLowStock";
import Dribble from "../images/Dribble.png";
import { Link } from "react-router-dom";

function Dashboard({currentUser, inventory, retailers}) {

    // let date = new Date().toLocaleDateString();
    let date = new Date().toDateString()
    // let time = new Date().toLocaleTimeString()
    // console.log(retailers.length)

    const lowstock = inventory.map((eachInv) => {
        return <DashLowStock key={eachInv.id} {...eachInv}/>
    })

    // console.log(currentUser)

    let itemCount = currentUser.items.length;
    let retailerCount = currentUser.unique_retailers.length;

   
    return (
        <div id="dash">
            <div id="dash-grid-cont">

                    <div id="v1-welcome-time">
                        <div id="dash-welcome-cont">
                            <div id="avatar-div-cont">
                                <Link to="/preferences">
                                    <Segment id="welcome-avatar"> 
                                        <Image src={Dribble}/>
                                    </Segment>
                                </Link>
                            </div>
                            <div>
                                <h1 id="welcome-h1">
                                    Welcome back, {currentUser.name}!
                                </h1>
                            </div>
                        </div>
                        
                        <div>
                            <div id="dash-date-cont">
                                <h1 id="date-h1">{date}</h1>
                            </div>
                        </div>
                    </div>

                <div id="dash-grid-layout">
                    
                    

                    {/* <div>
                        <Segment id="dash-graph-seg">
                            <h1>chart/graph</h1>
                        </Segment>
                    </div> */}
                    
                    <div id="dash-itemRetCoun-cont">
                        <div id="item-retail-count">
                            <div className="item-retail-count-seg-cont">
                                <Segment className="item-retail-count-seg">
                                    <h4>Total Inventory Count:</h4>
                                    <div className="item-retail-count-number">
                                        <b>
                                            {itemCount}
                                        </b>
                                    </div> 
                                    <div className="item-retail-count-number-name">
                                        <b>Items</b>
                                    </div>
                                </Segment>
                            </div>
                            <div className="item-retail-count-seg-cont">
                                <Segment className="item-retail-count-seg">
                                    <h4>Sourcing From:</h4>
                                    <div className="item-retail-count-number">
                                        <b>
                                            {retailerCount}
                                        </b>
                                    </div>
                                    <div className="item-retail-count-number-name">
                                        <b>Retailers</b>
                                    </div>
                                </Segment>
                            </div>
                            <div className="item-retail-count-seg-cont">
                                <Segment className="item-retail-count-seg">
                                    <h4>Retailers On File:</h4>
                                    <div className="item-retail-count-number">
                                        <b>
                                            {retailers.length}
                                        </b>
                                    </div>
                                </Segment>
                            </div>
                            {/* <div className="item-retail-count-seg-cont">
                                <Segment className="item-retail-count-seg">
                                    <h4>Days Since Last Full Inventory:</h4>
                                    <div className="item-retail-count-number">
                                        <b>
                                            0
                                        </b>
                                    </div>
                                    <div className="item-retail-count-number-name">
                                        <Button size="mini">Reset</Button>
                                    </div>
                                </Segment>
                            </div> */}
                        </div>
                    </div>
                    <div id="dash-table-cont">
                        <Segment id="dash-table-seg"> 
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
                </div>
            </div>
        </div>
    )
};

export default Dashboard;