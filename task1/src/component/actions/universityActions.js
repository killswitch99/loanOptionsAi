import axios from 'axios'

import {
	UNIVERSITIES_ADD_REQUEST,
	UNIVERSITIES_LIST_REQUEST,
	UNIVERSITIES_DELETE_REQUEST,
} from '../constants/univertyConstants'

// action for getting universities list
export const universitiesListAction = () => async (dispatch) => {
	console.log('universitiesListAction')
	try {
		dispatch({ type: UNIVERSITIES_LIST_REQUEST })
		const { data } = await axios.get(
			'http://universities.hipolabs.com/search?country=Australia'
		)
		dispatch({ type: UNIVERSITIES_ADD_REQUEST, payload: data })
	} catch (error) {
		console.log(error)
	}
}

// action for adding new university data to the end of the data array
export const universitiesAddAction = (data) => async (dispatch) => {
	console.log('universitiesAddAction')
	console.log(data.payload)
	try {
		dispatch({ type: UNIVERSITIES_ADD_REQUEST, payload: data.payload })
	} catch (error) {
		console.log(error)
	}
}

// action for deleting a row
export const universitiesDeleteAction = (data) => async (dispatch) => {
	console.log('universitiesDeleteAction')
	try {
		dispatch({ type: UNIVERSITIES_DELETE_REQUEST, payload: data.payload })
	} catch (error) {
		console.log(error)
	}
}
