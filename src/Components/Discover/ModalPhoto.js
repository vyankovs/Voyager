import React, { useEffect, useState } from "react";
import {Modal} from "react-bootstrap";
import "./style.css"


export default function ModalPhoto ({show, handleClose, photos, photo, keyAPI: key, photoIndex, PhotoAPI}){

  const [src, setSrc] = useState("")
  const [index, setIndex] = useState(photoIndex)
  function changeIndex (n){
    let length = photos.length;
    if (n+index >= length){
      setIndex(0)
    } else if (index+n < 0) {
      setIndex(length-1)
    } else {
      setIndex(index+n)
    }
  }
  useEffect(()=>{
    setSrc(`${PhotoAPI}?&key=${key}&photoreference=${photo.photo_reference}&maxheight=1000&maxwidth=1000`)
    setIndex(photos.indexOf(photo))
    console.log(photos.indexOf(photo))
  },[photo])

  useEffect (()=>{
    console.log(photos)
    photos.length && setSrc(`${PhotoAPI}?&key=${key}&photoreference=${photos[index].photo_reference}&maxheight=1000&maxwidth=1000`)
  }, [index])

    return (
        <Modal  centered dialogClassName="modalFitWidth" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <div style={{position:"relative"}}>
        <button className="prev" onClick={()=>changeIndex(-1)} style={{position:"absolute", left:"20px"}}>&#10094;</button>
        <button className="next" onClick={()=>changeIndex(1)} style={{position:"absolute", right:"20px"}}>&#10095;</button>
        <img src={src}/>
        </div>
        </Modal.Body>
        
      </Modal>
    )
}