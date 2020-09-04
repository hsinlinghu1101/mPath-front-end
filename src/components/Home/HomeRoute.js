import React, { Component } from 'react'
import Home from './Home'
export class HomeRoute extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

   /* handleSubmitData = (data) => {

        const { user_id } = this.props.match.params
        const { history } = this.props
        history.push(`/data/${user_id}`)
    }*/
    render() {
        return (
            <Home/>
        )
    }
}

export default HomeRoute
