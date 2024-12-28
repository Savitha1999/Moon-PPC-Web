// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';

// const Property = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { phoneNumber, countryCode } = location.state || {}; // Assuming phoneNumber and countryCode are separate.

//   const handleAddProperty = async () => {
//     try {
//       // Ensure that the countryCode and phoneNumber are used separately
//       const fullPhoneNumber = `${countryCode}${phoneNumber}`;
      
//       const response = await axios.post('http://localhost:5000/PPC/store-data', {
//         phoneNumber: fullPhoneNumber, // Combined phone number
//       });

//       if (response.status === 201) {
//         toast.success(`User added successfully! PPC-ID: ${response.data.ppcId}`);
        
//         // Navigate to AddPropertyForm page with PPC-ID and phone number
//         setTimeout(() => {
//           navigate('/add-form', {
//             state: { ppcId: response.data.ppcId, phoneNumber, countryCode }, // Send separately
//           });
//         }, 1000); // Delay for toast message display
//       }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         toast.error(error.response.data.message || 'Error adding user.');
//       } else {
//         toast.error('Error adding user. Please try again.');
//       }
//       console.error('Frontend Error:', error);
//     }
//   };

//   useEffect(() => {
//     if (!phoneNumber || !countryCode) {
//       toast.error('Missing required information to add property.');
//     }
//   }, [phoneNumber, countryCode]);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Property Page</h1>
//       <p>Welcome to the Property Page! Here, you can explore your properties.</p>

//       <Button
//         type="button"
//         className="btn-property w-100 mt-3"
//         onClick={handleAddProperty}
//       >
//         PROPERTY
//       </Button>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Property;














import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Property = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { phoneNumber, countryCode } = location.state || {};

  const handleAddProperty = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/store-data`, {
        phoneNumber: `${countryCode}${phoneNumber}`, // Correct template literal syntax
      });

      if (response.status === 201) {
        // toast.success(`User added successfully! PPC-ID: ${response.data.ppcId}`);
        
        // Navigate to AddPropertyForm page with PPC-ID and phone number
        setTimeout(() => {
          navigate('/add-form', {
            state: { ppcId: response.data.ppcId, phoneNumber: `${countryCode}${phoneNumber}` }, // Correct template literal syntax
          });
        }, 1000); // Delay for toast message display
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'Error adding user.');
      } else {
        toast.error('Error adding user. Please try again.');
      }
      console.error('Frontend Error:', error);
    }
  };

  useEffect(() => {
    if (!phoneNumber || !countryCode) {
      toast.error('Missing required information to add property.');
    }
  }, [phoneNumber, countryCode]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Property Page</h1>
      <p>Welcome to the Property Page! Here, you can explore your properties.</p>

      <Button
        type="button"
        className="btn-property w-100 mt-3"
        onClick={handleAddProperty}
      >
        PROPERTY
      </Button>

      <ToastContainer />
    </div>
  );
};

export default Property;














// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';

// const Property = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   // const [loading, setLoading] = useState(false);

//   // Extract phoneNumber and countryCode from location.state or localStorage
//   const { phoneNumber: statePhoneNumber, countryCode: stateCountryCode } = location.state || {};
//   const storedPhoneNumber = localStorage.getItem('phoneNumber');
//   const storedCountryCode = localStorage.getItem('countryCode');

//   const phoneNumber = statePhoneNumber || storedPhoneNumber;
//   const countryCode = stateCountryCode || storedCountryCode;

//   const handleAddProperty = async () => {
//     if (!phoneNumber || !countryCode) {
//       toast.error('Missing phone number or country code.');
//       return;
//     }

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/store-data`, {
//         phoneNumber: `${countryCode}${phoneNumber}`,
//       });

//       if (response.status === 201) {
//         toast.success(`User added successfully! PPC-ID: ${response.data.ppcId}`);
        
//         // Navigate to AddPropertyForm page with PPC-ID and phone number
//         setTimeout(() => {
//           navigate('/add-form', {
//             state: { ppcId: response.data.ppcId, phoneNumber: `${countryCode}${phoneNumber}` },
//           });
//         }, 1000);
//       }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         toast.error(error.response.data.message || 'Error adding user.');
//       } else {
//         toast.error('Error adding user. Please try again.');
//       }
//       console.error('Frontend Error:', error);
//     } 
//   };

//   useEffect(() => {
//     if (phoneNumber && countryCode) {
//       // Save phoneNumber and countryCode to localStorage
//       localStorage.setItem('phoneNumber', phoneNumber);
//       localStorage.setItem('countryCode', countryCode);
//     } else {
//       toast.error('Missing required information to add property.');
//     }
//   }, [phoneNumber, countryCode]);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Property Page</h1>
//       <p>Welcome to the Property Page! Here, you can explore your properties.</p>

//       <Button
//         type="button"
//         className="btn-property w-100 mt-3"
//         onClick={handleAddProperty}
//         // disabled={loading}
//       >
//         property
//       </Button>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Property;






