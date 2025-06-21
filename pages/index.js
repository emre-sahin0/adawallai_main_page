import Head from 'next/head';
import Link from 'next/link';

const LOGO_SRC = '/image.png'; // Eğer image.png yoksa SVG ile değiştirilecek

export default function Home() {
  const projects = [
    {
      name: 'Mağaza Raporlama Sistemi',
      description: 'Mağazalarınızın performansını AI destekli analizlerle takip edin. Satış, stok ve müşteri verilerinizi anlık olarak izleyin.',
      url: 'https://report.adawallai.com',
      icon: '📊',
      features: ['Gerçek zamanlı raporlama', 'AI destekli analizler', 'Özelleştirilebilir dashboard']
    },
    {
      name: 'AdaWall Eğitim Platformu',
      description: 'Yapay zeka destekli eğitim platformu ile öğrenme deneyiminizi kişiselleştirin ve geliştirin.',
      url: 'https://education.adawallai.com',
      icon: '🎓',
      features: ['Kişiselleştirilmiş öğrenme', 'AI destekli öğretmen', 'İnteraktif içerikler']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Duvar Kağıdı Arka Plan Deseni */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.05) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.05) 50%, transparent 60%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 100px 100px, 100px 100px',
          backgroundPosition: '0 0, 200px 200px, 0 0, 50px 50px'
        }}></div>
        
        {/* Geometrik Duvar Kağıdı Desenleri */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wallpaper-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="none"/>
              <circle cx="50" cy="50" r="2" fill="rgba(139, 92, 246, 0.1)"/>
              <circle cx="150" cy="50" r="1.5" fill="rgba(59, 130, 246, 0.1)"/>
              <circle cx="50" cy="150" r="1.5" fill="rgba(59, 130, 246, 0.1)"/>
              <circle cx="150" cy="150" r="2" fill="rgba(139, 92, 246, 0.1)"/>
              <path d="M25 100 L175 100" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
              <path d="M100 25 L100 175" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wallpaper-pattern)"/>
        </svg>
      </div>

      <Head>
        <title>AdaWall AI - Yenilikçi AI Çözümleri</title>
        <meta name="description" content="AdaWall AI - Yapay Zeka Destekli İş ve Eğitim Çözümleri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* LOGO ve NAV */}
      <header className="w-full flex flex-col items-center py-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight">
          AdaWall AI
        </h1>
        <span className="mt-2 text-lg text-blue-200 font-semibold tracking-wide">Yenilikçi Duvar Kağıdı Fabrikası & Yapay Zeka Çözümleri</span>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-[350px] md:min-h-[400px] mb-20">
          {/* Duvar Kağıdı Temalı Arka Plan */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 92, 246, 0.05) 10px, rgba(139, 92, 246, 0.05) 20px),
                repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.05) 10px, rgba(59, 130, 246, 0.05) 20px)
              `
            }}></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-2xl mx-auto mb-8 font-light drop-shadow-lg">
            Yapay zeka teknolojileri ve modern üretim altyapımız ile <span className="font-bold text-blue-400">duvar kağıdı fabrikası</span> olarak işinizi geleceğe taşıyoruz.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg">
              Projelerimiz
            </a>
          </div>
        </section>

        {/* Projects Grid */}
        <div id="projects" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {projects.map((project) => (
            <Link href={project.url} key={project.name}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-8 hover:from-gray-700/80 hover:to-gray-800/80 transition-all duration-300 cursor-pointer border border-gray-700/50 shadow-xl">
                <div className="text-5xl mb-6">{project.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="space-y-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* About Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8">Neden AdaWall AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-700/50">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-2">Modern Fabrika</h3>
              <p className="text-gray-400">Yüksek teknolojiyle donatılmış üretim tesislerimizle duvar kağıdı sektöründe öncüyüz.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-700/50">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Yapay Zeka Entegrasyonu</h3>
              <p className="text-gray-400">Üretimden raporlamaya, her aşamada AI ile verimlilik ve kalite.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-700/50">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Sürdürülebilirlik</h3>
              <p className="text-gray-400">Çevre dostu üretim ve yenilikçi çözümlerle geleceğe yatırım yapıyoruz.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-400 border-t border-gray-800/50 relative z-10">
        <p>© {new Date().getFullYear()} AdaWall AI. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
} 