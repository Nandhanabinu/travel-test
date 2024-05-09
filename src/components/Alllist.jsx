
import { Card, Button, Form, Dropdown } from 'react-bootstrap'

import "./header.css"
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Alllist() {
  
  const navig = useNavigate();
  const handleClick =()=> {
   
  
   navig('/new');
  };

   const handleShow= ()=>{
    toast.info("not connected, This alien is offline")
   };
   const connct = handleShow
handleShow();
   

  return (
    <div>
      <div className='row '>
        <div className='col-2 at'>

          <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Chatrooms
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">search friends</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Friend</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

          <Button className='secondary' variant="outline-secondary"> Chats</Button>
          <br />
          <br />
          <hr />
          <h6 className='messages'>No Direct messages</h6>
          <img style={{ width: '240px', height: "280px" }} src="./public/chats.png" alt="" />
    {/* <div className='col-3' style={{ backgroundColor: "" }}>
            <Form.Label htmlFor="inputPassword5"></Form.Label>
            <Form.Control
              type="Search"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder='Search '
            />
            <Form.Text id="passwordHelpBlock" muted>
              Search by Planet Category
            </Form.Text>
          </div> */}
      
        </div>
        <div className='col-10 at'>
          <div className="parallax-container">
            <div className='parallax-card' >
              <Card
  
              >
                <Card.Body  >
  
                  <div className='d-flex'>
                    <div  >
                      <img
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '0px ', }}
                        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L2FpZ2VuZXJhdGVkLTI0MDcyMy1yb2JfcmF3cGl4ZWxfYWxpZW5fZnVsbF9ib2R5X2ljb25fcm91bmRlZF9ub3Rfc2hhcnBfc2ltcGxlX2M0ZF9fZDcxOGUxMGQtYmI4OS00NzE2LWEzNzAtNjQ3ZDYwZjQ4OTI4LWhxLXNjYWxlLTVfMDB4XzEucG5n.png"
                        alt=""
                      />
  
                    </div>
  
                    <div className='texts'>
  
                      <Card.Title>Alien name: <h5>	Arion</h5></Card.Title>
                      <Card.Text>planet:	14 Andromedae b , planet Catogory: Delphini</Card.Text>
  
                      <Button onClick={handleClick}  style={{ marginLeft: "900px" }} variant="info">Connect</Button>
                      <Button variant="info">Add Friend</Button>
                    </div>
                  </div>
  
  
                </Card.Body>
              </Card>
  
            </div>
            <div className='parallax-card' >
              <Card
  
              >
                <Card.Body  >
  
                  <div className='d-flex'>
                    <div  >
                      <img
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '0px ', }}
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                        alt=""
                      />
  
                    </div>
  
                    <div className='texts'>
  
                      <Card.Title>Alien name:	<h4>Orbitar</h4></Card.Title>
                      <Card.Text>planet:	18 Delphini b,
                        planet Catogory: Delphini
                      </Card.Text>
  
                      <Button onClick={connct} style={{ marginLeft: "900px" }} variant="info">Connect</Button>
                      <Button variant="info">Add Friend</Button>
                    </div>
                  </div>
  
  
                </Card.Body>
              </Card>
  
            </div>
  
            <div className='parallax-card' >
              <Card
  
              >
                <Card.Body  >
  
                  <div className='d-flex'>
                    <div  >
                      <img
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '0px ', }}
                        src="https://thumbs.dreamstime.com/z/little-green-alien-meditating-25277845.jpg"
                        alt=""
                      />
  
                    </div>
  
                    <div className='texts'>
  
                      <Card.Title>Alien name: <h4>	Galileo</h4></Card.Title>
                      <Card.Text>planet:	GJ 1215667 c,
                        planet Catogory: GJ
                      </Card.Text>
                      <Button  onClick={handleClick}  style={{ marginLeft: "900px" }} variant="info">Connect</Button>
                      <Button variant="info">Add Friend</Button>
                    </div>
                  </div>
  
  
                </Card.Body>
              </Card>
  
            </div>
            <div className='parallax-card' >
              <Card
  
              >
                <Card.Body  >
  
                  <div className='d-flex'>
                    <div  >
                      <img
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '0px ', }}
                        src="https://img.lovepik.com/element/45013/4322.png_860.png"
                        alt=""
                      />
  
                    </div>
  
                    <div className='texts'>
  
                      <Card.Title>Alien name:Hypatia</Card.Title>
                      <Card.Text>planet:	GJ 1214 b ,
                        planet Catogory: GJ
                      </Card.Text>
  
                      <Button  onClick={handleClick}  style={{ marginLeft: "900px" }} variant="info">Connect</Button>
                      <Button variant="info">Add Friend</Button>
                    </div>
                  </div>
  
  
                </Card.Body>
              </Card>
  
            </div>
            <div className='parallax-card' >
              <Card
  
              >
                <Card.Body  >
  
                  <div className='d-flex'>
                    <div  >
                      <img
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '0px ', }}
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                        alt=""
                      />
  
                    </div>
  
                    <div className='texts'>
  
                      <Card.Title>Alien name: <h4>Dagon	</h4></Card.Title>
                      <Card.Text>planet:	alpha Piscis Austrini b ,
                        planet Catogory: piscis
                      </Card.Text>
                      <Button  onClick={handleClick}  style={{ marginLeft: "900px" }} variant="info">Connect</Button>
                      <Button variant="info">Add Friend</Button>
                    </div>
                  </div>
  
  
                </Card.Body>
              </Card>
  
            </div>
            <div className='parallax-card' >
              <Card
  
              >
                <Card.Body  >
  
                  <div className='d-flex'>
                    <div  >
                      <img
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '0px ', }}
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                        alt=""
                      />
  
                    </div>
  
                    <div className='texts'>
  
                      <Card.Title>Alien name: <h4>Tahay</h4></Card.Title>
                      <Card.Text>planet:	GJ 1214 gg ,
                        planet Catogory: GJ
                      </Card.Text>
  
                      <Button onClick={handleClick} style={{ marginLeft: "900px" }} variant="info">Connect</Button>
                      <Button variant="info">Add Friend</Button>
                    </div>
                  </div>
  
  
                </Card.Body>
              </Card>
  
            </div>
            <div className='parallax-card' >
              <Card
  
              >
                <Card.Body  >
  
                  <div className='d-flex'>
                    <div  >
                      <img
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '0px ', }}
                        src="https://thumbs.dreamstime.com/b/d-rendering-green-cartoon-alien-his-arms-raised-presenting-to-left-isolated-white-background-green-cartoon-118833220.jpg"
                        alt=""
                      />
  
                    </div>
  
                    <div className='texts'>
  
                      <Card.Title>Alien name: <h4>	Bambaruush</h4></Card.Title>
                      <Card.Text>planet:	GJ 1214 keplerCC ,
                        planet Catogory: Gj
                      </Card.Text>
                      <Button onClick={connct} style={{ marginLeft: "900px" }} variant="info">Connect</Button>
                      <Button variant="info">Add Friend</Button>
                    </div>
                  </div>
  
  
                </Card.Body>
              </Card>
  
            </div>
            <div className='parallax-card' >
              <Card
  
              >
                <Card.Body  >
  
                  <div className='d-flex'>
                    <div  >
                      <img
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '0px ', }}
                        src="https://www.cnet.com/a/img/resize/1405439ceebfc93c9f46b1f198f521ed381c404d/hub/2022/04/29/289f84da-e2e3-45c8-97e6-9ba62844a50f/aliens-18.jpg?auto=webp&fit=crop&height=900&width=1200"
                        alt=""
                      />
  
                    </div>
  
                    <div className='texts'>
  
                      <Card.Title>Alien name: <h4>	Guataubá</h4></Card.Title>
                      <Card.Text>planet:	88	 Majoris b ,
                        planet Catogory: Majoris
                      </Card.Text>
  
                      <Button onClick={connct} style={{ marginLeft: "900px" }} variant="info">Connect</Button>
                      <Button variant="info">Add Friend</Button>
                    </div>
                  </div>
  
  
                </Card.Body>
              </Card>
  
            </div>
            <div className='parallax-card' >
              <Card
  
              >
                <Card.Body  >
  
                  <div className='d-flex'>
                    <div  >
                      <img
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '0px ', }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtfNC1qlOHV4KA7LkbJqfGuKliy7c3C0EqJsg9DZc1nX7EgZchNCVEjpRNxoFFaMh6Ro&usqp=CAU"
                        alt=""
                      />
  
                    </div>
  
                    <div className='texts'>
  
                      <Card.Title>Alien name: <h4>Teberda</h4></Card.Title>
                      <Card.Text>planet:47  Majoris b ,
                        planet Catogory: Majoris
                      </Card.Text>
                      <Button onClick={connct} style={{ marginLeft: "900px" }} variant="info">Connect</Button>
                      <Button variant="info">Add Friend</Button>
                    </div>
                  </div>
  
  
                </Card.Body>
              </Card>
  
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='coloured' autoClose={5000}/>
    </div>



  )
}

export default Alllist
