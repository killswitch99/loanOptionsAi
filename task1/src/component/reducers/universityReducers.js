import {
	UNIVERSITIES_ADD_REQUEST,
	UNIVERSITIES_LIST_REQUEST,
	UNIVERSITIES_DELETE_REQUEST,
} from '../constants/univertyConstants'

// reducer for universities list
export const universitiesReducer = (state = { universities: [] }, action) => {
	switch (action.type) {
		case UNIVERSITIES_LIST_REQUEST:
			return { loading: true, universities: action.payload }
		case UNIVERSITIES_ADD_REQUEST:
			// add new university data to the end of the data array
			return {
				loading: false,
				universities: action.payload,
			}
		case UNIVERSITIES_DELETE_REQUEST:
			// delete a row
			return {
				loading: false,
				universities: action.payload,
			}

		default:
			return state
	}
}
