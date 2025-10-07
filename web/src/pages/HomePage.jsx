import React from 'react'
import TrustBrandConnection from '../components/TrustBrandConnection'
import ReachOutToUs from '../components/ReachOutToUs'
import OurOfficeMovingServices from '../components/OurOfficeMovingServices'
import SafePackingMoving from '../components/SafePackingMoving'
import FAQs from '../components/Faqs'
const HomePage = () => {
  return (
    <div>
      <TrustBrandConnection/>
      <SafePackingMoving/>
      <OurOfficeMovingServices/>
      <FAQs/>
      <ReachOutToUs/>
    </div>
  )
}

export default HomePage
