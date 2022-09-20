import styled from 'styled-components';

const MaxWidthSection = styled.div`
  display: grid;
  // media size l
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: max-content;
  gap: ${(props) => (props.gapDefault ? props.gapDefault : '2rem 2rem')};
  margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

  // media size m
  @media ${'only screen and (min-width: 740px) and (max-width: 1023px)'} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${(props) => (props.gapMedium ? props.gapMedium : '2rem 2rem')};
    margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
  }

  // media size s
  @media ${'only screen and (max-width: 739px)'} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: ${(props) => (props.gapSmall ? props.gapSmall : '1rem 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }
`;

export default MaxWidthSection;
