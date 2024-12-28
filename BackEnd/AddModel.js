
















const mongoose = require('mongoose');

const AddSchema = new mongoose.Schema({
  
  phoneNumber: { type: String, required: true, index: true }, 
  ppcId: { type: Number, required: true },
  propertyMode: {
    type: String,
    required: false,
    enum: ['Residential', 'Commercial', 'Agricultural', 'Rent'],
  },
  propertyType: {
    type: String,
    // required: true,
    enum: [
      // Residential Property Types
      'Flat/ Apartment',
      'Residential House',
      'Villa',
      'Builder Floor Apartment',
      'Penthouse',
      'Studio Apartment',
      'Service Apartment',

      // Commercial Property Types
      'Commercial Office Space',
      'Office in IT Park/ SEZ',
      'Commercial Shop',
      'Commercial Showroom',
      'Commercial Land',
      'Warehouse/ Godown',
      'Industrial Land',
      'Industrial Building',
      'Industrial Shed',

      // Agricultural Property Types
      'Agricultural Land',
      'Farm House',
    ],
  },

  propertyAge: {
    type: String,
    required: false,
    enum: [
      'Newly Build', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years',
      '10 Years', '11 Years', '12 Years', '13 Years', '14 Years', '15 Years', '16 Years', '17 Years', '18 Years',
      '19 Years', '20 Years', '20+ Years',
    ],
  },
  price: { type: Number }, 
  status: {
    type: String,
    enum: ['incomplete', 'complete'],
    default: 'incomplete', 
  },
  bankLoan: {
    type: String,
    required: false,
    enum: ['Yes', 'No'],
  },
  negotiation: {
    type: String,
    required: false,
    enum: ['Yes', 'No'],
  },
  length: { type: Number, required: false }, // Optional field
  breadth: { type: Number, required: false }, // Optional field
  totalArea: { type: Number, required: false }, // Optional field
  ownership: {
    type: String,
    required: false,
    enum: ['Single Owner', 'Multiple Owner', 'Power Of Attorney'],
  },
  bedrooms: {
    type: String,
    required: false,
    enum: ['No', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '20+'],
  },
  kitchen: {
    type: String,
    required: false,
    enum: ['Yes', 'No'],
  },
  kitchenType: {
    type: String,
    required: false,
    enum: ['Modular', 'Normal', 'No'],
  },
  balconies: {
    type: String,
    required: false,
    enum: [
      'No', '1 Balcony', '2 Balconies', '3 Balconies', '4 Balconies', '5 Balconies', 
      '6 Balcony', '7 Balconies', '8 Balconies', '9 Balconies', '10 Balconies', 
      '10+ Balconies',
    ],
  },
  floorNo: {
    type: String,
    required: false,
    enum: [
      'Lower Basement', 'Upper Basement', 'Ground Floor', 'Top Floor', '1st Floor', 
      '2nd Floor', '3rd Floor', '4th Floor', '5th Floor', '6th Floor', '7th Floor', 
      '8th Floor', '9th Floor', '10th Floor',
    ],
  },
  areaUnit: {
    type: String,
    required: false,
    enum: ['sq.ft', 'sq.meter', 'cent', 'Acre', 'Hectare'],
  },
  propertyApproved: { type: String, required: false, enum: ['Yes', 'No'] },
  postedBy: { type: String, required: false, enum: ['Owner', 'Agent', 'Builder'] },
  facing: {
    type: String,
    required: false,
    enum: [
      'North', 'South', 'East', 'West', 'North-East', 'South-East', 'North-West', 
      'South-West', 'North-North-East', 'South-South-West', 'East-North-East', 
      'West-North-West',
    ],
  },
  salesMode: { type: String, required: false, enum: ['Full Payment', 'Partial Payment'] },
  salesType: { type: String, required: false, enum: ['Normal', 'Urgent'] },
  description: { type: String, required: false },
  furnished: { type: String, required: false, enum: ['Furnished', 'Unfurnished', 'Semi-Furnished'] },
  lift: { type: String, required: false, enum: ['Yes', 'No', 'Closed'] },
  attachedBathrooms: {
    type: String,
    required: false,
    enum: ['No', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+'],
  },
  western: {
    type: String,
    required: false,
    enum: ['No', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+'],
  },
  numberOfFloors: {
    type: String,
    required: false,
    enum: [
      'UnderGround', 'GroundFloor', '1', '2', '3', '4', '5', '6', '7', '8', 
      '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
      '20', '20+',
    ],
  },
  carParking: { type: String, required: false, enum: ['Yes', 'No'] },

  rentalPropertyAddress: {
    type: String,
    required: false, 
},
country: {
    type: String,
    required: false, 
},

state: {
    type: String,
    required: false,  // Optional field
},
city: {
    type: String,
    required: false,  
},
district: {
    type: String,
    required: false,  
},
area: {
    type: String,
    required: false,  
},
streetName: {
    type: String,
    required: false,  
},
doorNumber: {
    type: String,
    required: false,  
},
nagar: {
    type: String,
    required: false,  
},
ownerName: {
    type: String,
    required: false,  
},
email: {
    type: String,
    required: false,  
},

bestTimeToCall: {
    type: String,
    required: false,
    enum: ['AnyTime', 'Morning', 'Afternoon', 'Evening'],
},

video: {
  type: String, 
  required: false, 
},
photos: {
type: [String],
},


});

module.exports = mongoose.model('AddModel', AddSchema);
