import styled from 'styled-components';

export const CoursesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const CoursesItem = styled.li`
  padding: 10px;
  border: 1px solid #000;

  h3 {
    min-height: 45px;
    margin-bottom: 10px;
    text-align: center;
  }
`;
