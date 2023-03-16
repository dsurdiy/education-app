import { useState, useEffect } from 'react';
import { CoursesList, CoursesItem } from './AllCourses.styled';
import api from 'services/api';

export const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getAllCourses().then(({ courses }) => {
      setIsLoading(false);
      setCourses(courses);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <CoursesList>
          {courses.map(
            ({ id, title, previewImageLink, lessonsCount, rating, meta }) => (
              <CoursesItem key={id}>
                <h3>{title}</h3>
                <img src={previewImageLink + '/cover.webp'} alt="course" />
                <p>Lessons: {lessonsCount}</p>
                <p>Rating: {rating}</p>
                <p>Skills: {meta.skills}</p>
              </CoursesItem>
            )
          )}
        </CoursesList>
      )}
    </>
  );
};
