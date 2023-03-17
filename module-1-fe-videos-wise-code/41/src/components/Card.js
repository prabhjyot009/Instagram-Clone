import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div>
            <div className="card shadow-sm">
                <div className="card-body px-2">
                    <div className='row'>
                        <div className='col-6'>
                            <img className='rounded profile-pic' alt="profile pic" src="https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                        </div>
                        <div className='col-6'>
                            <span className='float-end'>Right</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card