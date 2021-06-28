import React from 'react'
import './RowPost.css'
import WOLF from './Images/WOLF.PNG'
import JOEY from './Images/JOEY.PNG'
import JOBS from './Images/JOBS.PNG'
import WILD from './Images/tHE WILDS.PNG'
import TENET from './Images/TENET.PNG'

function RowPost() {
    
    return (
        <div className="row">
            <br />
            <h2>Continue Watching</h2>
            <div className="posters">
                    <img src={WOLF} alt="posters" className='poster' />
                    <img src={JOEY} alt="posters" className='poster' />
                    <img src={WILD} alt="posters" className='poster' />
                    <img src={JOBS} alt="posters" className='poster' />
                    <img src={TENET} alt="posters" className='poster' />
            </div>
        </div>
    )
}

export default RowPost
