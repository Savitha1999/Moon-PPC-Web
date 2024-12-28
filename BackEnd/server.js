
// const mongoose = require('mongoose');
// const express = require('express');
// const port = 5000;
// const UserRouter = require('./user/UserRouter');
// const AddRouter = require ('./AddRouter');




// const app = express();
// const cors = require('cors');
// const path = require('path');

// app.use(cors());
// app.use(express.json()); 

// app.use('/uploads', express.static(path.join(__dirname,'config', 'serviceAccountKey.json', 'uploads')));

// mongoose.connect("mongodb://localhost:27017/AdminMoon")
// .then( ( ) =>
// {
    
//     console.log("Database conneted");
    
// })
// .catch(() =>
// {
//     console.log("Database Failed to Connect");

// })

// app.listen(port , ()=>
// {
//     console.log("Server Running in", port);
    
// })


// app.use("/PPC", UserRouter);
// app.use("/PPC", AddRouter);


















// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');
// const UserRouter = require('./user/UserRouter'); // Ensure the path to UserRouter is correct
// const AddRouter = require('./AddRouter'); // Ensure the path to AddRouter is correct

// const app = express();
// const port = 5000; // Define the port

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/AdminMoon', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((error) => {
//     console.log("Database connection failed", error);
//   });

// // Middleware Setup
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// // Your reCAPTCHA secret key
// const secretKey = "6LdOMKEqAAAAACYWw4yF2OA7zMi3Px6UMKlrS0sH";

// // Helper function to verify reCAPTCHA
// const verifyCaptcha = async (captchaResponse) => {
//   const verificationUrl = `https://www.google.com/recaptcha/PPC/siteverify`; // Correct URL

//   try {
//     const response = await axios.post(verificationUrl, null, {
//       params: {
//         secret: secretKey,
//         response: captchaResponse,
//       },
//     });
//     return response.data.success;
//   } catch (error) {
//     console.error("Error verifying CAPTCHA:", error);
//     return false;
//   }
// };

// // Static files setup (uploads)
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Route handling
// app.use("/PPC", UserRouter);
// app.use("/PPC", AddRouter);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });




const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const UserRouter = require('./user/UserRouter'); // Ensure this path is correct
const AddRouter = require('./AddRouter');       // Ensure this path is correct

const app = express();
const port = 5000; // Define the port

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/AdminMoon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

// Middleware Setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Your reCAPTCHA secret key
const secretKey = "6LdOMKEqAAAAACYWw4yF2OA7zMi3Px6UMKlrS0sH";

// Helper function to verify reCAPTCHA
const verifyCaptcha = async (captchaResponse) => {
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify`;

  try {
    const response = await axios.post(verificationUrl, null, {
      params: {
        secret: secretKey,
        response: captchaResponse,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error("Error verifying CAPTCHA:", error);
    return false;
  }
};

// Middleware for CAPTCHA validation
const captchaMiddleware = async (req, res, next) => {
  const captchaResponse = req.body.captchaResponse;

  if (!captchaResponse) {
    return res.status(400).json({ message: "CAPTCHA response is required" });
  }

  const isValid = await verifyCaptcha(captchaResponse);
  if (!isValid) {
    return res.status(400).json({ message: "Invalid CAPTCHA" });
  }

  next();
};

// Static files setup (uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route handling
app.use("/PPC", UserRouter); // Ensure UserRouter contains relevant routes
app.use("/PPC", AddRouter);  // Ensure AddRouter contains relevant routes

// Handle invalid routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});















// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');
// const UserRouter = require('./user/UserRouter'); // Ensure the path to UserRouter is correct
// const AddRouter = require('./AddRouter'); // Ensure the path to AddRouter is correct

// const app = express();
// const port = 5000; // Define the port

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/AdminMoon', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((error) => {
//     console.log("Database connection failed", error);
//   });

// // Middleware Setup
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// // Your reCAPTCHA secret key
// const secretKey = "6LdOMKEqAAAAACYWw4yF2OA7zMi3Px6UMKlrS0sH";

// // Helper function to verify reCAPTCHA
// const verifyCaptcha = async (captchaResponse) => {
//   const verificationUrl = `https://www.google.com/recaptcha/PPC/siteverify`; // Correct URL

//   try {
//     const response = await axios.post(verificationUrl, null, {
//       params: {
//         secret: secretKey,
//         response: captchaResponse,
//       },
//     });
//     return response.data.success;
//   } catch (error) {
//     console.error("Error verifying CAPTCHA:", error);
//     return false;
//   }
// };

// // Static files setup (uploads)
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Route handling
// app.use("/PPC", UserRouter); // Ensure UserRouter contains relevant routes
// app.use("/PPC", AddRouter);  // Ensure AddRouter contains relevant routes

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });






