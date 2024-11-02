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

export const heroFeatureTriggerAtom = atom(false)
