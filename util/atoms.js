import { atom } from "jotai";

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

