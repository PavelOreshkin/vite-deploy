import { AppRoutes } from "@/shared/routes";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";

const Applications = lazy(() => import("@/pages/applications"));
const ApplicationManage = lazy(() => import("@/pages/application-manage"));
const NotFound = lazy(() => import("@/pages/not-found"));

const MainRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={AppRoutes.APPLICATIONS} replace />}
        />
        <Route path={AppRoutes.APPLICATIONS} Component={Applications} />
        <Route
          path={AppRoutes.CREATE_APPLICATION}
          Component={ApplicationManage}
        />
        <Route
          path={AppRoutes.EDIT_APPLICATION}
          Component={ApplicationManage}
        />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
