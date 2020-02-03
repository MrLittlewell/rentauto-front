import React from 'react';
import { Card, Icon, Avatar } from 'antd';

import './Card.css';

export const CarCard = ({ carImg, avatarSrc, cardTitle, cardDescription }) => {

  const { Meta } = Card;

  return (
    <Card
      className="car-card"
      cover={
        <img
          alt="example"
          src={carImg ? carImg : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
        />
      }
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={avatarSrc ? avatarSrc : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />}
        title={cardTitle ? cardTitle : "Card title"}
        description={cardDescription ? cardDescription : "This is the description"}
      />
    </Card>
  )
};