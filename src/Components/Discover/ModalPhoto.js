import React, { useEffect, useState } from "react";
import {Modal} from "react-bootstrap";
import "./style.css"


export default function ModalPhoto ({show, handleClose, photos, photo, keyAPI: key, photoIndex, PhotoAPI}){

  const [src, setSrc] = useState("")
  const [index, setIndex] = useState(photoIndex)
  useEffect(()=>{
    setSrc(`${PhotoAPI}?&key=${key}&photoreference=${photo.photo_reference}&maxheight=1000&maxwidth=1000`)
    setIndex(photos.indexOf(photo))
    console.log(photos.indexOf(photo))
  },[photo])
    return (
        <Modal  centered dialogClassName="modalFitWidth" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <div style={{position:"relative"}}>
        <button className="prev" onClick={()=>{setSrc(`${PhotoAPI}?&key=${key}&photoreference=${photos[index-1].photo_reference}&maxheight=1000&maxwidth=1000`); setIndex(index-1)}} style={{position:"absolute", left:"20px"}}>&#10094;</button>
        <button className="next" onClick={()=>{setSrc(`${PhotoAPI}?&key=${key}&photoreference=${photos[index+1].photo_reference}&maxheight=1000&maxwidth=1000`); setIndex(index+1)}} style={{position:"absolute", right:"20px"}}>&#10095;</button>
        <img src={src}/>
        </div>
        </Modal.Body>
        
      </Modal>
    )
}