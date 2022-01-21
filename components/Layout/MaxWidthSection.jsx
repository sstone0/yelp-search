import styled from "styled-components";

const MaxWidthSection = styled.section`
  grid-column: 2 / span 12;
  display: grid;
  grid-temmplate-columns: repeat(12, minmax(auto, 4.2rem));
  grid-template-rows: max-content;
  gap: 1rem 2rem;
  margin: 0;
`;

export default MaxWidthSection;
