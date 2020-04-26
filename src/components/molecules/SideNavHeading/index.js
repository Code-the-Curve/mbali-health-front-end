import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '@material-ui/icons/Search';
import Close from '@material-ui/icons/Close';

const NavHeader = styled.div`
  padding: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 49px;
  z-index: 1;
`;

const SearchWrapper = styled.div`
  margin-right: 0;
  flex: 1;
  position: relative;

  & input {
    background: #f1f1f4;
    padding: 8px;
    border: 1px solid #eee;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    color: #666;
    padding-left: 33px;
    outline: none;

    &::placeholder {
      color: #aaa;
    }
  }
`;

const StyledSearchIcon = styled(Search)`
  position: absolute;
  color: #aaa;
  left: 10px;
  top: 9px;
  font-size: 17px;
`;
const ClearSearchIcon = styled(Close)`
  position: absolute;
  color: #aaa;
  right: 10px;
  top: 9px;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: #888;
  }
`;

const SideNavHeading = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (event) => {
    console.log('searching with key strokes', event.target.value);
  };
  const clearSearch = () => {
    setSearch('');
  };
  const onKeyUp = (event) => {
    if (event.key === 'Escape') {
      setSearch('');
    }
  };

  return (
    <NavHeader>
      <SearchWrapper>
        <StyledSearchIcon />
        <input
          type="text"
          value={search}
          onChange={onChangeSearch}
          onKeyUp={onKeyUp}
          placeholder="Search by name"
        />
        {search.length > 0 ? <ClearSearchIcon onClick={clearSearch} /> : ''}
      </SearchWrapper>
    </NavHeader>
  );
};

export default SideNavHeading;
