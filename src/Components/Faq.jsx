import React, { useState } from "react";
import "../index.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "How to create an account?",
      answer:
        "HyperDev is a dynamic web development agency dedicated to helping businesses and individuals establish a powerful online presence. HyperDev specializes in creating high-quality, custom websites that not only look stunning but also function seamlessly.",
    },
    {
      question: "How does the website development process work at HyperDev?",
      answer: "We follow a structured process: consultation, planning, design, development, testing, launch, and maintenance.",
    },
    {
      question: "Why should I choose HyperDev over other web development agencies?",
      answer: "We provide personalized service, expert quality, reliable delivery, and ongoing support to ensure client satisfaction.",
    },
    {
      question: "How long does it take to develop a website with HyperDev?",
      answer: "The timeline varies by project complexity, typically ranging from 2 to 4 weeks. We provide a detailed schedule after the initial consultation.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="block justify-center items-center text-center p-10">
      <h1 className="text-4xl">
        Frequently Asked <span className="text-[#37C8AE]">Questions</span>
      </h1>
      {questions.map((item, index) => (
        <div key={index} className="text-2xl p-3 border-b-2">
          <div
            className="faq-question flex justify-between items-center md:h-[10vh] p-10 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <span>{item.question}</span>
            <span>{openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </div>
          {openIndex === index && (
            <div className="text-xl text-[#9DA4AE] p-4">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
