const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ANSWERS':
            {
                return {
                    ...state,
                    answers: action.payload,
                }
            }
        case 'SET_POLLS':
            {
                return {
                    ...state,
                    polls: action.payload,
                }
            }
        case 'SET_QUESTIONS':
            return {
                ...state,
                questions: action.payload,
            }
        case 'SET_CURRENT_URL':
            return {
                ...state,
                currentUrl: action.payload,
            }
        case 'ADD_OPTION':
            {
                return {
                    ...state,
                    options: state.options.concat(action.payload)
                }
            }
        case 'REMOVE_OPTION':
            {
                return {
                    ...state,
                    options: action.payload,
                }
            }
        case 'CLEAN_OPTIONS':
            {
                return {
                    ...state,
                    options: [],
                }
            }
        default: {
            return state;
        }
    }
}

export default appReducer;