import React, { Component } from 'react';
import superagent from 'superagent'
import FloatingActionButtonZoom from './button'





export default class Users extends Component {
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
        
        return (
            <React.Fragment>
                <div>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {this.state.users.map(user => {
                        return (
                            <tr>
                                <th>{user._id}</th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                            </tr>
                        )
                    })
                    }
                </div>
                <FloatingActionButtonZoom/>

            </React.Fragment>

        );
    }
}

