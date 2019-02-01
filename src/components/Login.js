import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import superagent from 'superagent'



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

const formStyles = {
    width: 400,
    margin: '50px auto',
};



class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            showLogin: true,
            showRecord: false,
            name: '',
            email: ''
        };
    }


    handleChange = event => {
        const { id, value } = event.target
        this.setState({
            [id]: value
        })
    }

    onSubmitHandle = e => {

        e.preventDefault()

        if (!this.state.showLogIn) {

            const json = {
                name: this.state.name,
                email: this.state.email
            }
            // console.log(json);

            superagent.post('https://warm-cove-41648.herokuapp.com/api/v1/users')
                .send(json)
                .then(res => {
                    console.log(res.body.data);
                    alert('User Saved!')
                })
                .catch(e => alert(e))

        }

        this.setState({
            showLogIn: !this.state.showLogIn,
        })

    }

    login = (e) => {
        this.setState({
            showLogin: !this.state.showLogin,
            showRecord: !this.state.showRecord

        });
    };
    render() {

        return (
            <React.Fragment>
                {this.state.showLogin &&
                    <div style={formStyles}>
                        Login On
                        <form onSubmit={this.login}>
                            <TextField
                                required
                                name="email"
                                label="Email"
                                fullWidth
                            // onChange={this.handleChange}
                            />
                            <TextField
                                required
                                name="password"
                                type="password"
                                label="Password"
                                fullWidth
                            // onChange={this.handleChange}
                            />
                            <Button type='submit' variant='contained'>Login</Button>
                        </form>
                    </div>
                }
                {this.state.showRecord &&
                    <div style={formStyles}>
                        <form onSubmit={this.onSubmitHandle}>
                            Record
                            <TextField
                                required
                                id="name"
                                label="name"
                                fullWidth
                                onChange={this.handleChange}
                            />
                            <TextField
                                required
                                id="email"
                                type="Email"
                                label="Email"
                                fullWidth
                                onChange={this.handleChange}
                            />
                            <Button type='submit' variant='contained'>Login</Button>
                        </form>
                    </div>
                }
            </React.Fragment>



        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(Login);


