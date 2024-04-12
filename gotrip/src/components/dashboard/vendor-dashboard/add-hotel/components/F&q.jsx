import { setFAQData } from '@/store/hotel/action';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const FAQForm = () => {
  const dispatch = useDispatch();
  const [faqs, setFaqs] = useState([
    { question: '', answer: '' }
  ]);

  const handleAddFAQ = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const handleFAQChange = (index, field, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field] = value;
    setFaqs(updatedFaqs);
  };

  const handleSubmit = () => {
    console.log(faqs); // Handle submission of FAQs data
    dispatch(setFAQData(faqs));
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-container">
          <div className="form-group">
            <label htmlFor={`question${index}`}>Question</label>
            <input
              type="text"
              className="form-control"
              id={`question${index}`}
              value={faq.question}
              onChange={(e) => handleFAQChange(index, 'question', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`answer${index}`}>Answer</label>
            <textarea
              className="form-control"
              id={`answer${index}`}
              rows="3"
              value={faq.answer}
              onChange={(e) => handleFAQChange(index, 'answer', e.target.value)}
              required
            ></textarea>
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary" onClick={handleAddFAQ}>Add FAQ</button>
          <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FAQForm;
