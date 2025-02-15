import React from "react";

const InfoCard = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((card: any) => (
        <div
          key={card.id}
          className="flex flex-col items-center justify-center border-2 p-4 rounded-lg shadow hover:shadow-lg"
        >
          <div className="text-4xl text-blue-500 mb-4">{card.icon}</div>
          <h3 className="text-lg font-bold mb-2">{card.label}</h3>
          <p className="text-gray-600 text-center mb-4">{card.description}</p>
          <div className="text-2xl font-bold text-gray-800">
            {card.count.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
