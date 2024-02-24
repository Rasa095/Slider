import styled from "styled-components";
interface ImgProps{
    $counter:number;
    $time:number;
}

export const ContentVraper=styled.div`
width: 100vw;
height: 100vh;
position: relative;
`
export const ImgVraper=styled.div`
    width: 100%;
    height: 100%;
    max-width: 100vw;
    display: flex;
    

`
export const Img=styled.img<ImgProps>`
    width: 100%;
    height: 100%; 
    object-fit: cover;
    display: block;
    flex-shrink: 0;
    flex-grow: 0;
    transform: translate(${props=>-100*props.$counter}%);
    transition: transform ${(props)=>props.$time}ms ease-in-out;
    
`
export const RightArrow=styled.div`
    font-size: 60px;
    color: white;
    position: absolute;
    top: 50%;
    right: 10%;
    cursor: pointer;
`
export const LeftArrow=styled.div`
    font-size: 60px;
    color: white;
    position: absolute;
    top: 50%;
    left: 10%;
    cursor: pointer;
`
export const Buttons=styled.div`
display: flex;
gap: 5px;
position: absolute;
top:50%;
right: 45%;

    
`
export const Button=styled.button`
 background-color: black;
 color: white;
    
`