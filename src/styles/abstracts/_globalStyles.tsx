import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  font-size: 16px;
`;

export const H2 = styled.h2`
  margin: 0 0 10px 0;
`;

export const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div<{
  col?: number;
}>`
  padding: 0 15px;
  margin-bottom: 20px;
  ${({ col = 12 }) => {
    const COLUMNS: any = {
      1: "8,33333%",
      2: "16.66667%",
      3: "25%",
      4: "33.33333%",
      5: "41.66667%",
      6: "50%",
      7: "58.33333%",
      8: "66.66667%",
      9: "75%",
      10: "83.33333%",
      11: "91.66667%",
      12: "100%",
    };
    return `width: ${COLUMNS[col]};`;
  }};
`;

export const Flex = styled.div<{
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  ${({ alignItems }) => alignItems && `align-items: ${alignItems || "flex-start"}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent || "flex-start"}`};
`;
export const Padding = styled.div<{
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
}>`
  ${({ paddingLeft }) => paddingLeft && ` padding-left: ${paddingLeft || "0px"}`};
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight || "0px"}`};
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop || "0px"}`};
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom || "0px"}`};
`;

export const Width = styled.div<{
  w?: string;
}>`
  width: ${({ w }) => w || "auto"};
`;

export const FontSize = styled.span<{
  fSize?: string;
}>`
  font-size: ${({ fSize }) => fSize || "inherit"};
`;
