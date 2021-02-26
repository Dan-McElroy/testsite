import styled from "styled-components";

export const SectionMd = styled.section<{
  paddingTop?: number;
}>`
  font-size: 1.2rem;
  line-height: 1.5;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)}px;
`;

export const HeadingLarge = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0 1.25rem;
  }
`;

/*
.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.lightText {
  color: #666;
}*/
