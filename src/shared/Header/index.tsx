import * as React from 'react';
import styled from "styled-components";

export interface IHeaderProps {
}

const HeaderStyle = styled.div`
  min-height: 200px;
  background-color: papayawhip;
`

export default function Header (props: IHeaderProps) {
  return (
    <header className='header'>
      <HeaderStyle>Header</HeaderStyle>
    </header>
  );
}
