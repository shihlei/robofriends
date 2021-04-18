import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions';

function App(){ 
	//state(Hook: function way)
	const [robots, setRobots] = useState([])
	const [searchfield, setSearchfield] = useState('')

	useEffect(() => {
		//透過api機器人的抓資料，而不是直接透過robots檔案輸入
		//make request and receive response
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			//return "promise"
			//update user with setstate
			//don't need to refresh the page
			.then(users => { setRobots(users)});
	},[])

	//像是觸發事件，因為是自己建立的method，所以要這樣寫
	const onSearchChange = (event) => {
		setSearchfield(event.target.value)//update state，依據輸入內容
	}
	 //拿到props
	const filteredRobots = robots.filter(robot => { //從輸入匡連結到robot的cardlist
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	return !robots.length ?
	<h1>Loadind...</h1> :
	(
		<div className ='tc'>
			<h1 className = 'f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange}/> 
			<Scroll>
				<ErrorBoundry>
					<CardList robots = {filteredRobots}/>
				</ErrorBoundry>
			</Scroll>
		</div>
	);
}

export default App;
