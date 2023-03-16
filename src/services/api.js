const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYmIzZDBlOS1kYjhjLTRhZGUtOWFlZi1mYWYxZWUwOGMwOTkiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MTQyMTAsImV4cCI6MTY3OTcxNDIxMH0.VXQMnnQpWOE62JASAjW3gqXr9rQ8So9YG4x-wKsgP1I',
  },
};

function getAllCourses() {
  return fetch(
    'https://api.wisey.app/api/v1/core/preview-courses',
    requestOptions
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Error'));
  });
}

function getCourse() {
  return fetch(
    'https://api.wisey.app/api/v1/core/preview-courses/352be3c6-848b-4c19-9e7d-54fe68fef183',
    requestOptions
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Error'));
  });
}

const api = {
  getAllCourses,
  getCourse,
};

export default api;
