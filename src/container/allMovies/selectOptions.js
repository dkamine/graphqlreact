import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Row, Col } from 'components/grid';

import 'assets/select.css';

const Content = styled.div`
  margin-bottom: 40px;
`;

const Label = styled.p`
  color: #576e93;
  font-size: 12px;
  text-align: right;
`;

const SelectOption = ({ orderValue, orderChange, genreValue, genreChange }) => (
  <Content>
    <Row>
      <Col md="1" right >
        <Label> Trier par : </Label>
      </Col>
      <Col md="2" >
        <Select
          value={orderValue}
          onChange={orderChange}
          placeholder="Order"
          options={[
            { value: 'original-title.asc', label: 'alphabetic' },
            { value: 'release_date.asc', label: 'release date' },
          ]}
        />
      </Col>
      <Col md="1" right >
        <Label> Filtrer par : </Label>
      </Col>
      <Col md="2" >
        <Select
          value={genreValue}
          onChange={genreChange}
          placeholder="Genre"
          options={[
            { value: '28', label: 'Action' },
            { value: '27', label: 'Horreur' },
            { value: '10749', label: 'Amour' }
          ]}
        />
      </Col>
    </Row>
  </Content>
);

SelectOption.propTypes = {
  orderValue: PropTypes.string,
  orderChange: PropTypes.func,
  genreValue: PropTypes.string,
  genreChange: PropTypes.func
};

export default SelectOption;
