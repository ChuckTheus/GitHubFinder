export const SET_REPOSITORIES = "SET_REPOSITORIES";
export const TOGGLE_MODAL = "SHOW_MODAL";

export const setRepositories = (repositories) => ({
  type: SET_REPOSITORIES,
  payload: repositories,
});

export const showModal = (modalInfo) => ({
    type: SHOW_MODAL,
    payload: modalInfo,
  });