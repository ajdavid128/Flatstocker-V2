import { Dropdown, Image, Menu } from "semantic-ui-react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Fs_logo from "../images/Fs_logo.png";
// import Tape from "../images/Tape.png";


function NavBar({currentUser, setCurrentUser, errors, setErrors}) {

    let navigate = useNavigate();

    // LOGOUT:
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok) {
        setCurrentUser(null);
        navigate("/");
      }
    });
    setErrors([]);
  };

  const handleClearError = () => {
    setErrors([]);
};

//   const LandingNav = () => {
//     return (
//         <>           
//             <Menu.Item name="About"/>
//             <Menu.Menu position="right">
//                 <Menu.Item name="Login"/>
//                 {/* ADD LINK ROUTE TO SIGNUP PAGE/LOGIN PAGE */}
//             </Menu.Menu>
//         </>
//     )
//   }

    
    return (
        <>
            <Menu id="navbar" pointing secondary>
                {/* {currentUser && currentUser ?
                <> */}
                <div id="nav-logo-cont">
                    <Link to="/dashboard">
                        <Image id="nav-logo" src={Fs_logo} />
                    </Link>
                </div>
                <div id="space">

                </div>
                    <Link to="/dashboard">
                        <Menu.Item id="dash-item" name="Dashboard" onClick={handleClearError}/>
                    </Link>    
                    <Dropdown item text="Inventory">
                        <Dropdown.Menu>
                            <Link to="/inventory">
                                <Dropdown.Item onClick={handleClearError}>All Inventory</Dropdown.Item>
                            </Link>
                            <Link to="/inventory/itemized">
                                <Dropdown.Item onClick={handleClearError}>Itemized Inventory</Dropdown.Item>
                            </Link>
                            <Link to="/form/new/inventory">
                                <Dropdown.Item onClick={handleClearError}>Add Inventory</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text="Retailers">
                        <Dropdown.Menu>
                            <Link to="/retailers">
                                <Dropdown.Item onClick={handleClearError}>All Retailers</Dropdown.Item>
                            </Link>
                            <Link to="form/new/retailer">
                                <Dropdown.Item onClick={handleClearError}>Add Retailer</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Menu position="right">
                        {/* <Image id="nav-tape-image" src={Tape}/> */}
                        <Dropdown item text="Settings">
                            <Dropdown.Menu>
                                <Link to="/preferences">
                                    <Dropdown.Item onClick={handleClearError}>User Preferences</Dropdown.Item>
                                </Link>
                                {/* <Link to="/about">
                                    <Dropdown.Item>About Flatstocker</Dropdown.Item>
                                </Link> */}
                                {/* use Navigate to redirect the logout to the login page */}
                                <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                {/* </>
                : null } */}
            </Menu>
            <Outlet />
        </>
    )
};

export default NavBar;