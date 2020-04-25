const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect al the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with arenthus', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
    }
    return state
}

export default projectReducer