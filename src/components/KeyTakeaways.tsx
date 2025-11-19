import { Check } from 'lucide-react';

const KeyTakeaways = () => {
  const takeaways = [
    'Top sites deliver welcome packages reaching A$15,000 alongside 400 free spins to kickstart sessions without massive upfront risk.',
    'Payouts through PayID or crypto hit accounts in under 15 minutes, slashing wait times that once dragged on for days.',
    'Individual play falls outside illegality under the Interactive Gambling Act 2001, though operators face strict blocks.',
    'Leading casinos stock over 7,000 pokie titles, spanning classics to jackpot chasers.'
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 border border-amber-500/20 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-3 rounded-full"></span>
            Key Takeaways
          </h2>
          <ul className="space-y-4">
            {takeaways.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-slate-700">
            <a
              href="#comparison"
              className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center transition-colors"
            >
              Jump to Top 5 Comparison Table
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyTakeaways;
