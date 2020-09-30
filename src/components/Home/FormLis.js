import React, { Component } from 'react'
import PairsApiService from '../../services/pairs-api-service'
import MPathContext from '../../context/MPathContext'
export class FormLis extends Component {
    static contextType = MPathContext
    AddListener = (event) => {
        event.preventDefault();
        const { emotion, topic, spe_gender, spe_age, webcam } = event.target

        this.setState({ error: null })
        PairsApiService.postListener({
            emotion: Number(emotion.value),
            topic:Number(topic.value),
            spe_gender:Number(spe_gender.value),
            spe_age: Number(spe_age.value),
            webcam: webcam.value,
            user_id: this.props.user_id
        })
            .then(data=>{
                this.context.setmyPair(data)
            })
            .then(user => {
                emotion.value = ''
                topic.value = ''
                spe_gender.value = ''
                spe_age.value = ''
                webcam.value = ''
                this.props.handlePairsSuccess()
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }
    render() {
        return (
            <form className="form cf" onSubmit={this.AddListener}>
            <section className="feeling cf"> 
               <h3 className="question">How are you feeling today?</h3> 
               <input type="radio" name="emotion" id="amazing" value="1"/>
               <label className="four col" htmlFor="amazing">Amazing</label>
                <input type="radio" name="emotion" id="good" value="2" />
                <label className="four col" htmlFor="good">Good</label>
                <input type="radio" name="emotion" id="okay" value="3"/>
                <label className="four col" htmlFor="okay">Okay</label>
                <input type="radio" name="emotion" id="cbb" value="4"/>
                <label className="four col" htmlFor="cbb">Could be Better</label>
                </section>
                <section className="reason cf">
               <h3 className="question" >What topic you are interested in ?</h3> 
               <input type="radio" name="topic" id="career" value="1" />
               <label className=" four col" htmlFor="career">Career Issue</label>
               <input type="radio" name="topic" id="family" value="2" />
               <label className=" four col" htmlFor="family">Family Issue</label>
               <input type="radio" name="topic" id="academic" value="3" />
               <label className=" four col" htmlFor="academic">Academic Issue</label>
               <input type="radio" name="topic" id="any" value="4" />
               <label className="four col" htmlFor="any">Any topic</label>
               </section>
               <h3 className="question">I'm willing to pair with</h3>
               <label className="question"></label>
               <select name='spe_gender' id='spe_gender' required>
                        <option id='sex'>Sex</option>
                        <option id='sex' value='1'>Female</option>
                        <option id='sex' value='2'>Male</option>
                        <option id='sex' value='3'>Doesn't matter to me</option>
               </select>
               <label className="question"></label>
               <select name='spe_age' id='spe_age' required>
                        <option id='age'>find your pair's age</option>
                        <option id='age' value='1'>14-18 years old</option>
                        <option id='age' value='2'>19-29 years old</option>
                        <option id='age' value='3'>30-39 years old</option>
                        <option id='age' value='4'>40-49 years old</option>
                        <option id='age' value='5'>50-59 years old</option>
                        <option id='age' value='6'>above 60 years old</option>
                        <option id='age' value='7'>Doesn't matter to me</option>
                </select>
               
               <section className="group cf">
               <h3 className="question">Web camera</h3>
               <input type="radio" name="webcam" id="on" value="on" required/>
               <label className="four col" htmlFor="on">turn on</label>
               <input type="radio" name="webcam" id="off" value="off" required/>
               <label className="four col" htmlFor="off">turn off</label><br></br>
               </section>
               <button type="submit" className="btn sub">Submit</button>
               <section/>
            </form>
        )
    }
}

export default FormLis
