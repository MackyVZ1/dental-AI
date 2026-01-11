"use client";

import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Featuresection from "./Featuresection";
import Howitworkssection from "./Howitworkssection";
import CTAsection from "./CTAsection";
import Footer from "./Footer";

export default function DentalAILanding() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Herosection />

      {/* Features Section */}
      <Featuresection />

      {/* How It Works */}
      <Howitworkssection />

      {/* CTA Section */}
      <CTAsection />

      {/* Footer */}
      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
}
