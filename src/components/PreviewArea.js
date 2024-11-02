import React, { useRef, useState } from "react";
import CatSprite from "./CatSprite";
import dragItems from "../../util/DragItems";

import { positionAtom, rotationAtom, spritesAtom, activeSpriteAtom } from '../../util/atoms'
import { useAtom } from 'jotai'
import Sprite from "./Sprite";

// TODO :
// Make the Sprite Draggable in its area

export default function PreviewArea() {

  const previewAreaRef = useRef()
  
  const [position, setPosition] = useAtom(positionAtom);
  const [rotation, setRotation] = useAtom(rotationAtom);

  const [sprites, setSprites] = useAtom(spritesAtom)
  const [activeSprite, setActiveSprite] = useAtom(activeSpriteAtom)

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  let element = null;
  let clientX = 0
  let clientY = 0
  let newClientX = 0
  let newClientY = 0;
  

  // useEffect(()=>{

  //   if (reset){
  //     setPosition({ x: 0, y: 0 })
  //     setRotation(0)

  //     setReset(false)
  //     return
  //   }

  //   if (run){
  //     actions.forEach((actionIdx) => {
        
  //       let action = dragItems[actionIdx - 1 ]
        
  //       if (action.type === "move") {
  
  //         setPosition((prev) => ({
  //           ...prev,
  //           x: prev.x + action.value,
  //         }));
  //       } else if (action.type === "rotate") {
  //         setRotation((prev) => prev + action.value);
  //       }

  //       else if (action.type === "repeat"){

  //       }
        
  //     });

  //     setRun(false)
  //   }

  // },[run,reset])

  
  const handleMouseDown = (e) => {
    e.preventDefault()
    element = e.currentTarget;
    
    clientX = e.clientX
    clientY = e.clientY
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    
  }


  const handleMouseMove = (e) => {
    e.preventDefault()

    newClientX = clientX - e.clientX
    newClientY = clientY - e.clientY

    clientX = e.clientX
    clientY = e.clientY

    element.style.top = element.offsetTop - newClientY + "px";
    element.style.left = element.offsetLeft - newClientX + "px";
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  console.log(sprites)


  // Need to handle all of this inside the Header component (the animations)

  return (
    <div className="flex-none h-full overflow-y-auto p-2" ref={previewAreaRef}>
      {sprites.map((item, idx) => {
        return <Sprite key={idx} idx={idx} item={item}/>
      })}
    </div>
  );
}
