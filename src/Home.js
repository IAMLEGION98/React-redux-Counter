import React, { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";


const Home = () => {

    const value = useSelector(state => state.count_reducer);

    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}

export default Home
