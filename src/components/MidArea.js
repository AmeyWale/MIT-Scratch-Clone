import React, { useState } from "react";
import Icon from "./Icon";
import dragItems from "../../util/DragItems";
import { useAtom } from "jotai";
import { actionsAtom, spritesAtom, activeSpriteAtom } from "../../util/atoms";

// TODO :
// 1. Drag Action in this area
 


export default function MidArea() {

  
  const [catActions, setCatActions] = useAtom(actionsAtom)
  const [sprites, setSprites] = useAtom(spritesAtom)
  const [activeSprite, setActiveSprite] = useAtom(activeSpriteAtom)

  const handleDrag = (e) => {
    
    let data = e.dataTransfer.getData("elementID")
    console.log(data)
    
    if (activeSprite == 0){
      setCatActions([...catActions,data])
    }
    else{
      let currentSprite = activeSprite - 1
    
      let tempState = sprites.map((item ,idx)=>{
        if (currentSprite == idx){
          
          return {
            ...item,
            actions: item.actions.concat(data)
          }
        }

        return item
      })
      
      setSprites(tempState)

    }
  }
  
  const handleDelete = (idx) => {
    
    setCatActions((prevActions) => prevActions.filter((_, elem_idx) => elem_idx !== idx));
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return <div onDrop={handleDrag} onDragOver={handleDragOver} className="flex-1 pl-2 h-full overflow-auto">
      {activeSprite == 0 && catActions.map((elem,idx)=>{
        let item = dragItems[elem - 1]
        
        return <div key={idx} className={`relative flex flex-row flex-wrap rounded ${item.color} text-white px-2 py-1 my-2 text-sm w-6/12 cursor-pointer`}>

            <div className="absolute top-2 right-1 text-red-500 text-xs cursor-pointer hover:text-gray-300" onClick={(e) => handleDelete(idx)}>
              <Icon
                name={"trash"}
                size={15}
              />
            </div>

          {item.text}
          {item.icon && (
            <Icon
              name={item.icon.name}
              size={15}
              className={`${item.icon.color} mx-2`}
            />
          )}
          {item.suffix}
        </div>
      })}

      {
        
        activeSprite > 0 && sprites[activeSprite - 1].actions.map((elem, idx)=>{
          let item = dragItems[elem - 1]
          return <div key={idx} className={`relative flex flex-row flex-wrap rounded ${item.color} text-white px-2 py-1 my-2 text-sm w-6/12 cursor-pointer`}>

            <div className="absolute top-2 right-1 text-red-500 text-xs cursor-pointer hover:text-gray-300" onClick={(e) => handleDelete(idx)}>
              <Icon
                name={"trash"}
                size={15}
              />
            </div>

          {item.text}
          {item.icon && (
            <Icon
              name={item.icon.name}
              size={15}
              className={`${item.icon.color} mx-2`}
            />
          )}
          {item.suffix}
        </div>
        })
      }
     </div>;
}
