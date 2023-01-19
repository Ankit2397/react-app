import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AppContext } from './Context/Productcontext'

function About(props) {
  const myName =useContext(AppContext);
  return (
    <Wrapper>
      
      <h2>About Page</h2>

       </Wrapper>
  )
}

About.propTypes = {

}
const Wrapper = styled.section``;

export default About


