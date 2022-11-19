import { Button, FormControl, Input } from '@mui/material'

export const AddUniForm = (props) => {
	return (
		<div>
			<FormControl onSubmit={props.handleSubmit}>
				<label>
					Name:
					<Input
						type="text"
						name="name"
						onChange={(e) => props.handleInputChange(e)}
					/>
				</label>

				<label>
					Web Page:
					<Input
						type="text"
						name="web_page"
						onChange={(e) => props.handleInputChange(e)}
					/>
				</label>
				<label>
					Country:
					<Input
						type="text"
						name="country"
						onChange={(e) => props.handleInputChange(e)}
					/>
				</label>
				<label>
					Alpha Two Code:
					<Input
						type="text"
						name="alpha_two_code"
						onChange={(e) => props.handleInputChange(e)}
					/>
				</label>
				<Button
					type="submit"
					onClick={(e) => props.handleSubmit(e)}
					fullWidth={true}
					variant="contained"
					color="primary"
				/>
			</FormControl>
			<Button variant="contained" color="secondary" onClick={props.handleClick}>
				Load
			</Button>
			<Button variant="contained" color="warning" onClick={props.deleteRow}>
				Delete
			</Button>
		</div>
	)
}

export default AddUniForm
