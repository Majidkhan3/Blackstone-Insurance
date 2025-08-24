import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export default function QuoteCalculator() {
  const [vin, setVin] = useState("");
  const [dlFile, setDlFile] = useState(null);
  const [address, setAddress] = useState("");
  const [householdDrivers, setHouseholdDrivers] = useState("");
  const [coverage, setCoverage] = useState("25/50");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ddcCompleted, setDdcCompleted] = useState(false);
  const [ddcFile, setDdcFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

  
    emailjs.init("jvDFsOsZyOt0pE6Wn");

    const formMessage = `
Personal Auto Insurance Quote Request:

VIN #: ${vin}
Address: ${address}
Household Drivers: ${householdDrivers}
Coverage Type: ${coverage}
Email: ${email}
Phone: ${phone}
Defensive Driving Course Completed: ${ddcCompleted ? 'Yes' : 'No'}
Driver's License File: ${dlFile ? dlFile.name : 'Not uploaded'}
DDC File: ${ddcFile ? ddcFile.name : 'Not uploaded'}
    `.trim();

   
    emailjs
      .send(
        "service_6hgdk8a",
        "template_yifcb8q",
        {
          name: `Auto Insurance - ${address}`, 
          email: email,
          message: formMessage,
        }
      )
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
      <section className="min-h-screen w-full relative overflow-hidden bg-[#0B0F0E] text-white mt-16">
        <div className="relative max-w-3xl mx-auto px-6 py-16">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Personal Auto Insurance Quote
            </h1>
            <p className="text-gray-300">
              Fill out the form below to get your personal auto insurance quote.
            </p>
          </header>

          <div className="rounded-2xl bg-black/40 backdrop-blur-md border border-[#12C85533] shadow-[0_0_30px_#12C85522] p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* VIN */}
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">VIN #</label>
                <input
                  type="text"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  placeholder="Vehicle Identification Number"
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  required
                />
              </div>

              {/* Driver's License Upload */}
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">Upload Driver's License (PDF)</label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  onChange={(e) => setDlFile(e.target.files[0])}
                  className="text-gray-200"
                  required
                />
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Home address"
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  required
                />
              </div>

              {/* Household Drivers */}
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">Household Drivers (Spouse, Children, Relatives)</label>
                <textarea
                  value={householdDrivers}
                  onChange={(e) => setHouseholdDrivers(e.target.value)}
                  placeholder="List names and relation"
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  required
                />
              </div>

              {/* Coverage Options */}
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">Coverage Type</label>
                <select
                  value={coverage}
                  onChange={(e) => setCoverage(e.target.value)}
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white focus:border-green-400 focus:ring-1 focus:ring-green-400"
                >
                  <option>25/50 (State minimum)</option>
                  <option>50/100</option>
                  <option>100/300</option>
                  <option>300 CSL (Combined Single Limit)</option>
                  <option>250/500</option>
                </select>
              </div>

              {/* Contact */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-white font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                    required
                  />
                </div>
              </div>

              {/* Defensive Driving Course */}
              <div className="flex flex-col">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={ddcCompleted}
                    onChange={(e) => setDdcCompleted(e.target.checked)}
                    className="accent-green-400"
                  />
                  <span className="text-white">Defensive Driving Course Completed</span>
                </label>
                {ddcCompleted && (
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setDdcFile(e.target.files[0])}
                    className="mt-2 text-gray-200"
                  />
                )}
              </div>

              {/* Disclaimer */}
              <p className="text-red-500 text-sm mt-2">
                As of 2025, insurance companies have become stricter. They typically do not cover damage caused by uninsured or undisclosed drivers. 
                During the first 60 days of the policy, a verification and background check is conducted to confirm who resides in the household.
              </p>

              {/* Submit */}
              <Button type="submit" className="btn-matrix w-full mt-4">
                Submit Quote Request
              </Button>

              {submitted && (
                <p className="text-matrix font-bold mt-4 text-center">
                  Thank you! Your personal auto insurance quote request has been submitted.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
