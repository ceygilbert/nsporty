import React from 'react';

export type Category = 'Top Stories' | 'Football' | 'Basketball' | 'E-Sport' | 'Game Rules';

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: Category;
  readTime: string;
  content?: React.ReactNode;
  slug?: string;
}

export const DUMMY_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Championship Finals: A Historic Victory',
    summary: 'The underdogs pull off a stunning upset in the final minutes of the match, securing their first title in over a decade.',
    date: 'June 29, 2026',
    category: 'Top Stories',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Star Striker Signs Record-Breaking Deal',
    summary: 'The transfer market shakes up as the league\'s top scorer moves to the rival club for an unprecedented fee.',
    date: 'June 28, 2026',
    category: 'Football',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'New Tactics Emerge in the Premier League',
    summary: 'Managers are adopting high-pressing systems. We break down the tactical shifts defining this season.',
    date: 'June 27, 2026',
    category: 'Football',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'Playoff Drama: Buzzer Beater Wins Game 7',
    summary: 'An incredible shot from half-court seals the series in one of the most memorable basketball games in recent history.',
    date: 'June 29, 2026',
    category: 'Basketball',
    readTime: '6 min read'
  },
  {
    id: '5',
    title: 'Rookie Sensation Breaks Scoring Record',
    summary: 'The first-year player continues to defy expectations, setting a new franchise record for points in a single game.',
    date: 'June 26, 2026',
    category: 'Basketball',
    readTime: '3 min read'
  },
  {
    id: '6',
    title: 'The Evolution of the Modern Point Guard',
    summary: 'Analyzing how the role of the primary ball-handler has shifted towards scoring and spacing over the last five years.',
    date: 'June 25, 2026',
    category: 'Basketball',
    readTime: '8 min read'
  }
];

export const ESPORT_ARTICLES: Article[] = [
  {
    id: 'e1',
    title: 'The Explosive Growth of Esports Betting in Southeast Asia',
    summary: 'Analyzing the surge of esports betting in Southeast Asia and the rise of platforms leading the charge.',
    date: 'June 3, 2026',
    category: 'E-Sport',
    readTime: '2 min read',
    content: (
      <div className="space-y-4">
        <p>The esports industry has seen explosive growth in Southeast Asia, bringing with it a massive surge in online esports betting. As popular titles like Dota 2 and Mobile Legends continue to dominate the competitive scene, the demand for reliable betting platforms has skyrocketed.</p>
        <p>Platforms like <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> are leading the charge by offering secure and seamless experiences for fans. For the best esports betting Malaysia has to offer, players are turning to trusted sites to place their wagers. You can learn more about these opportunities at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e2',
    title: 'Mobile Legends Pro League: Why Betting Adds to the Excitement',
    summary: 'How esports betting enhances the viewing experience of the Mobile Legends Pro League.',
    date: 'June 4, 2026',
    category: 'E-Sport',
    readTime: '2 min read',
    content: (
      <div className="space-y-4">
        <p>The Mobile Legends Pro League brings intense competition, and MLBB esports Malaysia fans are finding that esports betting enhances the viewing experience even further. Placing a wager on your favorite team turns every match into a high-stakes thriller.</p>
        <p>If you're looking for a top platform for Mobile Legends betting, <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> offers competitive odds and a great user interface. Make sure to check out <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a> for the latest tournament odds.</p>
      </div>
    )
  },
  {
    id: 'e3',
    title: 'Dota 2 The International 2026: Betting Predictions and Favorites',
    summary: 'A preview of The International 2026, top teams, predictions, and betting odds.',
    date: 'June 5, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>As The International 2026 approaches, fans are eager to see which Dota 2 teams will lift the Aegis. With The International 2026 predictions rolling in, Dota 2 betting is reaching an all-time high.</p>
        <p>Bettors are turning to <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> to get the best odds on the tournament favorites. To place your bets safely and securely, visit <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a> and get ready for the biggest esports event of the year.</p>
      </div>
    )
  },
  {
    id: 'e4',
    title: 'Valorant Champions Tour: The Rising Star of Esports Betting',
    summary: 'Covering the Valorant Champions Tour and its growing betting market.',
    date: 'June 6, 2026',
    category: 'E-Sport',
    readTime: '2 min read',
    content: (
      <div className="space-y-4">
        <p>The VCT 2026 has solidified Valorant's place in the competitive gaming world, and Valorant betting is quickly becoming a massive market. The tactical gameplay makes it perfect for strategic wagering.</p>
        <p>For those looking to get in on the action, <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> is a premier platform for all VCT matches. Explore the various betting markets available at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a> today.</p>
      </div>
    )
  },
  {
    id: 'e5',
    title: 'Understanding Esports Odds: A Beginner\'s Guide',
    summary: 'An educational guide explaining how esports betting odds work.',
    date: 'June 7, 2026',
    category: 'E-Sport',
    readTime: '4 min read',
    content: (
      <div className="space-y-4">
        <p>Learning how to bet on esports can seem daunting, but understanding the odds is the first step. This esports betting guide breaks down decimal, fractional, and moneyline odds using examples from popular games.</p>
        <p>When you're ready to start, <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> is widely regarded as a trusted platform with transparent odds. Check out <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a> to test your knowledge.</p>
      </div>
    )
  },
  {
    id: 'e6',
    title: 'The Rise of Mobile Esports and Betting Opportunities',
    summary: 'Exploring the growth of mobile esports like PUBG Mobile and Free Fire.',
    date: 'June 8, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>Mobile gaming tournaments are no longer a niche market. The rise of mobile esports betting, particularly PUBG Mobile betting, shows a massive shift in how fans interact with their favorite games.</p>
        <p><a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> provides comprehensive coverage of mobile esports, ensuring fans never miss a match. Head over to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a> to see their mobile betting options.</p>
      </div>
    )
  },
  {
    id: 'e7',
    title: 'Esports Live Betting: Why In-Game Wagering is Taking Over',
    summary: 'About live or in-play betting in esports and its growing popularity.',
    date: 'June 9, 2026',
    category: 'E-Sport',
    readTime: '2 min read',
    content: (
      <div className="space-y-4">
        <p>Live esports betting allows fans to place wagers while the action is happening. This dynamic form of in-play esports betting requires quick thinking and a deep understanding of the game.</p>
        <p>Real-time odds are a specialty of <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a>, providing bettors with instant updates during major tournaments. Experience the thrill at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e8',
    title: 'Top Esports Tournaments to Watch and Bet On This Month',
    summary: 'A roundup article listing major upcoming esports tournaments.',
    date: 'June 10, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>From massive prize pools to intense rivalries, the upcoming esports events this month are spectacular. We have compiled a list of the top esports tournaments 2026 has to offer.</p>
        <p>You can find comprehensive betting options for all these events on <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a>. Plan your wagers and check the latest schedules at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e9',
    title: 'Counter-Strike 2 Majors: The Ultimate Betting Events',
    summary: 'Why CS2 Majors are prime betting events and how to get involved.',
    date: 'June 11, 2026',
    category: 'E-Sport',
    readTime: '2 min read',
    content: (
      <div className="space-y-4">
        <p>Counter-Strike 2 esports continues the legacy of intense, skill-based competition. CS2 betting is highly analytical, making the Majors some of the most anticipated betting events of the year.</p>
        <p>Fans looking for the best odds rely on <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a>. Join the community and place your bets at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e10',
    title: 'Esports vs. Traditional Sports Betting: Key Differences',
    summary: 'A comparison between esports and traditional sports betting.',
    date: 'June 12, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>When looking at esports betting vs sports betting, the fast-paced updates and unique in-game metrics of esports stand out. However, both require research and strategy.</p>
        <p>The <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> sportsbook caters to both audiences seamlessly, offering traditional and esports markets. See the difference for yourself at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e11',
    title: 'League of Legends World Championship: Betting Preview',
    summary: 'A preview article for the League of Legends World Championship.',
    date: 'June 13, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>The LoL betting scene is heating up as we make our Worlds 2026 predictions. Top teams from Korea, China, and Europe are clashing for the ultimate title.</p>
        <p>Get your betting tips and competitive odds via <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a>. Don\'t miss the action—head to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e12',
    title: 'How Esports Betting Platforms Ensure Fair Play',
    summary: 'About integrity and fair play in esports betting platforms.',
    date: 'June 14, 2026',
    category: 'E-Sport',
    readTime: '2 min read',
    content: (
      <div className="space-y-4">
        <p>Integrity is crucial for secure esports gambling. Platforms must ensure fair esports betting through rigorous RNG technology and transparent data feeds.</p>
        <p><a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> is dedicated to maintaining transparency and fairness for all users. Learn about their security measures at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e13',
    title: 'The Esports Betting Market: Trends to Watch in 2026',
    summary: 'An esports market analysis covering betting trends for 2026.',
    date: 'June 15, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>As iGaming market growth accelerates, several esports betting trends 2026 are shaping the future, including mobile-first platforms and new game titles entering the arena.</p>
        <p><a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> is perfectly positioned to capitalize on these trends. Stay ahead of the curve by visiting <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e14',
    title: 'Betting on FIFA eWorld Cup: Esports Football Action',
    summary: 'About the FIFA eWorld Cup and its esports betting opportunities.',
    date: 'June 16, 2026',
    category: 'E-Sport',
    readTime: '2 min read',
    content: (
      <div className="space-y-4">
        <p>The thrill of football meets the digital arena. Football esports betting is massive, and FIFA eWorld Cup betting offers fans unique ways to engage with the sport.</p>
        <p>For top-tier coverage of virtual football, <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> provides the best markets. Place your bets today at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e15',
    title: 'Building an Esports Betting Strategy: Expert Tips',
    summary: 'A strategy article for esports bettors on how to win bets.',
    date: 'June 17, 2026',
    category: 'E-Sport',
    readTime: '4 min read',
    content: (
      <div className="space-y-4">
        <p>Knowing how to win esports bets requires solid bankroll management and research. A disciplined esports betting strategy will always outperform emotional wagering.</p>
        <p>Implement your strategies effectively using <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a>, which offers advanced tools and analytics. Start planning at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e16',
    title: 'The Psychology Behind Esports Betting Popularity',
    summary: 'Exploring why esports betting appeals so strongly to modern audiences.',
    date: 'June 18, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>Understanding the esports betting psychology helps explain why esports betting is popular among younger demographics who grew up in digital, connected environments.</p>
        <p>Leading platforms like <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> tap into this by offering engaging, community-driven experiences. Discover more at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e17',
    title: 'Women in Esports: The Growing Competitive Scene',
    summary: 'Celebrating women in competitive gaming and tournaments.',
    date: 'June 19, 2026',
    category: 'E-Sport',
    readTime: '2 min read',
    content: (
      <div className="space-y-4">
        <p>The landscape of women\'s esports is expanding rapidly, with female esports tournaments gaining massive viewership and increasingly competitive betting markets.</p>
        <p><a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> proudly supports this growth by providing odds for major women\'s events. Support the scene at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e18',
    title: 'Esports Betting Bonuses: How to Maximize Your Value',
    summary: 'A guide on maximizing bonuses for esports betting.',
    date: 'June 20, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>Claiming an esports betting bonus is a great way to boost your initial bankroll. Knowing the terms and conditions ensures you maximize your value.</p>
        <p>The <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> welcome bonus is one of the most generous in the industry. Claim yours today at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e19',
    title: 'Rocket League Championship Series: Betting Guide',
    summary: 'About the Rocket League Championship Series and how to bet on matches.',
    date: 'June 21, 2026',
    category: 'E-Sport',
    readTime: '2 min read',
    content: (
      <div className="space-y-4">
        <p>RLCS 2026 is bringing high-flying car soccer action to the forefront. Rocket League betting offers unique markets due to the game\'s physics-based mechanics.</p>
        <p>You can find the most competitive odds for RLCS on <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a>. Catch all the action at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e20',
    title: 'How Technology is Changing Esports Betting',
    summary: 'Technology\'s impact on betting, live streaming, and data analytics.',
    date: 'June 22, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>Live streaming esports and instant data APIs are revolutionizing esports betting technology, allowing for micro-betting and real-time prop bets.</p>
        <p><a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> integrates these advanced tech features for a seamless experience. Check out their cutting-edge platform at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e21',
    title: 'Responsible Esports Betting: Play Safe, Play Smart',
    summary: 'An article on responsible betting practices and tools for safe gaming.',
    date: 'June 23, 2026',
    category: 'E-Sport',
    readTime: '2 min read',
    content: (
      <div className="space-y-4">
        <p>Practicing responsible esports betting is essential. Safe online gambling means knowing your limits and utilizing platform tools to manage your time and money.</p>
        <p><a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> provides robust tools to ensure users play safely. Learn more about responsible gaming at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e22',
    title: 'Why Winbox is Malaysia\'s Best Esports Betting Platform',
    summary: 'A platform review explaining why it\'s the top choice for Malaysian bettors.',
    date: 'June 24, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>When reading any genuine Winbox review, it\'s clear why it ranks as the best esports betting Malaysia platform. The game coverage, odds, and user interface are unmatched.</p>
        <p>Join the thousands of bettors who trust <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a>. Sign up today via <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e23',
    title: 'Mobile Legends: Bang Bang MPL Betting Guide',
    summary: 'A betting guide for the Mobile Legends Professional League.',
    date: 'June 25, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>Mastering MPL betting requires analyzing team drafts and player form in the Mobile Legends Professional League.</p>
        <p>For the best MPL coverage, <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> offers deep markets and great odds. Check the latest fixtures at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e24',
    title: 'How to Choose an Esports Betting Platform',
    summary: 'A guide on selecting a betting platform based on security and game variety.',
    date: 'June 26, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>If you want to choose esports betting site options wisely, look for security, licensing, and market variety to find the best esports platform.</p>
        <p><a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> meets and exceeds all these criteria. Verify their credentials at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e25',
    title: 'The Future of Esports Betting in Malaysia',
    summary: 'Forecasting the future of betting in Malaysia and regulatory trends.',
    date: 'June 27, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>The esports betting future Malaysia looks incredibly bright, with iGaming Malaysia 2026 projections showing record-breaking growth and better regulatory frameworks.</p>
        <p><a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a> is at the forefront of this digital revolution. See what the future holds at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e26',
    title: 'Esports Betting 101: Everything New Bettors Need to Know',
    summary: 'A comprehensive beginner\'s guide to esports betting terminology.',
    date: 'June 28, 2026',
    category: 'E-Sport',
    readTime: '4 min read',
    content: (
      <div className="space-y-4">
        <p>This guide to esports betting for beginners covers all the terminology and explains how to bet on esports without getting overwhelmed.</p>
        <p>Start your journey with <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a>, the most user-friendly platform available. Create your account at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  },
  {
    id: 'e27',
    title: 'Game-Changing Esports Events You Can\'t Miss in 2026',
    summary: 'Highlighting the biggest tournaments of 2026 including The International and Worlds.',
    date: 'June 29, 2026',
    category: 'E-Sport',
    readTime: '3 min read',
    content: (
      <div className="space-y-4">
        <p>The biggest esports tournaments are lined up, making the esports events 2026 calendar the most exciting one yet for fans and bettors alike.</p>
        <p>Follow every major event with <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">Winbox</a>. Catch the live odds and stream links at <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer" className="text-rose-600 font-bold hover:underline">winbox666</a>.</p>
      </div>
    )
  }
];

export const ALL_ARTICLES = [...DUMMY_ARTICLES, ...ESPORT_ARTICLES].map(a => ({
  ...a,
  slug: a.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}));
