import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '../Container'
import { ListItems, ListItem, ListItemLink } from './styled'

import { menuItems } from '../../localData/menuItems'

export class CategoryMenu extends Component {

  render() {
    return (
      <Container>
        <ListItems>
          {menuItems.map((item, index) => {
            return (
              <ListItem key={index}><ListItemLink>{item}</ListItemLink></ListItem>
            )
          })}
        </ListItems>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu)
