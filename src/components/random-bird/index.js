import React from 'react'
import './random-bird.css'
import image from './image/bird.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.bird.audio !== nextProps.bird.audio ||
        this.props.isGuess !== nextProps.isGuess
    }
    
    render(){

        this.player = React.createRef()

        const Player = () => (
            <AudioPlayer ref={this.player}
              src={this.props.bird.audio}
              autoPlay={false}
              showJumpControls={false}
              customAdditionalControls={[]}
            //   customVolumeControls={[]}
              style={{outline:'none'}}
              layout="horizontal-reverse"
            />
        );

        // if(this.props.isGuess){
        //     console.log(this.player)
        // }

        return(
            <div className="random-bird">
                <img className='random-biard-image' src={this.props.isGuess ? this.props.bird.image : image} alt=""/>
                <div>
                    <p className="name-bird">{this.props.isGuess ? this.props.bird.name : '*****'}</p>
                    <Player/>
                </div>
            </div>
        )
    }
}