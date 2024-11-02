import { useReadContract } from "thirdweb/react";
import { defineChain } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { useState } from "react";
import { client } from "../client";

export default function Certificates() {
  const [signature, setSignature] = useState("");
  const [final, setFinal] = useState("");
  const contract = getContract({
    client,
    chain: defineChain(59141),
    address: "0x094542EB1E269915Afd5e924001B2eDfe7d633A0",
  });

  const { data, isPending, error } = useReadContract({
    contract,
    method: "function getCertificatesBySignature(string signature) view returns ((string certificateID, string name, string studentID, string course, string organization, string dateOfIssue, string title)[])",
    params: [signature],
  });

  const handleUpdateSignature = () => {
    setSignature(final);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#060B0F", minHeight: "100vh" }}>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Fetch Certificate</h2>
      
      <div className="flex w-full max-w-md mb-8 gap-2">
        <input
          type="text"
          value={final}
          onChange={(e) => setFinal(e.target.value.toUpperCase())}
          placeholder="Enter Signature ID"
          className="flex-grow shadow appearance-none rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#ffffff1a] backdrop-blur-md border-white transition-transform transform hover:scale-105 focus:ring-2 focus:ring-[#94a3ad]"
        />
        <button
          onClick={handleUpdateSignature}
          className="bg-[#202d37] hover:bg-[#94a3ad] hover:text-[#202d37] text-white py-2 px-4 rounded-xl transition-transform hover:scale-105 focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </div>

      <div className="w-full max-w-4xl">
        {isPending && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">An error occurred: {error.message}</p>}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data && data.length > 0 ? (
            data.map((certificate, index) => (
              <div
                key={index}
                className="bg-[#ffffff1a] backdrop-blur-md rounded-xl shadow-lg p-6 transition-transform hover:scale-105 text-white"
              >
                <h2 className="text-xl font-semibold mb-3">{certificate.title}</h2>
                <p className="mb-1">
                  <span className="font-medium">Name:</span> {certificate.name}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Student ID:</span> {certificate.studentID}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Course:</span> {certificate.course}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Organization:</span> {certificate.organization}
                </p>
                <p>
                  <span className="font-medium">Date of Issue:</span> {certificate.dateOfIssue}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">No certificates found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
