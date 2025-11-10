import Card from "../common/Card";

function Features() {
  const features = [
    {
      title: "Organic Ingredients",
      description: "Pure botanical extracts for healthy, radiant skin.",
      image: "product1.jpg",
    },
    {
      title: "Dermatologist Approved",
      description: "Safe and effective formulas for all skin types.",
      image: "product2.jpg",
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Sustainably sourced, recyclable, and cruelty-free.",
      image: "product1.jpg",
    },
  ];

  return (
    <section id="features" className="py-20 bg-indigo-50 text-center">
      <h2 className="text-4xl font-bold text-indigo-800 mb-10">
        Why Choose LunaGrow
      </h2>
      <div className="grid md:grid-cols-3 gap-8 px-8">
        {features.map((f, index) => (
          <Card key={index} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  );
}

export default Features;