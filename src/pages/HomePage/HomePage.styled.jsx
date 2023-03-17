import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin: 70px 0 30px;
  text-align: center;
  font-size: 50px;
`;

export const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto;
  width: 300px;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #ccc;
  text-align: center;
  font-size: 20px;
  transition: all 0.3s linear;

  &:hover {
    background-color: #151515;
    color: #ffffff;
  }
`;
