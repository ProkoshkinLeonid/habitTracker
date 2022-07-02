import React from 'react'
import { Link } from 'react-router-dom'
import { HabitComponent } from '@components/HabitComponent'

export const Main = () => {
    const a = 5
    return (
        <div>
            <h1>Its main page</h1>
            <Link to={'/about'}>О нас</Link>
            <HabitComponent/>
        </div>
    )
}
