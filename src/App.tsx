import React from 'react';
import { Trophy, Dribbble, Gamepad2, Info, Newspaper, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ALL_ARTICLES, Article, Category } from './data';

const GameIntro = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-6"
  >
    <div className="relative bg-slate-300 rounded overflow-hidden shadow-inner group">
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 text-white z-10">
        <span className="bg-rose-600 text-white px-2 py-0.5 text-xs font-bold uppercase rounded-sm w-fit mb-2">Game Rules</span>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Understanding the Beautiful Game</h2>
        <p className="text-slate-200 line-clamp-2 max-w-xl">
          Football (soccer) is played by two teams of 11 players. The objective is to score more goals by moving the ball into the opponent's net.
        </p>
      </div>
      <div className="h-80 w-full bg-slate-800"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 border-l-4 border-rose-600 shadow-sm">
        <span className="text-xs font-bold text-rose-600 uppercase flex items-center gap-1">
          <Trophy className="w-3 h-3" /> Objective
        </span>
        <h3 className="font-bold mt-1 text-slate-800">How to Win</h3>
        <p className="text-xs text-slate-500 mt-2">
          Score by getting the ball into the opposing team's net. The team with the most goals after 90 minutes of regulation time wins.
        </p>
      </div>
      <div className="bg-white p-4 border-l-4 border-slate-400 shadow-sm">
        <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
          <Info className="w-3 h-3" /> Rules
        </span>
        <h3 className="font-bold mt-1 text-slate-800">Basic Regulations</h3>
        <p className="text-xs text-slate-500 mt-2">
          No hands (except goalkeepers). Offside rule applies to attackers. Fouls result in free kicks or penalties.
        </p>
      </div>
    </div>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 border-l-4 border-rose-600 shadow-sm">
        <span className="text-xs font-bold text-rose-600 uppercase flex items-center gap-1">
          <Dribbble className="w-3 h-3" /> Basketball
        </span>
        <h3 className="font-bold mt-1 text-slate-800">The Fast Break</h3>
        <p className="text-xs text-slate-500 mt-2">
          Basketball is a fast-paced game played by two teams of five players on a rectangular court.
        </p>
      </div>
      <div className="bg-white p-4 border-l-4 border-slate-400 shadow-sm">
        <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
          <Info className="w-3 h-3" /> Scoring
        </span>
        <h3 className="font-bold mt-1 text-slate-800">Points System</h3>
        <p className="text-xs text-slate-500 mt-2">
          Points are scored by field goals (2 or 3 points) or free throws (1 point each).
        </p>
      </div>
    </div>
  </motion.div>
);

const CATEGORY_TABS: { id: Category; icon: React.ReactNode; label: string; path: string }[] = [
  { id: 'Top Stories', icon: <Newspaper className="w-4 h-4" />, label: 'Top Stories', path: '/' },
  { id: 'Football', icon: <Trophy className="w-4 h-4" />, label: 'Football', path: '/category/football' },
  { id: 'Basketball', icon: <Dribbble className="w-4 h-4" />, label: 'Basketball', path: '/category/basketball' },
  { id: 'E-Sport', icon: <Gamepad2 className="w-4 h-4" />, label: 'E-Sport', path: '/category/e-sport' },
  { id: 'Game Rules', icon: <Info className="w-4 h-4" />, label: 'Game Rules', path: '/category/game-rules' },
];

const ArticleList = ({ category }: { category: Category }) => {
  const navigate = useNavigate();

  if (category === 'Game Rules') {
    return <GameIntro />;
  }

  const displayArticles = category === 'Top Stories' 
    ? ALL_ARTICLES.filter(a => a.category !== 'E-Sport').slice(0, 6) 
    : ALL_ARTICLES.filter(a => a.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {displayArticles.map((article, idx) => (
          <motion.article
            key={article.id}
            onClick={() => navigate(`/article/${article.slug}`)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
            className={`group cursor-pointer bg-white p-4 shadow-sm border-l-4 flex flex-col h-full hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'border-rose-600' : 'border-slate-400'}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-rose-600 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm">
                {article.category}
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{article.date}</span>
            </div>
            
            <h3 className="font-bold text-lg text-slate-800 mt-1 leading-tight group-hover:text-rose-600 transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-slate-500 mt-3 line-clamp-3 flex-grow">
              {article.summary}
            </p>
            <div className="mt-4 flex items-center text-xs font-bold text-rose-600 uppercase tracking-widest w-fit">
              Read <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.article>
        ))}
      </AnimatePresence>
    </div>
  );
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const tab = CATEGORY_TABS.find(t => t.path === `/category/${categoryId}`);
  const activeCategory = tab ? tab.id : 'Top Stories';

  return (
    <>
      <Helmet>
        <title>{activeCategory} News | nSporty</title>
        <meta name="description" content={`Latest updates and news about ${activeCategory} on nSporty`} />
        <link rel="canonical" href={`https://auracore.biz/category/${categoryId}`} />
      </Helmet>
      <div className="mb-6">
        <motion.h2 
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold tracking-tight text-slate-800 uppercase"
        >
          {activeCategory}
        </motion.h2>
      </div>
      <ArticleList category={activeCategory} />
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>nSporty - Top Sports and Esports News</title>
        <meta name="description" content="Your daily source for traditional sports and esports news. Get the latest updates on football, basketball, and competitive gaming." />
        <link rel="canonical" href="https://auracore.biz/" />
      </Helmet>
      <div className="mb-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold tracking-tight text-slate-800 uppercase"
        >
          Top Stories
        </motion.h2>
      </div>
      <ArticleList category="Top Stories" />
    </>
  );
};

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = ALL_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="text-center py-20">
        <Helmet>
          <title>Article Not Found | nSporty</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-slate-800">Article not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-rose-600 font-bold hover:underline">
          Return to Home
        </button>
      </div>
    );
  }

  const tab = CATEGORY_TABS.find(t => t.id === article.category);
  const backPath = tab ? tab.path : '/';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm border-t-4 border-rose-600"
    >
      <Helmet>
        <title>{article.title} | nSporty</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://auracore.biz/article/${article.slug}`} />
      </Helmet>

      <Link 
        to={backPath}
        className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest hover:text-rose-600 transition-colors mb-8 w-fit"
      >
        <ArrowLeft className="w-4 h-4" /> Back to {article.category}
      </Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-rose-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
          {article.category}
        </span>
        <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{article.date}</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
        {article.title}
      </h1>
      <div className="max-w-none text-slate-700 space-y-6 text-lg leading-relaxed">
        {article.content || <p>{article.summary}</p>}
      </div>
    </motion.div>
  );
};

export default function App() {
  const location = useLocation();

  const getActiveTabPath = () => {
    if (location.pathname.startsWith('/article/')) {
      const slug = location.pathname.split('/')[2];
      const article = ALL_ARTICLES.find(a => a.slug === slug);
      if (article) {
        const tab = CATEGORY_TABS.find(t => t.id === article.category);
        return tab ? tab.path : '/';
      }
    }
    return location.pathname;
  };

  const activePath = getActiveTabPath();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-900">
      {/* Header */}
      <header className="h-16 bg-slate-900 text-white flex items-center shadow-lg sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <h1 className="text-2xl font-black tracking-tighter text-white uppercase">
                nSporty
              </h1>
            </Link>
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300 uppercase tracking-widest">
              <span className="cursor-pointer hover:text-rose-400 transition-colors">Scores</span>
              <span className="cursor-pointer hover:text-rose-400 transition-colors">Podcasts</span>
              <button className="bg-slate-800 text-white px-4 py-1 rounded text-xs font-bold hover:bg-slate-700 transition-all uppercase tracking-widest">
                Subscribe Free
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-200px)]">
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar mb-8 border-b border-slate-200 w-full">
          <div className="flex items-center gap-6 w-max">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activePath === tab.path;
              return (
                <Link
                  key={tab.id}
                  to={tab.path}
                  className={`
                    relative flex items-center gap-2 pb-2 text-sm font-medium uppercase tracking-widest transition-colors whitespace-nowrap
                    ${isActive ? 'text-rose-600 border-b-2 border-rose-600' : 'text-slate-500 hover:text-rose-400'}
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.icon}
                    {tab.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
        
      </main>

      {/* Footer */}
      <footer className="h-12 bg-white border-t border-slate-200 flex items-center justify-between px-4 sm:px-8 text-[10px] text-slate-400 uppercase tracking-widest mt-12">
        <div>© 2026 nSporty News Network</div>
        <div className="hidden sm:block">Professional News Standards • No External Syndication</div>
      </footer>
    </div>
  );
}
