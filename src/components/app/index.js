import React from 'react'
import birdsData from '../../services/birds-data/'
import './app.css'

import Header from '../header'
import Answers from '../answers/answer-list'
import NextButton from '../next-level'
import RandomBird from '../random-bird'

export default class extends React.Component{

    state={
        header:['Разминка','Воробьиные','Лесные птицы','Певчие птицы','Хищные птицы','Морские птицы'],
        text: true,
        active: 0,
        birds: birdsData,
        score: 0,
        backGround: true,
        rightAnswer: 3,
        isGuess: false
    }

    isText = (text) => {
        this.setState({
            text: text
        })
    }

    nextLevel = () => {
        let rightAnswer = Math.floor(Math.random() * (this.state.birds[this.state.active].length - 1))
        this.setState({
            active: this.state.active + 1,
            text: true,
            backGround: !this.state.backGround,
            rightAnswer: rightAnswer,
            isGuess:false
        })
    }

    // componentDidMount(){
    //     let rightAnswer = Math.floor(Math.random() * (this.state.birds[this.state.active].length - 1))
    //     this.setState({
    //         rightAnswer: rightAnswer
    //     })
    // }


    render(){
        
        return(
            <div className='container'>
                <Header 
                list={this.state.header}
                active={this.state.active}
                score={this.state.score}
                />
                <RandomBird
                bird={this.state.birds[this.state.active][this.state.rightAnswer]}
                isGuess = {this.state.isGuess}
                rightAnswer={this.state.rightAnswer}
                />
                <Answers 
                birds={this.state.birds[this.state.active]}
                rightAnswer={this.state.rightAnswer}
                text={this.state.text}
                isText={(text)=>{this.isText(text)}}
                backGround = {this.state.backGround}
                isGuess = {this.state.isGuess}
                guessChange = {()=>{this.setState({isGuess:true})}}
                scoreChange = {(scr)=>{this.setState({score: this.state.score + scr})}}
                />
                <NextButton 
                nextLevel={()=>{this.nextLevel()}} 
                isGuess = {this.state.isGuess}
                />
            </div>
        )
    }
}