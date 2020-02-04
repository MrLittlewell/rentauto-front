import React from 'react';

import { cars } from '../../localData/Cars';
import { CarCard } from '../../features';
import './style.css';

export const FirstCategory = () => {
  return (
    <div className="category__card-area">
      {cars.map((item, index) => {
        return (
          <CarCard key={index} item={item} />
        )
      })}
    </div>
  )
};