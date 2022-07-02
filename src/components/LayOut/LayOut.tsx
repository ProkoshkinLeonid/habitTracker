import React from 'react'

import { Outlet } from 'react-router-dom'
import {Header} from "@components/Header/Header";

type LayOutPropsTypes = {

};

export const LayOut = (props: LayOutPropsTypes) => {
    return (
        <>
            <Header/>
            <div>
                <Outlet/>
            </div>
        </>
    )
}
