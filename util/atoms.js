import { atom } from "jotai";

// Job state
export const actionsAtom = atom([])

// Sprite State
export const spritesAtom = atom([
    {
        icon : "/cat.svg",
        x:0,
        y:0,
        angle:0,
        actions : []
    }
])
export const activeSpriteAtom = atom(0)


// Motion States
// export const repeatCountAtom = atom(10)
// export const movesCountAtom = atom(10)
// export const gotoCountAtom = atom({ x: 0, y: 0 })
// export const rotationCountAtom = atom(15)

// Preview States
export const positionAtom = atom({ x: 0, y: 0 })
export const rotationAtom = atom(0);