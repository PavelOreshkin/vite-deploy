export const AppRoutes = {
  APPLICATIONS: "/applications",
  CREATE_APPLICATION: "/application",
  EDIT_APPLICATION: "/application/:id",

  application: (id: string) => `/application/${id}`,
} as const;
