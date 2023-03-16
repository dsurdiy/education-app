import { useState, useEffect } from 'react';
import api from 'services/api';

export const MyCoursePage = () => {
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getCourse().then(data => {
      setIsLoading(false);
      setCourse(data);
    });
  }, []);

  console.log(course);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>{course.title}</h2>
          <img src={course.previewImageLink + '/cover.webp'} alt="" />
        </div>
      )}
    </>
  );
};
