import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class MenuToolbar extends React.Component{
	render() {
		return (
			<AppBar position="static">
				<Toolbar>
				  <IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				  </IconButton>
				</Toolbar>
			</AppBar>
		);
	}
}

export default MenuToolbar;
