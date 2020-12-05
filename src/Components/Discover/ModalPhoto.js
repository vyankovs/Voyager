import React, { useEffect, useState } from "react";
import {Modal} from "react-bootstrap";
import "./style.css"


export default function ModalPhoto ({show, handleClose, photos, photo, keyAPI: key, PhotoAPI}){

  const [src, setSrc] = useState("")
  useEffect(()=>{
    setSrc(`${PhotoAPI}?&key=${key}&photoreference=${photo}&maxheight=1000&maxwidth=1000`)
  },[photo])
    return (
        <Modal  centered dialogClassName="modalFitWidth" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{position:"relative"}}>
        <button onClick={()=>setSrc(`${PhotoAPI}?&key=${key}&photoreference=${photos[0].photo_reference}&maxheight=1000&maxwidth=1000`)} style={{position:"absolute", left:"20px"}}></button>
        <button onClick={()=>setSrc(`${PhotoAPI}?&key=${key}&photoreference=${photos[8].photo_reference}&maxheight=1000&maxwidth=1000`)} style={{position:"absolute", right:"20px"}}></button>
        <img src={src}/>
        </div>
        </Modal.Body>
        
      </Modal>
    )
}