import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { 
  Sprout, 
  TrendingDown, 
  Calendar, 
  Percent, 
  UserCheck, 
  ShoppingBag, 
  CheckCircle2, 
  Truck, 
  Wallet,
  Building2,
  Store,
  Layers,
  ArrowRight,
  Menu
} from "lucide-react";
import { Link } from "react-router";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sprout className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">AgriFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">How It Works</a>
              <a href="#market" className="text-gray-700 hover:text-primary transition-colors">Market</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <Link to="/mobile">
                <Button>Get Started</Button>
              </Link>
            </div>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Finance That <span className="text-primary">Understands Farming</span>
              </h1>
              <p className="text-xl text-gray-600">
                Buy inputs at sowing, pay after harvest. No collateral. No hassle. Just trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/mobile/login">
                  <Button size="lg" className="h-14 px-8 text-lg">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-primary/40 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-primary/60 border-2 border-white"></div>
                </div>
                <p className="text-sm text-gray-600">Trusted by <span className="font-semibold text-primary">10,000+</span> farmers</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1627829382469-f4bce7df99ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBzbWlsaW5nJTIwZmllbGRzfGVufDF8fHx8MTc3NTUwNDUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Farmer in field"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Farmer's Challenge</h2>
            <p className="text-xl text-gray-600">Understanding the real problems on the ground</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-primary transition-colors">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <TrendingDown className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Money at Sowing</h3>
              <p className="text-gray-600">Farmers need ₹50,000-₹1,00,000 for seeds, fertilizers, and labor before planting</p>
            </Card>
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-primary transition-colors">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Income After 3-6 Months</h3>
              <p className="text-gray-600">Harvest only happens 3-6 months after sowing. No income until then.</p>
            </Card>
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-primary transition-colors">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Percent className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">High-Interest Loans</h3>
              <p className="text-gray-600">Traditional lenders charge 24-60% interest, pushing farmers into debt traps</p>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-destructive/10 rounded-xl px-8 py-4">
              <p className="text-2xl font-bold text-destructive">40% of farmers want to leave farming</p>
              <p className="text-gray-600 mt-1">Due to financial stress and debt burden</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-xl text-gray-600">Buy now, pay after harvest with NBFC-backed financing</p>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-accent/50 rounded-3xl p-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-lg text-gray-700 mb-12">
                AgriFlow enables farmers to purchase seeds, fertilizers, and inputs at sowing time and repay after harvest. 
                We partner with NBFCs and dealers to provide seamless credit access.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-3">
                    <UserCheck className="w-10 h-10 text-white" />
                  </div>
                  <span className="font-semibold">Farmer</span>
                </div>
                <ArrowRight className="w-8 h-8 text-primary" />
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-3">
                    <Sprout className="w-10 h-10 text-white" />
                  </div>
                  <span className="font-semibold">AgriFlow</span>
                </div>
                <ArrowRight className="w-8 h-8 text-primary" />
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-3">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <span className="font-semibold">NBFC</span>
                </div>
                <ArrowRight className="w-8 h-8 text-primary" />
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-3">
                    <Store className="w-10 h-10 text-white" />
                  </div>
                  <span className="font-semibold">Dealer</span>
                </div>
                <ArrowRight className="w-8 h-8 text-primary" />
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-3">
                    <ShoppingBag className="w-10 h-10 text-white" />
                  </div>
                  <span className="font-semibold">Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Five simple steps to financial freedom</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: UserCheck, title: "Register", desc: "Sign up with your mobile number" },
              { icon: Sprout, title: "Select Crop", desc: "Choose your crop and package" },
              { icon: CheckCircle2, title: "Credit Approval", desc: "Get instant approval from NBFC" },
              { icon: Truck, title: "Delivery", desc: "Products delivered in 2 days" },
              { icon: Wallet, title: "Repayment", desc: "Pay after harvest via UPI/AEPS" },
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 bg-white text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backbone Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Ecosystem</h2>
            <p className="text-xl text-gray-600 mb-3">Powered by trusted partners</p>
            <p className="text-lg text-primary font-semibold">We are not a lender, we are an enabler</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">NBFCs</h3>
              <p className="text-gray-700">Registered Non-Banking Financial Companies provide the loans and credit facilities</p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                <Store className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dealers</h3>
              <p className="text-gray-700">Trusted local dealers deliver quality seeds, fertilizers, and agricultural inputs</p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">AgriFlow</h3>
              <p className="text-gray-700">We connect farmers, NBFCs, and dealers on a single seamless platform</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section id="market" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Opportunity</h2>
            <p className="text-xl text-primary-foreground/80">A massive, underserved market</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">86%</div>
              <p className="text-lg text-primary-foreground/80">Small & Marginal Farmers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">₹1.5-2L Cr</div>
              <p className="text-lg text-primary-foreground/80">Agricultural Credit Gap</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$50B+</div>
              <p className="text-lg text-primary-foreground/80">Agri Input Market Size</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Your Journey Today</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of farmers who are building a better future</p>
          <Link to="/mobile/login">
            <Button size="lg" className="h-16 px-12 text-xl">
              Get Started Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sprout className="w-8 h-8" />
                <span className="text-xl font-bold">AgriFlow</span>
              </div>
              <p className="text-gray-400">Empowering farmers with accessible credit</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>How It Works</li>
                <li>For Farmers</li>
                <li>For Dealers</li>
                <li>For NBFCs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AgriFlow. All rights reserved. | AgriFlow is a technology platform and not a lender.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
