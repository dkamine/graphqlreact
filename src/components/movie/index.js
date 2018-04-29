import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SlideItem = styled.div`
  width: 138px;
  margin-left: auto;
  margin-right: auto;
`;

const Img = styled.img`
  width: 138px;
  border-radius: 10px;
`;

const MovieName = styled.h3`
  color: white;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 0px;
`;

const Year = styled.p`
  color: #576e93;
  font-size: 12px;
  margin-top: 4px;
`;

const Movie = ({ title, year, img }) => (
  <SlideItem>
    <Img src={img} alt={title} />
    <MovieName>{title}</MovieName>
    <Year>{year}</Year>
  </SlideItem>
);

Movie.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  year: PropTypes.string,
};

export default Movie;
