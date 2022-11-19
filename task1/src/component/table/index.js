import React, { useState } from 'react'
const Table = () => {
	//this function fetches data from API - http://universities.hipolabs.com/search?country=Australia
	//and displays it in a table
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [uniData, setUniData] = useState({
		name: '',
		web_pages: '',
		domains: '',
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
	// reset the input fields
	const resetInput = () => {
		setUniData({
			name: '',
			web_pages: '',
			domains: '',
			country: '',
			alpha_two_code: '',
		})
	}
	// function to handle input change
	const handleInputChange = (e) => {
		const { name, value } = e.target
		if (name === 'name') {
			setUniData({ ...uniData, name: value })
		} else if (name === 'webPage') {
			setUniData({ ...uniData, web_pages: value })
		} else if (name === 'domain') {
			setUniData({ ...uniData, domains: value })
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
		e.target.reset()
	}
	// function to delete a row

	const deleteRow = () => {
		const newData = [...data]
		newData.pop()
		setData(newData)
	}

	// return table with data from API when load button is clicked
	// button to add new row to the table
	// button to delete row from the table
	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							onChange={(e) => handleInputChange(e)}
						/>
					</label>
					<label>
						Domain:
						<input
							type="text"
							name="domain"
							onChange={(e) => handleInputChange(e)}
						/>
					</label>
					<label>
						Web Page:
						<input
							type="text"
							name="web_page"
							onChange={(e) => handleInputChange(e)}
						/>
					</label>
					<label>
						Country:
						<input
							type="text"
							name="country"
							onChange={(e) => handleInputChange(e)}
						/>
					</label>
					<label>
						Alpha Two Code:
						<input
							type="text"
							name="alpha_two_code"
							onChange={(e) => handleInputChange(e)}
						/>
					</label>
					<input type="submit" value="Add" />
				</form>
			</div>
			<div>
				<button onClick={handleClick}>Load</button>
				<button onClick={deleteRow}>Delete</button>
				{loading ? (
					<div>Loading...</div>
				) : error ? (
					<div>Error: {error.message}</div>
				) : (
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Web Page</th>
								<th>Domain</th>
								<th>Country</th>
								<th>Alpha Two Code</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item) => (
								<tr key={item.name}>
									<td>{item.name}</td>
									<td>{item.web_pages}</td>
									<td>{item.domains}</td>
									<td>{item.country}</td>
									<td>{item.alpha_two_code}</td>
									<td>{item.state_province}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</>
	)
}
export default Table
