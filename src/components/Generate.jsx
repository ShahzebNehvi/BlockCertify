import { useState } from "react";
import {
  createThirdwebClient,
  getContract,
  prepareContractCall,
} from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";

const client = createThirdwebClient({
  clientId: "b441772e5ce64d1bed0fb46b134fe8d0", // Replace with your actual client ID
});

const contract = getContract({
  client,
  chain: defineChain(59141),
  address: "0x2F3B0F36217d311192d8678D2c627302852259FC",
});

function CertificateGenerator() {
  const [formData, setFormData] = useState({
    certificate_id: "",
    uid: "",
    candidate_name: "",
    course_name: "",
    org_name: "",
  });

  const { mutate: sendTransaction } = useSendTransaction();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const transaction = prepareContractCall({
      contract,
      method: "generateCertificate",
      params: [
        formData.certificate_id,
        formData.uid,
        formData.candidate_name,
        formData.course_name,
        formData.org_name,
      ],
    });

    await sendTransaction(transaction);
    console.log(transaction);
  };

  return (
    <div
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#060B0F", minHeight: "100vh" }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 ">
        Generate Certificate
      </h2>
      <form
        className="bg-[#060B0F] p-6 sm:p-8 rounded-xl w-full max-w-md shadow-lg transition-transform transform hover:scale-105"
        onSubmit={handleSubmit}
      >
        {[
          "certificate_id",
          "uid",
          "candidate_name",
          "course_name",
          "org_name",
        ].map((field, index) => (
          <div className="mb-4" key={index}>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor={field}
            >
              {field
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </label>
            <input
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              className="shadow appearance-none rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#ffffff1a] backdrop-blur-md border-white transition-transform transform hover:scale-105 focus:ring-2 focus:ring-[#94a3ad]"
              placeholder={field
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
              required
            />
          </div>
        ))}
        <div className="flex items-center justify-center">
          <button
            className="bg-[#202d37] hover:text-[#202d37] hover:bg-[#94a3ad] text-white py-2 px-4 mt-2 rounded-xl focus:outline-none focus:shadow-outline w-full transition-transform transform hover:scale-105"
            type="submit"
          >
            Generate Certificate
          </button>
        </div>
      </form>
    </div>
  );
}

export default CertificateGenerator;
