import React, {Component, Fragment} from 'react';
import {Row, Container, Col} from 'reactstrap';

import NavBar from '../NavBar/index';

class DefaultLayout extends Component {

  render() {
    return (
      <Fragment>
        <NavBar/>
        <Container fluid>
          <Row noGutters={true}>
            <Col sm={12} className={'content'}>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default DefaultLayout;
