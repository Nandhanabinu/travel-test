import React from 'react'
import './footer.css'
function Footer() {
  return (

    <div className='all'>
      <div className="section"
      >
        <div className="row">
          <div className="col-4">
            <h3 >ABOUT US</h3>
            <h6 >Home</h6>
            <h6 >Chatrooms</h6>
            <h6 >Connections</h6>
            <h6 >Annual Report</h6>
            <h6 >Our Network</h6>
          </div>
          <div className="col-4">
            <h4  >SOCIAL MEDIA</h4>
            <br />
            <br />

            <div className="iconcontainer">
              <div className="icon">
                <a href="https://twitter.com/i/flow/login" target="_blank"><i className="fa-brands fa-twitter brand"></i></a>
              </div>

              <div className="icon">
                <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f brand"></i></a>
              </div>
              <div className="icon">
                <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram brand"></i></a>
              </div>
              <div className="icon">
                <a href="" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img width={"100px"} height={"100px"} src="https://media.istockphoto.com/id/1270124702/vector/modern-alien-make-selfie-in-space-with-flying-rocket-cartoon-character-vector-illustration.jpg?s=612x612&w=0&k=20&c=tCgJCWnRza-f5OpYVy4NwCH-cPIKq_6rX_ZTFQCVhzU=" alt="" />
            <br />
            <br />
            <div>We have more than 500,000,000 aliens on cosmic.com as of March 31, 2024.</div>
          </div>



          <footer>
            <div className='footer'>   @ travel Guide 2022| Developed by Nandhana C</div>

          </footer>


        </div>
      </div>
    </div>

  )
}


export default Footer
