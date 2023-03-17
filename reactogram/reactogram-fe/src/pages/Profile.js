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
                    <div className='d-flex justify-content-equal'>
                        <div className="count-section pe-5 text-center fw-bold">
                            <h4>10</h4>
                            <p>Posts</p>
                        </div>
                        <div className='count-section px-5 text-center fw-bold'>
                            <h4>20</h4>
                            <p>Followers</p>
                        </div>
                        <div className='ps-5 text-center fw-bold'>
                            <h4>20</h4>
                            <p>Folllowing</p>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <button className="custom-btn custom-btn-white me-md-3">
                            <span className='fs-6'>Edit Profile</span>
                        </button>
                        <button className="custom-btn custom-btn-white ">
                            <span className='fs-6'>Upload Post</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile