import { Table } from "semantic-ui-react";



function InventoryTable({item_name, image_url, current_stock, minimum_stock, notes, category, item_url, brand, color, unit_type, unit_amount, updated_date, updated_at, retailer}) {

    // console.log(updated_at.slice(0, 10))
    let date = new Date().toJSON().slice(0, 10);
    // console.log(date)

    const rowColor = () => {
        if (current_stock <= minimum_stock) {
            return(
            <Table.Row negative>
                <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
                <Table.Cell>{color}</Table.Cell>
                <Table.Cell>{current_stock} {unit_type}</Table.Cell>
                <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>{updated_date}</Table.Cell>
                <Table.Cell>{retailer.retailer_name}</Table.Cell>
                <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
                {/* <Table.Cell>{notes}</Table.Cell> */}
            </Table.Row>
            )
        } else if (current_stock === 1 + minimum_stock) {
            return (
            <Table.Row warning>
                <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
                <Table.Cell>{color}</Table.Cell>
                <Table.Cell>{current_stock} {unit_type}</Table.Cell>
                <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>{updated_date}</Table.Cell>
                <Table.Cell>{retailer.retailer_name}</Table.Cell>
                <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
                {/* <Table.Cell>{notes}</Table.Cell> */}
            </Table.Row>
            )
        } else if (updated_at.slice(0, 10) === date) {
            return (
            <Table.Row positive>
                <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
                <Table.Cell>{color}</Table.Cell>
                <Table.Cell>{current_stock} {unit_type}</Table.Cell>
                <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>{updated_date}</Table.Cell>
                <Table.Cell>{retailer.retailer_name}</Table.Cell>
                <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
                {/* <Table.Cell>{notes}</Table.Cell> */}
            </Table.Row>
            )
        } else {
            return (
            <Table.Row>
                <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
                <Table.Cell>{color}</Table.Cell>
                <Table.Cell>{current_stock} {unit_type}</Table.Cell>
                <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>{updated_date}</Table.Cell>
                <Table.Cell>{retailer.retailer_name}</Table.Cell>
                <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
                {/* <Table.Cell>{notes}</Table.Cell> */}
            </Table.Row>
            )
        }
    }
    
    

    return (
        <>
            <Table.Body>         
                    {rowColor()}
            </Table.Body>
        </>
    )
};

export default InventoryTable;











// const negativeRow = current_stock <= minimum_stock ? 
    //     <Table.Row negative>
    //         <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
    //         <Table.Cell>{color}</Table.Cell>
    //         <Table.Cell>{current_stock} {unit_type}</Table.Cell>
    //         <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
    //         <Table.Cell>{category}</Table.Cell>
    //         <Table.Cell>{updated_date}</Table.Cell>
    //         <Table.Cell>{retailer.retailer_name}</Table.Cell>
    //         <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
    //         {/* <Table.Cell>{notes}</Table.Cell> */}
    //     </Table.Row>
    //     :
    //     <Table.Row>
    //         <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
    //         <Table.Cell>{color}</Table.Cell>
    //         <Table.Cell>{current_stock} {unit_type}</Table.Cell>
    //         <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
    //         <Table.Cell>{category}</Table.Cell>
    //         <Table.Cell>{updated_date}</Table.Cell>
    //         <Table.Cell>{retailer.retailer_name}</Table.Cell>
    //         <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
    //         {/* <Table.Cell>{notes}</Table.Cell> */}
    //     </Table.Row>;


    // const warningRow = current_stock === 1 + minimum_stock ? 
    //         <Table.Row warning>
    //             <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
    //             <Table.Cell>{color}</Table.Cell>
    //             <Table.Cell>{current_stock} {unit_type}</Table.Cell>
    //             <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
    //             <Table.Cell>{category}</Table.Cell>
    //             <Table.Cell>{updated_date}</Table.Cell>
    //             <Table.Cell>{retailer.retailer_name}</Table.Cell>
    //             <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
    //             {/* <Table.Cell>{notes}</Table.Cell> */}
    //         </Table.Row>
    //         :
    //         <Table.Row>
    //             <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
    //             <Table.Cell>{color}</Table.Cell>
    //             <Table.Cell>{current_stock} {unit_type}</Table.Cell>
    //             <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
    //             <Table.Cell>{category}</Table.Cell>
    //             <Table.Cell>{updated_date}</Table.Cell>
    //             <Table.Cell>{retailer.retailer_name}</Table.Cell>
    //             <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
    //             {/* <Table.Cell>{notes}</Table.Cell> */}
    //         </Table.Row>;


    // const positiveRow = updated_at.slice(0, 10) === date ? 
    //         <Table.Row positive>
    //             <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
    //             <Table.Cell>{color}</Table.Cell>
    //             <Table.Cell>{current_stock} {unit_type}</Table.Cell>
    //             <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
    //             <Table.Cell>{category}</Table.Cell>
    //             <Table.Cell>{updated_date}</Table.Cell>
    //             <Table.Cell>{retailer.retailer_name}</Table.Cell>
    //             <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
    //             {/* <Table.Cell>{notes}</Table.Cell> */}
    //         </Table.Row>
    //         :
    //         <Table.Row>
    //             <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
    //             <Table.Cell>{color}</Table.Cell>
    //             <Table.Cell>{current_stock} {unit_type}</Table.Cell>
    //             <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
    //             <Table.Cell>{category}</Table.Cell>
    //             <Table.Cell>{updated_date}</Table.Cell>
    //             <Table.Cell>{retailer.retailer_name}</Table.Cell>
    //             <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
    //             {/* <Table.Cell>{notes}</Table.Cell> */}
    //         </Table.Row>;