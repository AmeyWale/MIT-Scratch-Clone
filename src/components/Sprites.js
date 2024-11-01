

import React, { useState } from 'react'
import CatSprite from './CatSprite'
import Icon from './Icon'
import { spritesAtom,activeSpriteAtom } from '../../util/atoms'
import { useAtom } from 'jotai'




function Sprites() {

    const [sprites, setSprites] = useAtom(spritesAtom)
    const [activeSprite, setActiveSprite] = useAtom(activeSpriteAtom)
    // const [file, setFile] = useState()


    const handleUpload = (event) => {
        let file = event.target.files[0]
        let data = {
            icon : URL.createObjectURL(file),
            actions : []
        }
        setSprites([...sprites,data])
    }

    const handleManage = (event) => {
        event.preventDefault()
        let element = event.target.parentNode.id;
        let id = element.split("-")[1];
        console.log(element, id)
        
        setActiveSprite(id)
    }
    

  return (
    <>
        <div className="font-bold"> {"Sprites Manager"} </div>
        <div className='flex flex-col gap-2 mt-2'>
            <div id='sprite-0' onClick={handleManage} className='flex w-45 flex-col gap-2 rounded-md shadow-xl  p-4 items-center justify-center '>
                <div >
                    <CatSprite />
                </div>
                <button className='cursor-pointer p-2 bg-blue-500 rounded-sm'>Click to manage</button>
            </div>

            {sprites.map((item, idx) => {
                return <div key={idx+1} onClick={handleManage} id={`sprite-${Number(idx+1)}`} className='flex w-45 flex-col gap-2 rounded-md shadow-xl  p-4 items-center justify-center '>
                    <div >
                        <img src={item.icon} />
                    </div>
                <button className='cursor-pointer p-2 bg-blue-500 rounded-sm'>Click to manage</button>
            </div>
            })}

            <div className='flex w-45 flex-col gap-2 rounded-md border-4 border-dashed border-red-300 p-4 items-center justify-center '>
                <div >
                    <Icon name="id-badge" size={50} className='text-black'/>
                </div>
                <label className='cursor-pointer p-2 bg-blue-500 rounded-sm' htmlFor="spriteInput">Click to Add</label>
                <input onChange={handleUpload} id='spriteInput' type='file' accept="image/png, image/gif, image/jpeg" className=' hidden '/> 
            </div>
        </div>
    </>
  )
}

export default Sprites