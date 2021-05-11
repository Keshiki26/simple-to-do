import './App.css';
import { Grid, Container, Typography } from '@material-ui/core';
import { Route } from 'react-router-dom';
import Add from './Components/Add';
import EachNode from './Components/Elements/EachNode';
import { useState } from 'react';
import { Draggable } from 'react-drag-reorder';

function App() {
	const [toDos, setToDos] = useState(
		JSON.parse(localStorage.getItem('tasks')) || []
	);
	const submitAction = (t) => {
		setToDos([...toDos, t]);
		localStorage.setItem('tasks', JSON.stringify([...toDos, t]));
	};

	const deleteToDo = (i) => {
		const newTasks = toDos.filter((element, index) => index !== i);
		setToDos(newTasks);
		localStorage.setItem('tasks', JSON.stringify(newTasks));
	};
	const toDoItems = toDos.map((toDo, i) => (
		<EachNode index={i} toDo={toDo} delete={deleteToDo} />
	));
	return (
		<Grid justify="center" container direction="row">
			<Grid justify="center" container xs="12" item>
				<Add submitAction={submitAction} />
			</Grid>
			<Grid>
				{toDos.length > 0 && (
					<Typography
						className="helvetica-neue-font"
						variant="h4"
						color="secondary"
						style={{
							margin: '10px',
							textTransform: 'uppercase',
						}}
					>
						To Do Tasks
					</Typography>
				)}
			</Grid>
			<Grid xs="12">
				<Draggable>{toDoItems}</Draggable>
				{console.log(toDoItems)}
			</Grid>
		</Grid>
	);
}

export default App;
