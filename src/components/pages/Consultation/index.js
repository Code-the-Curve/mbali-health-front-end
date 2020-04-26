import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

import DefaultLayout from '../../templates/DefaultLayout';
import Messages from '../../organisms/Messages';
import SideNav from '../../organisms/SideNav';
import wsUtil from '../../../utils/webSocket';
import { CONSULTATION_ID } from '../../../utils/Constants.js';

const Layout = styled.div`
  display: flex;
`;

const socket = wsUtil.getSocket();

const Consultation = ({}) => {
  const [activeConsultation, setActiveConsultation] = useState(CONSULTATION_ID); // TODO: Change Hardcode
  const [consultations, setConsultations] = useState({});

  const onMessageSubmit = (msg) => {
    wsUtil.send(socket, activeConsultation, msg);
  };

  useEffect(() => {
    wsUtil.addMessageListener(socket, (data) => {
      console.log('data', data);
      const { consultation, msg } = data;
      setConsultations((prevConsultations) => ({
        ...prevConsultations,
        [consultation]: [...(prevConsultations[consultation] || []), msg],
      }));
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <DefaultLayout>
        <Layout>
          <SideNav />
          <Messages
            onMessageSubmit={onMessageSubmit}
            room={activeConsultation}
            messages={consultations[activeConsultation]}
          />
        </Layout>
      </DefaultLayout>
    </>
  );
};

Consultation.propTypes = {};

export default Consultation;
