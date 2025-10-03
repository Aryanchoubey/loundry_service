import { useState } from 'react';
import { ArrowLeft, CreditCard, Banknote, Shield, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function PaymentPage() {
    const navigate = useNavigate()
  const [selectedPayment, setSelectedPayment] = useState('cod');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-white px-6 py-5 border-b border-gray-100">
          <div className="flex items-center mb-4">
            <button 
            onClick={() => navigate("/order")}
             className="flex items-center text-teal-600 hover:text-teal-700 transition-all duration-200 hover:bg-teal-50 px-2 py-1 rounded-lg -ml-2">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Back</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Complete Payment</h1>
            <p className="text-sm text-gray-600">Select your items and schedule pickup time.</p>
          </div>
        </div>

        {/* Payment Options */}
        <div className="px-6 py-6">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center text-teal-600">
              <Shield className="w-5 h-5 mr-2" />
              <h2 className="text-lg font-semibold">Choose your payment option</h2>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* COD Option */}
            <label className={`relative flex items-center p-5 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
              selectedPayment === 'cod' 
                ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-200' 
                : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-teal-300 hover:shadow-md'
            }`}>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={selectedPayment === 'cod'}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-all duration-200 ${
                    selectedPayment === 'cod' 
                      ? 'border-white bg-white' 
                      : 'border-gray-300'
                  }`}>
                    {selectedPayment === 'cod' && <CheckCircle className="w-4 h-4 text-teal-600" />}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">COD</div>
                    <div className={`text-sm ${selectedPayment === 'cod' ? 'text-teal-100' : 'text-gray-500'}`}>
                      Cash On Delivery
                    </div>
                  </div>
                </div>
                <div className={`p-2 rounded-lg ${selectedPayment === 'cod' ? 'bg-white/20' : 'bg-gray-100'}`}>
                  <Banknote className={`w-6 h-6 ${selectedPayment === 'cod' ? 'text-white' : 'text-teal-600'}`} />
                </div>
              </div>
              {selectedPayment === 'cod' && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/20 to-teal-600/20 pointer-events-none"></div>
              )}
            </label>

            {/* UPI/Card Option */}
            <label className={`relative flex items-center p-5 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
              selectedPayment === 'upi' 
                ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-200' 
                : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-teal-300 hover:shadow-md'
            }`}>
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={selectedPayment === 'upi'}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-all duration-200 ${
                    selectedPayment === 'upi' 
                      ? 'border-white bg-white' 
                      : 'border-gray-300'
                  }`}>
                    {selectedPayment === 'upi' && <CheckCircle className="w-4 h-4 text-teal-600" />}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">UPI/Credit/Debit/ATM</div>
                    <div className={`text-sm ${selectedPayment === 'upi' ? 'text-teal-100' : 'text-gray-500'}`}>
                      Add your secure card or use UPI payments
                    </div>
                  </div>
                </div>
                <div className={`p-2 rounded-lg ${selectedPayment === 'upi' ? 'bg-white/20' : 'bg-gray-100'}`}>
                  <CreditCard className={`w-6 h-6 ${selectedPayment === 'upi' ? 'text-white' : 'text-teal-600'}`} />
                </div>
              </div>
              {selectedPayment === 'upi' && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/20 to-teal-600/20 pointer-events-none"></div>
              )}
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-100">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
              Order Summary
            </h3>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700 font-medium">Total</span>
              <span className="text-2xl font-bold text-teal-600">$0.00</span>
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <div className="p-6 bg-white">
          <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-teal-200 flex items-center justify-center group">
            <span className="text-lg">Pay & Place Order</span>
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center">
            <Shield className="w-3 h-3 mr-1" />
            Your payment information is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
}