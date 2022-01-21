import styled from "styled-components";
import MaxWidthSection from "./MaxWidthSection";

const NavbarWrapper = styled(MaxWidthSection)`
  color: #c41200;
  text-align: center;
  padding: 1rem 0;
  border-bottom: 2px solid #e6e6e6;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <h1>Yelp Search</h1>
    </NavbarWrapper>
  );
};

export default Navbar;
