import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";

const RentalQuote = () => {
  const [location, setLocation] = useState("");
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let base = 300;
    if (value > 100000) base += 150;
    if (location.toLowerCase().includes("nyc")) base += 200;
    const quoteAmount = base;
    emailjs.init("jvDFsOsZyOt0pE6Wn");
    const formMessage = `
Rental Insurance Quote Request:

Name: ${name}
Email: ${email}
Phone: ${phone}
Rental Location: ${location}
Estimated Property Value: $${value}
Calculated Quote: $${quoteAmount}
    `.trim();
    emailjs
      .send(
        "service_6hgdk8a",
        "template_yifcb8q",
        {
          name: name,
          email: email,
          message: formMessage,
        }
      )
      .then((response) => {
        console.log("EmailJS Success:", response);
        setResult(`Your estimated rental insurance quote: $${quoteAmount}`);
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
          Rental Insurance Quote
        </h1>
        <div className="glass-card p-8 rounded-2xl w-full max-w-md space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div className="flex flex-col text-left">
              <label className="text-white font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col text-left">
                <label className="text-white font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
              <div className="flex flex-col text-left">
                <label className="text-white font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col text-left">
              <label className="text-white font-medium mb-1">Rental Location</label>
              <input
                type="text"
                placeholder="Enter Rental Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
            
            {/* Property Value */}
            <div className="flex flex-col text-left">
              <label className="text-white font-medium mb-1">Estimated Property Value</label>
              <input
                type="number"
                placeholder="Estimated Property Value ($)"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                className="input-field p-3 rounded-md border border-gray-600 bg-[#0B0F0E] text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="btn-matrix w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit Quote Request"}
            </Button>

            {/* Results */}
            {result && (
              <p className="text-matrix font-bold mt-4">{result}</p>
            )}

            {/* Confirmation */}
            {submitted && (
              <p className="text-matrix font-bold mt-4">
                Thank you! Your rental insurance quote request has been submitted.
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentalQuote;