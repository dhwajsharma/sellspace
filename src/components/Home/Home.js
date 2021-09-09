import React, { useEffect } from 'react'
import "./Home.css"
import { db } from "../../firebase"
import { useState } from 'react';
import InputBox from "../InputBox/InputBox"

const Home = () => {

    return (
        <div className="home">

            <InputBox />

        </div>
    )
}

export default Home
