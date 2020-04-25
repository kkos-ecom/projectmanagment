export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestorm }) => {
        // make async call to database
        dispatch({ type: 'CREATE_PROJECT', project});
    }
};

