import fetch from 'node-fetch'

// data is an array of objects
let data

if (process.argv.length < 4) {
	console.error('Expected two argument!')
	process.exit(1)
}

// cmd args
const category = process.argv[2]
const limit = process.argv[3]

console.log(`You requested ${limit} items from category: ${category}`)

const url = `https://api.publicapis.org/entries`

const options = {
	method: 'GET',
}

try {
	const res = await fetch(url, options)
	data = await res.json()
	const match = data.entries
		.filter((item) => item.Category === category)
		.slice(0, limit)
	if (match.length > 0) {
		console.log(match)
	} else {
		console.log('No results!')
	}
} catch (err) {
	console.log(err)
}
