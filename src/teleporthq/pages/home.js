import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Opulent Fair Wolverine</title>
        <meta property="og:title" content="Opulent Fair Wolverine" />
      </Helmet>
    </div>
  )
}

export default Home
