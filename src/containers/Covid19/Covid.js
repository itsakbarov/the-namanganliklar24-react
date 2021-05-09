import classes from './Covid.module.scss'
import React from 'react'

const Covid = ({title}) => {
    return (
        <div className={classes.covidBanner}>
                <h1 align="center">Reklama Bannerga joy</h1>
                <p>{title}</p>
        </div>
    )
}

export default Covid
