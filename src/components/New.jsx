import React from 'react'
import { Button,Form } from 'react-bootstrap'
import './new.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function New() {
	const handleShow= ()=>{
		toast.info("Cannot detect the language ,TRY ANOTHER FREQUENCY")
	   };
	   const connct = handleShow
	handleShow();
  return (
    <div className='common'>
        
   
   <div className="container-fluid h-100">
  
			<div className="row justify-content-center h-100">
     
				<div className="col-md-4 col-xl-3 chats">
        
          <div className="cards mb-sm-3 mb-md-0 contacts_cards">
					<div className="cards-header">
						<div className="input-group">
							<input type="text" placeholder="Search by planet category" name="" className="form-control search"/>
							<div className="input-group-prepend">
								<span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
							</div>
						</div>
					</div>
					<div className="cards-body contacts_body">
						
					</div>
					<div className="card-footer"></div>
				</div></div>
				<div className="col-md-8 col-xl-6 chats">
					<div className="cards">
						<div className="cards-header msg_head">
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L2FpZ2VuZXJhdGVkLTI0MDcyMy1yb2JfcmF3cGl4ZWxfYWxpZW5fZnVsbF9ib2R5X2ljb25fcm91bmRlZF9ub3Rfc2hhcnBfc2ltcGxlX2M0ZF9fZDcxOGUxMGQtYmI4OS00NzE2LWEzNzAtNjQ3ZDYwZjQ4OTI4LWhxLXNjYWxlLTVfMDB4XzEucG5n.png" className="rounded-circle user_img"/>
									<span className="online_icon"></span>
								</div>
								<div className="user_info">
									<span>Start a new chat</span>
									<p></p>
								</div>
								<div className="video_cam">
									<span><i className="fas fa-video"></i></span>
									<span><i className="fas fa-phone"></i></span>
								</div>
							</div>
							<span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
							<div className="action_menu">
								<ul>
									<li><i className="fas fa-user-circle"></i> View profile</li>
									<li><i className="fas fa-users"></i> Add to close friends</li>
									<li><i className="fas fa-plus"></i> Add to group</li>
									<li><i className="fas fa-ban"></i> Block</li>
								</ul>
							</div>
						</div>
					
						<div className="cardfooter">
							<div className="input-group">
								<div className="input-group-append">
									<span className="input-group-text attach_btn"><Button variant='outlined'><i className="fa-solid fa-plus"></i></Button></span>
								</div>
								<textarea name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
								<div className="input-group-append">
									<span className="input-group-text send_btn"><Button onClick={connct} variant='yellow'><i className="fas fa-location-arrow"></i></Button></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ToastContainer  position='top-right' theme='coloured' autoClose={5000}/>
    </div>
  )
}

export default New
