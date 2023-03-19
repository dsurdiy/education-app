import { useState, useEffect } from 'react';
import api from 'services/api';
import { Wrapper } from './MyCoursePage.styled';
// import { VideoPlayer } from 'components/VideoPlayer/VideoPlayer';

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

  const { title, previewImageLink, rating, description, lessons } = course;

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Wrapper>
          <h2>{title}</h2>
          <img
            src={previewImageLink + '/cover.webp'}
            alt="course img"
            width="700"
          />
          <p>
            <b>Course rating:</b> {rating}
          </p>
          <p>
            <b>About course:</b> {description}
          </p>
          <p>
            <b>Improve your skills: </b>
            {course.meta?.skills?.map(skill => (
              <li>{skill}</li>
            ))}
          </p>
          <ol>
            <h3>Lessons:</h3>
            {lessons?.map(({ id, title, link, status, order }) => (
              <li key={id}>
                {/* <img src={`${previewImageLink}/lesson-${order}.webp`} alt="" /> */}
                <a href={link}>
                  <strong>{title}</strong> | <span>status: {status}</span>
                </a>
                {/* <VideoPlayer link={link} /> */}
              </li>
            ))}
          </ol>
        </Wrapper>
      )}
    </>
  );
};
