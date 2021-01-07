const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'


let initialState = {
    users:[],
    pageSize:25,
    totalCount:100,
    currentPage:1
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS : {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT : {
            return {...state, totalCount: action.totalCount}
        }
        default: return state
    }
}

export const setUsersAC = (users) => ( {type:SET_USERS, users} )
export const setCurrentPageAC = (currentPage) => ( {type:SET_CURRENT_PAGE, currentPage} )
export const setTotalCountAC = (totalCount) => ( {type:SET_TOTAL_COUNT, totalCount} )
export default usersReducer