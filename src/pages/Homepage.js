import React from 'react'
import NavbarComp from '../components/NavbarComp'
import Cards from '../components/cards'
import FormComp from '../components/formComp'


function Homepage() {
  return (
    <React.Fragment>
    <div className='NavCom'>
      <NavbarComp />
    </div>
    <div>
      <Cards />
    </div>
    <div>
      <FormComp />
    </div>
    </React.Fragment>
  )
}

export default Homepage
