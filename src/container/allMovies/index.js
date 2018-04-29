import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { Row, Col } from 'components/grid';
import { Title } from 'components/title';
import Movie from 'components/movie';
import Loading from 'components/loading';
import SelectOption from './selectOptions';

const getMovies = gql`
  query movieList($page: String!, $order: String!, $genre: String!) {
    movieList(page: $page, order: $order, genre: $genre) {
      data {
        id
        title
        img
        year
      }
    }
  }`;

class AllMovies extends Component {
  state = {
    page: 2,
    order: "",
    genre: ""
  };

  orderChange = (target) => {
    if (target && target.value) this.setState({ order: target.value, genre: ""});
    else this.setState({ order: "", genre: ""});
  }

  genreChange = (target) => {
    if (target && target.value) this.setState({ genre: target.value, order: ""});
    else this.setState({ order: "", genre: ""});
  }

  render(){
    const { page, order, genre } = this.state;
    return (
      <div>
        <Title>Tous les films</Title>
        <SelectOption
          orderValue={order}
          orderChange={this.orderChange}
          genreValue={genre}
          genreChange={this.genreChange}
        />
        <Query query={getMovies} variables={{ page, order, genre }}>
          {({ loading, data, fetchMore }) => {
            if(loading) return <Loading />;
            
            return (<Row>
              {data && data.movieList && data.movieList.data.map((movie) =>
                <Col lg="2.4" md="3" sm="4" key={movie.id} >
                  <Movie {...movie} />
                </Col>
              )}
            </Row>);
          }}
        </Query>
      </div>
    );
  }
}

export default AllMovies;
