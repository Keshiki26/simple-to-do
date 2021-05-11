import './App.css';
import { Grid, Typography } from '@material-ui/core';
import Add from './Components/Add';
import EachNode from './Components/Elements/EachNode';
import { useEffect, useState } from 'react';
import { Draggable } from 'react-drag-reorder';

function App() {
	const [toDos, setToDos] = useState(
		JSON.parse(localStorage.getItem('tasks')) || []
	);
	const submitAction = (t) => {
		const thisTask = { title: t, status: false };
		setToDos([...toDos, thisTask]);
		localStorage.setItem('tasks', JSON.stringify([...toDos, thisTask]));
	};
	const deleteToDo = (i) => {
		const newTasks = toDos.filter((element, index) => index !== i);
		setToDos(newTasks);
		localStorage.setItem('tasks', JSON.stringify(newTasks));
	};
	const changeItemStatus = (i, status) => {
		toDos[i].status = status;
		setToDos(toDos);
		localStorage.setItem('tasks', JSON.stringify(toDos));
		console.log(toDos[i]);
	};

	const dragCallBack = (a) => {
		let av = [];
		for (let i = 0; i < a.length; i++) {
			av.push(toDos[a[i].key]);
		}
		setToDos(av);
		localStorage.setItem('tasks', JSON.stringify(av));
	};

	let toDoItems = toDos.map((toDo, i) => (
		<EachNode
			key={i}
			index={i}
			toDo={toDo.title}
			delete={deleteToDo}
			status={toDo.status}
			changeStatus={changeItemStatus}
		/>
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
			{/* <Grid xs="12">
				<Draggable dragCallBack={dragCallBack}>{toDoItems}</Draggable>
			</Grid> */}
			{toDoItems}
		</Grid>
	);
}

export default App;
