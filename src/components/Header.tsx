import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Top Sites', href: '#comparison' },
    { label: 'How We Rank', href: '#methodology' },
    { label: 'Best RTPs', href: '#rtp' },
    { label: 'Bonuses', href: '#bonuses' },
    { label: 'Banking', href: '#banking' },
    { label: 'Legal Info', href: '#legal' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              PokiesAU
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-amber-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-amber-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800/98 backdrop-blur-lg border-t border-amber-500/20">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-300 hover:text-amber-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
