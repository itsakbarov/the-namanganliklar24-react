import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import TopHeader from '../../components/TopHeader'
import Banner from '../../components/Banner'
import SIdebar from '../Sidebar'
import classes from './Header.module.scss'
import BackDropImage from '../../assets/img/nrg-banner.jpg'


const Header = () => {
  const [drawerState, setDrawerState] = useState(false)
    return (
      <header className={classes.Header}>
        <div className="container">
          <TopHeader
            setDrawerState={setDrawerState}
            drawerState={drawerState}
          />
          <Navbar />
          <Banner imgPath={BackDropImage} />
          <SIdebar setDrawerState={setDrawerState} drawerState={drawerState} />
          <div className={`${drawerState ? "opened" : " "} overlay`}></div>
        </div>
      </header>
    );
}

export default Header
