import  { useState } from 'react';
import { Form } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setErrors } from './contactSlice';


function ContactForm() {

  const [alertMessage, setAlertMessage] = useState('');
const [showAlert, setShowAlert] = useState(false);


  const dispatch = useDispatch()
  const { firstName, lastName, email, inquiryType, message, errors } = useSelector(
    (state) => state.form
  );

  const resetForm = () => {
  dispatch(updateField({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  }));
};
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ name, value }));
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

        if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      newErrors.firstName = 'Name should only contain letters';
    }
        if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      newErrors.lastName = 'Name should only contain letters';
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setAlertMessage('Form submitted successfully!');
      setShowAlert(true);
      resetForm();

      setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    } else {
      dispatch(setErrors(formErrors)); // Set errors if validation fails
    }


  };

  return (
  
    <div className='bg-gray-50'>

      {showAlert && (
        <div className="top-0 left-0 w-full bg-blue-500 text-white p-4 text-center">
          {alertMessage}
        </div>)}

     <div className="max-w-xl mx-auto p-4 h-auto bg-white ">

       <h2 className='text-2xl text-gray-600 mb-5'>Contact</h2>
       <Form  onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-md text-gray-400 font-medium mb-3">First Name *</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-md text-gray-400 font-medium mb-3">Last Name *</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-md text-gray-400 font-medium mb-3">Email *</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-md text-gray-400 font-medium mb-3">Inquiry Type *</label>
        <div className="flex items-start flex-col md:items-center md:flex-row ">
          <div className='border-2 p-2 m-2 pr-8 rounded-xl'>
            <input
            type="radio"
            name="inquiryType"
            value="general"
            checked={inquiryType === 'general'}
            onChange={handleChange}
            className="mr-2 "
          />
          <label className="text-md text-gray-400 text-xl mb-3">General Inquiries</label>
          </div>
         <div className='border-2 p-2 m-2 pr-8 rounded-xl'>
           <input
            type="radio"
            name="inquiryType"
            value="request"
            checked={inquiryType === 'request'}
            onChange={handleChange}
            className="mr-2"
          />
          <label className='text-md text-gray-400 text-xl mb-3'>Sending Request</label>
         </div>
        </div>
        {errors.inquiryType && <p className="text-red-500 text-sm">{errors.inquiryType}</p>}
      </div>

      <div className="mb-4">
        <label className="text-md text-gray-400 text-xl mb-4">Message</label>
        <textarea
          name="message"
          value={message}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          rows="4"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <div className='my-6  text-md text-gray-400 text-xl '>
           <input
            type="checkbox"
            name="inquiryType"
            value="request"
            onChange={handleChange}
            className="mr-2"
          />
          <label>i consent to being contacted by the team</label>
         </div>

      <button
        type="submit"
        className="w-full text-white py-2 bg-gradient-to-r from-green-400 to-blue-500  font-semibold  rounded-full shadow-lg hover:opacity-90 transition-opacity   duration-300"
      >
        
        Submit
      </button>
    </Form>
     </div>
     </div>
  );
}

export default ContactForm;
