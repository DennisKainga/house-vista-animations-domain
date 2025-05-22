
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const agents = [
  {
    id: 1,
    name: "Sarah Kimani",
    position: "Senior Agent",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    properties: 24
  },
  {
    id: 2,
    name: "David Omondi",
    position: "Luxury Specialist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    properties: 18
  }
];

const AgentsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {agents.map((agent) => (
            <div key={agent.id} className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-80 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <p className="text-sm text-[#c27b43] uppercase tracking-wider mb-2">Our Team</p>
                <h3 className="text-2xl font-bold mb-2">{agent.name}</h3>
                <p className="text-gray-500 mb-4">{agent.position}</p>
                <p className="text-gray-700 mb-6">
                  Expert in the East African property market with a track record of successful transactions
                  and outstanding client satisfaction. Currently managing {agent.properties} premium properties.
                </p>
                <Button asChild variant="outline" className="border-[#c27b43] text-[#c27b43] hover:bg-[#c27b43]/10 w-fit">
                  <Link to={`/agents/${agent.id}`}>
                    View Profile
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
