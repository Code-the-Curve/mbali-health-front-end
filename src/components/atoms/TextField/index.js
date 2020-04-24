import MaterialTextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const TextField = styled(MaterialTextField)`
  width: 100%;
  position: relative;

  > div::before {
    border-color: white;
  }

  input {
    color: white;

    &::placeholder {
      color: #2c6157;
    }
  }

  label {
    color: white;
  }
`;

export default TextField;
