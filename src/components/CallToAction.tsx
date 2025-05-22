
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-accent/90"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Own a Property? List It With Us!
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of property owners who trust HomeHarbor to connect them with potential buyers and tenants. 
            It's quick, easy, and effective!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-accent hover:bg-white/90"
            >
              List Your Property
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">10k+</p>
              <p className="text-white/80 text-sm">Active Listings</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-white/80 text-sm">Customer Support</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">50k+</p>
              <p className="text-white/80 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
