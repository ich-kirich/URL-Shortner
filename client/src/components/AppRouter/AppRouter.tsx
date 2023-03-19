import { Route, Routes, Navigate } from "react-router-dom";
import StatisticPage from "../StatisticPage/StatisticPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainPage from "../MainPage/MainPage";

function AppRouter() {
  const routers = [
    { path: "/", element: <MainPage /> },
    { path: "/error", element: <ErrorPage /> },
    { path: "/statistic", element: <StatisticPage /> },
  ];
  return (
    <Routes>
      {routers.map((item) => (
        <Route element={item.element} path={item.path} key={item.path} />
      ))}
      <Route path="*" element={<Navigate replace to="/error" />} />
    </Routes>
  );
}

export default AppRouter;
