import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { Row, Col } from 'components/grid';
import { Title } from 'components/title';
import Movie from 'components/movie';
import Loading from 'components/loading';

import 'assets/slick.css';

const SlideContainer = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 20px;
`;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const TopMovies = () => {

  return (
    <Row>
      <Col>
        <Title>Les 10 meilleurs films</Title>
        <SlideContainer>
          <Query
            query={gql`
              {
                topRated {
                  data {
                    id
                    title
                    img
                    year
                  }
                }
              }
            `}
          >
            {({ loading, data }) => {
              if(loading) return <Loading />;
              
              return (<Slider {...settings}>
                {data && data.topRated && data.topRated.data.map((movie) =>
                  <div key={movie.id} >
                    <Movie {...movie} />
                  </div>
                )}
              </Slider>);
            }}
          </Query>
        </SlideContainer>
      </Col>
    </Row>
  );
};

export default TopMovies;
