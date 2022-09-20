import styled from 'styled-components';

const Row = styled.div`
  grid-column-start: ${(props) => (props.sl ? props.sl : '1')};
  grid-column-end: ${(props) => (props.el ? props.el : '12')};

  @media ${'only screen and (min-width: 740px) and (max-width: 1023px)'} {
    grid-column-start: ${(props) => (props.sm ? props.sm : '1')};
    grid-column-end: ${(props) => (props.em ? props.em : '5')};
  }

  @media ${'only screen and (max-width: 739px)'} {
    grid-column-start: ${(props) => (props.ss ? props.ss : '1')};
    grid-column-end: ${(props) => (props.es ? props.es : '9')};
  }
`;
export default Row;
