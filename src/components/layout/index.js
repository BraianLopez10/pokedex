import React from 'react'

import { Header } from '../header';
import './index.scss'
export const Layout = ({ children }) => {

    return (
        <React.Fragment>
            <Header />
            <div style={{ marginBottom: "10px" }}></div>
            <div className="wrap-body">
                {children}
            </div>
        </React.Fragment>
    )
}