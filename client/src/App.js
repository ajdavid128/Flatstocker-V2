import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

import NavBar from './Components/NavBar';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Inventory from './Components/Inventory';
import InventoryForm from './Components/InventoryForm';
import ItemizedInventory from './Components/ItemizedInventory';
import LandingPage from './Components/LandingPage';
import RetailerForm from './Components/RetailerForm';
import Retailers from './Components/Retailers';
import SignupForm from './Components/SignupForm';
import UserPreferences from './Components/UserPreferences';
import LoginForm from './Components/LoginForm';
import NotFound from './Components/NotFound';
import PleaseLogin from './Components/PleaseLogin';
import AboutGuest from './Components/AboutGuest';


function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [retailers, setRetailers] = useState([]);
  const [updateEmail, setUpdateEmail] = useState([]);
  const [updateInventory, setUpdateInventory] = useState([]);
  const [updateRetailer, setUpdateRetailer] = useState([]);
  const [rerender, setRerender] = useState([]);
  const [newRetailer, setNewRetailer] = useState({
    retailer_name: "",
    website_url: "",
    phone: "",
    email: ""
  });

  const [newItem, setNewItem] = useState({
    item_name: "",
    brand: "",
    color: "",
    category: "",
    current_stock: 0,
    minimum_stock: 0,
    unit_type: "",
    notes: "",
    retailer_id: 0,
    item_url: "",
    image_url: ""
});

const [searchItemized, setSearchItemized] = useState("");

const itemizedFilterArray = inventory.filter((eachInv) => {
  return eachInv.item_name.toLowerCase().includes(searchItemized.toLowerCase()) || eachInv.brand.toLowerCase().includes(searchItemized.toLowerCase()) || eachInv.retailer.retailer_name.toLowerCase().includes(searchItemized.toLowerCase()) || eachInv.color.toLowerCase().includes(searchItemized.toLowerCase()) || eachInv.category.toLowerCase().includes(searchItemized.toLowerCase())
});
  

  // STAY LOGGED IN:
  useEffect(() => {
    fetch("/me")
    .then(res => {
      if(res.ok){
        res.json()
        .then(user => {
          setCurrentUser(user)
          // console.log(user)
        })
      }
    });
  }, [updateEmail]);

// FETCH INVENTORY FOR USER
  useEffect(()=>{
    fetch("/items")
    .then(res => {
      if(res.ok){
        res.json()
        .then(setInventory)
      }
    })
  }, [currentUser, rerender, updateInventory, updateRetailer])

  // console.log(inventory)

  // FETCH RETAILERS 
  useEffect(()=>{
    fetch("/retailers")
    .then(res => {
      if(res.ok){
        res.json()
        .then(setRetailers)
      }
    })
  }, [currentUser, newItem, updateRetailer, rerender, updateInventory, inventory])
  


  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route index element={
              <LandingPage 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                errors={errors}
                setErrors={setErrors}
              />}/>
        <Route path="signup" element={
              <SignupForm
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                errors={errors}
                setErrors={setErrors}
              />
            }/>
          <Route path="info" element={<AboutGuest />}/>
        {currentUser && currentUser ? <>
          <Route path="/" element={
            <NavBar 
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              errors={errors}
              setErrors={setErrors}
            />
          }>
            <Route path="about" element={<About/>}/>
            <Route path="dashboard" element={
              <Dashboard
                currentUser={currentUser}
                inventory={inventory}
              />
            }/>
            <Route path="inventory" element={<Inventory inventory={inventory}/>}/>
            <Route path="inventory/itemized" element={
              <ItemizedInventory
                retailers={retailers}
                errors={errors}
                setErrors={setErrors} 
                inventory={itemizedFilterArray}
                setSearchItemized={setSearchItemized}
                setUpdateInventory={setUpdateInventory}
                setRerender={setRerender}
              />
            }/>
            <Route path="form/new/inventory" element={
              <InventoryForm 
                currentUser={currentUser}
                setRerender={setRerender}
                newItem={newItem}
                setNewItem={setNewItem}
                setInventory={setInventory}
                retailers={retailers}
                errors={errors}
                setErrors={setErrors}
              />
            }/>
            <Route path="retailers" element={
              <Retailers
                retailers={retailers}
                currentUser={currentUser}
                setUpdateRetailer={setUpdateRetailer}
                setRerender={setRerender}
                errors={errors}
                setErrors={setErrors}
              />
            }/>
            <Route path="form/new/retailer" element={
              <RetailerForm
                setRerender={setRerender}
                setRetailers={setRetailers}
                newRetailer={newRetailer}
                setNewRetailer={setNewRetailer}
                errors={errors}
                setErrors={setErrors}
              />
            }/>
            <Route path="login" element={<LoginForm/>}/>
            <Route path="preferences" element={
              <UserPreferences 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                updateEmail={updateEmail}
                setUpdateEmail={setUpdateEmail}
                errors={errors}
                setErrors={setErrors}
              />
            }/>
            <Route path="*" element={<NotFound/>}/> 
          </Route>
          </> : 
            <Route path="/nope" element={<PleaseLogin/>}/> }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
