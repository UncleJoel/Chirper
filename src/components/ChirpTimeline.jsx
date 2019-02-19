import React from 'react';

const ChirpTimeline = (props) => {
    return (
        <div className='row mt-3'>
            {props.chirps.map((chirp, index) => {
                return (
                    <div key={index} className='col-md-12'>
                        <div id='card' className="card text-danger m-1 p-1 col-6 mx-auto border-danger">
                            <div className="card-header text-center">
                            {chirp.username} chirped:
                            </div>
                            <h2 className='text-center rounded bg-light'>{chirp.chirp}</h2>
                        </div>
                    </div>
                )
            })}
    
        </div>
        )
};

export default ChirpTimeline;