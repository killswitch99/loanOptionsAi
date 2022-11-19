// create a reusable table component with redux

import React from 'react'

const Table = () => {
	//this function fetches data from API - http://universities.hipolabs.com/search?country=Australia
	//and displays it in a table
	const [data, setData] = React.useState([])
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(null)

	React.useEffect(() => {
		fetch('http://universities.hipolabs.com/search?country=Australia')
			.then((response) => response.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
			.catch((error) => {
				setError(error)
				setLoading(false)
			})
	}, [])
	return (
		<div>
			<h1>Table</h1>
			{loading && <div>Loading...</div>}
			{error && <div>Error: {error.message}</div>}
			{data && (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Country</th>
							<th>Web Page</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr key={item.name}>
								<td>{item.name}</td>
								<td>{item.country}</td>
								<td>{item.web_pages}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}
export default Table
