import React, { Component } from 'react';
import superagent from 'superagent'
import FloatingActionButtonZoom from './button'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import { Link } from 'react-router-dom'

class Users extends Component {


    constructor() {
        super();
        this.state = {
            users: []
        };
    }



    componentDidMount() {
        superagent.get('https://warm-cove-41648.herokuapp.com/api/v1/users')
            .then(res => {
                this.setState({
                    users: res.body.data
                })
            })
            .catch(e => alert(e))

    }

    render() {
        const CustomTableCell = withStyles(theme => ({
            head: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
            },
            body: {
                fontSize: 14,
                width: '8%',
                marginTop: theme.spacing.unit * 3,
                overflowX: 'auto',
            },

        }))(TableCell);
        return (
            <React.Fragment>
                <TableHead>
                    <TableRow>
                        <CustomTableCell align="right">ID</CustomTableCell>
                        <CustomTableCell align="right">Name</CustomTableCell>
                        <CustomTableCell align="right">Email</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.users.map(user => (
                        <TableRow >
                            <CustomTableCell align="right">{user._id}</CustomTableCell>
                            <CustomTableCell align="right">{user.name}</CustomTableCell>
                            <CustomTableCell align="right">{user.email}</CustomTableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <Link className='NavMenu' to='/login'><FloatingActionButtonZoom /></Link >

            </React.Fragment>

        );
    }
}
export default Users;

