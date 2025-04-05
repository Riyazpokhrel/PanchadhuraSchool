import React from "react";

const EventCard = ({ image, description }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt="Event" className="w-full h-48 object-cover" />
    <div className="p-4">
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition ">
        Read More
      </button>
    </div>
  </div>
);

const EventsSection = () => {
  const events = [
    {
      image: "src/assets/tour.jpg",
      description: "sapiente, praesentium quod sunt asperiores...",
    },
    {
      image: "src/assets/schoolgate.jpg",
      description: "sapiente, praesentium quod sunt asperiores...",
    },
    {
      image: "src/assets/tour.jpg",
      description: "sapiente, praesentium quod sunt asperiores...",
    },
    {
      image: "src/assets/schoolgate.jpg",
      description: "sapiente, praesentium quod sunt asperiores...",
    },
    {
      image: "src/assets/teachers.jpg",
      description: "sapiente, praesentium quod sunt asperiores...",
    },
    {
      image: "src/assets/teachers.jpg",
      description: "sapiente, praesentium quod sunt asperiores...",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl font-bold  text-[#242565] mb-8 text-start">
          Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

// import React from "react";

// const Event = () => {
//   return (
//     <div>
//       <div className="pl-[140px] p-7">
//         <h2 className="text-3xl font-bold  text-[#242565] mb-8 text-start">
//           Events
//         </h2>
//       </div>
//       <div>
//         <div className="bg-[url('src/assets/foodfestivals.jpg'] bg-cover bg-center">
//           <div className="bg-opacity-50 p-8 rounded-lg text-center max-w-lg"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Event;
