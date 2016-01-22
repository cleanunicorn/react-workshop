var React = require('react');
var $ = require('jquery');

var SimpleForm = React.createClass({
    getInitialState: function () {
        return {
            email: this.props.email,
            password: this.props.password,
            errorClass: ''
        };
    },
    handleEmailChange: function (event) {
        this.setState({
            email: event.target.value,
            errorClass: event.target.value.indexOf('@') != -1 ? '' : 'error'
        });
    },
    handlePasswordChange: function (event) {
        this.setState({
            password: event.target.value
        });
    },
    handleLogin: function (event) {
        event.preventDefault();
        $.post(
            '/login',
            {
                email: this.state.email,
                password: this.state.password
            }
        );
    },
    render: function() {
        return(
            <form onSubmit={this.handleLogin}>
                <input type="text" name="email" className={this.state.errorClass} onChange={this.handleEmailChange} value={this.state.email} />
                <input type="password" name="password" onChange={this.handlePasswordChange} value={this.state.password} />
                <input type="submit" value="Login" />
            </form>
        );
    }
});

module.exports = SimpleForm;
