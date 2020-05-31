import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { add, multiply } from "./actions/counter_actions";

const Multiply = () => {
    const value = useSelector(state => state.count_reducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => dispatch(multiply(2))}>x</button>
        </div>
    )
}

export default Multiply
