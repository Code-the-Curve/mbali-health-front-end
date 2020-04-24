import React, {Fragment} from 'react';
import {Row, Container, Col} from 'reactstrap';

import NavBar from '../molecules/NavBar/index';

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <NavBar/>
      <Container fluid>
        <Row noGutters={true}>
          <Col sm={12} className={'content'}>
            {props.children}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DefaultLayout;
