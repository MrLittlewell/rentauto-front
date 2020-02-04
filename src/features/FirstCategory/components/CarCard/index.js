import React from 'react';
import { Icon, Button } from 'antd';

import './Card.css';

export const CarCard = ({ item }) => {
  console.log(item);
  return (
    <div className="car-card">
      <div className="car-card__imgage">
        <img alt="example" src={item ? item.carImg : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"} />
      </div>
      <div className="car-card__info">
        <div className="car-card__info-blocks">
          <div className="car-card__info-block-one">
            <div className="car-card__card__info-title">
              {item && item.cardTitle}
            </div>
            <div className="car-card__card__info-description">
              {item && item.cardDescription}
            </div>
          </div>
          <div className="car-card__info-block-two">
            <div className="car-card__info-price">
              {item && `${item.price} BYN`}
            </div>
          </div>
        </div>
        <div className="car-card__icons">
          <div><Icon type="exception" /><p>{item && item.settings.yearOfIssue}</p></div>
          <div><Icon type="branches" /><p>{item && item.settings.fuel}</p></div>
          <div><Icon type="control" /><p>{item && item.settings.transmission}</p></div>
        </div>
      </div>

      <Button className="car-card__order">Арендовать</Button>
    </div>
  )
};