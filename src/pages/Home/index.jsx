/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import Slider from 'react-slick';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';
import { Container, Carousel, Search, Logo, CarouselTitle, Wrapper } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logotipo" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
            <Card photo={restaurante} title="nome 1" />
          </Carousel>
          {/* <button onClick={() => setModalOpened(true)}>Abrir Modal</button> */}
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
