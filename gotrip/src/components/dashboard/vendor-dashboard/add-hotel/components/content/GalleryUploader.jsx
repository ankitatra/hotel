// import { useState } from "react";

// const GalleryUploader = ({ onSaveImages }) => {
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState("");

//   const handleFileUpload = (event) => {
//     const fileList = event.target.files;
//     const newImages = [];

//     for (let i = 0; i < fileList.length; i++) {
//       const file = fileList[i];
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         newImages.push(reader.result);
//         if (newImages.length === fileList.length) {
//           setImages([...images, ...newImages]);
//           setError("");
//         }
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newImages = [...images];
//     newImages.splice(index, 1);
//     setImages(newImages);
//   };

//   const handleSaveImages = () => {
//     onSaveImages(images);
//   };

//   return (
//     <div className="row x-gap-20 y-gap-20 pt-15">
//       <div className="col-auto">
//         <div className="w-200">
//           <label htmlFor="uploadGallery" className="d-flex ratio ratio-1:1">
//             <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
//               <div className="icon-upload-file text-40 text-blue-1 mb-10" />
//               <div className="text-blue-1 fw-500">Upload Images</div>
//             </div>
//           </label>
//           <input
//             type="file"
//             id="uploadGallery"
//             multiple
//             accept="image/*"
//             className="d-none"
//             onChange={handleFileUpload}
//           />
//           <div className="text-start mt-10 text-14 text-light-1">
//             Any image format is allowed.
//           </div>
//         </div>
//       </div>
//       {/* End uploader field */}

//       {images.map((image, index) => (
//         <div className="col-auto" key={index}>
//           <div className="d-flex ratio ratio-1:1 w-200">
//             <img src={image} alt="image" className="img-ratio rounded-4" />
//             <div
//               className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
//               onClick={() => handleRemoveImage(index)}
//             >
//               <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
//                 <i className="icon-trash text-16" />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {error && <div className="col-12 mb-10  text-red-1">{error}</div>}

//       <div className="col-12 mt-10">
//         <button
//           type="button"
//           className="button py-20 -dark-1 bg-blue-1 text-white w-100"
//           onClick={handleSaveImages}
//         >
//           Save Images
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GalleryUploader;



// import { useEffect, useState } from "react";

// const GalleryUploader = ({ onSaveImages,numRooms }) => {
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState("");

// console.log(numRooms,"rommnum")
//   useEffect(() => {
//     setImages(()=>[]);
//   }, [numRooms]);

//   const handleFileUpload = async (event) => {
//     const fileList = event.target.files;
//     const newImages = [];
//      console.log("ffhjdsbhjsbchdbc")
//     for (let i = 0; i < fileList.length; i++) {
//       const file = fileList[i];
//       const reader = new FileReader();

//       reader.onloadend = async () => {
//         try {
//           const formData = new FormData();
//           formData.append("file", file);
//           formData.append("upload_preset", "hotelimages"); // Replace with your upload preset

//           // Hardcoded Cloudinary upload URL
//           const response = await fetch(
//             "https://api.cloudinary.com/v1_1/dlrgh9gam/image/upload",
//             {
//               method: "POST",
//               body: formData,
//             }
//           );

//           const data = await response.json();
//           const imageUrl = data.url;

//           onSaveImages(imageUrl);

//           newImages.push(imageUrl);
//           console.log("images1",images)
//           console.log("newimages1",newImages)
//           console.log("filelist1",fileList)
//           if (newImages.length === fileList.length) {
//             console.log("true")
//             setImages([...images, ...newImages]);
//             setError("");
//           }
//           console.log("images2",images)
//           console.log("newimages2",newImages)
//           console.log("filelist2",fileList)
//         } catch (error) {
//           setError("Failed to upload one or more images.");
//         }
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newImages = [...images];
//     newImages.splice(index, 1);
//     setImages(newImages);
//   };

//   const handleSaveImages = () => {
//     onSaveImages([...images]);
//     console.log("hhuhhu")
//   };

//   return (
//     <div className="row x-gap-20 y-gap-20 pt-15">
//     <div className="col-auto">
//       <div className="w-200">
//         <label htmlFor="uploadGallery" className="d-flex ratio ratio-1:1">
//           <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
//             <div className="icon-upload-file text-40 text-blue-1 mb-10" />
//             <div className="text-blue-1 fw-500">Upload Images</div>
//           </div>
//         </label>
//         <input
//           type="file"
//           id="uploadGallery"
//           multiple
//           accept="image/*"
//           className="d-none"
//           onChange={handleFileUpload}
//         />
//         <div className="text-start mt-10 text-14 text-light-1">
//           Any image format is allowed.
//         </div>
//       </div>
//     </div>
//     {/* End uploader field */}

//     {images.map((image, index) => (
//       <div className="col-auto" key={index}>
//         <div className="d-flex ratio ratio-1:1 w-200">
//           <img src={image} alt="image" className="img-ratio rounded-4" />
//           <div
//             className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
//             onClick={() => handleRemoveImage(index)}
//           >
//             <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
//               <i className="icon-trash text-16" />
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}

//     {error && <div className="col-12 mb-10  text-red-1">{error}</div>}

//     <div className="col-12 mt-10">
//       <button
//         type="button"
//         className="button py-20 -dark-1 bg-blue-1 text-white w-100"
//         onClick={handleSaveImages}
//       >
//         Save Images
//       </button>
//     </div>
//   </div>
//   );
// };

// export default GalleryUploader;


import { useEffect, useState } from "react";

const GalleryUploader = ({ onSaveImages, numRooms, galleryKey, }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setImages([]);
  }, [numRooms, galleryKey]);

  const handleFileUpload = async (event) => {
    const fileList = event.target.files;
    const newImages = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onloadend = async () => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "hotelimages"); // Replace with your upload preset

          // Hardcoded Cloudinary upload URL
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dlrgh9gam/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          const data = await response.json();
          const imageUrl = data.url;

          onSaveImages(imageUrl);

          newImages.push(imageUrl);

          if (newImages.length === fileList.length) {
            setImages([...images, ...newImages]);
            setError("");
          }
        } catch (error) {
          setError("Failed to upload one or more images.");
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSaveImages = () => {
    console.log("Saving images:", images);
    // onSaveImages([...images]);
    onSaveImages(galleryKey, images); 
  
  };

  

 

  return (
    <div className="row x-gap-20 y-gap-20 pt-15">
      <div className="col-auto">
        <div className="w-200">
          <label htmlFor={`uploadGallery-${galleryKey}`} className="d-flex ratio ratio-1:1">
            <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
              <div className="icon-upload-file text-40 text-blue-1 mb-10" />
              <div className="text-blue-1 fw-500">Upload Images</div>
            </div>
          </label>
          <input
            type="file"
            id={`uploadGallery-${galleryKey}`}
            multiple
            accept="image/*"
            className="d-none"
            onChange={handleFileUpload}
          />
          <div className="text-start mt-10 text-14 text-light-1">
            Any image format is allowed.
          </div>
        </div>
      </div>
      {/* End uploader field */}

      {images.map((image, index) => (
        <div className="col-auto" key={index}>
          <div className="d-flex ratio ratio-1:1 w-200">
            <img src={image} alt="image" className="img-ratio rounded-4" />
            <div
              className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
              onClick={() => handleRemoveImage(index)}
            >
              <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                <i className="icon-trash text-16" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {error && <div className="col-12 mb-10 text-red-1">{error}</div>}

      <div className="col-12 mt-10">
        <button
          type="button"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          onClick={handleSaveImages}
        >
          Save Images
        </button>
      </div>
    </div>
  );
};

export default GalleryUploader;
