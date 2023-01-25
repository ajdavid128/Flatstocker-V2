import RetailerCard from './RetailerCard';

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
            <div id="center-retailer-cards">
                <div id="retail-cards">
                    {retailerArray}
                </div>
            </div>
        </div>
    )
};

export default Retailers;