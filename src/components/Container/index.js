import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './styled'

export default class Container extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const { children } = this.props
    return (
      <StyledContainer>
        {children}
      </StyledContainer>
    )
  }
}
