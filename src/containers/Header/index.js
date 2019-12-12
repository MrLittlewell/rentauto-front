import React, { Component } from 'react'
import { Button, Icon } from 'antd';
import Container from '../../components/Container'
import {
  Wrapper,
  HeaderDiv,
  Title,
  HeaderDivItems
} from './styled'



class Header extends Component {
  constructor(props) {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Wrapper>
        <HeaderDiv>
          <Container>
            <HeaderDivItems>
              <div>
                <Icon type="dingding" style={{ fontSize: '60px', color: '#fefefe' }} />
                <a href="tel:+375295555555">+375(29)555-55-55</a>
              </div>

              <div>
                <Button type="primary">Оставьте заявкку для сотружничества</Button>
              </div>
            </HeaderDivItems>
          </Container>
        </HeaderDiv>
        <Container>
          <Title>
            АРЕНДА АВТОМОБИЛЯ<br /> удобно и комфортно
          </Title>
        </Container>
      </Wrapper>
    )
  }
}

Header.propTypes = {

}

export default Header