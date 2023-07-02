import { Component, useEffect, useRef } from 'react';
import './movement_1.css'

function MapMovement_1() {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    const board_style = {
        position: "relative",
        width: "400px",
        height: "400px",
        border: "3px solid green",
        overflow: "hidden"
    };

    const image_style = {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px"
    };

    const plusButton_style = {
        position: "absolute",
        width: "50px",
        height: "50px",
        bottom: "50px",
        left: "0%",
        zIndex: "100"
    };
    const minusButton_style = {
        position: "absolute",
        width: "50px",
        height: "50px",
        bottom: "0px",
        left: "0%",
        zIndex: "101"
    };

    //カウンタボタン
    const ref = useRef(0);
    const handleClick = () => {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    };

    var mouseDownX = 0;
    var mouseDownY = 0;
    var mainMapPreX = 0;
    var mainMapPreY = 0;
    var mainMapDownX = 0;
    var mainMapDownY = 0;
    var isMoving = 0;
    var mapSize = 100;

    const mapMouseDown = (e) => {
        e.preventDefault();
        mouseDownX = e.clientX;
        mouseDownY = e.clientY;
        mainMapDownX = mainMapPreX;
        mainMapDownY = mainMapPreY;
        isMoving = 1;
    };
    const mapMouseMove = (e) => {
        e.preventDefault();
        const mainMapStyle = document.getElementById('mainMap_id').style;
        if (isMoving == 1) {
            mainMapPreX = mainMapDownX + e.clientX - mouseDownX;
            mainMapPreY = mainMapDownY + e.clientY - mouseDownY;
            mainMapStyle.left = mainMapPreX + "px";
            mainMapStyle.top = mainMapPreY + "px";
        }
    };
    const mapMouseUpOut = () => {
        isMoving = 0;
    };

    const plusButtonClick = () => {
        const mainMapStyle = document.getElementById('mainMap_id').style;
        mapSize += 10;
        mainMapStyle.width = mapSize + "%";
        mainMapStyle.height = mapSize + "%";
    };
    const minusButtonClick = () => {
        const mainMapStyle = document.getElementById('mainMap_id').style;
        mapSize -= 10;
        mainMapStyle.width = mapSize + "%";
        mainMapStyle.height = mapSize + "%";
    };

    const touchTipIcon = (e) => {
        e.preventDefault();
        alert(mapSize);
    }

    return (
        <>
            <p><button onClick={handleClick}>Click me!</button></p>

            <div style={board_style} onMouseMove={mapMouseMove} onMouseDown={mapMouseDown} onMouseUp={mapMouseUpOut} onMouseOut={mapMouseUpOut}>
                <button style={plusButton_style} onClick={plusButtonClick}>+</button>
                <button style={minusButton_style} onClick={minusButtonClick}>-</button>
                <img id='mainMap_id' style={image_style} src='../img/unityIcon.png' />
            </div>

            <div style={board_style}>
                <img id='animation1' src="../img/unityIcon.png" />
            </div>

            <div style={board_style}>
                <img className='tipIcon' onClick={touchTipIcon} src="../img/tipIcon.png" />
            </div>

        </>
    )
}

export default MapMovement_1
