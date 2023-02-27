import React from 'react'
import Faq from '../Components/Faq'
import GetStarted from '../Components/GetStarted'
import Guide from '../Components/Guide'
import Hero from '../Components/Hero'
import Properties from '../Components/Properties'

const Home = () => {
  return (
    <div>
      <Guide />
      <Properties />
      <Faq />
      <GetStarted />
    </div>
  )
}

export default Home