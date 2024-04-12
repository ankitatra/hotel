import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Overview from "@/components/hotel-single/Overview";
import PopularFacilities from "@/components/hotel-single/PopularFacilities";
import ModalVideo from "react-modal-video";
import SidebarRight2 from "@/components/hotel-single/SidebarRight2";
import RatingBox from "@/components/hotel-single/RatingBox";
import PropertyHighlights2 from "@/components/hotel-single/PropertyHighlights2";

export default function GalleryTwo({ hotel }) {

  
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />
      <section className="pt-40">
        <div className="container">
          <div className="hotelSingleGrid">
            <div>
              <Gallery>
                <div className="galleryGrid -type-2">
                  <div className="galleryGrid__item relative d-flex justify-end">
                    <Item
                      original={hotel?.images[0].url}
                      thumbnail={hotel?.images[0].url}
                      width={660}
                      height={660}
                    >
                      {({ ref, open }) => (
                        <img
                          src={hotel?.images[0].url}
                          ref={ref}
                          onClick={open}
                          alt="image"
                          role="button"
                          className="rounded-4"
                        />
                      )}
                    </Item>
                    <div className="absolute px-20 py-20">
                      <button className="button -blue-1 size-40 rounded-full bg-white">
                        <i className="icon-heart text-16" />
                      </button>
                    </div>
                  </div>
               

                  <div className="galleryGrid__item">
                    <Item
                       original={hotel?.images[1].url}
                       thumbnail={hotel?.images[1].url}
                      width={450}
                      height={375}
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={hotel.images[1].url}
                          alt="image"
                          className="rounded-4"
                          role="button"
                        />
                      )}
                    </Item>
                  </div>
               

                  <div className="galleryGrid__item">
                    <Item
                      original={hotel?.images[2].url}
                      thumbnail={hotel?.images[2].url}
                      width={450}
                      height={375}
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={hotel.images[2].url}
                          alt="image"
                          className="rounded-4"
                          role="button"
                        />
                      )}
                    </Item>
                  </div>
          

                  <div className="galleryGrid__item relative d-flex justify-end items-end">
                    <img
                      src={hotel?.images[3].url}
                      alt="image"
                      className="rounded-4"
                    />
                    <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                      <Item
                        original={hotel?.images[3].url}
                        thumbnail={hotel?.images[3].url}
                        width={362}
                        height={302}
                      >
                        {({ ref, open }) => (
                          <div
                            className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                            ref={ref}
                            onClick={open}
                            role="button"
                          >
                            See All Photos
                          </div>
                        )}
                      </Item>
                    </div>
                  </div>
                
                </div>
              </Gallery>
              {/* End gallery grid */}

                  {/* <Gallery>
                  <div className="galleryGrid -type-2">
                  {hotel?.images?.map((image, index) => (
                     
                     <div className="galleryGrid__item relative d-flex justify-end">
                       <Item
                         original={image.url}
                         thumbnail={image.url}
                        //  width={660}
                        //  height={660}
                           width={itemDimensions[index].width}
                        height={itemDimensions[index].height}
                       >
                         {({ ref, open }) => (
                           <img
                             src={image.url}
                             ref={ref}
                             onClick={open}
                             alt="image"
                             role="button"
                             className="rounded-4"
                           />
                         )}
                       </Item>
                       <div className="absolute px-20 py-20">
                         <button className="button -blue-1 size-40 rounded-full bg-white">
                           <i className="icon-heart text-16" />
                         </button>
                       </div>
                     </div>
                    
                 ))}
                  </div>
             </Gallery> */}

              <div className="row justify-between items-end pt-40">
                <div className="col-auto">
                  <div className="row x-gap-20  items-center">
                    <div className="col-auto">
                      <h1 className="text-30 sm:text-25 fw-600">
                        {hotel?.name?.slice(0, 30)}
                      </h1>
                    </div>
                    {/* End .col */}
                    <div className="col-auto">
                      {/* <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" /> */}


                      {Array.from({ length: parseInt(hotel?.rating) }).fill(null).map((_, index) => (
                      <i key={index} className="icon-star text-10 text-yellow-1" />
                    ))}
                    </div>

                   
                  </div>
                  {/* End .row */}

                  <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                      <div className="d-flex items-center text-15 text-light-1">
                        <i className="icon-location-2 text-16 mr-5" />
                        {hotel?.location}
                      </div>
                    </div>
                    <div className="col-auto">
                      <button
                        data-x-click="mapFilter"
                        className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col */}

                <div className="col-auto">
                {hotel?.room?.map((slide, i) =>
                  slide.is_primary ? (
                  <div className="text-14 text-md-end">
                    From{" "}
                    <span className="text-22 text-dark-1 fw-500">
                    Rs.{slide?.one_night_price}
                    </span>
                  </div>):null)}
                  <a
                    href="#"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Select Room <div className="icon-arrow-top-right ml-15" />
                  </a>
                </div>

              
              </div>
            

              <div id="overview" className="row y-gap-40 pt-40 ">
                <div className="col-12">
                  <Overview hotel={hotel}/>
                </div>
                {/* End col-12 */}

                <div className="col-12">
                  <h3 className="text-22 fw-500 pt-40 border-top-light">
                    Most Popular Facilities
                  </h3>
                  <div className="row y-gap-10 pt-20">
                    <PopularFacilities  hotel={hotel}/>
                  </div>
                </div>
                {/* End .col-12  */}
              </div>
              {/* End .col-12  Overview */}
            </div>
            {/* End left hotel galler  */}

            <div>
              <SidebarRight2 />
              <RatingBox hotel={hotel} />
              <PropertyHighlights2 hotel={hotel} />
            </div>
            {/* End right content */}
          </div>
        </div>
        {/* End .container */}
      </section>
    </>
  );
}
