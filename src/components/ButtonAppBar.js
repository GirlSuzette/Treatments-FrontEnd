import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'



const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class ButtonAppBar extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    toggleDrawer = () => {
        this.setState({
            open: !this.state.open
        });
    };
    render() {
        const AppBarStyles = {
            flex: 1
        };

        const ListItemTextStyle = {
            width: 200
        }

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={this.toggleDrawer} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography style={AppBarStyles} variant="h6" color="inherit" color='inherit'>
                        Muktek
                    </Typography>
                    <div className='NavMenu'>
                        <Link to='/'>
                            <Typography style={AppBarStyles} variant="h6" color="inherit" color='inherit'>
                                Home
                            </Typography>
                        </Link >
                        <Link to='/login'>
                            <Typography style={AppBarStyles} variant="h6" color="inherit" color='inherit'>
                                Login
                            </Typography>
                        </Link >
                    </div>
                </Toolbar>
                <Drawer open={this.state.open} onClose={this.toggleDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer}
                        onKeyDown={this.toggleDrawer}
                    >
                        <List>
                            <ListItem>
                                <ListItemText style={ListItemTextStyle} primary='Features' />
                            </ListItem>
                            <ListItem button>
                                <Link className='side' to="/users">Users</Link>
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <Link className='side' to="/treatments">Treaments</Link>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </AppBar >

        );
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(ButtonAppBar);


