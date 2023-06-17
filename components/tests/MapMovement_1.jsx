import { Component, useEffect, useRef } from 'react';
import './movement_1.css'

function MapMovement_1() {

    const board_style = {
        width: "300px",
        height: "300px",
        border: "3px solid green",
        overflow: "hidden"
    };

    const image_style = {
        width: "100px",
        height: "100px"
    };

    //カウンタボタン
    const ref = useRef(0);
    const handleClick = () => {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    };

    const mapSize = useRef(100);
    const mapClick = () => {
        mapSize.current += 50;
        document.getElementById('image_id').style.width = mapSize.current + "px";
    };

    const mapScroll = () => {
        const image_id = document.getElementById('image_id');
        //image_id.style.transform=translate(mousePos.x+'px',mousePos.y+'px');
        image_id.style.height = mousePos.y + 'px';
    }

    return (
        <>
            <p><button onClick={handleClick}>Click me!</button></p>

            <div style={board_style} onMouseMove={mapScroll}>
                <img id='image_id' style={image_style} src='../img/unityIcon.png' />

            </div>


            <div style={board_style}>
                <img id='animation1' src="../img/unityIcon.png" />
            </div>
        </>
    )
}

export default MapMovement_1
