import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './styled'

export default class Container extends Component {

  render() {
    const { children, prop } = this.props
    return (
      <StyledContainer>
        {children}
      </StyledContainer>
    )
  }
}
