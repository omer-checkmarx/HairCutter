import React from 'react';
import Logo from './Logo.js';
import MainMenu from './MainMenu.js';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MenuToolbar from './MenuToolbar.js';
import {Link} from 'react-router-dom';

class MainPage extends React.Component{
	render() {
		return (
			<React.Fragment>
				<MenuToolbar></MenuToolbar>
				<div className="App">
					<Box className="mainFlex"></Box>
					<Logo variant="big"></Logo>
					<MainMenu></MainMenu>
				</div>
				<Link to="/invite">
					<Fab color='primary' className="addingFab" style={{'position': 'absolute', 'bottom': '20px', 'left': '20px'}}>
						<AddIcon />
					</Fab>
				</Link>
			</React.Fragment>
		);
	}
}

export default MainPage;
