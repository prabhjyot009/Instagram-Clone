import React from 'react'
import './Card.css'
import moreAction from '../images/more-action.PNG'

const Card = () => {
    return (
        <div>
            <div className="card shadow-sm">
                <div className="card-body px-2">
                    <div className='row'>
                        <div className='col-6 d-flex'>
                            <img className='p-2 profile-pic' alt="profile pic" src="https://plus.unsplash.com/premium_photo-1669907526041-272dff1f8395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                            <div className='mt-2'>
                                <p className='fs-6 fw-bold'>Title</p>
                                <p className='location'>Description</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <img className='float-end fs-3 p-2 mt-2' alt="more action" src={moreAction} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <img style={{ borderRadius: '15px' }} className='p-2 img-fluid' alt="post-pic" src="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-6 d-flex'>
                            <i class="ps-2 fs-4 fa-regular fa-heart"></i>
                            <i class="ps-2 fs-4 fa-regular fa-comment"></i>
                            <i class="ps-2 fs-4 fa-solid fa-location-arrow"></i>
                        </div>
                        <div className='col-6'>
                            <span className='pe-2 fs-6 fw-bold float-end'>200 likes</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <span className='p-2 text-muted'>2 Hours Ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card