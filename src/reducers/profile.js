const SET_PROFILE_DATA = 'SET_PROFILE_DATA'

let initialState = {}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE_DATA : {
            return {...state, ...action.profileData}
        }
        default: return state
    }
}

export const setProfileAC = (profileData) => ( {type:SET_PROFILE_DATA, profileData} )
export default profileReducer