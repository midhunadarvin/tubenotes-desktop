## TubeNotes - Visual Video Knowledge Base

## 1. Proje Vizyonu
TubeNotes, YouTube videolarını sadece bir "link" olarak değil, görsel ve metinsel birer bilgi varlığı olarak saklamayı amaçlayan kişisel bir bilgi yönetim sistemidir (PKM). Dağınık haldeki video notlarını tek bir yerel merkezde toplar, görsel bir arayüzle erişimi hızlandırır ve profesyonel bir editör deneyimi sunar.

## 2. Teknik Stack (Tech Stack)

Platform: Localhost (Web-based desktop application).

Database (Yerel): Yerel bir data.json dosyası. Sadece notlar ve metinler, stiller ve atsrımlar kaydedilmeli. Video banner'ı kaydedilmemeli o her seferde lokalde proje her çalıştırıldığında anlık olarak çekilmeli ve yüklenmeli, video başlığı kaydedilmeli. (Sunucu gerektirmez, tamamen yerel depolama).

Editor: Tiptap veya Lexical (Notion-like slash commands ve Markdown desteği için).

Metadata Fetching: YouTube OEmbed API (Video başlığı ve banner görselini linkten otomatik çekmek için).

## 3. Temal ve Fonksiyonel Özellikler
A. Akıllı Kayıt Sistemi

Klasör oluşturma: yan menüden klasör oluşturulabilir ve seçilen klasörün içindeki notlar youtube ana sayfası gibi görünecek şekilde ana sayfada açılır, klasörlerin içine video linki eklendiğin o video o klasörde bulunur sadece, klasörler arasında gezinti yapılabilir ve hangi klasördeyse o klasördeki videolar ana sayfada görünür.

Hızlı Ekleme: Kullanıcı sadece URL yapıştırır. Sistem arka planda youtube linkinin adresinden banner'ı ve başlığı otomatik çeker. (bu yöntemi en zahmetsiz ve kolay şekilde yap) Çekilen banner ve başlık ana sayfada kaydedilir, youtube ana sayfası gibi görünür tüm notlar.

Otomatik Etiketleme: Kanal ismini ve video süresini metadata olarak kaydeder.

B. Görsel Organizasyon (Dashboard)
YouTube-Style Grid: 3x3 veya 4x4 yerleşim düzeni. Uygulama ana sayfası yotube web sitesinin ana sayfası gibi olmalı.

Banner Focus: Ana sayfadaki her not, ana sayfada videonun büyük bir görseli ile temsil edilir. İlgili banner'a tıklandığında not alma sayfası açılır ve o sayfanın bir yerinde banner yine var olmalı ve not alma ve düzenleme sayfasındayken banner'a tıklandığında ilgili videonun linkine yeni sekmede yönlendirme yapılır.

Klasörleme Sistemi: Sol menüde sınırsız derinlikte klasör oluşturma (Folders/Collections).

C. Gelişmiş Editör (Notion & Obsidian Clone)

Metin editörü ve tasarım: metin editörü olmalı yaratıc ve üretken özellikleri olmalı.

Slash Commands: /h1, /todo, /code, /image gibi komutlar.

Markdown Desteği: #, ##, ** gibi kısayollarla hızlı yazım.

Bi-directional Linking: [[Not Adı]] yazarak diğer video notlarına bağlantı verme (Obsidian tarzı).

Sticky Video Banner: Not sayfasının en üstünde videonun banner'ı yer alır. Banner'a tıklandığında video YouTube üzerinde yeni sekmede açılır.

## 4. Ekran Yapıları (UI Layout)
1. Ana Dashboard (Home)
Sidebar (Sol):

Arama Çubuğu (Hızlı erişim).

"Tüm Notlar", "Son İzlenenler", "Sık Kullanılanlar".

Klasörler: Sürükle-bırak destekli klasör ağacı.

Main Content (Sağ):

Üstte "Yeni Video Ekle" input alanı.

Grid görünümü: Video banner kartları (Hover efektli).

Kart alt bilgisi: Video başlığı ve oluşturulma tarihi.

2. Klasör Sayfası (Folder View)
Sadece o klasöre ait videoların listelendiği, o klasöre özel istatistiklerin (örn: 12 Video, 3 Tamamlandı) olduğu arayüz.

3. Not Detay Sayfası (Editor View)
Header: Büyük video banner (Paralaks efektli).

Title: Video ismi

Meta Area: Kaynak link, tarih, etiketler.

Editor: Geniş, odaklanma modu (Zen mode) olan yazı alanı.

5. Yaratıcı ve Üretken Dokunuşlar (Creative Add-ons)

Progress Tracking: Videoyu "İzlendi", "İzleniyor", "Önemli" gibi statülerle işaretleme.

Color Themes: Brutalist, Minimalist veya Dark-Mode seçenekleri (Claude Frontend Design kurallarına uygun).