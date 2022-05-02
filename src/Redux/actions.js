// action types

export const AUTH = "AUTH";

// Action Creators

export const checkAuth = (state) => {
  return {
    type: AUTH,
    payload: state,
  };
};
