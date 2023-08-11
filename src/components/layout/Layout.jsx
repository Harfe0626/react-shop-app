import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout