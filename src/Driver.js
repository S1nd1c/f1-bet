import tick from './tick.svg'
import React from 'react'
import './Driver.css'

function Driver(props) {
  return (
    <div onClick={props.onClick} className='w-24 h-24 m-3'>
        <div className="relative w-full h-full">
            <img className='absolute rounded-full w-full' src={props.imgSrc} />
            {
                props.pressed &&
                <div className="picked rounded-full w-full h-full absolute flex justify-center">
                    <img className="w-2/3" src={tick}></img>
                </div>
            }
        </div>
        <span className='text-lg font-bold font-mono'>{props.driverName}</span>
    </div>
  )
}

export default Driver