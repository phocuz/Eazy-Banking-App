import { useDispatch, useSelector } from 'react-redux';
import { updateField, setErrors, flipCard } from './cardSlice';
import { validateField, formatCardNumber } from './utilities';
 


import mobile from "../../assets/card-assets/bg-main-mobile.png"
import desktop from "../../assets/card-assets/bg-main-desktop.png"
import cardBack from "../../assets/card-assets/bg-card-back.png"
import cardFront from "../../assets/card-assets/bg-card-front.png"
import cardLogo from "../../assets/card-assets/card-logo.svg"



const CardPayment = () => {
  const dispatch = useDispatch();
  const { 
    cardholderName, 
    cardNumber, 
    cvv, 
    expiryMonth, 
    expiryYear, 
    errors, 

  } = useSelector((state) => state.card);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    }

    dispatch(updateField({ name, value: formattedValue }));
    
    const error = validateField(name, value);
    if (error) {
      dispatch(setErrors({ ...errors, [name]: error }));
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      dispatch(setErrors(newErrors));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const fields = { cardholderName, cardNumber, cvv, expiryMonth, expiryYear };
    
    Object.keys(fields).forEach(key => {
      const error = validateField(key, fields[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully');
      console.log(fields)
      // Handle successful submission
    } else {
      dispatch(setErrors(newErrors));
    }
  };

  const handleCvvFocus = () => {
    dispatch(flipCard());
  };

  const handleCvvBlur = () => {
    dispatch(flipCard());
  };

  return (
    <div className="min-h-screen bg-gray-200 lg:grid lg:grid-cols-2">
      <div className="relative h-80 ">
        <img src={mobile} alt="mobile background" className="w-full h-full object-cover lg:hidden" />
        {/* <img src={desktop} alt="mobile background" className="object-cover hidden lg:flex" /> */}
        
        {/* Cards */}
        <div className="absolute w-full px-4 -bottom-4">
          <div className="relative max-w-md mx-auto">
            {/* Back Card */}
          <div className="absolute right-0 z-0 bottom-10 mt-4">
            <div className="relative">
              <img src={cardBack} alt="backCard" className="w-96" />
              <div className="absolute right-10 top-[45%] font-bold text-white">
                {cvv || '000'}
              </div>
            </div>
          </div>

          {/* Front Card */}
            
                    <div className="relative z-0 right-4">
            <img src={cardFront} alt="frontCard" className="w-80" />
            <div className="absolute inset-0 p-6 text-white">
              <img src={cardLogo} alt="card" />
              <div className="mt-8 text-2xl font-bold tracking-wider">
                {cardNumber || '0000 0000 0000 0000'}
              </div>
              <div className="mt-4 flex gap-12 justify-start text-gray-300">
                <div>{cardholderName || 'OKIKI MARBEL'}</div>
                <div>
                  {expiryMonth || '00'}/{expiryYear || '00'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Form */}
      <div className="max-w-md mx-auto pt-32 px-4 pb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              CARDHOLDER NAME
            </label>
            <input
              type="text"
              name="cardholderName"
              maxLength='15'
              value={cardholderName}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.cardholderName ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500`}
              placeholder="e.g. Arowolo Victor"
            />
            {errors.cardholderName && (
              <p className="mt-1 text-sm text-red-500">{errors.cardholderName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              CARD NUMBER
            </label>
            <input
              type="text"
              name="cardNumber"
              value={cardNumber}
              onChange={handleChange}
              maxLength="19"
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.cardNumber ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500`}
              placeholder="e.g. 1234 5678 9123 0000"
            />
            {errors.cardNumber && (
              <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                EXP. DATE (MM/YY)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="expiryMonth"
                  value={expiryMonth}
                  onChange={handleChange}
                  maxLength="2"
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.expiryMonth ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500`}
                  placeholder="MM"
                />
                <input
                  type="text"
                  name="expiryYear"
                  value={expiryYear}
                  onChange={handleChange}
                  maxLength="2"
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.expiryYear ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500`}
                  placeholder="YY"
                />
              </div>
              {(errors.expiryMonth || errors.expiryYear) && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.expiryMonth || errors.expiryYear}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={cvv}
                onChange={handleChange}
                onFocus={handleCvvFocus}
                onBlur={handleCvvBlur}
                maxLength="3"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.cvv ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500`}
                placeholder="e.g. 123"
              />
              {errors.cvv && (
                <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardPayment;