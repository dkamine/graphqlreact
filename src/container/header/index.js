import React, { Component } from 'react';

import { Row, Col } from 'components/grid';

import { Logo } from './components/logo';
import { Search } from './components/search';
import { Content } from './components/content';

import logosvg from 'assets/img/logo.svg';

class Header extends Component {

  render() {
    return (
      <Row>
        <Col md="9">
          <Content>
            <Logo src={logosvg} />
          </Content>
        </Col>
        <Col md="3">
          <Content>
            <Search />
          </Content>
        </Col>
      </Row>
    );
  }
}

export default Header;
