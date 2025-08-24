import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";
const HomeQuote = () => {
  const [address, setAddress] = useState("");
  const [hasDog, setHasDog] = useState(false);
  const [hasPool, setHasPool] = useState(false);
  const [spouseName, setSpouseName] = useState("");
  const [spouseDOB, setSpouseDOB] = useState("");
  const [plumbingYear, setPlumbingYear] = useState("");
  const [roofYear, setRoofYear] = useState("");
  const [heatingYear, setHeatingYear] = useState("");
  const [exteriorMaterial, setExteriorMaterial] = useState("");
  const [roofType, setRoofType] = useState("");
  const [garageType, setGarageType] = useState("Attached");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.init("jvDFsOsZyOt0pE6Wn");

    const formMessage = `
Home Insurance Quote Request:

Address: ${address}
Dog on Residence: ${hasDog ? "Yes" : "No"}
Pool: ${hasPool ? "Yes" : "No"}
Spouse Name: ${spouseName || "Not provided"}
Spouse DOB: ${spouseDOB || "Not provided"}
Year of Plumbing: ${plumbingYear || "Not provided"}
Year of Roof: ${roofYear || "Not provided"}
Year of Heating: ${heatingYear || "Not provided"}
Exterior Material: ${exteriorMaterial || "Not provided"}
Type of Roof: ${roofType || "Not provided"}
Garage Type: ${garageType}
    `.trim();

    emailjs
      .send("service_6hgdk8a", "template_yifcb8q", {
        name: address,
        email: "homeinsurance@blackstone.com",
        message: formMessage,
      })
      .then((response) => {
        console.log("EmailJS Success:", response);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send email. Please try again.");
        setLoading(false);
      });
  };
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6 py-12">
        <h1 className="mt-16 text-3xl md:text-5xl font-bold text-luxury mb-6">
          Home Insurance Quote
        </h1>

        <div className="glass-card p-8 rounded-2xl w-full max-w-md space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Address */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1">Address</label>
              <input
                type="text"
                placeholder="Enter your home address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>

            {/* Dog & Pool */}
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={hasDog}
                  onChange={(e) => setHasDog(e.target.checked)}
                  className="accent-green-400"
                />
                <span className="text-white">Dog on Residence</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={hasPool}
                  onChange={(e) => setHasPool(e.target.checked)}
                  className="accent-green-400"
                />
                <span className="text-white">Pool</span>
              </label>
            </div>

            {/* Spouse Name & DOB */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Spouse Name
                </label>
                <input
                  type="text"
                  placeholder="Spouse Name"
                  value={spouseName}
                  onChange={(e) => setSpouseName(e.target.value)}
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Spouse DOB
                </label>
                <input
                  type="date"
                  value={spouseDOB}
                  onChange={(e) => setSpouseDOB(e.target.value)}
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
            </div>

            {/* Year of Plumbing, Roof, Heating */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Year of Plumbing
                </label>
                <input
                  type="number"
                  placeholder="e.g. 2015"
                  value={plumbingYear}
                  onChange={(e) => setPlumbingYear(e.target.value)}
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Year of Roof
                </label>
                <input
                  type="number"
                  placeholder="e.g. 2018"
                  value={roofYear}
                  onChange={(e) => setRoofYear(e.target.value)}
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Year of Heating
                </label>
                <input
                  type="number"
                  placeholder="e.g. 2017"
                  value={heatingYear}
                  onChange={(e) => setHeatingYear(e.target.value)}
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
            </div>

            {/* Type of Exterior Material & Roof */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Exterior Construction Material
                </label>
                <input
                  type="text"
                  placeholder="e.g. Brick, Wood"
                  value={exteriorMaterial}
                  onChange={(e) => setExteriorMaterial(e.target.value)}
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Type of Roof
                </label>
                <input
                  type="text"
                  placeholder="e.g. Shingle, Metal"
                  value={roofType}
                  onChange={(e) => setRoofType(e.target.value)}
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
            </div>

            {/* Garage Type */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1">Garage Type</label>
              <select
                value={garageType}
                onChange={(e) => setGarageType(e.target.value)}
                className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white focus:border-green-400 focus:ring-1 focus:ring-green-400"
              >
                <option>Attached</option>
                <option>Detached</option>
              </select>
            </div>

            {/* Submit */}
            <Button type="submit" className="btn-matrix w-full mt-2">
              Submit Home Quote Request
            </Button>

            {submitted && (
              <p className="text-matrix font-bold mt-4 text-center">
                Thank you! Your home insurance quote request has been submitted.
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeQuote;
