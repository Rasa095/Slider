import React, { useEffect, useState } from 'react';
import { ContentVraper ,Img,ImgVraper,RightArrow,LeftArrow,Buttons,Button} from './App-styles';


function App() {


  const images:string[]=["underwater.jpeg","palms.jpg","tree.jpg","underwater.jpeg","palms.jpg"]
  const [counter,setCounter]=useState<number>(1);
  const[transitionTime,setTransitionTime]=useState<number>(300);

  const rightClickHandler=()=>{
    if(counter===4){
      setCounter(1);
      setTransitionTime(0);
    }
    else {
      setCounter(counter+1);
      setTransitionTime(300);
    }

  }

  const leftClickHandler=()=>{
    if(counter===0){
      setCounter(3);
      setTransitionTime(0);
    }
    else{
      setCounter(counter-1);
      setTransitionTime(300);
    }

  }

  function onClickHandler(number:number){
    setTransitionTime(300);
    if(number===1){
      if(counter===3){
        setCounter(4);
      }
      else setCounter(number)
    }
    else if(number===3){
      if(counter===1){
        setCounter(0);
      }
      else {
        setCounter(number);
      }
    }
    else if(number===2){
      setCounter(number);
    }
  }
  useEffect(()=>{
   
    if(counter===4){
      setTimeout(()=>{
        setCounter(1)
        setTransitionTime(0);
      },300)
      
    }
    else if(counter===0){
      setTimeout(()=>{
        setCounter(3);
        setTransitionTime(0);
      },300)
      
    }
  },[counter])
let newArrayImg=[];
 newArrayImg=images.filter((image,index,images) =>images.indexOf(image)===index)
  return (
  <ContentVraper>
    <ImgVraper>
      {images.map((img, index) => (
        <Img src={img} key={index} $counter={counter} $time={transitionTime} />
      ))}
    </ImgVraper>
    <RightArrow onClick={rightClickHandler}>&#10095;</RightArrow>
    <LeftArrow onClick={leftClickHandler} >&#10094;</LeftArrow>
    <Buttons>
    {newArrayImg.map((_,index)=>(
      <Button onClick={()=>onClickHandler(index+1)}>{index+1}</Button>
    ))}
    </Buttons> 
  </ContentVraper>
  )
}
export default App;
