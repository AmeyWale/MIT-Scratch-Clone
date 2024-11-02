import React, { act } from 'react'


import { actionsAtom, positionAtom, rotationAtom, spritesAtom } from '../../util/atoms'
import { useAtom } from 'jotai'
import dragItems from '../../util/DragItems'
import getStyles from '../../util/getProperties';

function Header() {

  // const [repeatCount, setRepeatCount] = useAtom(repeatCountAtom);
  // const [actions, setAction] = useAtom(actionsAtom);
  // const [position, setPosition] = useAtom(positionAtom);
  // const [rotation, setRotation] = useAtom(rotationAtom);
  const [sprites, setSprites] = useAtom(spritesAtom)
 
  const handleRun = async () =>{
    sprites.forEach((sprite,idx)=>{
      executeSpriteActions(sprite,idx)
    })
  }

  const executeSpriteActions = async (sprite, spriteIdx) => {
    let newX = sprite.x
    let newY = sprite.y
    let newAngle = sprite.angle

    const executeActions = async (actions) => {
      for (const action of actions) {
        await new Promise(resolve => {
          setTimeout(() => {
            switch (action.type) {
              case 'move':
                newX += action.value 
                break
              case 'rotate':
                newAngle += action.value
                break
              case 'goto':
                newX = action.Xvalue
                newY = action.Yvalue
                break
              case 'repeat':
                
                for (let i = 0; i < action.value; i++) {
                  executeActions(actions)
                }
                break
            }
            setSprites(prevSprites => 
              prevSprites.map((s,idx) => 
                idx === spriteIdx ? { ...s, x: newX, y: newY, angle: newAngle } : s
              )
            )
            resolve()
          }, 500) // 500ms delay between actions
        })
      }
    }

    await executeActions(sprite.actions)
  }

  const handleReset = () => {
    
    setSprites(prevSprites => 
      prevSprites.map((s,idx) => 
      {
        return { ...s, x: 0, y: 0, angle: 0 }
      }
      )
    )
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