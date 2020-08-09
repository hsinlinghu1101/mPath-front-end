import React, { Component } from 'react'

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
            <div>
               <form>
               <button>I want to Listen</button> 
               <button>I have things to say</button> 
               </form>
            </div>
        )
    }
}

export default HomeRoute
