import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='container shadow mt-3 p-4'>
        <div className='row'>
            <div className='col-md-6 d-flex flex-column'>
              <img className='p-2 profile-pic img-fluid' alt="profile pic" src="https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              <p className='ms-3 fs-5 fw-bold'>john_doe</p>
              <p className='ms-3 fs-5'>John Doe</p>
              <p className='ms-3 fs-5'>UI/UX Designer @john | Follow @johndoe</p>
              <p className='ms-3 fs-5'>My portfolio on <a href="#">www.portfolio.com/john</a></p>
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-between'>
                <div className='d-flex justify-content-around'>
                    <div style={{borderRight: '3px solid #c3c3c3'}} className="p-3">
                      <h4>10</h4>
                      <p>Posts</p>
                    </div>
                    <div className='border-end'>
                      <h4>20</h4>
                      <p>Followers</p>
                    </div>
                    <div>
                      <h4>20</h4>
                      <p>Following</p>
                    </div>
                </div>
                <div>Button</div>
            </div>
        </div>
    </div>
  )
}

export default Profile