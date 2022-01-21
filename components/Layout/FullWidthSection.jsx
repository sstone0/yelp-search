import styled from "styled-components";

const FullWidthSection = styled.section`
  grid-column: 1 / span 14;
  display: grid;
  grid-temmplate-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: max-content;
  gap: 2rem 2rem;
  margin: 0;
`;

export default FullWidthSection;
