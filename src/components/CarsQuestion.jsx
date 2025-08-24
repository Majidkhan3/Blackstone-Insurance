"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What types of car insurance coverage are available in New York?",
    answer:
      "In New York, the available types of car insurance coverage include Personal Injury Protection (PIP), Liability Insurance, Uninsured/Underinsured Motorist Coverage, Collision Coverage, Comprehensive Coverage, GAP Insurance, Supplemental Spousal Liability, Increased Liability Limits, Optional Basic Economic Loss (OBEL), and Medical Payments (MedPay)",
  },
  {
    question: "How much coverage do i need to meet New York's state minimum requirements?",
    answer:
      "In New York, you must carry at least $25,000/$50,000 for bodily injury, $10,000 for property damage, $50,000 in Personal Injury Protection, and $25,000/$50,000 uninsured motorist coverage. These are the state minimum requirements to legally drive.",
  },
  {
    question: "What factors influence my car insurance premium?",
    answer:
      "Your car insurance premium is influenced by factors like your driving record, age, vehicle type, location, credit history, and coverage limits. Insurance companies also consider how often you drive and past claims history when calculating your rate.",
  },
  {
    question: "What is the difference between collision and comprehensive coverage?",
    answer:
      "Collision coverage pays for damage to your car if it’s involved in an accident with another vehicle or object. Comprehensive coverage, on the other hand, protects against non-collision events like theft, fire, vandalism, or natural disasters.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#12C855]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-black 
                      "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left text-lg font-semibold text-[#FFD700]"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#12C855]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#12C855]" />
              )}
            </button>

            {openIndex === index && (
              <div className="p-6 text-[#00A1FC] leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
