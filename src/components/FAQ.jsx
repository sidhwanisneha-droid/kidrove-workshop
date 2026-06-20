import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Do I need prior coding experience?",
      answer:
        "No. This workshop is beginner-friendly and designed for students aged 8–14 years.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes. All participants who complete the workshop will receive a certificate of participation.",
    },
    {
      question: "What device is required?",
      answer:
        "A laptop or desktop with a stable internet connection is recommended.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-2xl overflow-hidden">
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full text-left p-5 bg-gray-50 flex justify-between"
              >
                <span>{faq.question}</span>
                <span>{open === index ? "−" : "+"}</span>
              </button>

              {open === index && (
                <div className="p-5 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}