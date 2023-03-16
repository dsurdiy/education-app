import { Outlet } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
};
