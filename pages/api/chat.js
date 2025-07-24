console.log('API KEY:', process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, adawallInfo } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // API key kontrolü
  if (!process.env.GEMINI_API_KEY) {
    // API key yoksa basit cevaplar ver
    const simpleResponses = {
      'merhaba': 'Merhaba! Ben AdaWall AI asistanınız. Size şirketimiz ve projelerimiz hakkında bilgi verebilirim.',
      'adawall': 'AdaWall, Türkiye\'nin en büyük duvar kağıdı üreticisidir. 10+ yıllık deneyimimizle 120 ülkede ürün satışı yapıyoruz.',
      'koleksiyon': 'Koleksiyonlarımız: MONETA POSTER, Ada Kids, INDIGO, KALINKA, RUMI, ANKA, TROPICANO.',
      'iletişim': `İletişim: ${adawallInfo.company.phone}, WhatsApp: ${adawallInfo.company.whatsapp}`,
      'proje': 'Dijital projelerimiz: Mağaza Raporlama Sistemi, Eğitim Platformu, AdaDesign.',
      'bayi': 'Bayilik sistemi hakkında bilgi almak için bizimle iletişime geçebilirsiniz.'
    };

    const lowerMessage = message.toLowerCase();
    let response = 'Üzgünüm, bu konuda size yardımcı olamıyorum. Lütfen API key\'i ayarlayın.';

    for (const [key, value] of Object.entries(simpleResponses)) {
      if (lowerMessage.includes(key)) {
        response = value;
        break;
      }
    }

    return res.status(200).json({ response });
  }

  try {
    // Gemini 1.5 Flash API çağrısı - doğru format
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Sen AdaWall şirketinin AI asistanısın. Kullanıcıdan gelen soruya göre cevap ver:
- Eğer kullanıcı doğrudan dijital projeler (Mağaza Raporlama Sistemi, Eğitim Platformu, AdaDesign) hakkında bilgi isterse, bu projeleri detaylı ve anlaşılır şekilde açıkla.
- Eğer kullanıcı genel olarak AdaWall, kalite, koleksiyonlar, marka, sektör, ürünler, vizyon, "en iyisi mi" gibi konularda soru sorarsa, önce AdaWall'ın genel özelliklerinden, kalitesinden, koleksiyonlarından ve vizyonundan bahset. Dijital projeleri sadece gerekirse ek bilgi olarak ver.
- AdaWall, sadece duvar kağıdı değil, AdaPanel ve AdaHome gibi dekoratif panel ve ev ürünleri de sunar. Tüm koleksiyonlar ve ürünler hakkında detaylı bilgi verebilir, kullanıcıya https://www.adawall.com.tr/tr/adawall-tum-urunler üzerinden yönlendirme yapabilirsin.
- Cevaplarını kısa ama detaylı, samimi, sohbet havasında ve emoji kullanarak ver. Robotik olma.

Şirket: AdaWall - Türkiye'nin en büyük duvar kağıdı üreticisi
Adres: ${adawallInfo.company.address}
İletişim: ${adawallInfo.company.phone}, ${adawallInfo.company.whatsapp}
E-posta: info@adawall.com.tr
Çalışma Saatleri: Pazartesi-Cuma 08:00-18:00, Cumartesi 08:00-15:00

Koleksiyonlar: ${adawallInfo.collections.join(', ')}

Kullanıcı sorusu: "${message}"
`
          }]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API Error:', data);
      return res.status(500).json({ 
        response: 'Üzgünüm, şu anda size yardımcı olamıyorum. Lütfen daha sonra tekrar deneyin.' 
      });
    }

    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      'Üzgünüm, şu anda size yardımcı olamıyorum. Lütfen daha sonra tekrar deneyin.';

    res.status(200).json({ response: responseText });

  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ 
      response: 'Üzgünüm, şu anda size yardımcı olamıyorum. Lütfen daha sonra tekrar deneyin.' 
    });
  }
} 