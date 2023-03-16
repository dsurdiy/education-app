import { IoSchoolSharp } from 'react-icons/io5';
import { Header, Logo, StyledLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <Header>
      <StyledLink to="/course">My course</StyledLink>
      <Logo to="/">
        <IoSchoolSharp size={70} />
        Education School
      </Logo>
      <StyledLink to="/courses">All courses</StyledLink>
    </Header>
  );
};
