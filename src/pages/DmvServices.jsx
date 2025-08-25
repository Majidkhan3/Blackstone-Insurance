// src/pages/DmvServices.jsx
"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Car, ClipboardCheck, ShieldCheck, FileText, IdCard, Truck, Wrench, MoreHorizontal, Phone, Calendar, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function DmvServices() {
  const services = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Registration Services",
      description: "Complete vehicle registration and renewal services",
      details: [
        "New vehicle registration",
        "Registration renewal",
        "Registration replacement",
        "Specialty and custom plates",
        "Registration fee calculations"
      ],
      requirements: ["Proof of ownership", "Insurance documentation", "Identification", "Payment for fees"],
      process: "Typically takes 15-30 minutes for in-person services"
    },
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: "Plate Surrender",
      description: "Properly surrender license plates you no longer need",
      details: [
        "Plate surrender for sold vehicles",
        "Plate return for cancelled insurance",
        "Temporary plate issuance",
        "Plate replacement services"
      ],
      requirements: ["Plates to surrender", "Identification", "Registration documents if available"],
      process: "Immediate processing with receipt provided"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Defensive Driving Courses",
      description: "Improve your skills and potentially reduce insurance rates",
      details: [
        "6-hour defensive driving course",
        "Online and in-person options",
        "Point reduction on license",
        "Insurance discount qualification"
      ],
      requirements: ["Valid driver's license", "Course completion within timeframe", "Final exam passing grade"],
      process: "Complete course and submit certificate to DMV and insurance provider"
    },
 
  ];

  const steps = [
    {
      number: "1-",
      title: "Submit Required Documents",
      description: "Gather and submit all necessary documentation for your service request.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      )
    },
    {
      number: "2-",
      title: "Wait for Processing & Verification",
      description: "Our team will process your request and verify all documentation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    },
    {
      number: "3-",
      title: "Receive Confirmation & Finalize",
      description: "Complete any remaining steps and receive confirmation of your service completion.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="w-full py-20 bg-gradient-to-b from-[#0B0B0B] to-[#111827] relative overflow-hidden text-white">
        {/* Decorative glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-5">
            DMV <span className="text-[#00A1FC]">Services</span>
          </h1>
          <div className="w-24 h-1 bg-[#00A1FC] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Complete vehicle and licensing services for all your motor vehicle needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full py-20 bg-gradient-to-b from-[#111827] to-[#0B0B0B] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1A1A1A] rounded-xl shadow-lg p-6 border border-gray-800 group hover:border-[#00A1FC] transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-[#00A1FC]/10 p-3 rounded-full mr-4">
                    <div className="text-[#00A1FC]">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-[#F4C538]">Services Include:</h4>
                  <ul className="space-y-1">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#00A1FC] mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-[#F4C538]">Requirements:</h4>
                  <ul className="space-y-1">
                    {service.requirements.map((req, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#00A1FC] mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-[#F4C538]">Process:</h4>
                  <p className="text-gray-300 text-sm">{service.process}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full py-20 bg-gradient-to-b from-[#0B0B0B] to-[#111827] relative overflow-hidden text-white">
        {/* Decorative glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#00A1FC]">Process</span> is as easy as <span className="text-[#F4C538]">1-2-3</span>
            </h2>
            <div className="w-24 h-1 bg-[#00A1FC] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our streamlined process makes it simple to complete your DMV services quickly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-[#1A1A1A] rounded-xl shadow-lg p-8 h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-800">
                  
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#00A1FC] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>

                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-lg bg-[#00A1FC]/10 flex items-center justify-center text-[#00A1FC] mb-6 mx-auto">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-center leading-tight text-[#F4C538]">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-1 bg-[#F4C538]/40">
                    <div className="absolute top-1/2 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F4C538] transform rotate-45 -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="w-full py-20 bg-gradient-to-b from-[#111827] to-[#0B0B0B] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Additional Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-sm border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <Clock className="mr-2 text-[#00A1FC]" /> Operating Hours
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-sm border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <MapPin className="mr-2 text-[#00A1FC]" /> Locations
                </h3>
                <p className="mb-4 text-gray-300">We have multiple offices in:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>NewYork</li>
                </ul>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full py-20 bg-gradient-to-b from-[#0B0B0B] to-[#111827] relative overflow-hidden text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Additional Assistance?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our customer service team is here to help you with any questions about our services or requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:+917-487-9110" className="flex items-center bg-[#00A1FC] hover:bg-[#0088D1] text-white py-3 px-6 rounded-md transition-colors">
              <Phone className="mr-2 w-5 h-5" /> Call Us: 917-487-9110
            </a>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}