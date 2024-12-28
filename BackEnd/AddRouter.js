




const express = require('express');
const router = express.Router();
const AddModel = require('./AddModel');

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDirectory = 'uploads/';
        if (!fs.existsSync(uploadDirectory)) {
            fs.mkdirSync(uploadDirectory, { recursive: true });
        }
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const fileName = Date.now() + fileExtension; // Unique filename
        cb(null, fileName);
    },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB file size limit
  fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif|mp4|avi|mov/; // Allowed file types
      const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = fileTypes.test(file.mimetype);
      if (extname && mimetype) {
          return cb(null, true); // Accept the file
      } else {
          return cb(new Error('Only image and video files (JPEG, PNG, GIF, MP4, AVI, MOV) are allowed!'), false);
      }
  },
});


// Store new user data with PPC-ID
router.post('/store-data', async (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ message: 'Phone number is required.' });
  }

  try {
    console.log('Incoming request body:', req.body);

    // Check if the user already exists
    const existingUser = await AddModel.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Create new user with PPC-ID
    const count = await AddModel.countDocuments();
    const ppcId = 1001 + count;

    const newUser = new AddModel({ phoneNumber, ppcId });
    await newUser.save();

    console.log('User stored successfully:', newUser);
    res.status(201).json({ message: 'User added successfully!', ppcId });
  } catch (error) {
    console.error('Error storing user details:', error);
    res.status(500).json({ message: 'Error storing user details.', error });
  }
});




// // Store new user data with PPC-ID
// router.post('/store-data', async (req, res) => {
//     const { phoneNumber } = req.body;
  
//     if (!phoneNumber) {
//       return res.status(400).json({ message: 'Phone number is required.' });
//     }
  
//     try {
//       console.log('Incoming request body:', req.body);
  
//       // Count the total documents to generate a unique PPC-ID
//       const count = await AddModel.countDocuments();
//       const ppcId = 1001 + count;
  
//       // Create new user with a new PPC-ID even if the phone number exists
//       const newUser = new AddModel({ phoneNumber, ppcId });
//       await newUser.save();
  
//       console.log('User stored successfully:', newUser);
//     //   res.status(201).json({ message: 'User added successfully!', ppcId });
//     } catch (error) {
//       console.error('Error storing user details:', error);
//       res.status(500).json({ message: 'Error storing user details.', error });
//     }
//   });
  




router.post('/update-property', upload.fields([{ name: 'video', maxCount: 1 }, { name: 'photos', maxCount: 5 }]), async (req, res) => {
    // Check for multer errors
    if (req.fileValidationError) {
        return res.status(400).json({ message: req.fileValidationError });
    }
    if (req.files['video'] && req.files['video'][0].size > 50 * 1024 * 1024) {
        return res.status(400).json({ message: 'Video file size exceeds 50MB.' });
    }
  
    

    const {
        ppcId,
        phoneNumber,
        propertyMode,
        propertyType,
        price,
        balconies,
        floorNo,
        areaUnit,
        propertyApproved,
        postedBy,
        facing,
        salesMode,
        salesType,
        description,
        furnished,
        lift,
        attachedBathrooms,
        western,
        numberOfFloors,
        carParking,
        rentalPropertyAddress,
        country,
        state,
        city,
        district,
        area,
        streetName,
        doorNumber,
        nagar,
        ownerName,
        email,
        bestTimeToCall,
      } = req.body;
  
    if (!ppcId || !phoneNumber) {
        return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
    }
  
    try {
      console.log('Incoming update request:', req.body);
  
      // Find the user by PPC-ID and phone number
      const user = await AddModel.findOne({ ppcId, phoneNumber });
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Update the property details only if provided in the request
      if (propertyMode) user.propertyMode = propertyMode;
      if (propertyType) user.propertyType = propertyType;
      if (price) user.price = price;
      if (balconies) user.balconies = balconies;
      if (floorNo) user.floorNo = floorNo;
      if (areaUnit) user.areaUnit = areaUnit;
      if (propertyApproved) user.propertyApproved = propertyApproved;
      if (postedBy) user.postedBy = postedBy;
      if (facing) user.facing = facing;
      if (salesMode) user.salesMode = salesMode;
      if (salesType) user.salesType = salesType;
      if (description) user.description = description;
      if (furnished) user.furnished = furnished;
      if (lift) user.lift = lift;
      if (attachedBathrooms) user.attachedBathrooms = attachedBathrooms;
      if (western) user.western = western;
      if (numberOfFloors) user.numberOfFloors = numberOfFloors;
      if (carParking) user.carParking = carParking;
      
      // Address fields
      if (rentalPropertyAddress) user.rentalPropertyAddress = rentalPropertyAddress;
      if (country) user.country = country;
      if (state) user.state = state;
      if (city) user.city = city;
      if (district) user.district = district;
      if (area) user.area = area;
      if (streetName) user.streetName = streetName;
      if (doorNumber) user.doorNumber = doorNumber;
      if (nagar) user.nagar = nagar;
      if (ownerName) user.ownerName = ownerName;
      if (email) user.email = email;
      if (bestTimeToCall) user.bestTimeToCall = bestTimeToCall;
  
        // Handle video and photo updates
        if (req.files) {
            if (req.files['video']) {
                user.video = req.files['video'][0].path; // Save video path
            }
  
            if (req.files['photos']) {
                user.photos = req.files['photos'].map(file => file.path); // Save photo paths
            }
        }

        
      // Check if all required fields are filled
      const isComplete = [
        propertyMode, propertyType, price, balconies, floorNo,
        areaUnit, propertyApproved, postedBy, facing, salesMode, salesType,
        description, furnished, lift, attachedBathrooms, western, numberOfFloors,
        carParking, rentalPropertyAddress, country, state, city, district,
        area, streetName, doorNumber, nagar, ownerName, email, bestTimeToCall
      ].every(field => field !== undefined && field !== '');
  
      // Set status based on whether all required fields are filled
      user.status = isComplete ? 'complete' : 'incomplete';

        // Save updated user data
        await user.save();
  
        console.log('Property details updated successfully:', user);
        res.status(200).json({ message: 'Property details updated successfully!', user });
    } catch (error) {
        console.error('Error updating property details:', error);
        res.status(500).json({ message: 'Error updating property details.', error });
    }
  });




router.get('/fetch-data', async (req, res) => {
    const { phoneNumber, ppcId } = req.query;

    // Ensure at least one parameter is provided
    if (!phoneNumber && !ppcId) {
        return res.status(400).json({ message: 'Either phone number or PPC-ID is required.' });
    }

    try {
        console.log('Incoming fetch request:', req.query);

        // Normalize phone number (remove spaces, dashes, country code, and ensure consistency)
        const normalizedPhoneNumber = phoneNumber
            ? phoneNumber.replace(/[\s-]/g, '').replace(/^(\+91|91|0)/, '').trim() // Remove country code, spaces, dashes
            : null;

        // Build query dynamically based on the provided parameters
        const query = {};
        if (normalizedPhoneNumber) query.phoneNumber = new RegExp(normalizedPhoneNumber + '$'); // Match phone number ending with the query
        if (ppcId) query.ppcId = ppcId;

        console.log('Query Object:', query);

        // Fetch user from the database
        const user = await AddModel.findOne(query);

        // Check if user exists
        if (!user) {
            console.error('User not found:', query);
            return res.status(404).json({ message: 'User not found.' });
        }

        console.log('User data fetched successfully:', user);

        // Return the fetched user data
        res.status(200).json({ message: 'User data fetched successfully!', user });
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Error fetching user details.', error });
    }
});


module.exports = router;







