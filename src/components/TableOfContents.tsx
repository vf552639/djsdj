import { useState } from 'react';
import { List, X } from 'lucide-react';

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'comparison', title: 'Top 5 Sites Comparison' },
    { id: 'methodology', title: 'How We Rank' },
    { id: 'rtp', title: 'Highest RTP Pokies' },
    { id: 'bonuses', title: 'Bonus Breakdown' },
    { id: 'banking', title: 'Banking Methods' },
    { id: 'legal', title: 'Legal Information' },
    { id: 'providers', title: 'Best Providers' },
    { id: 'faq', title: 'FAQ' }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        aria-label="Table of Contents"
      >
        {isOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-30 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div
            className="fixed bottom-24 right-6 w-80 max-w-[calc(100vw-3rem)] bg-slate-800 rounded-xl shadow-2xl border border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900">
              <h3 className="text-lg font-semibold text-white">Table of Contents</h3>
            </div>
            <nav className="p-2 max-h-96 overflow-y-auto">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-slate-300 hover:text-amber-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default TableOfContents;
