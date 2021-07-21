import ReactStars from 'react-rating-stars-component';
import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Restaurante fogo de chão</Title>
      <ReactStars count={5} size={24} isHalf value={4} edit={false} activeColor="#ffd700" />
      <Address>Rua Maria Augusta de Abreu, 110</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
  </Restaurant>
);

export default RestaurantCard;
