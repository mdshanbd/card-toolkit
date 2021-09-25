import React from 'react'
import { useSelector } from 'react-redux'

function ShopCard() {
    const cardValue = useSelector((state) => (state.shopCard.cardValue))

    return (
        <div>
            <h2>My Card</h2>
            <h2>{cardValue}</h2>
        </div>
    )
}

export default ShopCard
