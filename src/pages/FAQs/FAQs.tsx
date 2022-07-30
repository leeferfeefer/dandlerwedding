import React from 'react';
import '../../App.css';
import './FAQs.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from "react-router-dom";

const faqs = [{
  question: "Can I bring my kids?",
  answer: "In order to allow all guests, including parents, a night of relaxation, we have chosen for our wedding to be an adult only occasion.",
}, {
  question: "Can I bring a guest?",
  answer: "Due to space limitations at our venue, only the guests specified on each invitation will be able to attend. If you have any questions, please contact us.",
}, {
  question: "What should I wear?",
  answer: "We recommend cocktail attire - jackets and pants for men, dresses or jumpsuits for women. The ceremony and reception will be primarily indoors, however cocktail hour will be partially in the courtyard. The bar and catering will also be located outside, so please dress accordingly for the weather.",
}, {
  question: "Where should I park?",
  answer: `We highly recommend using Uber or Lyft to ensure safe celebrations. If that is not an option, please see parking details on the [].`,
  link: true,
}, {
  question: "I have dietary restrictions, will you be able to accommodate me?",
  answer: "Our catering offerings will be able to accommodate gluten free, dairy free, and vegetarian needs without special request. Please specify any restrictions or allergies in your RSVP.",
}, {
  question: "Still have questions?",
  answer: "Contact Chandler & Dan.",
}];

type FAQProps = {
  faq: {question: string, answer: string, link?: boolean};
  index: number;
};

const FAQ = (props: FAQProps) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const onLinkClicked = () => {
    navigate("/travel");
  };

  let answer = props.faq.answer;
  let answerArr;
  if (props.faq.link) {
    answerArr = answer.split("[]");
  }

  return (
    <div className='faq-container'>
      <div className='faq-question' style={isMobile ? {fontSize: "40px"} : undefined}>
        { props.faq.question }
      </div>  
      <div className='faq-answer'>
        { props.faq.link ? (
          <>
            { answerArr?.[0] } 
            <a onClick={onLinkClicked} href="">Travel Page</a>
            { answerArr?.[1] } 
          </>        
        ) : answer }
      </div>
    </div>
  );
};

type FAQsProps = {};

export const FAQs = (props: FAQsProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container">
      <NavBar/>
      <div className='faqs-container' style={{ marginTop: isMobile ? "44px" : undefined}}>
        <div className='faqs-header' style={ isMobile ? { fontSize: "75px", marginTop: "40px"} : undefined}>
          Frequently Asked Questions
        </div>
        <div className='all-faq-container'>
          {faqs.map((faq, index) => <FAQ faq={faq} index={index}/>)}
        </div>
      </div>
    </div>
  );
}