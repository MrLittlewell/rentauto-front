import React from 'react';

import { cars } from '../../localData/Cars';
import { CarCard } from '../CarCard';
import './style.css';

export const FirstCategory = () => {
  return (
    <div className="category__card-area">
      {cars.map((item, index) => {
        return (
          <CarCard key={index} carImg={item.carImg} cardTitle={item.cardTitle} cardDescription={item.cardDescription} />
        )
      })}
    </div>
  )
};