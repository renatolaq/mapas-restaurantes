import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  color: #ffffff;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 13px;
  margin-top: 10px;
  text-align: center;
`;

const imageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);

export default imageCard;
