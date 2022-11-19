import React, { useState } from 'react'

import AddUniForm from '../form'
import UniTable from '../table'

const Layout = () => {
	//this function fetches data from API - http://universities.hipolabs.com/search?country=Australia
	//and displays it in a table
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [uniData, setUniData] = useState({
		name: '',
		web_pages: '',
		country: '',
		alpha_two_code: '',
	})

	const fetchData = async () => {
		try {
			const response = await fetch(
				'http://universities.hipolabs.com/search?country=Australia'
			)
			const json = await response.json()
			setData(json)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}
	// fetch data from API when load button is clicked

	const handleClick = async () => {
		await fetchData()
	}
	// function to handle input change
	const handleInputChange = (e) => {
		const { name, value } = e.target
		if (name === 'name') {
			setUniData({ ...uniData, name: value })
		} else if (name === 'webPage') {
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
		setData([...data, uniData])
		setUniData({
			name: '',
			web_pages: '',
			country: '',
			alpha_two_code: '',
		})
	}
	// function to delete a row

	const deleteRow = () => {
		const newData = [...data]
		newData.pop()
		setData(newData)
	}
	return (
		<>
			<AddUniForm
				handleSubmit={handleSubmit}
				handleInputChange={(e) => handleInputChange(e)}
				handleClick={handleClick}
				deleteRow={deleteRow}
			/>
			<UniTable data={data} loading={loading} error={error} />
		</>
	)
}

export default Layout
