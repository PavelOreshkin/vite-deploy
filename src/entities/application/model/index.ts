import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export type Application = {
  id: string;
  jobTitle: string;
  company: string;
  skills: string;
  details: string;
  text: string;
};

type ApplicationStore = {
  applications: Application[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  addApplication: (args: Omit<Application, "id">) => string;
  updateApplication: (args: Application) => void;
  removeApplication: (id: Application["id"]) => void;
  getApplication: (id: Application["id"]) => Application | undefined;
};

const STORAGE_KEY = "_vg_applications";

export const useApplicationStore = create<ApplicationStore>()(
  devtools(
    persist(
      (set, get) => ({
        applications: [],
        loading: false,

        setLoading: (
          loading: Parameters<ApplicationStore["setLoading"]>[0]
        ) => {
          set({ loading });
        },

        addApplication: (
          values: Parameters<ApplicationStore["addApplication"]>[0]
        ) => {
          const id = String(Date.now());
          set((state) => ({
            applications: [...state.applications, { id, ...values }],
          }));
          return id;
        },

        updateApplication: ({
          id,
          ...values
        }: Parameters<ApplicationStore["updateApplication"]>[0]) => {
          set((state) => ({
            applications: state.applications.map((application) =>
              application.id === id
                ? { ...application, ...values }
                : application
            ),
          }));
        },

        removeApplication: (id) => {
          set((state) => ({
            applications: state.applications.filter(
              (application) => application.id !== id
            ),
          }));
        },

        getApplication: (id) => {
          return get().applications.find((item) => item.id === id);
        },
      }),
      {
        name: STORAGE_KEY,
      }
    )
  )
);
