import React, { Fragment, useState, useEffect } from 'react'

import {  Image } from 'react-bootstrap';
import Globe from './Slider/img/globe_PNG62.png'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';



 export const Search = () => {
     const [countries, setCountries] = useState ([]);
    //  const [countrySelected, setCountrySelected] = useState ('');

     useEffect(()=>{
        fetch('http://country.io/names.json').then((res) => res.json()).then((data) => {
            console.log(data)
             setCountries(Object.values(data))
             console.log(countries)
          });
     },[])
    
    
    return (
        <Fragment>
            <div id="search-menu" expand="lg">
                <a className="navbar-brand" href="/"><Image width="50px" src={Globe} /></a>

                <div style={{ width: 300 }}>
                   
                         <Autocomplete
                      
                    onChange={e => {
                        
                    console.log(e.target.innerText)
                    window.location.href =`/Voyager/#/overview/${e.target.innerText}`
                    }}
                     
                        id="countryInput"
                        options = {countries}
                        renderInput={(params) => (
                            <TextField {...params} label="Choose country" margin="normal" />
                        )}
                        />
                      
                </div>


            </div>

        </Fragment>
    )
}


