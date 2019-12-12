import React, { Component } from 'react'
import {
  AppWraper,
} from './styled'

import Header from '../Header'
import CategoryMenu from '../../components/CategoryMenu'
import MainInfo from '../MainInfo'


class Home extends Component {
  render() {
    return (
      <AppWraper>
        <Header />
        <CategoryMenu />
        {/* место для контента по результатом фильтра */}
        <MainInfo />
      </AppWraper>
    )
  }
}

Home.propTypes = {}

export default Home
