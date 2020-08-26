import React from 'react'
import './answer-list.css'

import BirdInfoRender from '../answer-card'

import error from './audio/error.mp3'
import win from './audio/win.mp3'

export default class extends React.PureComponent{

    state = {
        birdImg: null,
        birdName: null,
        birdLatinName: null,
        birdAudio: null,
        birdDescription: null,
        text: 'Послушайте плеер. Выберите птицу из списка',
        score: 5,
        isClick: []
    }

    


    checkClick = (index) => {
        let click = [...this.state.isClick,index];

        this.props.checkClick(click)

        return this.props.isClick.some( el => el === index)
    }


    infoRender = (bird, e, index) => {

        

        let audio;
        let span = e.target.querySelector('span')

        if(this.props.text){
            this.props.isText(null)
        }

        if(!this.props.isGuess && !this.checkClick(index)){
            if( this.props.rightAnswer === index ){
                audio = new Audio(win);
                audio.play();
                span.style.background = 'green';
                this.props.scoreChange(this.state.score)
                this.props.guessChange()
                this.setState({
                    score: 5
                })
            } else {
                audio = new Audio(error);
                audio.play();
                span.style.background = 'red'
                this.setState({
                    score: this.state.score - 1
                })
            }
        }

        this.setState({
            birdImg: bird.image,
            birdName: bird.name,
            birdLatinName: bird.species,
            birdAudio: bird.audio,
            birdDescription: bird.description
        })   
    }



    render(){

        let birdsItem = this.props.birds.map( (bird, index) => {
            return (
                <li key={bird.id} className='answers-item' onClick={(e)=>this.infoRender(bird, e, index)}>
                    <span className='indicator' style={this.props.backGround ? {background:'#667'} : {}} ></span>{bird.name}
                </li>
            )
        })

        return(
            <div className="answer-block">
                <ul className='answers'>
                    {birdsItem}
                </ul>
                <div className="bird-info">
                    {this.props.text ? <p style={{textAlign: 'center'}}>{this.state.text}</p> : <BirdInfoRender birdInfo = {this.state}/>}
                </div>
            </div>
        )
    }
}
