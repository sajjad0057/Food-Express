import {Navbar,NavbarBrand} from "reactstrap"



const Navigation = () =>{
    return(
        <div>
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">
                        REs | tauRanT
                    </NavbarBrand>
                </div>
                
            </Navbar>

        </div>
    )
}


export default Navigation;