import React, { Component } from 'react'
import PairsApiService from '../../services/pairs-api-service'

export class FormSpe extends Component {
    AddSpeaker = (event) => {
        event.preventDefault();
        const { emotion, topic, lis_gender, lis_age, webcam } = event.target

        this.setState({ error: null })
        PairsApiService.postSpeaker({
            emotion: Number(emotion.value),
            topic:Number(topic.value),
            lis_gender:Number(lis_gender.value),
            lis_age: Number(lis_age.value),
            webcam: webcam.value
        })

            .then(user => {
                emotion.value = ''
                topic.value = ''
                lis_gender.value = ''
                lis_age.value = ''
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
            <form className="form cf" >
            <section className="feeling cf"> 
               <h3 className="question">How are you feeling today?</h3> 
               <input type="radio" name="radio1" id="amazing" value="1"/>
               <label className="four col" htmlFor="amazing">Amazing</label>
                <input type="radio" name="radio1" id="good" value="2" />
                <label className="four col" htmlFor="good">Good</label>
                <input type="radio" name="radio1" id="okay" value="3"/>
                <label className="four col" htmlFor="okay">Okay</label>
                <input type="radio" name="radio1" id="cbb" value="4"/>
                <label className="four col" htmlFor="cbb">Could be Better</label>
                </section>
                <section className="reason cf">
               <h3 className="question" >What topic you'd like to talk?</h3> 
               <input type="radio" name="radio2" id="career" value="1" />
               <label className=" four col" htmlFor="career">My Career</label>
               <input type="radio" name="radio2" id="family" value="2" />
               <label className=" four col" htmlFor="family">My Family</label>
               <input type="radio" name="radio2" id="academic" value="3" />
               <label className=" four col" htmlFor="academic">My Academic</label>
               <input type="radio" name="radio2" id="others" value="4" />
               <label className="four col" htmlFor="others">Others</label>
               </section>
               <h3 className="question">Looking for my listener</h3>
               <label className="question"></label>
               <select name='lis_gender' id='lis_gender' required>
                        <option id='sex'>Sex</option>
                        <option id='sex' value='1'>Female</option>
                        <option id='sex' value='2'>Male</option>
                        <option id='sex' value='lis_mf'>Doesn't matter to me</option>
               </select>
               <label className="question"></label>
               <select name='lis_age' id='lis_age' required>
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
               <input type="radio" name="radio3" id="on" value="on" required/>
               <label className="four col" htmlFor="on">turn on</label>
               <input type="radio" name="radio3" id="off" value="off" required/>
               <label className="four col" htmlFor="off">turn off</label><br></br>
               </section>
               <button type="submit" className="btn sub">Submit</button>
               <section/>
            </form>
        )
    }
}

export default FormSpe
