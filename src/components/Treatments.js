import React, { Component } from 'react';
import superagent from 'superagent';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';

export default class Treatments extends Component {
    constructor() {
        super();
        this.state = {
            treatments: []
        };
    }



    componentDidMount() {
        superagent.get('https://warm-cove-41648.herokuapp.com/api/v1/treatments')
            .then(res => {
                this.setState({
                    treatments: res.body.data
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
                fontSize: 11.3,
                width: '',
                // marginTop: theme.spacing.unit * 3,
                overflowX: 'auto',
            },

        }))(TableCell);
        return (
            <React.Fragment>
                <TableHead>
                    <TableRow>
                        <CustomTableCell align="right">User</CustomTableCell>
                        <CustomTableCell align="right">Description</CustomTableCell>
                        <CustomTableCell align="right">Treatments</CustomTableCell>
                        <CustomTableCell align="right">Appointments</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.treatments.map(treatment => (
                        <TableRow >
                            <CustomTableCell align="right">{treatment.user}</CustomTableCell>
                            <CustomTableCell align="right">{treatment.description}</CustomTableCell>
                            <CustomTableCell align="right">{treatment.listOfTreatments}</CustomTableCell>
                            <CustomTableCell align="right">{treatment.listOfAppointments}</CustomTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </React.Fragment >
        );
    }
}