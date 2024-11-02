import React from "react";

function Home() {
  return (
    <div className="flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory bg-[#060B0F]">
      {/* Landing Section */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 snap-start min-h-screen">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-4 text-center">BlockCertify</h1>
        <p className="text-base sm:text-lg text-white mb-8 text-center max-w-2xl">
          A Certificate Verification Platform
          <br />
          Secure, Transparent, and Efficient
        </p>
      </section>

      {/* Section 1: How BlockCertify Improves Certificate Verification */}
      <section className="flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8 snap-start min-h-screen">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How BlockCertify Makes Verification Better</h2>
        <p className="text-white text-lg text-center max-w-xl mb-4">
          In today's digital age, ensuring the authenticity of educational and professional certificates is crucial. 
          BlockCertify leverages blockchain technology to create a tamper-proof system for certificate issuance and verification.
        </p>
        <div className="text-white max-w-3xl text-center mb-4">
          <p className="mb-4">
            With our platform, educational institutions can issue certificates directly onto the blockchain, making them easily verifiable by employers and other entities.
          </p>
          <p className="mb-4">
            This innovative approach eliminates fraudulent certificates and saves time for both issuers and recipients. 
            Join us in transforming the verification process—experience a secure, efficient, and reliable way to manage and verify credentials.
          </p>
        </div>
      </section>

      {/* Section 2: Instructions on How to Fetch a Certificate */}
      <section className="flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8 snap-start min-h-screen">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Step 1: How to Fetch Your Certificate</h2>
        <p className="text-white text-lg text-center max-w-xl mb-4">
          To start using BlockCertify, follow these easy steps:
        </p>
        <div className="text-white max-w-3xl text-center">
          <ol className="list-decimal list-inside space-y-2">
            <li>Visit the BlockCertify homepage.</li>
            <li>Click on the "Fetch Certificate" button.</li>
            <li>Enter your unique signature ID as provided on your certificate.</li>
            <li>Hit the "Search" button to retrieve your certificate.</li>
          </ol>
        </div>
      </section>

      {/* Section 3: Verify Your Certificate */}
      <section className="flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8 snap-start min-h-screen">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Step 2: Verify Your Certificate</h2>
        <p className="text-white text-lg text-center max-w-xl mb-4">
          Here's how you can verify the authenticity of your certificate:
        </p>
        <div className="text-white max-w-3xl text-center">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ensure you have the correct signature ID from your issued certificate.</li>
            <li>Use the provided input field on the "Fetch Certificate" page to enter the signature ID.</li>
            <li>After clicking "Search," review the certificate details displayed.</li>
            <li>If everything matches, your certificate is verified!</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Home;
