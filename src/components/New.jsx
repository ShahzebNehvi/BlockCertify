import { useState } from "react";
import { prepareContractCall } from "thirdweb"
import { useSendTransaction } from "thirdweb/react"
import { defineChain } from "thirdweb/chains";
import { createThirdwebClient, getContract } from "thirdweb";
// Create the client with your clientId
const client = createThirdwebClient({
  clientId: "b441772e5ce64d1bed0fb46b134fe8d0"
});

// Connect to your contract
const contract = getContract({
  client,
  chain: defineChain(59141),
  address: "0x2F3B0F36217d311192d8678D2c627302852259FC"
});

function Generate() {
  let [_certificate_id, setCertificateId] = useState("");
  let [_uid, setUid] = useState("");
  let [_candidate_name, setCandidateName] = useState("");
  let [_course_name, setCourseName] = useState("");
  let [_org_name, setOrgName] = useState("");

  const { mutate: sendTransaction } = useSendTransaction();

  const handleSubmit = async () => {
    try {
      const transaction = contract.call("generateCertificate",[_certificate_id, _uid, _candidate_name, _course_name, _org_name])
      console.log(transaction)
    } catch (error) {
      console.error("Error sending transaction:", error);
      throw error;
    }
  };

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-[#060B0F]">
      <h2 className="text-4xl font-bold text-white mb-8">Generate Certificate</h2>
      <form className="bg-[#0A0E12] p-8 rounded-xl border border-white w-full max-w-md">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#1A1E24] leading-tight focus:outline-none focus:shadow-outline"
            id="certificate_id"
            type="text"
            placeholder="Certificate ID"
            value={_certificate_id}
            onChange={(e) => setCertificateId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#1A1E24] leading-tight focus:outline-none focus:shadow-outline"
            id="uid"
            type="text"
            placeholder="UID"
            value={_uid}
            onChange={(e) => setUid(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#1A1E24] leading-tight focus:outline-none focus:shadow-outline"
            id="candidate_name"
            type="text"
            placeholder="Candidate Name"
            value={_candidate_name}
            onChange={(e) => setCandidateName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#1A1E24] leading-tight focus:outline-none focus:shadow-outline"
            id="course_name"
            type="text"
            placeholder="Course Name"
            value={_course_name}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#1A1E24] leading-tight focus:outline-none focus:shadow-outline"
            id="org_name"
            type="text"
            placeholder="Organization Name"
            value={_org_name}
            onChange={(e) => setOrgName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Generate
          </button>
        </div>
      </form>
    </div>

  );
}

export default Generate;
