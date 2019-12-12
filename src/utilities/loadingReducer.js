const loadingReducer = (state, action) => {
    switch (action.type) {
        case 'ANSWERS_LOADING':
            {
                return {
                    ...state,
                    answersLoading: action.payload,
                }
            }
        case 'QUESTIONS_LOADING':
            {
                return {
                    ...state,
                    questionsLoading: action.payload,
                }
            }
        case 'POLLS_LOADING':
            {
                return {
                    ...state,
                    pollsLoading: action.payload,
                }
            }
        default:
            return state
    }
}

export default loadingReducer;