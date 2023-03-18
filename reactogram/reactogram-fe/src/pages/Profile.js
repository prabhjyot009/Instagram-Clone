import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <div className='container shadow mt-3 p-4'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='col-md-6 d-flex flex-column'>
                        <img className='p-2 profile-pic img-fluid' alt="profile-pic" src="https://plus.unsplash.com/premium_photo-1669907525782-fd4a82781f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                        <p className='ms-3 fs-5 fw-bold'>prabhjyot_009</p>
                        <p className='ms-3 fs-5 '>Prabhjyot Singh</p>
                        <p className='ms-3 fs-5 '>UI/UX Designer @brar | Follow @prabhjyot009</p>
                        <p className='ms-3 fs-5 '>My portfolio on <a href='#'>www.portfolio.com/prabhjyot009</a></p>
                    </div>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-between mt-3'>
                    <div className='d-flex justify-content-equal mx-auto'>
                        <div className="count-section px-4 pe-md-5 text-center fw-bold">
                            <h4>10</h4>
                            <p>Posts</p>
                        </div>
                        <div className='count-section px-4 px-md-5 text-center fw-bold'>
                            <h4>20</h4>
                            <p>Followers</p>
                        </div>
                        <div className='ps-md-5 ps-4 text-center fw-bold'>
                            <h4>20</h4>
                            <p>Folllowing</p>
                        </div>
                    </div>
                    <div className='mx-auto mt-md-0 mt-3'>
                        <button className="custom-btn custom-btn-white me-md-3">
                            <span className='fs-6'>Edit Profile</span>
                        </button>
                        <button className="custom-btn custom-btn-white ">
                            <span className='fs-6'>Upload Post</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-12'>
                    <hr />
                </div>
            </div>
            <div className='row mb-4'>
                <div className='col-md-4 col-sm-12'>
                    <div class="card" >
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="Trees" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div class="card" >
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="Trees" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div class="card" >
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="Trees" />
                    </div>
                </div>
            </div>
            <div className='row mb-4'>
                <div className='col-md-4 col-sm-12'>
                    <div class="card" >
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="Trees" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div class="card" >
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="Trees" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div class="card" >
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="Trees" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile