import React from 'react'
import { Button, Icon } from 'antd';
import Container from '../../components/Container'
import {
  Wrapper,
  HeaderDiv,
  Title,
  HeaderDivItems
} from './styled'

import './header.css';

const Header = () => {
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
              <Button type="primary" className="header__button">Оставьте заявкку для сотружничества</Button>
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

export default Header