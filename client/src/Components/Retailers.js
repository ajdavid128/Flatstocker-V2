import RetailerCard from './RetailerCard';
import Tape from "../images/Tape.png";
import Inky_knife from "../images/Inky_knife.png";
import { Image } from 'semantic-ui-react';


function Retailers({currentUser, setUpdateRetailer, setRerender, errors, setErrors, retailers}) {

    let retailersCopy = [...currentUser.unique_retailers]
    
    const { compare } = Intl.Collator('en-US');

    const retailerArray = retailersCopy.sort((a, b) => compare(a.retailer_name, b.retailer_name)).map((eachRetailer) => {
        return <RetailerCard 
            key={eachRetailer.id} 
            {...eachRetailer}
            setUpdateRetailer={setUpdateRetailer}
            setRerender={setRerender}
            errors={errors}
            setErrors={setErrors}
            retailers={retailers}
            />
    })


    return (
        <div id="retailer-page">
            <div id="retailer-header">
                <Image className="retailer-header-image" src={Inky_knife}/>
                <h1 id="retailer-header-text">Retailers</h1>
                <Image className="retailer-header-image2" src={Tape}/>
            </div>
            <div id="center-retailer-cards">
                <div id="retail-cards">
                    {retailerArray}
                </div>
            </div>
        </div>
    )
};

export default Retailers;