import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='container shadow mt-3 p-4'>
        <div className='row'>
            <div className='col-md-6 d-flex flex-column'>
            <img className='p-2 profile-pic img-fluid' alt="profile pic" src="https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <p className='ms-3 fs-5 fw-bold'>john_doe</p>
            <p className='ms-3 fs-5'>john_doe</p>
            <p className='ms-3 fs-5'>john_doe</p>
            <p className='ms-3 fs-5'>john_doe</p>
            </div>
            <div className='col-md-6'>Right</div>
        </div>
    </div>
  )
}

export default Profile