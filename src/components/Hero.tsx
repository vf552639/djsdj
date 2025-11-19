import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
          <TrendingUp className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-400 font-medium">Updated for 2025</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          The Ultimate Data-Driven Guide to{' '}
          <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
            Online Pokies
          </span>{' '}
          in Australia
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Unbiased reviews backed by real data. We test payouts, verify licenses, and track bonuses
          so you can play with confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#comparison"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-105"
          >
            View Top 5 Sites
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#methodology"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-slate-300 font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200 border border-slate-700 hover:border-slate-600"
          >
            How We Test
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
