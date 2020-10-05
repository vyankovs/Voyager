import React, { Fragment } from 'react'
import { FiSearch } from 'react-icons/fi';
import {  Image } from 'react-bootstrap';
import Globe from './Slider/img/globe_PNG62.png'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';



export const Search = () => {

    return (
        <Fragment>
            <div id="search-menu" expand="lg">
                <a className="navbar-brand" href="/"><Image width="50px" src={Globe} /></a>

                <div style={{ width: 300 }}>
                    <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        options={top100Films.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField {...params} label="Region, city, village" margin="normal" />
                        )}
                    />
                </div>


            </div>

        </Fragment >
    )
}


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