import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  border-bottom: 1px solid #151515;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 700;
  font-size: 18px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  transition: all 0.3s;

  &:hover {
    font-weight: 700;
    transform: scale(1.1);
  }

  &.active {
    font-weight: 700;
    text-decoration: underline;
  }
`;
