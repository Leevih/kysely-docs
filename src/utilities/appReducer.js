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
        default: {
            return state;
        }
    }
}

export default appReducer;