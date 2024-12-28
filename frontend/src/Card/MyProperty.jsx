import React, { useState } from "react";
import { FaRulerCombined, FaBed, FaCalendarAlt, FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button, Nav, Tab } from "react-bootstrap";
import "./MyProperty.css";

const properties = [
  {
    id: 1,
    type: "Residential",
    category: "Plot",
    location: "Kalapet, Pondicherry City",
    size: "5354454",
    bhk: "0",
    owner: "no data ",
    time: "23-11-2024",
    price: "₹ 2,200",
    negotiable: "Negotiable",
  },
];

const MyProperty = () => {
  const [activeKey, setActiveKey] = useState("property");

  return (
    <Container fluid className="p-3 my">
      <Helmet>
        <title>Pondy Property | Properties</title>
      </Helmet>
      <Tab.Container activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Row className="g-3">
          <Col lg={12} className="d-flex flex-column align-items-center">
            {/* Navbar Tabs */}
            <Nav variant="tabs" className="mb-3">
              <Nav.Item >
                <Nav.Link eventKey="property">Property</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="removed">Removed</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="expired">Expired</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="add-prop">Add Prop</Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Tab Content */}
            <Tab.Content>
              {/* Property Tab */}
              <Tab.Pane eventKey="property">
               
                {properties.map((property) => (
                  <div className="property-card" key={property.id}>
                    <div className="property-image">
                      <div
                        className="text-center"
                        style={{
                          color: "white",
                          backgroundColor: "rgb(47,116,127)",
                        //   padding: "3px",
                        }}
                      >
                        PUC- 10590
                      </div>
                      
                      <img
                        src="https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
                        alt="Property"
                      />
                        <button className="incomplete-button">Incomplete</button>

                    </div>
                    
                    <div className="property-details">
                      {/* <h5>{property.category}</h5>
                      <p>Location: {property.location}</p> */}
                      <p>
                        <FaRulerCombined className="icon" /> {property.size}
                        <FaBed className="icon ms-3"  /> {property.bhk}
                      </p>
                      <p>
                      <FaUser className="icon" /> {property.owner}
                        <FaCalendarAlt className="icon ms-3" /> {property.time}
                      </p>
                      <p style={{color: "rgb(47,116,127)",fontWeight:"bold"}} > {property.price}</p>
                      <p style={{fontSize:"10px"}}> Edit And Submit Ad to complete </p>


                      <div className="d-flex gap-2 mt-2">
                      <Button style={{backgroundColor:"orangered",border:"none"}} size="sm">
                          Remove
                        </Button>
                        <Button style={{backgroundColor:"rgb(47,116,127)",border:"none",width:"50%"}} size="sm">
                          Edit
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </Tab.Pane>

              {/* Removed Tab */}
              <Tab.Pane eventKey="removed">
              {properties.map((property) => (
                  <div className="property-card" key={property.id}>
                    <div className="property-image">
                      <div
                        className="text-center"
                        style={{
                          color: "white",
                          backgroundColor: "rgb(47,116,127)",
                        //   padding: "3px",
                        }}
                      >
                        PUC- 10588
                      </div>
                      
                      <img
                        src="https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
                        alt="Property"
                      />

                    </div>
                    
                    <div className="property-details">
                    
                      <p>
                        <FaRulerCombined className="icon" /> {property.size}
                        <FaBed className="icon ms-3"  /> {property.bhk}
                      </p>
                      <p>
                      <FaUser className="icon" /> {property.owner}
                        <FaCalendarAlt className="icon ms-3" /> {property.time}
                      </p>
                      <p className="mt-2" style={{color: "rgb(47,116,127)",fontWeight:"bold"}} > {property.price}</p>


                      <div className="d-flex gap-2 mt-2">
                      <Button style={{backgroundColor:"green",border:"none",width:"50%",borderRadius:"10px"}} size="sm">
                          UNDO
                        </Button>
                        
                        
                      </div>
                    </div>
                  </div>
                ))}              
                </Tab.Pane>


              {/* Expired Tab */}
              <Tab.Pane eventKey="expired">
                <h5>No expired properties yet.</h5>
              </Tab.Pane>

              {/* Add Property Tab */}
              <Tab.Pane eventKey="add-prop">
                <h5>Add Property Form (Coming Soon)</h5>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default MyProperty;
