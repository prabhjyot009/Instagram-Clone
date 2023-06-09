import React, { useState } from 'react'
import './Profile.css'
import Modal from 'react-bootstrap/Modal';
import horizontalMoreAction from '../images/horizontalMoreAction.PNG'
import '../components/Card.css'
import { API_BASE_URL } from '../../src/config';
import axios from 'axios';
import Swal from 'sweetalert2';
const Profile = () => {

  const[image, setImage]=useState({preview:"", data:""})

  const [show, setShow] = useState(false);


  const [caption,setCaption] =useState("");
  const [location,setLocation] =useState("");




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPost, setShowPost] = useState(false);

  const handlePostClose = () => setShowPost(false);
  const handlePostShow = () => setShowPost(true);
const CONFIG_OBJ = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+localStorage.getItem("token")
    }
  }

  const handleFileSelect = (event) => {
    const img ={
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0]
    }
    setImage(img);
  }

  const handleImgUpload = async () => {
    let formData = new FormData();
    formData.append("file", image.data);

    const response = axios.post(`${API_BASE_URL}/uploadFile`, formData, CONFIG_OBJ)
    return response;
  }

  const addPost =async () =>{
    if(image.preview === ''){
      Swal.fire({
        icon: 'error',
        title: 'post image is required',
      })
    }else if(caption === ''){
      Swal.fire({
        icon: 'error',
        title: 'post caption is required',
      })
    }else if(location === ''){
      Swal.fire({
        icon: 'error',
        title: 'post location is required',
      })
    }else{

    const imgRes =await handleImgUpload();
    //add values rule for caption and location
    const request ={description:caption, location:location, image: `${API_BASE_URL}/${imgRes.data.fileName}`}
    //write api call to create post
  }
  }
  return (
    <div className='container shadow mt-3 p-4'>
      <div className='row'>
        <div className='col-md-6 d-flex flex-column'>
          <img className='p-2 profile-pic img-fluid' alt="profile pic" src="https://images.unsplash.com/photo-1561084746-f360502e5abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9uc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
          <p className='ms-3 fs-5 fw-bold'>prabhjyot_009</p>
          <p className='ms-3 fs-5'>Prabhjyot Singh</p>
          <p className='ms-3 fs-5'>UI/UX Designer @brar | Follow @singhbrar</p>
          <p className='ms-3 fs-5'>My portfolio on <a href="#">https://github.com/prabhjyot009</a></p>
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-between mt-3'>
          <div className='d-flex justify-content-equal mx-auto'>
            <div className="count-section pe-4 pe-md-5 text-center fw-bold">
              <h4>10</h4>
              <p>Posts</p>
            </div>
            <div className='count-section px-4 px-md-5 text-center fw-bold'>
              <h4>20k</h4>
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
            <button className="custom-btn custom-btn-white" onClick={handlePostShow}>
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
            <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="office" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="plant" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="road" />
          </div>
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="flower" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1564325724739-bae0bd08762c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="flower" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="flower" />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <div >
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
            <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-6 d-flex'>
                        <img className='p-2 post-profile-pic' alt="profile pic" src="https://images.unsplash.com/photo-1561084746-f360502e5abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9uc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                        <div className='mt-2 ms-2'>
                            <p className='fs-6 fw-bold'>Title</p>
                            <p className='location'>Description</p>
                        </div>
                        
                        <div className="dropdown ms-5">
                          <a className="btn" href="#" role="button" data-bs-toggle="dropdown">
                            <img alt="more action" src={horizontalMoreAction} />
                          </a>

                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">
                              <i className="fa-regular fa-pen-to-square px-2"></i>
                              Edit Post
                              </a></li>
                            <li>
                              <a className="dropdown-item" href="#">
                              <i className="fa-sharp fa-solid fa-trash px-2"></i>Delete Post
                              </a>
                            </li>
                          </ul>
                        </div>
                    </div>
                  </div>  
                    <div className='row'>
                        <div className='col-12'>
                            <span className='p-2 text-muted'>2 Hours Ago</span>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-12 ms-2'>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-6 d-flex'>
                            <i className="ps-2 fs-4 fa-regular fa-heart"></i>
                            <i className="ps-3 fs-4 fa-regular fa-comment"></i>
                            <i className="ps-3 fs-4 fa-solid fa-location-arrow"></i>
                        </div>
                        <div className='col-12 mt-3 ms-2'>
                            <span className='fs-6 fw-bold'>200 likes</span>
                        </div>
                    </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showPost} onHide={handlePostClose} size="lg" centered>
        <Modal.Header closeButton>
          <span className='fw-bold fs-5'>Upload Post</span>
        </Modal.Header>
        <Modal.Body>
           <div className='row'>
              <div className='col-md-6 col-sm-12 mb-3'>
                  <div className='upload-box'>
                    <div className="dropZoneContainer">
                        <input name='file' type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" onChange={handleFileSelect} />
                        <div className="dropZoneOverlay">
                          {image.preview && <img src={image.preview}width='150' height='150' />}
                          <i class="fa-solid fa-cloud-arrow-up fs-1"></i><br />Upload Photo From Computer</div>
                    </div>
                  </div>
              </div>
              <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-between'>
                <div className='row'>
                  <div className='col-sm-12 mb-3'>
                    <div className="form-floating">
                      <textarea onChange={(ev)=>setCaption(ev.target.value)} className="form-control" placeholder="Add Caption" id="floatingTextarea"></textarea>
                      <label for="floatingTextarea">Add Caption</label>
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className="form-floating mb-3">
                      <input type="text" onChange={(ev)=>setLocation(ev.target.value)} className="form-control" id="floatingInput" placeholder="Add Location" />
                      <label for="floatingInput"><i className="fa-solid fa-location-pin pe-2"></i>Add Location</label>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-12'>
                    <button onCLick={() => addPost()} className="custom-btn custom-btn-pink float-end">
                      <span className='fs-6 fw-600'>Post</span>
                    </button>                                                                                                                               
                  </div>
                </div>
              </div>
           </div>

        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Profile