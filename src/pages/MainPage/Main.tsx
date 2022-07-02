import React from 'react'
import { Link } from 'react-router-dom'
import {HabitComponent} from "@components/HabitComponent";

//eslint-disable-next-line
// @ts-ignore
import { exampleStyle, vars, themeClass } from '@styles/styles.css'

export const Main = () => {

    console.log(themeClass)
    const a = 5
    return (
        <div>
            <h1>Its main page</h1>
            <Link to={'/about'}>О нас</Link>
        </div>
    )
}
