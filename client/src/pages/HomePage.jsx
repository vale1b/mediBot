import React from 'react'
import Workings from '../components/Workings'
import Mediplan from '../components/Mediplan'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <h2>Mi header</h2>
        <h2>Mi section Hero</h2>
        <Workings />
        <Mediplan />
        <Footer />
    </div>
  )
}

export default HomePage