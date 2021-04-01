export const DRINK_WATER_CUP = 'DRINK_WATER_CUP'
export const CLEAR_WATER_CUPS = 'CLEAR_WATER_CUPS'

export function drinkWater() {
    return {
        type: DRINK_WATER_CUP
    }
}

export function clearWaterCups() {
    return {
        type: CLEAR_WATER_CUPS
    }
}