import { CircularProgress, Link } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const UniTable = (props) => {
	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
		},
	}))

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
		// hide last border
		'&:last-child td, &:last-child th': {
			border: 0,
		},
	}))

	return (
		<div>
			{props.loading ? (
				<CircularProgress />
			) : props.error ? (
				<div>Error: {props.error.message}</div>
			) : (
				<TableContainer component={Paper}>
					<Table aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Name</StyledTableCell>
								<StyledTableCell>Web Page</StyledTableCell>
								<StyledTableCell>Country</StyledTableCell>
								<StyledTableCell>Alpha Two Code</StyledTableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{props.data?.universities?.map((item) => (
								<StyledTableRow key={item.name}>
									<StyledTableCell component="th" scope="row">
										{item.name}
									</StyledTableCell>
									<StyledTableCell align="left">
										<Link>{item.web_pages}</Link>
									</StyledTableCell>
									<StyledTableCell align="left">{item.country}</StyledTableCell>
									<StyledTableCell align="left">
										{item.alpha_two_code}
									</StyledTableCell>
									<StyledTableCell align="left">
										{item.state_province}
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</div>
	)
}
export default UniTable
