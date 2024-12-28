











// import React from "react";
// import { FaMapMarkerAlt, FaRulerCombined, FaBed, FaUser, FaClock } from "react-icons/fa";
// import "./PropertyCard.css";
// import { Helmet } from "react-helmet";
// import { Container, Row, Col, Form, Button, Modal, InputGroup } from 'react-bootstrap';


// const properties = [
//   {
//     id: 1,
//     type: "Commercial",
//     category: "Independent House",
//     location: "Pondicherry Town, Pondicherry City",
//     size: "1685 Sq.ft",
//     bhk: "3BHK",
//     owner: "Owner",
//     time: "Month Ago",
//     price: "₹ 2.10 Crore",
//     negotiable: "Negotiable",
//   },
//   {
//     id: 2,
//     type: "Residential",
//     category: "Plot",
//     location: "Kalapet, Pondicherry City",
//     size: "6800 Sq.ft",
//     bhk: "0BHK",
//     owner: "Owner",
//     time: "Month Ago",
//     price: "₹ 2200",
//     negotiable: "Negotiable",
//   },
//   {
//     id: 3,
//     type: "Residential",
//     category: "Apartment",
//     location: "Pondicherry City, Thattanchavady",
//     size: "1400 Sq.ft",
//     bhk: "0BHK",
//     owner: "Owner",
//     time: "Month Ago",
//     price: "₹ 85 Lakhs",
//     negotiable: "Negotiable",
//   },
//   {
//     id: 4,
//     type: "Residential",
//     category: "Independent House",
//     location: "Pondicherry Town, Pondicherry City",
//     size: "1200 Sq.ft",
//     bhk: "0BHK",
//     owner: "Owner",
//     time: "Month Ago",
//     price: "₹ 1.70 Crore",
//     negotiable: "Negotiable",
//   },
// ];

// const PropertyCard = () => {
//   return (
//     <Container fluid className="p-0 login">
//       <Helmet>
//         <title>Pondy Property | Login</title>
//       </Helmet>
//       <Row className="g-0">
        // <Col lg={12} className="d-flex align-items-center justify-content-center">
        //   <div className="d-flex mt-3 justify-content-center align-items-center">

        //     <div
        //       style={{
        //         width: "100%",
        //         maxWidth: "600px",
        //         minWidth: "300px",
        //         // height: "800px",
        //         position: "relative",
        //         // backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuV4KOIIk3EuvX9hVPSTszzfiPqalO5Oipbfm5wXCPVFgtWiFpMEiO3K2GpjuV87G61Y&usqp=CAU')",
        //         // backgroundSize: "cover",
        //         // backgroundPosition: "center",
        //         padding: "2rem",
        //         borderRadius: "8px",
        //         margin: "0 20px",
        //         backgroundRepeat: "no-repeat",
        //         color: "white",
        //       }}
        //     >
             
//     <div className="property-list">
//       {properties.map((property) => (
//         <div key={property.id} className="property-card">
//           <div className="property-image">
//             {/* Replace with actual image */}
//             <img src="https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg" alt="Property" />
//           </div>
//           <div className="property-details">
//             <h4>{property.type}</h4>
//             <p className="category">{property.category}</p>
//             <p><FaMapMarkerAlt /> {property.location}</p>

//             <div className="info-columns">
//               <div className="info-column">
//                 <p><FaRulerCombined /> {property.size}</p>
//                 <p><FaBed /> {property.bhk}</p>
//                 <h3 className="price">{property.price}</h3>
//             <p className="negotiable">{property.negotiable}</p>
//               </div>
//               <div className="info-column">
//                 <p><FaUser /> {property.owner}</p>
//                 <p><FaClock /> {property.time}</p>
//               </div>
//             </div>
         
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//     </div>
//     </Col>
//     </Row>
//     </Container>
//   );
// };

// export default PropertyCard;





// ------------------------------



// import React from "react";
// import { FaMapMarkerAlt, FaRulerCombined, FaBed, FaUser, FaClock, FaTimes, FaCalendarAlt, FaSearch, FaEye, FaCamera } from "react-icons/fa";
// import "./PropertyCard.css";
// import { Helmet } from "react-helmet";
// import { Container, Row, Col } from "react-bootstrap";

// const properties = [
//   {
//     id: 1,
//     type: "Commercial",
//     category: "Independent House",
//     location: "Pondicherry Town, Pondicherry City",
//     size: "1685 Sq.ft",
//     bhk: "3BHK",
//     owner: "Owner",
//     time: "Month Ago",
//     price: "₹ 2.10 Crore",
//     negotiable: "Negotiable",
//   },
  // {
  //   id: 2,
  //   type: "Residential",
  //   category: "Plot",
  //   location: "Kalapet, Pondicherry City",
  //   size: "6800 Sq.ft",
  //   bhk: "0BHK",
  //   owner: "Owner",
  //   time: "Month Ago",
  //   price: "₹ 2200",
  //   negotiable: "Negotiable",
  // },
  // {
  //   id: 3,
  //   type: "Residential",
  //   category: "Apartment",
  //   location: "Pondicherry City, Thattanchavady",
  //   size: "1400 Sq.ft",
  //   bhk: "0BHK",
  //   owner: "Owner",
  //   time: "Month Ago",
  //   price: "₹ 85 Lakhs",
  //   negotiable: "Negotiable",
  // },
  // {
  //   id: 4,
  //   type: "Residential",
  //   category: "Independent House",
  //   location: "Pondicherry Town, Pondicherry City",
  //   size: "1200 Sq.ft",
  //   bhk: "0BHK",
  //   owner: "Owner",
  //   time: "Month Ago",
  //   price: "₹ 1.70 Crore",
  //   negotiable: "Negotiable",
  // },
  // {
  //   id: 5,
  //   type: "Commercial",
  //   category: "Independent House",
  //   location: "Pondicherry Town, Pondicherry City",
  //   size: "1685 Sq.ft",
  //   bhk: "3BHK",
  //   owner: "Owner",
  //   time: "Month Ago",
  //   price: "₹ 2.10 Crore",
  //   negotiable: "Negotiable",
  // },
  // {
  //   id: 6,
  //   type: "Residential",
  //   category: "Plot",
  //   location: "Kalapet, Pondicherry City",
  //   size: "6800 Sq.ft",
  //   bhk: "0BHK",
  //   owner: "Owner",
  //   time: "Month Ago",
  //   price: "₹ 2200",
  //   negotiable: "Negotiable",
  // },
  // {
  //   id: 7,
  //   type: "Residential",
  //   category: "Apartment",
  //   location: "Pondicherry City, Thattanchavady",
  //   size: "1400 Sq.ft",
  //   bhk: "0BHK",
  //   owner: "Owner",
  //   time: "Month Ago",
  //   price: "₹ 85 Lakhs",
  //   negotiable: "Negotiable",
  // },
  // {
  //   id: 8,
  //   type: "Residential",
  //   category: "Independent House",
  //   location: "Pondicherry Town, Pondicherry City",
  //   size: "1200 Sq.ft",
  //   bhk: "0BHK",
  //   owner: "Owner",
  //   time: "Month Ago",
  //   price: "₹ 1.70 Crore",
  //   negotiable: "Negotiable",
  // },
//   {
//     id: 9,
//     type: "Commercial",
//     category: "Independent House",
//     location: "Pondicherry Town, Pondicherry City",
//     size: "1685 Sq.ft",
//     bhk: "3BHK",
//     owner: "Owner",
//     time: "Month Ago",
//     price: "₹ 2.10 Crore",
//     negotiable: "Negotiable",
//   },
//   {
//     id: 10,
//     type: "Residential",
//     category: "Plot",
//     location: "Kalapet, Pondicherry City",
//     size: "6800 Sq.ft",
//     bhk: "0BHK",
//     owner: "Owner",
//     time: "Month Ago",
//     price: "₹ 2200",
//     negotiable: "Negotiable",
//   },
//   {
//     id: 11,
//     type: "Residential",
//     category: "Apartment",
//     location: "Pondicherry City, Thattanchavady",
//     size: "1400 Sq.ft",
//     bhk: "0BHK",
//     owner: "Owner",
//     time: "Month Ago",
//     price: "₹ 85 Lakhs",
//     negotiable: "Negotiable",
//   },
//   {
//     id: 12,
//     type: "Residential",
//     category: "Independent House",
//     location: "Pondicherry Town, Pondicherry City",
//     size: "1200 Sq.ft",
//     bhk: "0BHK",
//     owner: "Owner",
//     time: "Month Ago",
//     price: "₹ 1.70 Crore",
//     negotiable: "Negotiable",
//   },
// ];

// const PropertyCard = () => {
//   return (
//     <Container fluid className="p-3">
//       <Helmet>
//         <title>Pondy Property | Properties</title>
//       </Helmet>
//       <Row className="g-3">
//       <Col lg={12} className="d-flex align-items-center justify-content-center">
//           <div className="d-flex mt-3 justify-content-center align-items-center">
//           <div className="search-icon">
//                   <FaSearch />
//                 </div>
//             <div
//               style={{
//                 width: "100%",
//                 maxWidth: "500px",
//                 minWidth: "300px",
//                 // position: "relative",     
//                 padding: "2rem",
//                 borderRadius: "8px",
//                 margin: "0 20px",
//                 backgroundRepeat: "no-repeat",
//                 color: "white",
//               }}
//             >
             
//         {properties.map((property) => (
//             <div className="property-card">
//               <div className="property-image">
//                 <img
//                   src="https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
//                   alt="Property"
//                 />
                                

//                 <img className="sml-img" src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:9e465a61-76e9-46df-a1de-1f4b717eb54a;revision=0?component_id=50cdc94e-dd8b-4244-8805-0021aca5da4b&api_key=CometServer1&access_token=1734890144_urn%3Aaaid%3Asc%3AUS%3A9e465a61-76e9-46df-a1de-1f4b717eb54a%3Bpublic_f04e04caf1dbd9605cdcb6c9fb969742dfb3ba5b" />
//                <img className="ms-5 ps-4"  src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:9e465a61-76e9-46df-a1de-1f4b717eb54a;revision=0?component_id=5a332331-dee4-48eb-965d-00a9e6ef0c1c&api_key=CometServer1&access_token=1734890144_urn%3Aaaid%3Asc%3AUS%3A9e465a61-76e9-46df-a1de-1f4b717eb54a%3Bpublic_f04e04caf1dbd9605cdcb6c9fb969742dfb3ba5b"   />
//               </div>
//               <div className="property-details">
//                 <div className="details-header">
//                   <p className="mt-3">{property.type}</p>
//                   <p className="category">{property.category}</p>
//                   <p className="loc">
//                   {property.location}
//                 </p>
//                 </div>
                
               
//                 <div className="info-row mt-1">
//                   <p>
//                     <FaRulerCombined className="icon"/> {property.size}
//                     <br></br>
//                     <FaUser  className="icon"/> {property.owner}

//                   </p>
//                   <p>
//                     <FaBed className="icon " /> {property.bhk}
//                     <br></br>
//                     <FaCalendarAlt className="icon" /> {property.time}
//                   </p>
                  
//                 </div>

//                 <div className="price-row mb-1">
//                 <p className="price"> {property.price}</p>
//                 <p className="negotiable">{property.negotiable}</p>
//                 </div>


//               </div>
              
//             </div>
            
//         ))}



//         </div>
//         </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default PropertyCard;










import React from "react";
import { FaRulerCombined, FaBed, FaUser, FaCalendarAlt,  FaEye, FaCamera } from "react-icons/fa";
import "./PropertyCard.css";
import { GoSearch } from "react-icons/go";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";

const properties = [
  {
    id: 1,
    type: "Commercial",
    category: "Independent House",
    location: "Pondicherry Town, Pondicherry City",
    size: "1685 Sq.ft",
    bhk: "3BHK",
    owner: "Owner",
    time: "Month Ago",
    price: "₹ 2.10 Crore",
    negotiable: "Negotiable",
  },
  {
    id: 2,
    type: "Residential",
    category: "Plot",
    location: "Kalapet, Pondicherry City",
    size: "6800 Sq.ft",
    bhk: "0BHK",
    owner: "Owner",
    time: "Month Ago",
    price: "₹ 2200",
    negotiable: "Negotiable",
  },
  {
    id: 3,
    type: "Residential",
    category: "Apartment",
    location: "Pondicherry City, Thattanchavady",
    size: "1400 Sq.ft",
    bhk: "0BHK",
    owner: "Owner",
    time: "Month Ago",
    price: "₹ 85 Lakhs",
    negotiable: "Negotiable",
  },
  {
    id: 4,
    type: "Residential",
    category: "Independent House",
    location: "Pondicherry Town, Pondicherry City",
    size: "1200 Sq.ft",
    bhk: "0BHK",
    owner: "Owner",
    time: "Month Ago",
    price: "₹ 1.70 Crore",
    negotiable: "Negotiable",
  },
  {
    id: 5,
    type: "Commercial",
    category: "Independent House",
    location: "Pondicherry Town, Pondicherry City",
    size: "1685 Sq.ft",
    bhk: "3BHK",
    owner: "Owner",
    time: "Month Ago",
    price: "₹ 2.10 Crore",
    negotiable: "Negotiable",
  },
  {
    id: 6,
    type: "Residential",
    category: "Plot",
    location: "Kalapet, Pondicherry City",
    size: "6800 Sq.ft",
    bhk: "0BHK",
    owner: "Owner",
    time: "Month Ago",
    price: "₹ 2200",
    negotiable: "Negotiable",
  },
  {
    id: 7,
    type: "Residential",
    category: "Apartment",
    location: "Pondicherry City, Thattanchavady",
    size: "1400 Sq.ft",
    bhk: "0BHK",
    owner: "Owner",
    time: "Month Ago",
    price: "₹ 85 Lakhs",
    negotiable: "Negotiable",
  },
  {
    id: 8,
    type: "Residential",
    category: "Independent House",
    location: "Pondicherry Town, Pondicherry City",
    size: "1200 Sq.ft",
    bhk: "0BHK",
    owner: "Owner",
    time: "Month Ago",
    price: "₹ 1.70 Crore",
    negotiable: "Negotiable",
  },];

const PropertyCard = () => {
  return (
    <Container fluid className="p-3">
      <Helmet>
        <title>Pondy Property | Properties</title>
      </Helmet>
      <Row className="g-3">
        <Col lg={12} className="d-flex align-items-center justify-content-center">
          <div className="d-flex mt-3 justify-content-center align-items-center">
            <div className="search-icon">
            <GoSearch  />
            </div>
            <div
              style={{
                width: "100%",
                maxWidth: "500px",
                minWidth: "300px",
                padding: "2rem",
                borderRadius: "8px",
                margin: "0 20px",
                backgroundRepeat: "no-repeat",
                color: "white",
              }}
            >
              {properties.map((property) => (
                <div className="property-card">
                  <div className="property-image">
                    <img 
                      src="https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
                      alt="Property"
                    />

                    <span>
                    <div className="property-badge " style={{position:"absolute"}}>
                    <FaCamera className="badge-icon" />
                    </div>
                    <div className="property-badges" style={{position:"absolute"}} >
                    <FaEye className="badge-icons" />
                  </div>
                  </span>

                    {/* <img className="sml-img" src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:9e465a61-76e9-46df-a1de-1f4b717eb54a;revision=0?component_id=50cdc94e-dd8b-4244-8805-0021aca5da4b&api_key=CometServer1&access_token=1734890144_urn%3Aaaid%3Asc%3AUS%3A9e465a61-76e9-46df-a1de-1f4b717eb54a%3Bpublic_f04e04caf1dbd9605cdcb6c9fb969742dfb3ba5b" />
                    <img
                      className="ms-5 ps-4"
                      src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:9e465a61-76e9-46df-a1de-1f4b717eb54a;revision=0?component_id=5a332331-dee4-48eb-965d-00a9e6ef0c1c&api_key=CometServer1&access_token=1734890144_urn%3Aaaid%3Asc%3AUS%3A9e465a61-76e9-46df-a1de-1f4b717eb54a%3Bpublic_f04e04caf1dbd9605cdcb6c9fb969742dfb3ba5b"
                    /> */}
                  </div>
                  <div className="property-details">
                    <div className="details-header">
                      <p className="mt-3">{property.type}</p>
                      <p className="category">{property.category}</p>
                      <p className="loc">{property.location}</p>
                    </div>

                    <div className="info-row mt-1">
                      <p>
                        <FaRulerCombined className="icon" /> {property.size}
                        <br />
                        <FaUser className="icon" /> {property.owner}
                      </p>
                      <p>
                        <FaBed className="icon " /> {property.bhk}
                        <br />
                        <FaCalendarAlt className="icon" /> {property.time}
                      </p>
                    </div>

                    <div className="price-row mb-1">
                      <p className="price">{property.price}</p>
                      <p className="negotiable">{property.negotiable}</p>
                    </div>
                  </div>

                  {/* Badge with eye and camera icons */}
                  {/* <div className="property-badge">
                    <FaEye className="badge-icon" />
                    <FaCamera className="badge-icon" />
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyCard;
