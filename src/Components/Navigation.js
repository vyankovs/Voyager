import React, { Fragment, useState } from 'react'

import { Image } from 'react-bootstrap';
import Globe from './Slider/img/globe_PNG62.png'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";




export const Navigation = ({country}) => {
    const [isOpen, setOpen] = useState(false)

    function toggle() {
        setOpen(!isOpen);
    }

    return (
        <Fragment>

            <MDBNavbar color="unique-color" dark expand="md">
                <MDBNavbarBrand href="/"><Image width="50px" src={Globe} />
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={toggle} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <div style={{ width: 300 }} className="autocomplete">
                            <h2 style={{color: "white"}}>{country.charAt(0).toUpperCase() + country.slice(1)}</h2>
                            </div>
                        </MDBNavItem>
                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                        <MDBNavItem >
                            <MDBNavLink className="mr-4" to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        {/* <MDBNavItem>
                            <MDBNavLink className="mr-4" to="/whattodo">What to do</MDBNavLink>
                        </MDBNavItem> */}
                        
                    </MDBNavbarNav>

                </MDBCollapse>
            </MDBNavbar>

        </Fragment>
    )
}
