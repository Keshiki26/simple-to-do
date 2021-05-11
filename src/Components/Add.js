import { InputAdornment, InputLabel, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
export default function Add(props) {
	const [term, setTerm] = useState('');

	return (
		<form
			noValidate
			onSubmit={(e) => {
				if (term !== '') {
					e.preventDefault();
					props.submitAction(term);
					setTerm('');
				}
			}}
			className="form-search"
		>
			<TextField
				id="outlined-basic"
				color="secondary"
				autoFocus="true"
				autoComplete="off"
				required="true"
				label="Add New"
				helperText="To add a new task simply type and enter..."
				placeholder="Task...."
				variant="filled"
				fullWidth="true"
				value={term}
				onChange={(e) => {
					setTerm(e.target.value);
				}}
				size="large"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start" disablePointerEvents="true">
							<CreateIcon color="secondary" />
						</InputAdornment>
					),
				}}
			></TextField>
		</form>
	);
}
