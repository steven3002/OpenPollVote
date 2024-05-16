

import React, { useEffect } from 'react';


export function EventsContainer({ data1 }) {
    let length = 0
    let tnft = 0
    Object.keys(data1).map(key =>

        length = length + data1[key].total_votes

    )
    Object.keys(data1).map(key =>
        tnft = 1 + tnft)



    return (
        <>
            <strong>
                <div className="container15790">
                    <div className="small-div">

                        <span style={{ marginRight: 'auto' }} className="small-span">NFT Present</span>
                        <span>{tnft}</span>
                    </div>
                    <div className="long-div">

                        <span style={{ marginRight: 'auto' }} className="long-span">Numbers of Votes</span>
                        <span>{length}</span>
                    </div>
                </div>
            </strong>
        </>
    );


}

