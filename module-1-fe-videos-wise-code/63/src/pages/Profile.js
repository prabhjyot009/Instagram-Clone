import React, { useState } from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <div className='col-md-6 d-flex flex-column justify-content-between mt-3'>
          <div className='d-flex justify-content-equal mx-auto'>
            <div className="count-section pe-4 pe-md-5 text-center fw-bold">
              <h4>10</h4>
              <p>Posts</p>
            </div>
            <div className='count-section px-4 px-md-5 text-center fw-bold'>
              <h4>20</h4>
              <p>Followers</p>
            </div>
            <div className='ps-md-5 ps-4 text-center fw-bold'>
              <h4>20</h4>
              <p>Following</p>
            </div>
          </div>
          <div className='mx-auto mt-md-0 mt-4'>
            <button className="custom-btn custom-btn-white me-md-3">
              <span className='fs-6'>Edit Profile</span>
            </button>
            <button className="custom-btn custom-btn-white">
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
          <div className="card" onClick={handleShow}>
            <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="flower" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="flower" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="flower" />
          </div>
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="flower" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="flower" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="flower" />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://images.unsplash.com/photo-1670387965791-5524e9d1259a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1670396118274-4f14fdd6323d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-6'>Right</div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Profile