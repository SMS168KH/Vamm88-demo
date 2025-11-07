import { Shield, Award, CheckCircle2 } from "lucide-react";

export function CertificationBanner() {

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black py-12 md:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold rotate-45" />
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-gold rotate-12" />
        <div className="absolute bottom-10 left-1/4 w-12 h-12 border-2 border-gold -rotate-12" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border-2 border-gold rotate-45" />
      </div>

      {/* Floating gold confetti */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] w-3 h-3 bg-gold rounded-sm opacity-60 animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }} />
        <div className="absolute top-20 left-[30%] w-2 h-2 bg-gold rounded-sm opacity-60 animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }} />
        <div className="absolute top-16 right-[20%] w-3 h-3 bg-gold rounded-sm opacity-60 animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute top-32 right-[40%] w-2 h-2 bg-gold rounded-sm opacity-60 animate-float" style={{ animationDelay: '3s', animationDuration: '8s' }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main certification content */}
        <div className="relative bg-gradient-to-br from-white via-gray-100 to-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Top gold border */}
          <div className="h-2 bg-gradient-to-r from-gold via-gold-light to-gold" />
          
          <div className="p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Text content */}
              <div className="space-y-6">
                {/* Heading */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-gold" />
                    <Award className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="text-black tracking-tight">
                    TRUSTED & CERTIFIED
                  </h2>
                  <div className="flex items-center gap-3">
                    <span className="text-black">BY</span>
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gold/20 blur-xl" />
                      <div className="relative bg-gradient-to-r from-gold-dark via-gold to-gold-light px-6 py-2 rounded-lg shadow-lg">
                        <span className="text-black tracking-wider">VAM88</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="flex items-center gap-3">
                  <div className="h-1 w-16 bg-gradient-to-r from-gold to-gold-dark rounded-full" />
                  <div className="h-1 w-8 bg-gold-dark rounded-full" />
                </div>

                {/* Quote */}
                <div className="relative pl-6 border-l-4 border-gold">
                  <p className="text-gray-800 italic leading-relaxed">
                    "We are proud to announce that our platform has met the standards and qualifications of VAM88, establishing it as one of the most trusted and reliable online casino platforms."
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-black">Fair Gaming</p>
                      <p className="text-gray-600 text-sm">100% verified RNG</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-black">Secure Platform</p>
                      <p className="text-gray-600 text-sm">256-bit encryption</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Certificate image */}
              <div className="relative">
                {/* Glow effect behind certificate */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-gold-light/20 to-gold/30 blur-2xl" />
                
                {/* Certificate container */}
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <div className="relative bg-gradient-to-br from-gray-900 to-black p-1 rounded-2xl shadow-2xl">
                    <div className="bg-gradient-to-br from-gold/20 via-black to-gold/20 p-8 rounded-xl">
                      {/* Certificate design */}
                      <div className="bg-white rounded-lg p-6 shadow-xl">
                        <div className="text-center space-y-4">
                          {/* Top decoration */}
                          <div className="flex justify-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg">
                              <Award className="w-10 h-10 text-white" />
                            </div>
                          </div>

                          {/* Certificate text */}
                          <div className="space-y-2">
                            <p className="text-gray-600 uppercase tracking-widest text-sm">Certificate</p>
                            <p className="text-xs text-gray-500">of Accreditation</p>
                          </div>

                          {/* Certificate number */}
                          <div className="py-4 border-y border-gold/30">
                            <p className="text-2xl tracking-wider text-black">VAM88-2024</p>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-gray-600 leading-relaxed">
                            This certifies that VAM88 platform has met the standards and qualifications,
                            establishing it as one of the most trusted and reliable online casino platforms.
                          </p>

                          {/* Signature area */}
                          <div className="pt-4 grid grid-cols-2 gap-4 text-xs">
                            <div className="border-t border-gray-300 pt-2">
                              <p className="text-gray-500">Authorized By</p>
                              <p className="text-gray-700">Gaming Commission</p>
                            </div>
                            <div className="border-t border-gray-300 pt-2">
                              <p className="text-gray-500">Valid Until</p>
                              <p className="text-gray-700">Dec 2030</p>
                            </div>
                          </div>

                          {/* Seal */}
                          <div className="flex justify-center pt-2">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark opacity-80 flex items-center justify-center">
                              <Shield className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gold border */}
          <div className="h-2 bg-gradient-to-r from-gold via-gold-light to-gold" />
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="mt-8 md:mt-12 bg-black/80 backdrop-blur-sm border-y border-gold/30 overflow-hidden">
        <div className="py-3 animate-scroll-left whitespace-nowrap">
          <span className="inline-block px-8 text-gold tracking-wider">
            🎰 Welcome to VAM88! 
          </span>
          <span className="inline-block px-8 text-gold tracking-wider">
            🎲 Welcome to VAM88! 
          </span>
          <span className="inline-block px-8 text-gold tracking-wider">
            🃏 Welcome to VAM88! 
          </span>
          <span className="inline-block px-8 text-gold tracking-wider">
            🎰 Welcome to VAM88! 
          </span>
          <span className="inline-block px-8 text-gold tracking-wider">
            🎲 Welcome to VAM88! 
          </span>
          <span className="inline-block px-8 text-gold tracking-wider">
            🃏 Welcome to VAM88! 
          </span>
          <span className="inline-block px-8 text-gold tracking-wider">
            🎰 Welcome to VAM88! 
          </span>
          <span className="inline-block px-8 text-gold tracking-wider">
            🎲 Welcome to VAM88! 
          </span>
        </div>
      </div>
    </section>
  );
}
