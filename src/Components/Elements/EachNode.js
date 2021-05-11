import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function EachNode(props) {
	const [finished, setFinished] = useState(false);

	return (
		<Grid direction="row" container className="each-to-do">
			<Grid xs="3" align="center" className="each-to-do-icon">
				{' '}
				{finished ? (
					<CheckCircleIcon
						fontSize="large"
						color="secondary"
						onClick={(e) => setFinished(false)}
					></CheckCircleIcon>
				) : (
					<CheckCircleOutlineIcon
						fontSize="large"
						onClick={(e) => setFinished(true)}
					></CheckCircleOutlineIcon>
				)}
			</Grid>
			<Grid xs="6" className="task-text-cont">
				{' '}
				<Typography
					align="left"
					className="task-text helvetica-neue-font"
					style={{
						textDecoration: finished ? 'line-through' : 'none',
						textTransform: 'uppercase',
					}}
				>
					{props.toDo}
				</Typography>
			</Grid>
			<Grid xs="3" align="center" className="each-to-do-icon">
				{' '}
				<DeleteIcon
					color="secondary"
					fontSize="large"
					onClick={(e) => {
						props.delete(props.index);
					}}
				></DeleteIcon>
			</Grid>
		</Grid>
	);
}

export default EachNode;
