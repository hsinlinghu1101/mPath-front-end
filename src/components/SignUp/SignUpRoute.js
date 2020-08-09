import React from 'react'
import SignUp from './SignUp'

export default class SignUpRoute extends React.Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

    handleRegistration = (user) => {
        const { history } = this.props
        history.push('/login')
    }
    render() {
        return (
            <div>
                <SignUp onRegisterationSuccess={this.handleRegistration} />
            </div>
        )
    }
}