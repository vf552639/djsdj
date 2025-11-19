import { Sparkles, Mail, Shield, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                PokiesAU
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Data-driven reviews of Australian online pokie sites. We test payouts, verify licenses, and track
              bonuses so you can play with confidence.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <Shield className="w-4 h-4" />
              <span>Updated quarterly with real testing data</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Top 5 Sites', href: '#comparison' },
                { label: 'How We Rank', href: '#methodology' },
                { label: 'Best RTPs', href: '#rtp' },
                { label: 'Banking Guide', href: '#banking' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { label: 'Legal Information', href: '#legal' },
                { label: 'Responsible Gaming', href: '#legal' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold mb-2">Responsible Gaming</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  Gambling should be fun, not a problem. Set limits, take breaks, and never chase losses.
                  If you or someone you know needs support, help is available 24/7.
                </p>
                <a
                  href="tel:1800858858"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Gambling Help Online: 1800 858 858
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
            <p>© 2025 PokiesAU. All rights reserved. Updated for 2025.</p>
            <p className="mt-2 sm:mt-0">
              18+ only. Play responsibly. Terms apply to all bonuses.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
