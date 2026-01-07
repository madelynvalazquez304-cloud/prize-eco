
import React from 'react';

interface ClaimRewardProps {
  onClaim: () => void;
}

const ClaimReward: React.FC<ClaimRewardProps> = ({ onClaim }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-400 p-6 text-white text-center">
        <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase mb-2">
          Special Offer
        </div>
        <h2 className="text-2xl font-extrabold">Exclusive Rewards</h2>
      </div>

      <div className="p-8 sm:p-10">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full scale-150 blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-white p-4 rounded-full shadow-lg border-2 border-blue-50">
              <svg className="w-16 h-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 mb-10">
          <h1 className="text-3xl font-black text-gray-900 leading-tight">
            Claim Your <span className="text-blue-600">Wallet</span> Bonus Today!
          </h1>
          <p className="text-gray-600 text-lg">
            You have been selected to receive a promotional bonus. Secure your account to participate in our loyalty program.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3 text-sm text-gray-600 bg-blue-50 p-4 rounded-xl border border-blue-100">
            <svg className="w-6 h-6 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p>Verification is required to ensure the security of your wallet before the funds are transferred.</p>
          </div>

          <button
            onClick={onClaim}
            className="group relative w-full bg-[#3b82f6] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-widest text-base"
          >
            Claim Bonus Now
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center items-center space-x-4 grayscale opacity-50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          <div className="h-4 w-px bg-gray-300"></div>
          <p className="text-[10px] font-bold text-gray-500 uppercase">Secure Payment</p>
        </div>
      </div>
    </div>
  );
};

export default ClaimReward;
