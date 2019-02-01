import React, { Component } from 'react';
import superagent from 'superagent'

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
        return (
            <React.Fragment>
                <div>
                    <tr>
                        <th>User</th>
                        <th>Description</th>
                        <th>Treatments</th>
                        <th>Appointments</th>
                    </tr>
                    {this.state.treatments.map(treatment => {
                        return (
                            <tr>
                                <th>{treatment.user}</th>
                                <th>{treatment.description}</th>
                                <th>{treatment.listOfTreatments}</th>
                                <th>{treatment.listOfAppointments}</th>
                            </tr>
                        )
                    })
                    }
                </div>
            </React.Fragment>
        );
    }
}