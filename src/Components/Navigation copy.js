import React, { Fragment, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { Image } from 'react-bootstrap';
import Globe from './project_img/globe_PNG62.png'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

export const Navigation = () => {
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
                            <MDBFormInline waves>
                                <div className="md-form my-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Region, city, village" aria-label="Search" />
                                </div>
                            </MDBFormInline>
                        </MDBNavItem>
                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                        <MDBNavItem >
                            <MDBNavLink className="mr-4" to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="mr-4" to="/whattodo">What to do</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle className="mr-4" nav caret>
                                    <span className="mr-2">Check Flights</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>

                </MDBCollapse>
            </MDBNavbar>

        </Fragment >
    )
}
