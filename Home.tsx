import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, AlertCircle, TrendingUp, Zap, Shield, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

// Initialize Intercom live chat
if (typeof window !== 'undefined') {
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "YOUR_INTERCOM_APP_ID"
  };
  
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/YOUR_INTERCOM_APP_ID';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
}

/**
 * Grant Ghost Landing Page - Conversion Optimized
 * 
 * Design Philosophy: "Authority + Urgency + Trust"
 * 
 * Official Color Palette:
 * - Deep Navy (#1a3a5c) - Authority, trust
 * - Warm Gold (#c9a961) - Prestige, action
 * - Steel Gray (#4a5d6f) - Professional
 * - Cream (#f4f1ea) - Approachable background
 */

export default function Home() {
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [daysLeft, setDaysLeft] = useState(17);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f4f1ea' }}>
      {/* Official Header */}
      <nav 
        className="sticky top-0 z-50 border-b-4"
        style={{
          background: 'linear-gradient(180deg, #1a3a5c 0%, #4a5d6f 100%)',
          borderBottomColor: '#c9a961'
        }}
      >
        <div className="container flex items-center justify-between h-20 px-4 md:px-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663275282202/KcIZSRVfjZAHbxPb.webp" 
              alt="Grant Ghost Official Seal" 
              className="w-16 h-16"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))' }}
            />
            <div>
              <h1 
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                Grant Ghost LLC
              </h1>
              <p 
                className="text-sm italic text-yellow-100"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif", letterSpacing: '0.12em' }}
              >
                Official Fiduciary Services
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#pricing" className="text-white hover:text-yellow-300 font-semibold text-sm uppercase tracking-wider transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-white hover:text-yellow-300 font-semibold text-sm uppercase tracking-wider transition-colors">
              FAQ
            </a>
            <button 
              onClick={() => navigate("/checkout")}
              className="px-8 py-3 font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-md"
              style={{
                background: '#c9a961',
                color: '#2b2b2b',
                border: '3px solid #c9a961'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(201, 169, 97, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#c9a961';
                e.currentTarget.style.color = '#2b2b2b';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a3a5c 0%, #4a5d6f 100%)',
          color: 'white'
        }}
      >
        <div className="container px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 rounded-full" style={{ background: 'rgba(201, 169, 97, 0.2)', border: '1px solid #c9a961' }}>
              <span className="text-sm font-semibold" style={{ color: '#c9a961' }}>⏰ NEXT USDA DEADLINE: {daysLeft} DAYS LEFT</span>
            </div>
            
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Stop Leaving Money on the Table
            </h1>
            
            <p className="text-xl mb-8 opacity-95 leading-relaxed">
              Grant Ghost finds the grants you actually qualify for—and only tells you about the ones with tight deadlines. 1–4 alerts per month. 92%+ match confidence. No noise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => navigate("/checkout")}
                className="px-8 py-4 font-bold uppercase tracking-widest text-lg transition-all duration-300 rounded-md"
                style={{
                  background: '#c9a961',
                  color: '#2b2b2b',
                  border: '3px solid #c9a961'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#c9a961';
                  e.currentTarget.style.color = '#2b2b2b';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Start Your Free Trial
              </button>
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 font-bold uppercase tracking-widest text-lg transition-all duration-300 rounded-md"
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '3px solid white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                See How It Works
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm opacity-90">
              <CheckCircle2 className="w-5 h-5" style={{ color: '#c9a961' }} />
              <span>No credit card required • Cancel anytime</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div 
              className="rounded-lg p-8 shadow-2xl"
              style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded" style={{ background: 'rgba(201, 169, 97, 0.2)' }}>
                  <div>
                    <p className="text-sm opacity-75">USDA Rural Development</p>
                    <p className="text-2xl font-bold">$50,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-75">17 days</p>
                    <p className="text-lg font-bold" style={{ color: '#c9a961' }}>92% match</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded" style={{ background: 'rgba(201, 169, 97, 0.2)' }}>
                  <div>
                    <p className="text-sm opacity-75">Small Business Innovation</p>
                    <p className="text-2xl font-bold">$150,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-75">23 days</p>
                    <p className="text-lg font-bold" style={{ color: '#c9a961' }}>89% match</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded" style={{ background: 'rgba(201, 169, 97, 0.2)' }}>
                  <div>
                    <p className="text-sm opacity-75">Community Development</p>
                    <p className="text-2xl font-bold">$75,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-75">45 days</p>
                    <p className="text-lg font-bold" style={{ color: '#c9a961' }}>76% match</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1a3a5c', color: 'white' }}>
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#c9a961' }}>$127K</div>
              <p className="text-sm md:text-base opacity-90">Average grants found per customer, year one</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#c9a961' }}>92%</div>
              <p className="text-sm md:text-base opacity-90">Match accuracy. That's how many lead to funded apps.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#c9a961' }}>10K+</div>
              <p className="text-sm md:text-base opacity-90">Grants scanned every month across all databases</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#c9a961' }}>50+</div>
              <p className="text-sm md:text-base opacity-90">Federal, state, and local grant databases</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f4f1ea' }}>
        <div className="container px-4 md:px-8">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif", color: '#1a3a5c' }}
          >
            Real Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-l-4" style={{ borderLeftColor: '#c9a961' }}>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#1a3a5c' }}>
                "Found $50K in USDA Rural Development grants. I've been running this farm for 12 years and never knew those existed. Saved me months of digging through PDFs."
              </p>
              <div>
                <p className="font-bold" style={{ color: '#1a3a5c' }}>Mike Chen</p>
                <p className="text-sm text-gray-600">Farm Supply Owner, Montana</p>
              </div>
            </Card>
            <Card className="p-8 border-l-4" style={{ borderLeftColor: '#c9a961' }}>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#1a3a5c' }}>
                "Got $75K in community development funding. The alerts actually made sense—no spam, no dead ends. First time I've gotten real value from a grant search tool."
              </p>
              <div>
                <p className="font-bold" style={{ color: '#1a3a5c' }}>Sarah Rodriguez</p>
                <p className="text-sm text-gray-600">Nonprofit Director, New Mexico</p>
              </div>
            </Card>
            <Card className="p-8 border-l-4" style={{ borderLeftColor: '#c9a961' }}>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#1a3a5c' }}>
                "Three alerts in two months. Applied for all three. Got funded on two of them. That's $150K we wouldn't have had. Worth every penny."
              </p>
              <div>
                <p className="font-bold" style={{ color: '#1a3a5c' }}>James Wilson</p>
                <p className="text-sm text-gray-600">Manufacturing, Ohio</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Interface Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f4f1ea' }}>
        <div className="container px-4 md:px-8">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif", color: '#1a3a5c' }}
          >
            See Grant Ghost in Action
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Your dashboard shows only the grants that matter—high match scores, urgent deadlines, and real money.
          </p>
          <img 
            src="/home/ubuntu/grant-ghost-alert-interface.png" 
            alt="Grant Ghost Alert Interface" 
            className="w-full rounded-lg shadow-2xl"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24" style={{ backgroundColor: '#1a3a5c' }}>
        <div className="container px-4 md:px-8">
          <img 
            src="/home/ubuntu/grant-ghost-how-it-works.png" 
            alt="How Grant Ghost Works" 
            className="w-full rounded-lg shadow-2xl"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24" style={{ backgroundColor: '#f4f1ea' }}>
        <div className="container px-4 md:px-8">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif", color: '#1a3a5c' }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include our full matching algorithm and unlimited alerts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="p-8 border-2" style={{ borderColor: '#c9a961' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a3a5c' }}>Starter</h3>
              <p className="text-gray-600 mb-6">For solo operators and small teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: '#c9a961' }}>$29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li cl
(Content truncated due to size limit. Use line ranges to read remaining content)
