import React from 'react'
import TrustBrandConnection from '../components/TrustBrandConnection'
import ReachOutToUs from '../components/ReachOutToUs'
import OurOfficeMovingServices from '../components/OurOfficeMovingServices'
import SafePackingMoving from '../components/SafePackingMoving'
import FAQs from '../components/Faqs'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
const HomePage = () => {
  return (
    <div>
      <Hero/>
      <TrustBrandConnection/>
      <SafePackingMoving/>
      <OurOfficeMovingServices/>
      <FAQs/>
      <Blog/>
      <ReachOutToUs/>
    </div>
  )
}

export default HomePage
