import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [navOpen, setNavOpen] = useState(false); // Hamburger menü için

  const projects = [
    {
      name: 'Mağaza Raporlama Sistemi',
      description: 'Mağazalarınızın performansını AI destekli analizlerle takip edin. Satış, stok ve müşteri verilerinizi anlık olarak izleyin.',
      longDescription: 'Gerçek zamanlı veri işleme ve makine öğrenmesi algoritmaları ile mağaza performansını optimize edin. Tahmine dayalı analizler ve otomatik raporlama sistemi ile işletmenizi geleceğe taşıyın.',
      detailedDescription: 'AdaWall Mağaza Raporlama Sistemi, fabrikamızın üretim süreçlerini optimize etmek ve müşterilerimizin mağaza performanslarını takip etmek için geliştirilmiş yapay zeka destekli bir platformdur. Sistem, günlük 50,000 metrekare üretim kapasitemizi verimli şekilde yönetmemizi sağlarken, müşterilerimizin satış verilerini anlık olarak analiz eder.',
      url: 'https://report.adawallai.com',
      icon: '📊',
      color: 'from-cyan-400 via-blue-500 to-purple-600',
      bgColor: 'from-cyan-900/20 via-blue-900/20 to-purple-900/20',
      glowColor: 'shadow-cyan-500/20',
      features: ['Gerçek zamanlı raporlama', 'AI destekli analizler', 'Özelleştirilebilir dashboard', 'Tahmine dayalı analiz', 'Otomatik bildirimler', 'Mobil uyumluluk'],
      techStack: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'WebSocket'],
      benefits: [
        'Satış performansında %35 artış',
        'Stok yönetiminde %50 verimlilik',
        'Maliyet optimizasyonu',
        'Müşteri memnuniyeti artışı'
      ],
      screenshots: [
        { title: 'Ana Dashboard', desc: 'Genel performans görünümü' },
        { title: 'Analiz Raporu', desc: 'Detaylı satış analizleri' },
        { title: 'Stok Takibi', desc: 'Anlık stok durumu' }
      ]
    },
    {
      name: 'AdaWall Eğitim Platformu',
      description: 'Yapay zeka destekli eğitim platformu ile öğrenme deneyiminizi kişiselleştirin ve geliştirin.',
      longDescription: 'Kişiselleştirilmiş öğrenme yolları ve AI öğretmen asistanı ile eğitim süreçlerinizi revolucionize edin. İnteraktif içerikler ve akıllı değerlendirme sistemleri.',
      detailedDescription: 'AdaWall Eğitim Platformu, fabrikamızın çalışanlarının sürekli gelişimi ve sektördeki profesyonellerin eğitimi için tasarlanmış yapay zeka destekli bir öğrenme sistemidir. Duvar kağıdı üretimi, kalite kontrolü, makine bakımı ve tasarım konularında uzmanlaşmış modüller içerir.',
      url: 'https://education.adawallai.com',
      icon: '🎓',
      color: 'from-pink-400 via-purple-500 to-indigo-600',
      bgColor: 'from-pink-900/20 via-purple-900/20 to-indigo-900/20',
      glowColor: 'shadow-pink-500/20',
      features: ['Kişiselleştirilmiş öğrenme', 'AI destekli öğretmen', 'İnteraktif içerikler', 'Akıllı değerlendirme', 'Sertifika sistemi', 'Canlı dersler'],
      techStack: ['Vue.js', 'Python', 'OpenAI', 'PostgreSQL', 'Redis'],
      benefits: [
        'Öğrenme verimliliğinde %60 artış',
        'Personel yetkinlik gelişimi',
        'Sertifikalı eğitim programları',
        'Sürekli mesleki gelişim'
      ],
      screenshots: [
        { title: 'Öğrenme Paneli', desc: 'Kişiselleştirilmiş ders planı' },
        { title: 'AI Öğretmen', desc: 'Yapay zeka destekli rehberlik' },
        { title: 'Sertifika', desc: 'Başarı belgeleri' }
      ]
    },
    {
      name: 'AdaDesign',
      description: 'Fransız mağazalarının mimari çizimleri ve tasarımları profesyonel olarak hazırlanır.',
      longDescription: 'Fransız mağaza mimarisi uzmanları tarafından hazırlanan profesyonel tasarımlar. 3D modelleme ve VR teknolojileri ile gerçekçi görselleştirme.',
      detailedDescription: 'AdaDesign, AdaWall fabrikasının tasarım departmanının öncülüğünde geliştirilen mimari çizim ve tasarım platformudur. Özellikle Fransız mağaza mimarisi konusunda uzmanlaşmış olan ekibimiz, modern teknolojiler kullanarak profesyonel tasarımlar üretir.',
      url: 'https://design.adawallai.com',
      icon: '🎨',
      color: 'from-orange-400 via-red-500 to-pink-600',
      bgColor: 'from-orange-900/20 via-red-900/20 to-pink-900/20',
      glowColor: 'shadow-orange-500/20',
      features: ['Fransız mağaza mimari çizimi', 'Profesyonel tasarım', 'Özel proje danışmanlığı', '3D modelleme', 'VR görselleştirme', 'AutoCAD entegrasyonu'],
      techStack: ['Three.js', 'Blender', 'AutoCAD', 'Unity', 'React'],
      benefits: [
        'Tasarım süresinde %40 azalma',
        'Müşteri memnuniyeti %95',
        'Profesyonel mimari çözümler',
        'Uluslararası standartlar'
      ],
      screenshots: [
        { title: '3D Modelleme', desc: 'Gerçekçi mağaza tasarımları' },
        { title: 'VR Görselleştirme', desc: 'Sanal gerçeklik deneyimi' },
        { title: 'Mimari Çizim', desc: 'Profesyonel teknik çizimler' }
      ]
    }
  ];

  const stats = [
    { number: '10+', label: 'Yıllık Deneyim', icon: '🏆' },
    { number: '1000+', label: 'Mutlu Müşteri', icon: '😊' },
    { number: '500M+', label: 'Metrekare Üretim', icon: '📏' },
    { number: '24/7', label: 'Teknik Destek', icon: '🔧' }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <Head>
        <title>AdaWall - Türkiye'nin Önde Gelen Duvar Kağıdı Fabrikası</title>
        <meta name="description" content="AdaWall - 10 yıllık deneyim ile modern üretim tesislerinde kaliteli duvar kağıdı üretimi ve AI destekli inovatif çözümler" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.1),transparent)] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-800/40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 w-full relative">
            {/* Hamburger - Mobile (sol üstte) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-all"
                aria-controls="mobile-menu"
                aria-expanded={navOpen}
              >
                <span className="sr-only">Menüyü Aç/Kapat</span>
                <svg className={`h-7 w-7 transition-all duration-300 ${navOpen ? 'opacity-0' : 'opacity-100'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`h-7 w-7 absolute transition-all duration-300 ${navOpen ? 'opacity-100' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Logo tam ortada */}
            <div className="mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                <img src="/navbarlogo.png" alt="AdaWall Logo" className="h-8 w-auto" />
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className={`md:hidden fixed top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg z-40 transition-all duration-300 ${navOpen ? 'block' : 'hidden'}`} id="mobile-menu">
            <div className="flex flex-col items-center py-4 space-y-2">
              {['Ana Sayfa', 'Hakkımızda', 'Projelerimiz', 'Galeri', 'İletişim'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-').replace('ı', 'i').replace('ğ', 'g').replace('ü', 'u').replace('ö', 'o').replace('ş', 's').replace('ç', 'c')}`}
                  className="text-gray-300 hover:text-white transition-all duration-300 px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 text-base font-medium w-full text-center"
                  onClick={() => setNavOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="ana-sayfa" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video
            src="/background.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-black/40 rounded-lg p-4 md:p-6 shadow-md">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-center w-full">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                AdaWall
              </span>
              <span className="block text-3xl md:text-4xl text-gray-200 mt-2">
                Duvar Kağıdı Fabrikası
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
              10 yıllık deneyimimiz ile <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">Türkiye'nin en modern duvar kağıdı üretim tesislerinde</span> kaliteli ürünler üretiyoruz
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
              Yapay zeka destekli inovatif çözümlerimiz ve yüksek teknoloji ile donatılmış fabrikamızda geleceğin duvar kağıtlarını bugünden üretiyoruz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.9s'}}>
              <a href="#projelerimiz" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform hover:shadow-cyan-500/25">
                Projelerimizi Keşfet
              </a>
              <a href="#hakkimizda" className="border-2 border-gray-400 text-gray-300 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-300 hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-110 transform hover:shadow-lg">
                Fabrikamız Hakkında
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

             {/* Stats Section */}
       <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
         
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-full animate-spin-slow blur-2xl"></div>
           <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full animate-bounce-slow blur-xl"></div>
           <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full animate-pulse-slow blur-3xl"></div>
           <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-pink-400/60 to-purple-400/60 rounded-full animate-ping-slow blur-xl"></div>
           <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-r from-cyan-400/45 to-blue-400/45 rounded-full animate-spin-reverse blur-2xl"></div>
           <div className="absolute top-20 left-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400/50 to-orange-400/50 rounded-full animate-float-slow blur-lg"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {stats.map((stat, index) => (
               <div key={index} className="text-center group hover:scale-125 transition-all duration-300 cursor-pointer hover:bg-gradient-to-br hover:from-cyan-900/20 hover:to-blue-900/20 rounded-xl p-4 hover:shadow-2xl hover:shadow-cyan-500/20">
                 <div className="text-4xl mb-2 group-hover:animate-bounce group-hover:scale-150 transition-transform duration-300">{stat.icon}</div>
                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300 group-hover:animate-pulse">
                   {stat.number}
                 </div>
                 <div className="text-gray-400 text-sm md:text-base group-hover:text-white transition-colors group-hover:font-semibold">{stat.label}</div>
               </div>
             ))}
           </div>
         </div>
       </section>

             {/* About Section */}
       <section id="hakkimizda" className="py-20 bg-gray-900 relative overflow-hidden">
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-20 right-16 w-48 h-48 bg-gradient-to-r from-green-400/35 to-emerald-400/35 rounded-full animate-float-slow blur-3xl"></div>
           <div className="absolute bottom-32 left-12 w-36 h-36 bg-gradient-to-r from-cyan-400/45 to-teal-400/45 rounded-full animate-spin-slow blur-2xl"></div>
           <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/55 to-indigo-400/55 rounded-full animate-bounce-slow blur-xl"></div>
           <div className="absolute bottom-16 right-1/3 w-32 h-32 bg-gradient-to-r from-purple-400/40 to-violet-400/40 rounded-full animate-pulse-slow blur-2xl"></div>
           <div className="absolute top-40 left-1/2 w-20 h-20 bg-gradient-to-r from-pink-400/60 to-rose-400/60 rounded-full animate-ping-slow blur-lg"></div>
           <div className="absolute top-60 right-12 w-28 h-28 bg-gradient-to-r from-amber-400/40 to-yellow-400/40 rounded-full animate-spin-reverse blur-xl"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fabrikamız
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern teknoloji ve geleneksel kalite anlayışımızla Türkiye'nin en büyük duvar kağıdı üretim tesislerinden birini işletiyoruz
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏭',
                title: 'Modern Üretim',
                description: 'Son teknoloji makineler ve otomatik üretim hatlarımızla yüksek kalite standartlarında üretim yapıyoruz. Günlük 50,000 metrekare üretim kapasitemiz ile büyük siparişleri hızla karşılıyoruz.',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                icon: '🔬',
                title: 'Ar-Ge Merkezi',
                description: 'Kendi Ar-Ge merkezimizde yeni desenler, çevre dostu materyaller ve inovatif üretim yöntemleri geliştiriyoruz. Yapay zeka destekli tasarım araçlarımızla trend öncüsü ürünler yaratıyoruz.',
                color: 'from-purple-500 to-pink-600'
              },
              {
                icon: '🌍',
                title: 'Sürdürülebilirlik',
                description: 'Çevre dostu üretim proseslerimiz ve geri dönüştürülebilir materyaller kullanarak sürdürülebilir bir gelecek için çalışıyoruz. ISO 14001 sertifikamızla çevreye karşı sorumluluğumuzu kanıtlıyoruz.',
                color: 'from-green-500 to-emerald-600'
              }
            ].map((item, index) => (
                             <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl group cursor-pointer hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 hover:shadow-cyan-500/20 hover:-translate-y-2">
                 <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">{item.icon}</div>
                 <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 group-hover:animate-pulse">
                   {item.title}
                 </h3>
                 <p className="text-gray-300 group-hover:text-gray-100 transition-colors group-hover:font-medium">
                   {item.description}
                 </p>
                 <div className={`mt-4 h-1 w-0 bg-gradient-to-r ${item.color} rounded-full group-hover:w-full transition-all duration-500 group-hover:h-2 group-hover:animate-pulse`}></div>
               </div>
            ))}
          </div>
        </div>
      </section>

             {/* Projects Section */}
       <section id="projelerimiz" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-blue-900/5 to-purple-900/5"></div>
         
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-16 left-20 w-44 h-44 bg-gradient-to-r from-violet-400/40 to-purple-400/40 rounded-full animate-float-slow blur-3xl"></div>
           <div className="absolute bottom-24 right-24 w-32 h-32 bg-gradient-to-r from-cyan-400/50 to-blue-400/50 rounded-full animate-spin-slow blur-2xl"></div>
           <div className="absolute top-1/4 right-12 w-24 h-24 bg-gradient-to-r from-pink-400/60 to-rose-400/60 rounded-full animate-bounce-slow blur-xl"></div>
           <div className="absolute bottom-1/3 left-16 w-36 h-36 bg-gradient-to-r from-emerald-400/35 to-green-400/35 rounded-full animate-pulse-slow blur-3xl"></div>
           <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-orange-400/50 to-red-400/50 rounded-full animate-spin-reverse blur-lg"></div>
         </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dijital Projelerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fabrikamızın teknolojik altyapısını destekleyen ve sektöre öncülük eden yapay zeka destekli projelerimiz
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                <div className={`bg-gradient-to-br ${project.bgColor} backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/50 h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 transform relative z-10 ${project.glowColor} hover:shadow-2xl`}>
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.name}
                      </h3>
                      <div className={`h-1 w-16 bg-gradient-to-r ${project.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                                     <div className="flex flex-col sm:flex-row gap-3">
                     <button 
                       onClick={() => openModal(project)}
                       className={`flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-110 transform hover:shadow-2xl`}
                     >
                       <span className="mr-2 group-hover:animate-bounce">🔍</span>
                       Keşfet
                     </button>
                     <a 
                       href={project.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-110 transform hover:shadow-lg hover:border-gray-500"
                     >
                       <span className="mr-2 group-hover:animate-bounce">🚀</span>
                       Projeye Git
                     </a>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
              <div className="flex items-center">
                <div className="text-4xl mr-4">{selectedProject.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedProject.name}</h2>
                  <div className={`h-1 w-32 bg-gradient-to-r ${selectedProject.color} rounded-full mt-2`}></div>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-3xl hover:scale-110 transition-all duration-300"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Proje Hakkında</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Özellikler</h3>
                  <div className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${selectedProject.color} rounded-full mr-3`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Teknoloji Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span key={index} className={`px-3 py-1 bg-gradient-to-r ${selectedProject.color} text-white rounded-full text-sm font-medium`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Faydalar</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedProject.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="text-green-400 mr-3">✓</div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Ekran Görüntüleri</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedProject.screenshots.map((screenshot, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="w-full h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-3">
                        <div className="text-3xl">{selectedProject.icon}</div>
                      </div>
                      <h4 className="text-white font-semibold mb-1">{screenshot.title}</h4>
                      <p className="text-gray-400 text-sm">{screenshot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

                             <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                   href={selectedProject.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`flex-1 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${selectedProject.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-110 transform text-lg hover:shadow-2xl group`}
                 >
                   <span className="mr-2 group-hover:animate-bounce">🚀</span>
                   Projeye Git
                 </a>
                 <button 
                   onClick={closeModal}
                   className="flex-1 inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-110 transform text-lg hover:shadow-lg group"
                 >
                   <span className="mr-2 group-hover:animate-bounce">✕</span>
                   Kapat
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}

             {/* Gallery Section */}
       <section id="galeri" className="py-20 bg-gray-900 relative overflow-hidden">
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-12 left-1/3 w-40 h-40 bg-gradient-to-r from-amber-400/45 to-orange-400/45 rounded-full animate-spin-reverse blur-3xl"></div>
           <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-r from-teal-400/50 to-cyan-400/50 rounded-full animate-bounce-slow blur-2xl"></div>
           <div className="absolute top-1/2 left-12 w-24 h-24 bg-gradient-to-r from-indigo-400/60 to-purple-400/60 rounded-full animate-ping-slow blur-xl"></div>
           <div className="absolute bottom-1/3 right-20 w-28 h-28 bg-gradient-to-r from-rose-400/40 to-pink-400/40 rounded-full animate-float-slow blur-2xl"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fabrika Galerisi
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern üretim tesislerimizden ve kaliteli üretim süreçlerimizden kareler
            </p>
          </div>

                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[1, 2, 3, 4, 5, 6].map((index) => (
               <div key={index} className="relative group overflow-hidden rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2">
                 <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyan-900/30 group-hover:to-blue-900/30">
                   <div className="text-center">
                     <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">🏭</div>
                     <p className="text-gray-400 group-hover:text-white transition-colors group-hover:font-semibold">Fabrika Görseli {index}</p>
                     <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">Yakında eklenecek</p>
                   </div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-blue-900/20 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl transition-all duration-300"></div>
               </div>
             ))}
           </div>
        </div>
      </section>

             {/* Contact Section */}
       <section id="iletisim" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-blue-900/5 to-purple-900/5"></div>
         
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-24 right-20 w-48 h-48 bg-gradient-to-r from-rose-400/35 to-pink-400/35 rounded-full animate-float-slow blur-3xl"></div>
           <div className="absolute bottom-32 left-24 w-36 h-36 bg-gradient-to-r from-blue-400/45 to-indigo-400/45 rounded-full animate-spin-slow blur-2xl"></div>
           <div className="absolute top-1/3 left-1/2 w-28 h-28 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 rounded-full animate-pulse-slow blur-xl"></div>
           <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-r from-violet-400/40 to-purple-400/40 rounded-full animate-bounce-slow blur-xl"></div>
         </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                İletişim
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bizimle iletişime geçin, projeleriniz için en iyi çözümleri birlikte bulalım
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Adres',
                  content: 'Yeni Mahalle İncirlik Bulvarı No:27, 01340 Sarıçam/Adana',
                  color: 'from-cyan-600 to-blue-600'
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'E-posta',
                  content: 'Bilgiler sonra eklenecek.',
                  color: 'from-purple-600 to-pink-600'
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: 'Telefon',
                  content: 'Bilgiler sonra eklenecek.',
                  color: 'from-green-600 to-emerald-600'
                }
              ].map((contact, index) => (
                                 <div key={index} className="flex items-start space-x-4 group cursor-pointer hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
                   <div className={`bg-gradient-to-r ${contact.color} p-3 rounded-lg group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce group-hover:shadow-lg`}>
                     {contact.icon}
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 group-hover:animate-pulse">
                       {contact.title}
                     </h3>
                     <p className="text-gray-300 whitespace-pre-line group-hover:text-gray-100 transition-colors group-hover:font-medium">
                       {contact.content}
                     </p>
                   </div>
                 </div>
              ))}
            </div>

                         <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 group">
               <h3 className="text-2xl font-bold text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Çalışma Saatleri</h3>
               <div className="space-y-4">
                 {[
                   { day: 'Pazartesi - Cuma', time: '08:00 - 18:00' },
                   { day: 'Cumartesi', time: '09:00 - 17:00' },
                   { day: 'Pazar', time: 'Kapalı' }
                 ].map((schedule, index) => (
                   <div key={index} className="flex justify-between hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-blue-900/20 p-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg">
                     <span className="text-gray-300 hover:text-white transition-colors">{schedule.day}</span>
                     <span className="text-white font-semibold hover:text-cyan-300 transition-colors">{schedule.time}</span>
                   </div>
                 ))}
               </div>
               
               <div className="mt-8 p-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg border border-cyan-600/30 group-hover:from-cyan-600/30 group-hover:to-blue-600/30 group-hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                 <p className="text-cyan-300 text-sm group-hover:text-cyan-200 transition-colors">
                   <span className="font-semibold group-hover:animate-bounce inline-block">💡</span> <span className="font-semibold">Acil Durum:</span> 7/24 teknik destek hattımız mevcuttur
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

             {/* Footer */}
       <footer className="bg-gray-900 border-t border-gray-800 py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-4 gap-8">
             <div className="col-span-2 flex items-center space-x-4 mb-6 group">
               <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                 <img src="/navbarlogo.png" alt="AdaWall Logo" className="h-10 w-auto group-hover:scale-110 transition-transform duration-300" />
               </div>
             </div>
             <div>
               <h4 className="text-lg font-semibold text-white mb-4">Hızlı Linkler</h4>
               <ul className="space-y-3">
                 {['Ana Sayfa', 'Hakkımızda', 'Projelerimiz', 'Galeri', 'İletişim'].map((link, index) => (
                   <li key={index}>
                     <a href={`#${link.toLowerCase().replace(' ', '-').replace('ı', 'i').replace('ğ', 'g').replace('ü', 'u').replace('ö', 'o').replace('ş', 's').replace('ç', 'c')}`} 
                        className="text-gray-400 hover:text-cyan-300 transition-all duration-300 hover:translate-x-3 text-sm hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-blue-900/20 p-2 rounded-lg hover:scale-105 hover:font-semibold inline-block w-full">
                       {link}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
             
             <div>
               <h4 className="text-lg font-semibold text-white mb-4">Projelerimiz</h4>
               <ul className="space-y-3">
                 {[
                   { name: 'Raporlama Sistemi', url: 'https://report.adawallai.com' },
                   { name: 'Eğitim Platformu', url: 'https://education.adawallai.com' },
                   { name: 'AdaDesign', url: 'https://design.adawallai.com' }
                 ].map((project, index) => (
                   <li key={index}>
                     <a href={project.url} className="text-gray-400 hover:text-cyan-300 transition-all duration-300 hover:translate-x-3 text-sm hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-blue-900/20 p-2 rounded-lg hover:scale-105 hover:font-semibold inline-block w-full">
                       {project.name}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
          
                     <div className="border-t border-gray-800 mt-8 pt-6 text-center">
             <p className="text-gray-400 text-sm">
               © {new Date().getFullYear()} AdaWall Duvar Kağıdı Fabrikası. Tüm hakları saklıdır.
             </p>
           </div>
        </div>
      </footer>

             <style jsx global>{`
         @keyframes fade-in {
           from { opacity: 0; transform: translateY(20px); }
           to { opacity: 1; transform: translateY(0); }
         }
         
         @keyframes gradient {
           0% { background-position: 0% 50%; }
           50% { background-position: 100% 50%; }
           100% { background-position: 0% 50%; }
         }
         
         @keyframes float {
           0%, 100% { transform: translateY(0px); }
           50% { transform: translateY(-10px); }
         }
         
         @keyframes glow {
           0%, 100% { box-shadow: 0 0 20px rgba(56, 189, 248, 0.3); }
           50% { box-shadow: 0 0 30px rgba(56, 189, 248, 0.6), 0 0 40px rgba(147, 51, 234, 0.4); }
         }
         
         @keyframes spin-slow {
           from { transform: rotate(0deg); }
           to { transform: rotate(360deg); }
         }
         
         @keyframes spin-reverse {
           from { transform: rotate(360deg); }
           to { transform: rotate(0deg); }
         }
         
         @keyframes bounce-slow {
           0%, 100% { transform: translateY(0) scale(1); }
           50% { transform: translateY(-30px) scale(1.1); }
         }
         
         @keyframes pulse-slow {
           0%, 100% { opacity: 0.3; transform: scale(0.9); }
           50% { opacity: 0.7; transform: scale(1.2); }
         }
         
         @keyframes ping-slow {
           0% { transform: scale(1); opacity: 1; }
           75%, 100% { transform: scale(2); opacity: 0; }
         }
         
         @keyframes float-slow {
           0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
           25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
           50% { transform: translateY(-10px) translateX(-15px) rotate(180deg); }
           75% { transform: translateY(10px) translateX(5px) rotate(270deg); }
         }
         
         .animate-fade-in {
           animation: fade-in 0.8s ease-out forwards;
         }
         
         .animate-gradient {
           background-size: 300% 300%;
           animation: gradient 3s ease infinite;
         }
         
         .animate-float {
           animation: float 3s ease-in-out infinite;
         }
         
         .animate-glow {
           animation: glow 2s ease-in-out infinite;
         }
         
         .animate-spin-slow {
           animation: spin-slow 6s linear infinite;
         }
         
         .animate-spin-reverse {
           animation: spin-reverse 8s linear infinite;
         }
         
         .animate-bounce-slow {
           animation: bounce-slow 3s ease-in-out infinite;
         }
         
         .animate-pulse-slow {
           animation: pulse-slow 4s ease-in-out infinite;
         }
         
         .animate-ping-slow {
           animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
         }
         
         .animate-float-slow {
           animation: float-slow 8s ease-in-out infinite;
         }
         
         /* Sayfa genelinde hover efektleri */
         button:hover, a:hover {
           transform: translateY(-2px);
         }
         
         /* Global hover improvements */
         .group:hover {
           z-index: 10;
         }
         
         /* Enhanced shadows and glows */
         .hover-glow:hover {
           box-shadow: 0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2);
         }
         
         /* Smooth scroll behavior */
         html {
           scroll-behavior: smooth;
         }
         
         /* Enhanced transitions */
         * {
           transition-property: all;
           transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
         }
         
         /* Responsive text improvements */
         @media (max-width: 640px) {
           .text-center {
             text-align: center !important;
           }
         }
         
         /* Hover scale improvements */
         @media (hover: hover) {
           .hover-lift:hover {
             transform: translateY(-8px) scale(1.02);
           }
         }
       `}</style>
    </div>
  );
} 