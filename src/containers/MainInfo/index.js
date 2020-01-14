import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Collapse } from 'antd';

import Container from '../../components/Container'
import exampleImg from '../../img/bg.jpg'
import { StyledH2 } from './styled'

import { advantages } from '../../localData/'

export default class MainInfo extends Component {

  render() {
    const { Panel } = Collapse;
    return (
      <Container>
        <StyledH2>ПРЕИМУЩЕСТВА</StyledH2>
        <Row gutter={[15, 15]}>
          <Col span={10}><img src={exampleImg} style={{ width: '100%' }} /></Col>
          <Col span={14}>
            <Collapse accordion>
              {advantages.map((item, index) => (
                <Panel header={item.title} key={index}>
                  <p>{item.description}</p>
                </Panel>
              ))}
            </Collapse>
          </Col>
        </Row>
      </Container>
    )
  }
}
