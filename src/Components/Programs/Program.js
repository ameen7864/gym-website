import React from 'react'
import './Program.css';

const Program = () => {
  return (
    <div className='programs' id='programs'>
        {/* header */}
        <div className='programs-header'>
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>To Shape You</span>
        </div>
        {/* program categories */}
        <div className='program-categories'>
            <div className='category'>
                <span className='cardio'>cardio</span>
                <span >body building</span>
                <span>weight gain</span>
                <span>weight reduce</span>
            </div>
        </div>
        
    </div>
  )
}

export default Program