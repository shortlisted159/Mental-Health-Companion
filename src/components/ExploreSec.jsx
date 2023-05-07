import React from "react";
import "./ExploreSec.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./LandingPg";
import { productData, responsive } from "../Data/dataCarousel";
import { useState } from "react";
import ChatBot from "./ChatBot";
import Quiz from "./Quiz";

// const ExploreSec = () => {
//   return (
//     <div className="container">
//         ExploreSec</div>
//   )
// }

export default function ExploreSec() {
  const [isOpen, setIsOpen] = useState(false);
  // const [back, setBack] = useState(setIsOpen);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };
  const toggleQuiz = () => {
    setIsQuizOpen(!isQuizOpen);
  };
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      link={item.link}
      data={item.data}
    />
  ));

  return (
    <div className="ExploreSec">
      <div className={`ExploreSec ${isChatbotOpen ? "chatbot-open" : ""} ${isQuizOpen ? "chatbot-open" : ""}`}>
        <Carousel id="carousel_id" showDots={true} responsive={responsive}>
          {product}
        </Carousel>
      </div>
      {/* <button  onClick={() => setIsOpen(!isOpen)}>Toggle Chatbot</button>
     {isOpen && <ChatBot />}  */}
      {/* render chatbot component only if isOpen state is true */}

      {/*  */}

      <div>
        {isChatbotOpen && (
          <div className="chatbot">
            <ChatBot />
          </div>
        )}
        <button className = "buttons" onClick={() => setIsOpen(!isOpen && toggleChatbot)}>
          Chatbot
        </button>
        {isOpen && <ChatBot /> && toggleChatbot}


        {/*  */}
        {isQuizOpen && (
          <div className="chatbot">
            <Quiz />
          </div>
        )}
        <button className = "buttons"  onClick={() => setIsOpen(!isOpen && toggleQuiz)}>
          Questionnaire
        </button>
        {isOpen && <Quiz /> && toggleQuiz}
      </div>

    </div>
  );
}

// export default ExploreSec
