import { ExternalLink, Star } from 'lucide-react';

const ComparisonTable = () => {
  const casinos = [
    {
      name: 'Neospin',
      bonus: 'A$11,000 + 300 FS',
      wagering: '40x',
      payout: 'Under 10 min (Crypto)',
      games: '5,800+',
      feature: 'Daily cashback up to 20%',
      rating: 4.8
    },
    {
      name: 'Skycrown',
      bonus: 'A$8,000 + 400 FS',
      wagering: '35x',
      payout: '5-15 min (PayID)',
      games: '7,000+',
      feature: 'Weekly free spin drops',
      rating: 4.7
    },
    {
      name: 'Golden Crown',
      bonus: 'A$15,000 + 300 FS',
      wagering: '40x',
      payout: 'Under 15 min (Crypto)',
      games: '4,500+',
      feature: 'Progressive jackpots',
      rating: 4.6
    },
    {
      name: 'Casinonic',
      bonus: 'A$5,000 + 0 FS',
      wagering: '30x',
      payout: '10-20 min (PayID)',
      games: '3,000+',
      feature: 'Mobile-first design',
      rating: 4.5
    },
    {
      name: 'Ricky Casino',
      bonus: 'A$7,500 + 550 FS',
      wagering: '35x',
      payout: '5-10 min (Crypto)',
      games: '2,500+',
      feature: 'Tournament entries',
      rating: 4.5
    }
  ];

  return (
    <section id="comparison" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Top 5 Australian Online Pokie Sites
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Quantitative comparison based on bonus value, payout speed, game count, and mobile UX.
            Updated quarterly with real testing data.
          </p>
        </div>

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700">
            <thead className="bg-gradient-to-r from-slate-800 to-slate-900">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Casino</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Welcome Bonus</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Wagering</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Payout Speed</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Games</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Unique Feature</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {casinos.map((casino, index) => (
                <tr key={index} className="hover:bg-slate-800/70 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-white">{casino.name}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="text-sm text-slate-400">{casino.rating}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{casino.bonus}</td>
                  <td className="px-6 py-4 text-slate-300">{casino.wagering}</td>
                  <td className="px-6 py-4 text-slate-300">{casino.payout}</td>
                  <td className="px-6 py-4 text-slate-300">{casino.games}</td>
                  <td className="px-6 py-4 text-slate-300">{casino.feature}</td>
                  <td className="px-6 py-4">
                    <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-medium rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-200 shadow-md hover:shadow-lg">
                      Play Now
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden space-y-4">
          {casinos.map((casino, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-amber-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{casino.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="text-slate-300 font-medium">{casino.rating}</span>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Bonus</span>
                  <p className="text-slate-200 font-medium">{casino.bonus}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Wagering</span>
                    <p className="text-slate-200">{casino.wagering}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Games</span>
                    <p className="text-slate-200">{casino.games}</p>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Payout Speed</span>
                  <p className="text-slate-200">{casino.payout}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Unique Feature</span>
                  <p className="text-amber-400">{casino.feature}</p>
                </div>
              </div>
              <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-200 shadow-lg">
                Play Now
                <ExternalLink className="ml-2 w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
