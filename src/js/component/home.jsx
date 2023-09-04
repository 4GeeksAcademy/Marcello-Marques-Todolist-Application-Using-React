import React, {useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [input,setInput] = useState("")
	const [list,setList] = useState([])
	const[count,setCount]= useState(0);
	const deleteItem = () => {	
	}
useEffect (()=>{setCount(list.length);},[list]);
	const countTask = count < 2 ? 'Task' : 'Tasks';

		return (
		<div className="text-center">
			<h1>4Geeks: To Do List</h1>
			<div className="inputTasks">
				<input	type="text"
						onKeyDown={(event)=>{
						if (event.keyCode == 13){
							setList([...list,input])
							setInput("");
						}
					}
				}
				value={input}
						onChange={(e)=> setInput(e.target.value)}
						placeholder="What do I need to do?">
				</input>
			</div>

			{list.length > 0 ? list.map((task,index)=>{
				return( 
				<div className="rowTask">
					<div>
						<ul>
						<li>{task}</li>
						</ul>
					</div>
					<div onClick={()=>deleteItem()} className= "iconDelete">
						<i class="fas fa-trash-alt"></i>
					</div>
				</div>
				);
			}):""}
				<div>{count} {countTask}</div>
		</div>
	);
};

export default Home;
