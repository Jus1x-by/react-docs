import { useCallback, useMemo, useReducer } from "react";
import axios from "axios";

const API_URI = import.meta.env.VITE_API_URI;

export const instance = axios.create({ baseURL: API_URI });

type RequestState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

type RequestStateAction<T> =
  | {
      type: "data";
      data: T | null;
    }
  | {
      type: "loading";
    }
  | {
      type: "error";
      error: Error | null;
    };

const fetchReducer = <T>(
  state: RequestState<T>,
  action: RequestStateAction<T>
) => {
  switch (action.type) {
    case "data":
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case "loading":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
  }
};

export const useFetch = <Result, Variables extends unknown[]>(
  fetcher: (...args: Variables) => Promise<Result | null>,
  parameters: Parameters<typeof fetcher>
): RequestState<Result> & { fetch: typeof fetcher } => {
  const [state, dispatch] = useReducer(fetchReducer<Result>, {
    data: null,
    loading: false,
    error: null,
  } as RequestState<Result>);

  const fetch = useCallback(() => {
    if (state.loading) {
      return Promise.resolve(state.data);
    }

    dispatch({ type: "loading" });

    return fetcher(...parameters).then(
      (data) => {
        dispatch({ type: "data", data });
        return data;
      },
      (e) => {
        dispatch({ type: "error", error: e });
        return null;
      }
    );
  }, [fetcher, ...parameters]);

  return useMemo(() => ({ ...state, fetch }), [fetch, ...parameters]);
};
