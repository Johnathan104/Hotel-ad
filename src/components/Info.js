import React from 'react'
import './Info.css'

function Info() {
    return (
        <div className='d-flex info align-items-center'>
            <div className='pic-group'>
                <div className='pic-left pic'>
                    <h1>Ocean view resort</h1>
                    <p>Our resort provides a beautiful view of the ocean for those who stay at our resort</p>
                </div>
                <div className='pics-right'>
                    <div className='pic-top pic'>
                        <h1>Comfy tropical environment</h1>
                        <p>
                            Our resort provides a nice and comfortable environment perfect for a vacation
                        </p>
                    </div>
                    <div className='d-flex'>
                        <div className='pics-bottom pic-bottom-left pic'/>
                        <div className='pics-bottom pic-bottom-right pic'/>
                    </div>
                </div>
            </div>
            <h1 className='mt-5'>Call +62 819-1090-0019  for more info</h1>
        </div>
    )
}

export default Info