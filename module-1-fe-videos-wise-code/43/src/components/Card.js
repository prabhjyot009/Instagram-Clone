import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div>
            <div className="card shadow-sm">
                <div className="card-body px-2">
                    <div className='row'>
                        <div className='col-6 d-flex'>
                            <img className='p-2 profile-pic' alt="profile pic" src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                            <div className='mt-2'>
                                <p className='fs-6 fw-bold'>Title</p>
                                <p className='location'>Description</p>
                            </div>
                        </div>
                        <div className='col-6'>
                        <i class="float-end fs-3 p-2 mt-3 fa-solid fa-info"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card