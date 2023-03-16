import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { AllCoursesPage } from 'pages/AllCoursesPage/AllCoursesPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { MyCoursePage } from 'pages/MyCoursePage/MyCoursePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<AllCoursesPage />} />
        <Route path="course" element={<MyCoursePage />} />
      </Route>
    </Routes>
  );
};
