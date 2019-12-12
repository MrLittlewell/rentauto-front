import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Collapse } from 'antd';

import Container from '../../components/Container'

import exampleImg from '../../img/bg.jpg'
export default class MainInfo extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const { Panel } = Collapse;
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    return (
      <Container>
        <Row gutter={[15, 15]}>
          <Col span={10}><img src={exampleImg} style={{ width: '100%' }} /></Col>
          <Col span={14}>
            <Collapse accordion>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 4" key="3">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 5" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Container>
    )
  }
}
