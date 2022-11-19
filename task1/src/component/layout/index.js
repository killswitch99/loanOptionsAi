import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import AddUniForm from '../form'
import UniTable from '../table'
import { Container } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'
import {
	universitiesListAction,
	universitiesAddAction,
	universitiesDeleteAction,
} from '../actions/universityActions'

const Layout = () => {
	const [error, setError] = useState(null)
	const [uniData, setUniData] = useState({
		name: '',
		web_pages: '',
		country: '',
		alpha_two_code: '',
	})

	const dispatch = useDispatch()
	const universities = useSelector((state) => state.universities)
	const { loading } = universities

	// fetch data from API when load button is clicked
	const handleClick = async () => {
		console.log('clicked')
		dispatch(universitiesListAction())
	}
	// function to handle input change
	const handleInputChange = (e) => {
		const { name, value } = e.target
		if (name === 'name') {
			setUniData({ ...uniData, name: value })
		} else if (name === 'web_pages') {
			setUniData({ ...uniData, web_pages: value })
		} else if (name === 'country') {
			setUniData({ ...uniData, country: value })
		} else if (name === 'alpha_two_code') {
			setUniData({ ...uniData, alpha_two_code: value })
		}
	}

	// on submit button click to add new university data to the end of the data array
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(
			universitiesAddAction({
				payload: universities.universities.concat(uniData),
			})
		)
		// reset the form
		setUniData({
			name: '',
			web_pages: '',
			country: '',
			alpha_two_code: '',
		})

		console.log('added')
	}
	// function to delete a row
	const deleteRow = () => {
		console.log('deleted')
		const newData = [...universities.universities]
		newData.pop()
		dispatch(universitiesDeleteAction({ payload: newData }))
	}

	return (
		<Container maxWidth="md">
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<h2>University Data</h2>
						<Paper
							sx={{
								p: 2,
								display: 'flex',
								flexDirection: 'column',
								height: 240,
							}}
						>
							<AddUniForm
								handleInputChange={handleInputChange}
								handleSubmit={handleSubmit}
								uniData={uniData}
								handleClick={handleClick}
								deleteRow={deleteRow}
							/>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<UniTable data={universities} loading={loading} error={error} />
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

export default Layout
