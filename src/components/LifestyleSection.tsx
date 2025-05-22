
import { Link } from "react-router-dom";

const lifestyleCategories = [
  {
    id: "urban",
    title: "Urban Living",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "suburban",
    title: "Suburban Homes",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "waterfront",
    title: "Waterfront Properties",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "luxury",
    title: "Luxury Living",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "countryside",
    title: "Countryside Retreats",
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "modern",
    title: "Modern Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const LifestyleSection = () => {
  return (
    <section className="py-20 bg-[#102341] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose your lifestyle
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifestyleCategories.map((category) => (
            <Link 
              to={`/lifestyle/${category.id}`} 
              key={category.id}
              className="relative group overflow-hidden rounded-lg h-64"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <div className="w-10 h-0.5 bg-[#c27b43] mt-2 mb-2 transform origin-left transition-all duration-300 group-hover:w-20"></div>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">Discover properties</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
