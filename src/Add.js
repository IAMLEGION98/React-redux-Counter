import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { add, multiply } from "./actions/counter_actions";

const Add = () => {
    const value = useSelector(state => state.count_reducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => dispatch(add(2))}>+</button>
        </div>
    )
}

export default Add
