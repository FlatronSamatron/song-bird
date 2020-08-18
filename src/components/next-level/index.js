import React from 'react'
import './next-level.css'


export default function(props){ 

    return(
        <div className='btn' style={!props.isGuess ? {} : {background: '#00bc8c'}} onClick={ props.isGuess? props.nextLevel : null}>
            NEXT LEVEL
        </div>
    )
}

// pointer-events: none; style={!props.isGuess ? {pointerEvents: 'none'} : {pointerEvents: 'auto'}}


// export default class extends React.Component{

//     nextLogic = () => {
//         return this.props.nextLevel
//     }

//     render(){
//         return(
//             <div className='btn' onClick={this.nextLogic}>
//                 NEXT LEVEL
//             </div>
//         )
//     }
// }
