import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../Container';
import { Link, MenuItem } from 'react-router-dom';
import { ListItems, ListItem, ListItemLink } from './styled';

import { menuItems } from '../../localData/'

export class CategoryMenu extends Component {

  render() {
    return (
      <Container>
        <ListItems>
          {menuItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link to={`${item.category}`}>
                  {item.link}
                </Link>
              </ListItem>
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
