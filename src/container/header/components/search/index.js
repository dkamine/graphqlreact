import React from 'react';
import styled from 'styled-components';

import searchImg from 'assets/img/search.svg';

const Content = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  float: left;
  width: 100%;
  padding: 20px;
  height: 40px;
  border-radius: 10px;
  outline: none;
  background: #253655;
  color: white;
  border: 0;
  box-shadow: 0px 10px 20px rgba:(0,0,0,0.1);

  ::placeholder {
    color: #576E93;
  }
`;

const Button = styled.button`
  position: absolute;  
  right: 0px;
  width: 40px;
  height: 40px;
  border: 0px;
  background: #253655;
  text-align: center;
  color: #2586FA;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  padding-top: 5px;
`;

const Search = () => (
  <Content>
    <Input placeholder="Rechercher un film" />
    <Button>
      <img src={searchImg} alt="search" />
    </Button>
  </Content>
);

export { Search };