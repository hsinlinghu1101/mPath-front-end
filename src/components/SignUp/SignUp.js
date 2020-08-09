import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'

 class SignUp extends Component {
    static defaultProps = {
        onRegisterationSuccess: () => { }
    }

    state = {
        error: null,
    }


    handleNewUser = (event) => {
        event.preventDefault();
        const { user_name, user_age, user_email, user_gender, password } = event.target

        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            user_email:user_email.value,
            user_gender:Number(user_gender.value),
            user_age: Number(user_age.value),
            password: password.value
        })

            .then(user => {
                user_name.value = ''
                user_age.value = ''
                user_email.value = ''
                user_gender.value = ''
                password.value = ''
                this.props.onRegisterationSuccess()
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    render() {
        const { error } = this.state
        return (
            <div>
                <h3>Create an Account</h3>
               <form onSubmit={this.handleNewUser}>
               {error && <p>{error}</p>}
                   <label>Your Name</label>
                   <input type="text" name="user_name" /><br></br>
                   <label>Your Email</label>
                   <input type="email" name="user_email" /><br></br>
                   <select name="user_gender">
                       <option >Your Gender</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                   </select>
                   <br></br>
                   <select name="user_age">
                        <option >Your Age</option>
                        <option value="1">14-18</option>
                        <option value="2">19-29</option>
                        <option value="3">30-49</option>
                        <option value="4">50-64</option>
                        <option value="5">65 and above</option>
                   </select>
                   <br></br>
                   <label>Password</label>
                   <input type="password" name="password" />
                   <br></br>
                   <checkbox>term of conditions</checkbox>
                   <br></br>
                   <button type="submit">Submit</button>
                   <br></br>
                   <Link to="/">Cancel</Link>
                </form> 
            </div>
        )
    }
}

export default SignUp
