import { Title, StyledLink } from './HomePage.styled';

export const HomePage = () => {
  return (
    <main>
      <Title>Welcome to Education App :)</Title>
      <StyledLink to="/courses">Let's start learning</StyledLink>
    </main>
  );
};
