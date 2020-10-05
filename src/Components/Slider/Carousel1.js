import React from "react";
import { slides } from './dataImg'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";

const Carousel1 = () => {

    
    return (
        <>
            <MDBContainer id="carousel-container">
                <MDBCarousel
                    interval={5000}
                    activeItem={1}
                    length={5}
                    showControls={true}
                    showIndicators={false}
                    onHoverStop={false}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                        {
                        slides.map((data, key) => (
                            <MDBCarouselItem itemId={data.id} key={key} >
                                <MDBView >
                                    <img
                                        className="d-block w-100 img-responsive"
                                        src={data.img}
                                        alt={data.title}
                                    />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h1 className="h1-responsive">{data.title}</h1>
                                    <a type="button" href="/overview">discover</a>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        ))
                        }
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        </>
    )
}


export default Carousel1