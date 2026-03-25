import ServiceCard from "./ServiceCard";

const cardData = [
  {
    plan: "beginner",
    price: 200,
    min: "3 Users",
    max: "6 Users",
    duration: 1,
  },
  // {
  //   plan: "amateur",
  //   price: 220,
  //   min: "5 Users",
  //   max: "7 Users",
  //   duration: 2,
  // },
  // {
  //   plan: "intermediate",
  //   price: 250,
  //   min: "8 Users",
  //   max: "10 Users",
  //   duration: 3,
  // },
  // {
  //   plan: "professional",
  //   price: 300,
  //   min: "12 Users",
  //   max: "15 Users",
  //   duration: 5,
  // },
  // {
  //   plan: "expert",
  //   price: 500,
  //   min: "20 Users",
  //   max: "60 Users",
  //   duration: 12,
  // },
];

const Sevieces = () => {
  return (
    <div className="my-7 px-6">
      <h2 className="text-5xl font-bold text-center">Services</h2>
      <div className="my-10 flex flex-wrap gap-10">
        {cardData.map((val, i) => (
          <ServiceCard key={i} priceCard={val} />
        ))}
      </div>
    </div>
  );
};

export default Sevieces;

()=>(
 0
)
