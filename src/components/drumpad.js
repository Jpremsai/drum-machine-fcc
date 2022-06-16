import React,{useEffect} from 'react'

function Drumpad(props) {
    const playSound = () =>{
        const sound = document.getElementById(props.value);
        sound.currentTime = 0;
        sound.play();
        props.handleDisplay(props.clipId);
        sound.volume= props.volume;
    }
    const handleClick=() =>{
        if(props.power){
            playSound();
        }
    }
    useEffect(() =>{
        document.addEventListener('keydown', (e) =>{
            if(props.power){
                if(e.key.toUpperCase() === props.value){
                    playSound();
                }
            }
        });
    })
    return (
         <button 
            className='drum-pad'
            id={props.clipId} 
            onClick ={handleClick}>
             <audio className='clip'src={props.clip} id={props.value} />
             {props.value}
         </button>
  )
}

export default Drumpad
