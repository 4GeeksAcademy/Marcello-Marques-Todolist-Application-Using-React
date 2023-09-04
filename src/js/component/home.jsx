import React, {useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [input,setInput] = useState("")
	const [list,setList] = useState([])
	const[count,setCount]= useState(0);
	const deleteItem = (recived) => {	
	const newList = list.filter((filterTask, filterIndex)=> recived != filterIndex)
	setList (newList);
	}
useEffect (()=>{setCount(list.length);},[list]);
	const changeTask = count < 2 ? 'task' : 'tasks';
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
			{list.length > 0 ? list.map((mapTask,mapIndex)=>{
				return( 
				<div className="rowTask effect">
					<div>
						<ul>
						<li>{mapTask}</li>
						</ul>
					</div>
					<div onClick={()=>deleteItem(mapIndex)} className= "iconDelete">
						
						<i class="fas fa-trash-alt"title="Delete"style={{ cursor: "pointer" }}></i>
					</div>
				</div>
				);
			}):""}
				<div className="countTask">{count} {changeTask}</div>
		</div>
	);
};

export default Home;
