import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon } from 'mdbreact';
import { Navigation } from '../Navigation'
import { Stars } from "react-star-ratings";
import SideBar from './SideBar';



const Cards = () => {
    return (
        <>
            <Navigation />
            <div className="container-todo">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="cards">
                    <MDBCard className="card">
                        <MDBCardImage waves
                            className='card-img'
                            src='https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg'
                            alt='food'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Plage De Roccapina
                            </MDBCardTitle>
                            <p>
                                <MDBIcon icon="umbrella-beach" /> Beaches and parks
                            </p>

                            <MDBBtn href="!#"><MDBIcon icon="map-marker-alt mr-2" />View Map</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="card">
                        <MDBCardImage waves
                            className='card-img'
                            src='https://cdn.pixabay.com/photo/2014/08/15/11/29/sea-418742__340.jpg'
                            alt='food'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Plage De Roccapina
                                </MDBCardTitle>
                            <p>
                                <MDBIcon icon="umbrella-beach" /> Beaches and parks
                                </p>

                            <MDBBtn href="!#"><MDBIcon icon="map-marker-alt mr-2" />View Map</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="card">
                        <MDBCardImage waves
                            className='card-img'
                            src='https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702__340.jpg'
                            alt='food'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Plage De Roccapina
                                </MDBCardTitle>
                            <p>
                                <MDBIcon icon="umbrella-beach" /> Beaches and parks
                                </p>

                            <MDBBtn href="!#"><MDBIcon icon="map-marker-alt mr-2" />View Map</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="card">
                        <MDBCardImage waves
                            className='card-img'
                            src='https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702__340.jpg'
                            alt='food'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Plage De Roccapina
                                </MDBCardTitle>
                            <p>
                                <MDBIcon icon="umbrella-beach" /> Beaches and parks
                                </p>

                            <MDBBtn href="!#"><MDBIcon icon="map-marker-alt mr-2" />View Map</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="card">
                        <MDBCardImage waves
                            className='card-img'
                            src='https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702__340.jpg'
                            alt='food'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Plage De Roccapina
                                </MDBCardTitle>
                            <p>
                                <MDBIcon icon="umbrella-beach" /> Beaches and parks
                                </p>

                            <MDBBtn href="!#"><MDBIcon icon="map-marker-alt mr-2" />View Map</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="card">
                        <MDBCardImage waves
                            className='card-img'
                            src='https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702__340.jpg'
                            alt='food'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>
                                Plage De Roccapina
                                </MDBCardTitle>
                            <p>
                                <MDBIcon icon="umbrella-beach" /> Beaches and parks
                                </p>

                            <MDBBtn href="!#"><MDBIcon icon="map-marker-alt mr-2" />View Map</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </>
    )
}


export default Cards;