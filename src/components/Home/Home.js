import React, { useEffect } from 'react'
import "./Home.css"
import { db } from "../../firebase"
import { useState } from 'react';
import InputBox from "../InputBox/InputBox"
import Posts from '../Posts/Posts';

const Home = () => {

    return (
        <div className="home">
            <InputBox />
            <Posts />
        </div>
    )
}

export default Home
