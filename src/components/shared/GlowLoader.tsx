import React from 'react'

const GlowLoader = () => {
    return (
        <div className="d-flex justify-content-center m-3">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default GlowLoader