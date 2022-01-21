import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 6.2rem)) 1fr;
  grid-template-rows: max-content;
  gap: 2rem 2rem;
  margin: 0;
`;

export default Grid;
