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
    },
    {
      name: 'AdaDesign',
      description: 'Fransız mağazalarının mimari çizimleri ve tasarımları profesyonel olarak hazırlanır.',
      url: 'https://design.adawallai.com',
      icon: '🎨',
      features: ['Fransız mağaza mimari çizimi', 'Profesyonel tasarım', 'Özel proje danışmanlığı']
    }
  ];

  return (
    <div className="min-h-screen w-full text-white relative overflow-hidden">
      {/* Transparan arka plan görseli */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url(/CEPHE.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <Head>
        <title>AdaWall AI - Yenilikçi AI Çözümleri</title>
        <meta name="description" content="AdaWall AI - Yapay Zeka Destekli İş ve Eğitim Çözümleri" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Ortalanmış NAVBAR */}
      <nav className="w-full flex items-center justify-center px-8 py-4 bg-black/60 backdrop-blur-md fixed top-0 left-0 z-20">
        <div className="flex items-center gap-3">
          <img src="/navbarlogo.png" alt="AdaWall Logo" className="h-10 w-auto" />

        </div>
      </nav>

      <main className="container mx-auto px-4 py-32 relative z-10">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-[350px] md:min-h-[400px] mb-20">
          <div className="bg-black/60 rounded-xl px-8 py-10 w-full max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight mb-4">
              AdaWall AI
            </h1>
            <span className="mt-2 text-lg text-blue-200 font-semibold tracking-wide mb-8 block">Yenilikçi Duvar Kağıdı Fabrikası & Yapay Zeka Çözümleri</span>
            <p className="text-2xl md:text-3xl text-gray-200 max-w-2xl mx-auto mb-8 font-light drop-shadow-lg">
              Yapay zeka teknolojileri ve modern üretim altyapımız ile <span className="font-bold text-blue-400">duvar kağıdı fabrikası</span> olarak işinizi geleceğe taşıyoruz.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg">
                Projelerimiz
              </a>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <div id="projects" className="grid grid-cols-1 gap-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(0,2).map((project) => (
              <Link href={project.url} key={project.name}>
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-8 hover:from-gray-700/80 hover:to-gray-800/80 transition-all duration-300 cursor-pointer border border-gray-700/50 shadow-xl w-full">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="hidden md:block"></div>
            <div className="flex justify-center md:col-span-2">
              <Link href={projects[2].url}>
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-8 hover:from-gray-700/80 hover:to-gray-800/80 transition-all duration-300 cursor-pointer border border-gray-700/50 shadow-xl w-full max-w-xl">
                  <div className="text-5xl mb-6">{projects[2].icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{projects[2].name}</h2>
                  <p className="text-gray-300 mb-6">{projects[2].description}</p>
                  <div className="space-y-2">
                    {projects[2].features.map((feature, index) => (
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
            </div>
          </div>
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