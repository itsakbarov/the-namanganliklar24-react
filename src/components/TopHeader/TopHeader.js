import classes from './Header.module.scss'
import React, { useEffect, useState } from 'react'
import { DrawerBtn, SiteLogo, TelegramIcon } from '../../assets/icons/base_Icons'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Currency from '../Currency'
import axios from 'axios'
// 

const TopHeader = ({setDrawerState, drawerState}) => {
   const [currency, setCurrency] = useState({
     isFetched: false,
     data: [],
     error: null,
   });

   useEffect(() => {
     axios
       .get("http://data.fixer.io/api/latest", {
         params: {
           access_key: "c0bb6b34904aa9a4f4f03d440361df12",
         },
       })
       .then((res) => {
         setCurrency({
           isFetched: true,
           data: res.data.rates,
           error: null,
         });
       })
       .catch((err) => {
         setCurrency({
           isFetched: true,
           data: [],
           error: err,
         });
       });
   }, []);
   console.log(currency);
    return (
      <div className={classes.siteHeader}>
        <div className={`${classes.headerInner} container`}>
          <div className={classes.lleftWrapper}>
            <Link to="/">
              <SiteLogo />
            </Link>
            {currency.isFetched ? (
              <Currency
                usd={currency.data.USD.toFixed(2)}
                rubl={currency.data.RUB.toFixed(2)}
                uzs={currency.data.UZS.toFixed(2)} ///
              />
            ) : (
              <>currency section is loading...</>
            )}
          </div>
          <div className={classes.rightWrapper}>
            <button
              onClick={() => setDrawerState(!drawerState)}
              className={classes.DrawerBtn}
            >
              <DrawerBtn />
            </button>
            <a href="https://t.me/theAkbarov">
              <Button icon={<TelegramIcon />} title="Подписатся" />
            </a>
          </div>
        </div>
      </div>
    );
}

export default TopHeader
