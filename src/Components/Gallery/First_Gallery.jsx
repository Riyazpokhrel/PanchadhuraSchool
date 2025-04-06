import React from "react";

const First_Gallery = () => {
  const GalleryAlbum = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const images = [
      "src/assets/teachers.jpg",
      "src/assets/tour.jpg",
      "src/assets/school.jpg",
      "src/assets/program.jpg",
      "src/assets/myimage.jpg",
      "src/assets/gate.jpg",
      "src/assets/collage.jpg",
      "src/assets/teachers.jpg",
      "src/assets/teachers.jpg",
    ];

    const openModal = (src) => {
      setCurrentImage(src);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setCurrentImage("");
    };

    return (
      <>
        <div>
          <div className="p-5 bg-gray-100 min-h-screen">
            <h1 className="text-center text-3xl font-semibold mb-8">Gallery</h1>

            {/* Image Gallery */}
            <div className="max-w-screen-lg mx-auto columns-3 gap-4 ">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full rounded-md mb-4"
                  />
                </div>
              ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 ">
                <span
                  className="absolute top-5 right-10 text-white text-5xl cursor-pointer"
                  onClick={closeModal}
                >
                  &times;
                </span>
                <img
                  src={currentImage}
                  alt="Modal Content"
                  className="max-w-5xl w-4/5"
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  };
};

export default First_Gallery;
