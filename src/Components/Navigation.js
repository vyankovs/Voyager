import React, { Fragment, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { Image } from 'react-bootstrap';
import Globe from './Slider/img/globe_PNG62.png'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 }
]


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
                            <div style={{ width: 300 }} className="autocomplete">
                                <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    options={top100Films.map((option) => option.title)}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Region, city, village" margin="normal" />
                                    )}
                                />
                            </div>
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
