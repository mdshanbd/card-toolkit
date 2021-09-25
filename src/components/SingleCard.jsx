import React from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { addToCard, removeCard, extraFiveAdd } from '../features/shopSlice';

function SingleCard({ title, imageUrl }) {
    const dispatch = useDispatch()

    return (
        <div>
            <div style={{ margin: "10px 10px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s", width: "15%", float: "left" }}>
                <img src={imageUrl} alt="" />
                <div style={{ padding: "2px 16px" }}>
                    <h4> {title} </h4>
                    <button className="button" onClick={() => { dispatch(addToCard()) }}>Add To Card</button><br /><br />
                    <button className="button" onClick={() => { dispatch(removeCard()) }}>Remove from Card</button><br /><br />
                    <button className="button" onClick={() => { dispatch(extraFiveAdd(5)) }}>Extra 5 Add</button><br /><br />
                </div>
            </div>
        </div>
    )
}

export default SingleCard
