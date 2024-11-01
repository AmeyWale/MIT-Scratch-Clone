import React from 'react'


import { actionsAtom, positionAtom, rotationAtom, repeatCountAtom } from '../../util/atoms'
import { useAtom } from 'jotai'
import dragItems from '../../util/DragItems'

function Header() {

  const [repeatCount, setRepeatCount] = useAtom(repeatCountAtom);
  const [actions, setAction] = useAtom(actionsAtom);
  const [position, setPosition] = useAtom(positionAtom);
  const [rotation, setRotation] = useAtom(rotationAtom);


  let repeats = 0;
  
  const handleRun = () =>{
    let i = 0;
    while (i < actions.length){

      let action = dragItems[actions[i] - 1]

      if (action.type === "move") {

        setPosition((prev) => ({
          ...prev,
          x: prev.x + action.value,
        }));
      } else if (action.type === "rotate") {
        setRotation((prev) => prev + action.value);
      }

      else if (action.type === "repeat"){
        if (repeats < repeatCount){
          repeats += 1
          i = 0;
          continue;
        }
        else{
          repeats = 0;
        }
      }
      i++;
    }
    
  }

  const handleReset = () => {
    setPosition({ x: 0, y: 0 });
    setRotation(0);
  }


  return (
    <div className='pl-2 pb-2 flex justify-around'>
        <h1>MIT Scratch Clone </h1>
        <div className='flex  gap-2'>
            <div onClick={handleRun} className='p-3 rounded-full bg-green-900 cursor-pointer'></div>
            <div onClick={handleReset} className='p-3 rounded-full bg-red-900 cursor-pointer'></div>
        </div>
    </div>
  )
}

export default Header