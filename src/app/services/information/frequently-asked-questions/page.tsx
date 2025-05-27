"use client";

import { generalFAQs } from "@/lib/constants/info/faqs";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function FrequentlyAskedQuestions() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Frequently Asked Questions</h1>
        <h5>Your questions answered, so you can focus on your journey</h5>
        <blockquote>
          "From booking to boarding, every detail was handled with care and
          professionalism. I felt supported every step of the way." – Sarah L.,
          Frequent Traveler
        </blockquote>
      </header>

      <div className="space-y-4">
        {generalFAQs.map((faq, index) => (
          <div
            key={index}
            className="shadow-md hover:shadow-lg border border-border rounded-lg transition-shadow duration-300 overflow-hidden"
          >
            <button
              className="flex justify-between items-center p-5 w-full font-medium text-left focus:outline-none"
              onClick={() => toggleQuestion(index)}
              aria-expanded={expandedIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3>{faq.question}</h3>
              <span className="text-primary">
                {expandedIndex === index ? (
                  <FaArrowUp className="inline" />
                ) : (
                  <FaArrowDown className="inline" />
                )}
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              aria-hidden={expandedIndex !== index}
            >
              <div className="p-5 border-t-2 border-tertiary">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
