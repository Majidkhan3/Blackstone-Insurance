"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What types of insurance does Blackstone Insurance Company offer?",
    answer:
      "We provide a wide range of insurance options including auto, home, renters, health, and life insurance to meet all your coverage needs.",
  },
  {
    question: "What makes Blackstone Insurance Company safe and trustworthy?",
    answer:
      "We partner only with licensed and top-rated insurers, use bank-level encryption for your data, and operate with complete transparency.",
  },
  {
    question: "How can I pay for my policy with Blackstone Insurance Company?",
    answer:
      "You can pay securely via credit card, debit card, or bank transfer. We also support automated recurring payments for your convenience.",
  },
  {
    question: "How long does it take to get a quote?",
    answer:
      "Most quotes are generated instantly online. In special cases, it may take up to 24 hours depending on your information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00A1FC]">
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
