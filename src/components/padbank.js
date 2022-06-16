import React from 'react'
import Drumpad from './drumpad'

export default function Padbank(props) {
  if(props.power){
    return (
      <div className='padbank'>
        {props.bank.map(item =>{
          return (
            <Drumpad 
            key={item.id}
            value={item.key}
            clip = {item.sourceUrl}
            clipId= {item.id}
            power = {props.power}
            handleDisplay = {props.handleDisplay}
            volume={props.volume}
            />
          )
        })}
      </div>
    )
  } else {
    return (
      <div className='padbank'>
        {props.bank.map(item =>{
          return (
            <Drumpad 
            key={item.id}
            value={item.key}
            clip = ''
            clipId= {item.id}
            power={props.power}
            handleDisplay = {props.handleDisplay}
            />
          )
        })}
      </div>
    )
  }
}
