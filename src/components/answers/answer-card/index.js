import React from 'react'
import './answer-card.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default class extends React.Component{

    render(){
        const birdInfo = this.props.birdInfo

        
        const Player = () => (
            <AudioPlayer
              src={birdInfo.birdAudio}
              autoPlay={false}
              showJumpControls={false}
              customAdditionalControls={[]}
            //   customVolumeControls={[]}
              style={{outline:'none'}}
              layout="horizontal-reverse"
            />
          );

        return(
            <div className='card'>
                <div className="card-body">
                    <img className="card-img" src={birdInfo.birdImg} alt=""/>
                    <div className='names'>
                        <h2>{birdInfo.birdName}</h2>
                        <p>{birdInfo.birdLatinName}</p>
                        <Player/>
                    </div>
                </div>
                <p className="description">{birdInfo.birdDescription}</p>
            </div>
        )
    }
}