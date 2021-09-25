import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = { cardValue: 0 }

export const shopSlice = createSlice({
    name: 'shopCard',
    initialState: initialStateValue,
    reducers:
    {
        addToCard: (state) => { state.cardValue += 1 },
        removeCard: (state) => { state.cardValue -= 1 },
        extraFiveAdd: (state, action) => { state.cardValue += action.payload },
    },
})

export const { addToCard, removeCard, extraFiveAdd } = shopSlice.actions
export default shopSlice.reducer