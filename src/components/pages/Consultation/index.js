import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import DefaultLayout from '../../templates/DefaultLayout';
import Messages from '../../organisms/Messages';
import SideNav from '../../organisms/SideNav';

const Layout = styled.div`
  display: flex;
`;

const Consultation = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <DefaultLayout>
          <Layout>
            <Route component={SideNav} />
            <Route component={Messages} />
          </Layout>
        </DefaultLayout>
      </Router>
    </>
  );
};

Consultation.propTypes = {};

export default Consultation;
