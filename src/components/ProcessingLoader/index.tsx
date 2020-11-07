//libs
import React from 'react'
//component
import LoadingSpinner from '../LoadingSpinner'
//others
import './style.scss'

const ProcessingLoader = () => (
    <div className="processing-loader-wrapper">
        <LoadingSpinner />
    </div>
)

export default ProcessingLoader