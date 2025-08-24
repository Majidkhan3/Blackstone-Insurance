import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
const BusinessQuote = () => {
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [insuranceType, setInsuranceType] = useState("General Liability");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.init("jvDFsOsZyOt0pE6Wn");

 
    emailjs
      .send("service_6hgdk8a", "template_yifcb8q", {
        name: businessName,
        email: email,
        message: `Phone: ${phone}\nBusiness: ${businessName}\nInsurance Type: ${insuranceType}`,
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
        <h1 className="text-3xl md:text-5xl font-bold text-luxury mb-6">
          Business Insurance Quote
        </h1>

        <div className="glass-card p-8 rounded-2xl w-full max-w-md space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Business / Crop Name */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1">
                Business / Crop Name
              </label>
              <input
                type="text"
                placeholder="Enter your business or crop name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>

            {/* Phone & Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 234 567 890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
            </div>

            {/* Insurance Type */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1">
                Select Business Insurance Type
              </label>
              <select
                value={insuranceType}
                onChange={(e) => setInsuranceType(e.target.value)}
                className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white focus:border-green-400 focus:ring-1 focus:ring-green-400"
              >
                <option>General Liability</option>
                <option>Business Owner Policy</option>
                <option>Professional Liability (Errors & Omissions)</option>
                <option>Workers Comp</option>
                <option>Umbrella</option>
              </select>
            </div>

            {/* Submit */}
            <Button type="submit" className="btn-matrix w-full mt-2">
              Submit Quote Request
            </Button>

            {/* Confirmation */}
            {submitted && (
              <p className="text-matrix font-bold mt-4">
                Thank you! Your quote request has been submitted.
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessQuote;
