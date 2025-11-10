function Card({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
      <h3 className="text-2xl font-bold text-indigo-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;