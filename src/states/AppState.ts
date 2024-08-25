import { createContext, useCallback, useMemo, useReducer } from "react";
import { UserData } from "../api/requests/users/types";

export type AppState = {
  isLoggedIn: boolean;
  user: UserData;
};

type Action =
  | {
      type: "logout";
    }
  | { type: "setUserData"; user: UserData };

const combineUserData = (
  halfState: Pick<AppState, "isLoggedIn" | "user">
): AppState => {
  const isLoggedIn = halfState?.isLoggedIn ?? false;
  const user = halfState.user ?? {};

  return {
    isLoggedIn,
    user,
  };
};

const createInitialState = (
  initializerObject?: Partial<AppState> | null
): AppState => {
  return combineUserData({
    isLoggedIn: initializerObject?.isLoggedIn ?? false,
    user: initializerObject?.user ?? ({} as UserData),
  });
};

const stateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "logout": {
      return combineUserData({
        isLoggedIn: false,
        user: {} as UserData,
      });
    }

    case "setUserData": {
      return combineUserData({
        isLoggedIn: true,
        user: action.user,
      });
    }
  }
};

export const useAppState = (initialState?: Partial<AppState> | null) => {
  const [state, dispatch] = useReducer(
    stateReducer,
    initialState,
    createInitialState
  );

  const logout = useCallback(() => {
    dispatch({
      type: "logout",
    });
  }, [dispatch]);

  const setUserData = useCallback(
    (user: UserData) => {
      dispatch({
        type: "setUserData",
        user,
      });
    },
    [dispatch]
  );

  return useMemo(() => {
    const { isLoggedIn, user } = state;

    return {
      isLoggedIn,
      user,
      logout,
      setUserData,
    };
  }, [state, logout, setUserData]);
};

export const AppStateContext = createContext<
  ReturnType<typeof useAppState>
>({
  isLoggedIn: false,
  user: {} as UserData,
  logout: () => {},
  setUserData: () => {},
});
