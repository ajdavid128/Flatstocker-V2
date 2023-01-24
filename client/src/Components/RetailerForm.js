import { Container, Divider, Form, Segment, Input } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";


function RetailerForm({setRerender, setRetailers, newRetailer, setNewRetailer, errors, setErrors}) {

        let navigate = useNavigate();

    const handleSubmitNewRetailer = (e) => {
        e.preventDefault();
        fetch("/retailers", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newRetailer)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setRetailers([data]);
                    setRerender(data);
                    navigate("/inventory");
                })
            } else {
                res.json().then(data => setErrors(data.errors));
            }
        })
        setNewRetailer({
            retailer_name: "",
            website_url: "",
            phone: "",
            email: ""
        });
    };

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewRetailer({
            ...newRetailer, [key]: value
        });
    };

    return (
        <div>
            <h1>RETAILER FORM PAGE</h1>
            <Container>
                <Segment size="huge"><b>Add Retailer:</b>
                <Divider></Divider>
                    <Form onSubmit={handleSubmitNewRetailer}>
                        <Form.Input 
                            control={Input}
                            label="Retailer Name:"
                            type="text"
                            name="retailer_name"
                            placeholder="Ryonet"
                            value={newRetailer.retailer_name}
                            onChange={handleChange}
                        />
                        <Form.Input 
                            control={Input}
                            label="Website URL:"
                            type="url"
                            name="website_url"
                            placeholder="https://screenprinting..."
                            value={newRetailer.website_url}
                            onChange={handleChange}
                        />
                        <Form.Input 
                            control={Input}
                            label="Phone Number:"
                            type="tel"
                            name="phone" 
                            placeholder="234-567-8901" 
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={newRetailer.phone}
                            onChange={handleChange}
                        />
                        <small>Format: 234-567-8901</small>
                        <br/><br/>
                        <Form.Input 
                            control={Input}
                            label="Email:"
                            type="email"
                            name="email"
                            placeholder="print@example.com"
                            value={newRetailer.email}
                            onChange={handleChange}
                        />
                        <div>
                            {errors? errors.map(e => { return <p key={e}>{e}</p>}) : null}
                        </div>
                        <Form.Button>Submit</Form.Button>
                    </Form>
                </Segment>
            </Container>
        </div>
    )
};

export default RetailerForm;