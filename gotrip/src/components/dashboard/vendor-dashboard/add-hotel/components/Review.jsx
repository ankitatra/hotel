// import React, { useState } from 'react';
// import ContentGalleryUploader from './content/ContentGallaery';

// const HotelReviews = () => {
//   const [reviews, setReviews] = useState([{ review: '', username: '', profile: '' }]);

//   const handleAddReview = () => {
//     setReviews([...reviews, { review: '', username: '', profile: '' }]);
//   };

//   const handleReviewChange = (index, field, value) => {
//     const updatedReviews = [...reviews];
//     updatedReviews[index][field] = value;
//     setReviews(updatedReviews);
//   };
//   const handleSaveImages = (images) => {
//     console.log("here",images)
//     if (Array.isArray(images)) {
//       setFormData(prevData => ({
//         ...prevData,
//         images: images.map(image => ({ url: image, mediaType: "image" }))
//       }));
//     } else {
//       console.error("Images should be an array.");
//     }
//   };

//   return (
//     <div>
//       <h3>Add Hotel Reviews</h3>
//       {reviews.map((review, index) => (
//         <div key={index} className="row mb-3">
//           <div className="col-md-4">
//             <input
//               type="text"
//               value={review.review}
//               placeholder="Review Text"
//               onChange={(e) => handleReviewChange(index, 'review', e.target.value)}
//               style={{ border: '1px solid #333'  }}
//             />
//           </div>
//           <div className="col-md-4">
//             <input
//               type="text"
//               value={review.username}
//               placeholder="Username"
//               style={{ border: '1px solid #333'  }}
//               onChange={(e) => handleReviewChange(index, 'username', e.target.value)}
//             />
//           </div>
//           <div className="col-md-4">
//           <ContentGalleryUploader onSaveImagescontent={handleSaveImages}  />
//             <input
//               type="text"
//               value={review.profile}
//               placeholder="User Profile"
//               onChange={(e) => handleReviewChange(index, 'profile', e.target.value)}
//             />
//           </div>
//         </div>
//       ))}
//       <button className="btn btn-primary" onClick={handleAddReview}>Add Review</button>
//     </div>
//   );
// };

// export default HotelReviews;



// import React, { useState } from 'react';
// import ContentGalleryUploader from './content/ContentGallaery';

// const HotelReviews = () => {
//   const [reviews, setReviews] = useState([{ review: '', username: '', profile: '' }]);

//   const handleAddReview = () => {
//     setReviews([...reviews, { review: '', username: '', profile: '' }]);
//   };

//   const handleReviewChange = (index, field, value) => {
//     const updatedReviews = [...reviews];
//     updatedReviews[index][field] = value;
//     setReviews(updatedReviews);
//   };

//   const handleSaveImages = (images, index) => {
//     const updatedReviews = [...reviews];
//     updatedReviews[index].profile = images[0]; // Assuming images is an array of image URLs
//     setReviews(updatedReviews);
//   };

//   const handleSaveReviews = () => {
//     console.log("Reviews:", reviews);
//     // Here you can perform any further actions with the reviews, such as saving them to a database
//   };

//   return (
//     <div>
//       <h3>Add Hotel Reviews</h3>
//       {reviews.map((review, index) => (
//         <div key={index} className="row mb-3">
//           <div className="col-md-4">
//             <input
//               type="text"
//               value={review.review}
//               placeholder="Review Text"
//               onChange={(e) => handleReviewChange(index, 'review', e.target.value)}
//               style={{ border: '1px solid #333'  }}
//             />
//           </div>
//           <div className="col-md-4">
//             <input
//               type="text"
//               value={review.username}
//               placeholder="Username"
//               style={{ border: '1px solid #333'  }}
//               onChange={(e) => handleReviewChange(index, 'username', e.target.value)}
//             />
//           </div>
//           <div className="col-md-4">
//             <ContentGalleryUploader onSaveImagescontent={(images) => handleSaveImages(images, index)} />
//             {/* Assume ContentGalleryUploader component uploads images and passes them to onSaveImagescontent */}
//           </div>
//         </div>
//       ))}
//       <button className="btn btn-primary" onClick={handleAddReview}>Add Review</button>
//       <button className="btn btn-primary" onClick={handleSaveReviews}>Save Reviews</button>
//     </div>
//   );
// };

// export default HotelReviews;



import React, { useState } from 'react';
import ContentGalleryUploader from './content/ContentGallaery';

const HotelReviews = ({ onSaveReviewsData }) => { // Destructure onSaveReviewsData from props
  const [reviews, setReviews] = useState([{ review: '', username: '', profile: '' }]);

  const handleReviewChange = (index, field, value) => {
    const updatedReviews = [...reviews];
    updatedReviews[index][field] = value;
    setReviews(updatedReviews);
    onSaveReviewsData(updatedReviews); // Call the function passed from the parent with the updated reviews data
  };

  const handleSaveImages = (images, index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].profile = images[0]; // Assuming images is an array of image URLs
    setReviews(updatedReviews);
    onSaveReviewsData(updatedReviews); // Call the function passed from the parent with the updated reviews data
  };

  return (
    <div>
      <h3>Add Hotel Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="row mb-3">
          <div className="col-md-4">
            <input
              type="text"
              value={review.review}
              placeholder="Review Text"
              onChange={(e) => handleReviewChange(index, 'review', e.target.value)}
              style={{ border: '1px solid #333'  }}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              value={review.username}
              placeholder="Username"
              style={{ border: '1px solid #333'  }}
              onChange={(e) => handleReviewChange(index, 'username', e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <ContentGalleryUploader onSaveImagescontent={(images) => handleSaveImages(images, index)} />
            {/* Assume ContentGalleryUploader component uploads images and passes them to onSaveImagescontent */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelReviews;

