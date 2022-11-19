import { Button, ButtonGroup, FormControl, Input } from '@mui/material'
import { Box } from '@mui/system'

export const AddUniForm = (props) => {
	const { handleInputChange, handleSubmit, uniData, handleClick, deleteRow } =
		props
	return (
		<FormControl>
			<Input
				id="name"
				name="name"
				type="text"
				value={uniData.name}
				onChange={handleInputChange}
				placeholder="University Name"
			/>
			<Input
				id="web_pages"
				name="web_pages"
				type="text"
				value={uniData.web_pages}
				onChange={handleInputChange}
				placeholder="University Website"
			/>
			<Input
				id="country"
				name="country"
				type="text"
				value={uniData.country}
				onChange={handleInputChange}
				placeholder="Country"
			/>
			<Input
				id="alpha_two_code"
				name="alpha_two_code"
				type="text"
				value={uniData.alpha_two_code}
				onChange={handleInputChange}
				placeholder="Country Code"
			/>
			<Box mt={2}>
				<ButtonGroup variant="outlined" aria-label="small button group">
					<Button onClick={handleSubmit} color="success">
						Add
					</Button>
					<Button onClick={handleClick} color="primary">
						Load
					</Button>
					<Button onClick={deleteRow} color="error">
						Delete
					</Button>
				</ButtonGroup>
			</Box>
		</FormControl>
	)
}
export default AddUniForm
