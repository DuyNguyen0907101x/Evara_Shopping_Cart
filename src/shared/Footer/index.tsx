import * as React from 'react';

import styled from "styled-components";

export interface IFooterProps {
}

const FooterStyle = styled.div`
  min-height: 200px;
  background-color: papayawhip;
`

export default function Footer (props: IFooterProps) {
  return (
    <footer className='footer'>
      <FooterStyle>Footer</FooterStyle>
    </footer>
  );
}
