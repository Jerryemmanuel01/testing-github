
const ServiceCard = ({priceCard}) => {
    console.log(priceCard)
  return (
    <div className="shadow-xl w-[400px] rounded-xl border-2 border-gray-300 space-y-4 text-center p-5">
      <h2 className="text-xl font-bold">{priceCard.plan}</h2>
      <h2 className="text-xl">
        <span className="font-bold text-green-600">{priceCard.price} </span> / month
      </h2>
      <h4 className="">
        Min. Users: <span className="font-bold">{priceCard.min}</span>
      </h4>
      <h4 className="">
        Max. Users: <span className="font-bold">{priceCard.max}</span>
      </h4>
      <h4 className="">
        Duration: <span className="font-bold">{priceCard.duration}</span>
      </h4>
    </div>
  );
}

export default ServiceCard