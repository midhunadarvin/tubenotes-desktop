# TubeNotes - Visual Video Knowledge Base

<div align="center">
  
**[Türkçe](#türkçe)** | **[English](#english)**

</div>

---

> **TR:** Bu proje hem hobi hem ihtiyaç olarak AI ile geliştirilmektedir. Geliştirmeler devam edecektir.
>
> **EN:** This project is being developed with AI as both a hobby and a necessity. Development will continue.

---

## Türkçe

<div align="center">
  <h3>Modern YouTube Video Not Alma Uygulaması</h3>
  <p>Brutalist-editorial tasarım estetiği ile YouTube videolarınızı düzenleyin, not alın ve yönetin. Masaüstü ve web uygulaması.</p>
</div>

### Genel Bakış

TubeNotes, YouTube videolarınız için kapsamlı bir bilgi yönetim sistemidir:
- YouTube videolarını özel klasörlerde düzenleyin
- Güçlü bir editör ile zengin formatlı notlar alın
- İzleme ilerlemenizi takip edin ve önemli içerikleri işaretleyin
- Başlıklar, kanallar ve not içeriklerinde arama yapın
- Masaüstü uygulaması (Windows, macOS, Linux) veya web uygulaması olarak erişin

### Özellikler

**YouTube Entegrasyonu**
- Otomatik video metadata çekme (başlık, kanal, thumbnail)
- Orijinal YouTube videolarına direkt linkler
- Thumbnail önizleme kartları

**Zengin Metin Editörü**
- Tiptap editör desteği
- Kalın, italik, altı çizili, üstü çizili formatlama
- Başlıklar, listeler (sıralı/sırasız), alıntılar
- Linkler ve kod blokları
- Karakter sayımı takibi
- Otomatik kaydetme

**Organizasyon Sistemi**
- Sınırsız klasör ve alt klasör oluşturma
- Klasör ağacı navigasyonu
- Hızlı filtreler (Önemli, Tamamlanan)

**Tema Desteği**
- Dark Theme - Derin siyahlar ve kırmızı vurgular
- Navy Theme - Lacivert ve turuncu vurgular
- Light Theme - Krem arka plan ve bordo vurgular
- Kalıcı tema seçimi

**Arama ve Filtreleme**
- Video başlıkları, kanallar ve not içeriklerinde gerçek zamanlı arama
- Duruma göre filtreleme (İzlenmedi, İzleniyor, İzlendi)
- Önem ve tamamlanma durumuna göre filtreleme
- Klasöre göre filtreleme

**Veri Yönetimi**
- Yerel depolama (bulut bağımlılığı yok)
- JSON tabanlı veri yapısı
- Dışa/içe aktarma yetenekleri
- Gizlilik odaklı tasarım

**Brutalist-Editorial Tasarım**
- Yüksek kontrast tipografi
- Cesur geometrik şekiller
- Keskin kenarlıklar ve kalın çizgiler
- Bebas Neue display fontu
- Space Mono monospace fontu
- Hover efektleri ve mikro animasyonlar

### Teknoloji Stack

| Kategori | Teknoloji |
|----------|-----------|
| Framework | Next.js 16.1.3 (App Router, Turbopack) |
| Masaüstü | Electron 40.0.0 + electron-builder |
| Dil | TypeScript 5 |
| Stil | Tailwind CSS 4 |
| Editör | Tiptap (StarterKit, Link, Placeholder, CharacterCount) |
| Animasyonlar | Framer Motion 12.26.2 |
| İkonlar | Lucide React |
| Tarih | date-fns |
| PWA | @ducanh2912/next-pwa |

### Sistem Gereksinimleri

**Derlenmiş Uygulama İçin**
- Windows: Windows 10 veya üzeri (64-bit)
- macOS: macOS 10.13 veya üzeri
- Linux: Ubuntu 18.04+, Fedora 32+, Debian 10+
- RAM: Minimum 4GB, önerilen 8GB
- Disk Alanı: 500MB boş alan

**Geliştirme İçin**
- Node.js: 18.x veya üzeri
- npm: 9.x veya üzeri
- Git: En son sürüm
- İşletim Sistemi: Windows, macOS veya Linux

### Kurulum ve Başlangıç

**Seçenek 1: Kaynak Koddan Derleme**

1. Depoyu klonlayın:
```bash
git clone https://github.com/orgofjs/tubenotes.git
cd tubenotes
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme Sunucusunu Çalıştırın (Web):
```bash
npm run dev
```
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

4. Electron Geliştirme (Masaüstü):
```bash
npm run electron-dev
```

5. Production için Derleme:

**Windows:**
```bash
npm run build-win
```
Çıktı: `dist/TubeNotes Setup 0.1.0.exe`

**macOS:**
```bash
npm run build-mac
```
Çıktı: `dist/TubeNotes-0.1.0.dmg`

**Linux:**
```bash
npm run build-linux
```
Çıktı: `dist/TubeNotes-0.1.0.AppImage` ve `.deb`

### Kullanım Kılavuzu

**Video Ekleme**
1. "+ Add New Video" butonuna tıklayın
2. YouTube URL'sini yapıştırın
3. "Add Video"ya tıklayın
4. Metadata otomatik olarak çekilecektir

**Klasör Oluşturma**
1. Kenar çubuğunda "+ Add Folder"a tıklayın
2. Klasör adını girin ve Enter'a basın
3. Alt klasör oluşturmak için herhangi bir klasörün yanındaki klasör ikonuna tıklayın

**Not Alma**
1. Herhangi bir video kartına tıklayın
2. Formatlama için zengin metin editörü araç çubuğunu kullanın
3. Notlar 3 saniye hareketsizlik sonrası otomatik kaydedilir
4. Geri dönmek için "← Back to Dashboard" butonuna tıklayın

**Durum Değiştirme**
1. Video kartının üzerine gelin
2. Durum butonlarına tıklayın: Unwatched / Watching / Watched
3. Important bayrağını (yıldız ikonu) açıp kapatın
4. Completed işaretini açıp kapatın

**Arama**
1. Kenar çubuğundaki arama kutusunu kullanın
2. Arama, video başlıkları, kanallar ve not içeriklerinde çalışır
3. Daha hassas sonuçlar için hızlı filtrelerle birleştirin

**Tema Değiştirme**
1. Kenar çubuğundaki tema açılır menüsüne tıklayın
2. Dark, Navy veya Light seçin
3. Tema tercihi otomatik olarak kaydedilir

### Konfigürasyon

**Temaları Özelleştirme**

[app/globals.css](app/globals.css) dosyasını düzenleyerek tema renklerini değiştirin:

```css
:root[data-theme="dark"] {
  --color-bg: #0a0a0a;
  --color-primary: #ff0000;
  /* ... daha fazla değişken */
}
```

**YouTube API Yapılandırması**

Uygulama YouTube'un public oEmbed API'sini kullanır (API anahtarı gerektirmez). Metadata çekmeyi değiştirmek için [lib/youtube.ts](lib/youtube.ts) dosyasını düzenleyin.

**Veri Depolama Konumu**

- Web: Tarayıcı localStorage
- Masaüstü:
  - Windows: `%APPDATA%/TubeNotes/data`
  - macOS: `~/Library/Application Support/TubeNotes/data`
  - Linux: `~/.config/TubeNotes/data`

### Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Lütfen:
1. Depoyu fork edin
2. Özellik dalı oluşturun (`git checkout -b feature/harika-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Harika özellik ekle'`)
4. Dalı push edin (`git push origin feature/harika-ozellik`)
5. Pull Request açın

### Hata Raporları ve Özellik İstekleri

Hata raporlamak veya özellik istemek için lütfen [GitHub Issues](https://github.com/orgofjs/tubenotes/issues) kullanın.

### Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## English

<div align="center">
  <h3>Modern YouTube Video Note-Taking Application</h3>
  <p>A powerful desktop and web application for organizing, annotating, and managing your YouTube video knowledge base with a brutalist-editorial design aesthetic.</p>
</div>

### Overview

TubeNotes is a comprehensive video knowledge management system that helps you:
- Organize YouTube videos into custom folders
- Take rich-formatted notes with a powerful editor
- Track your watch progress and mark important content
- Search across titles, channels, and note content
- Access your notes as a desktop app (Windows, macOS, Linux) or web app

### Features

**YouTube Integration**
- Automatic video metadata fetching (title, channel, thumbnail)
- Direct links to original YouTube videos
- Thumbnail preview cards

**Rich Text Editor**
- Powered by Tiptap editor
- Bold, italic, underline, strikethrough formatting
- Headings, lists (ordered/unordered), blockquotes
- Links and code blocks
- Character count tracking
- Auto-save functionality

**Organization System**
- Create unlimited folders and subfolders
- Folder tree navigation
- Quick filters (Important, Completed)

**Theme Support**
- Dark Theme - Deep blacks with red accents
- Navy Theme - Navy blues with orange accents
- Light Theme - Cream background with burgundy accents
- Persistent theme selection

**Search & Filtering**
- Real-time search across video titles, channels, and note content
- Filter by status (Unwatched, Watching, Watched)
- Filter by importance and completion
- Filter by folder

**Data Management**
- Local storage (no cloud dependency)
- JSON-based data structure
- Export/import capabilities
- Privacy-focused design

**Brutalist-Editorial Design**
- High contrast typography
- Bold geometric shapes
- Sharp borders and thick outlines
- Bebas Neue display font
- Space Mono monospace font
- Hover effects and micro-animations

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.1.3 (App Router, Turbopack) |
| Desktop | Electron 40.0.0 + electron-builder |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Editor | Tiptap (with StarterKit, Link, Placeholder, CharacterCount) |
| Animations | Framer Motion 12.26.2 |
| Icons | Lucide React |
| Date | date-fns |
| PWA | @ducanh2912/next-pwa |

### System Requirements

**For Running Built Application**
- Windows: Windows 10 or later (64-bit)
- macOS: macOS 10.13 or later
- Linux: Ubuntu 18.04+, Fedora 32+, Debian 10+
- RAM: 4GB minimum, 8GB recommended
- Disk Space: 500MB free space

**For Development**
- Node.js: 18.x or later
- npm: 9.x or later
- Git: Latest version
- Operating System: Windows, macOS, or Linux

### Installation & Setup

**Option 1: Build from Source**

1. Clone the Repository:
```bash
git clone https://github.com/orgofjs/tubenotes.git
cd tubenotes
```

2. Install Dependencies:
```bash
npm install
```

3. Run Development Server (Web):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Run Electron Development (Desktop):
```bash
npm run electron-dev
```

5. Build for Production:

**Windows:**
```bash
npm run build-win
```
Output: `dist/TubeNotes Setup 0.1.0.exe`

**macOS:**
```bash
npm run build-mac
```
Output: `dist/TubeNotes-0.1.0.dmg`

**Linux:**
```bash
npm run build-linux
```
Output: `dist/TubeNotes-0.1.0.AppImage` and `.deb`

### Usage Guide

**Adding a Video**
1. Click the "+ Add New Video" button
2. Paste a YouTube URL
3. Click "Add Video"
4. Metadata will be fetched automatically

**Creating Folders**
1. In the sidebar, click "+ Add Folder"
2. Enter folder name and press Enter
3. Create subfolders by clicking the folder icon next to any folder

**Taking Notes**
1. Click on any video card
2. Use the rich text editor toolbar for formatting
3. Notes auto-save after 3 seconds of inactivity
4. Click "← Back to Dashboard" to return

**Changing Status**
1. Hover over any video card
2. Click status buttons: Unwatched / Watching / Watched
3. Toggle Important flag (star icon)
4. Toggle Completed checkmark

**Searching**
1. Use the search box in the sidebar
2. Search works across video titles, channels, and note content
3. Combine with quick filters for refined results

**Changing Theme**
1. Click the theme dropdown in the sidebar
2. Select: Dark, Navy, or Light
3. Theme preference is saved automatically

### Configuration

**Customizing Themes**

Edit [app/globals.css](app/globals.css) to modify theme colors:

```css
:root[data-theme="dark"] {
  --color-bg: #0a0a0a;
  --color-primary: #ff0000;
  /* ... more variables */
}
```

**YouTube API Configuration**

The app uses YouTube's public oEmbed API (no API key required). To modify metadata fetching, edit [lib/youtube.ts](lib/youtube.ts).

**Data Storage Location**

- Web: Browser localStorage
- Desktop:
  - Windows: `%APPDATA%/TubeNotes/data`
  - macOS: `~/Library/Application Support/TubeNotes/data`
  - Linux: `~/.config/TubeNotes/data`

### Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Bug Reports & Feature Requests

Please use [GitHub Issues](https://github.com/orgofjs/tubenotes/issues) to report bugs or request features.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with care by <a href="https://github.com/orgofjs">orgofjs</a></p>
  <p>
    <a href="https://github.com/orgofjs/tubenotes/stargazers">Star this repo</a> |
    <a href="https://github.com/orgofjs/tubenotes/issues">Report Bug</a> |
    <a href="https://github.com/orgofjs/tubenotes/issues">Request Feature</a>
  </p>
</div>

## 📖 Overview

TubeNotes is a comprehensive video knowledge management system that helps you:
- Organize YouTube videos into custom folders
- Take rich-formatted notes with a powerful editor
- Track your watch progress and mark important content
- Search across titles, channels, and note content
- Access your notes as a desktop app (Windows, macOS, Linux) or web app

## ✨ Features

### 📹 **YouTube Integration**
- Automatic video metadata fetching (title, channel, thumbnail)
- Direct links to original YouTube videos
- Thumbnail preview cards

### 📝 **Rich Text Editor**
- Powered by Tiptap editor
- Bold, italic, underline, strikethrough formatting
- Headings, lists (ordered/unordered), blockquotes
- Links and code blocks
- Character count tracking
- Auto-save functionality

### 📁 **Organization System**
- Create unlimited folders and subfolders
- Drag-and-drop video organization
- Folder tree navigation
- Quick filters (Important, Completed)

### 🎨 **Theme Support**
- **Dark Theme** - Deep blacks with red accents
- **Navy Theme** - Navy blues with orange accents
- **Light Theme** - Cream background with burgundy accents
- Persistent theme selection

### 🔍 **Search & Filtering**
- Real-time search across video titles, channels, and note content
- Filter by status (Unwatched, Watching, Watched)
- Filter by importance and completion
- Filter by folder

### 💾 **Data Management**
- Local storage (no cloud dependency)
- JSON-based data structure
- Export/import capabilities
- Privacy-focused design

### 🎯 **Brutalist-Editorial Design**
- High contrast typography
- Bold geometric shapes
- Sharp borders and thick outlines
- Bebas Neue display font
- Space Mono monospace font
- Hover effects and micro-animations

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.1.3 (App Router, Turbopack) |
| **Desktop** | Electron 40.0.0 + electron-builder |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Editor** | Tiptap (with StarterKit, Link, Placeholder, CharacterCount) |
| **Animations** | Framer Motion 12.26.2 |
| **Icons** | Lucide React |
| **Date** | date-fns |
| **PWA** | @ducanh2912/next-pwa |

## 💻 System Requirements

### For Running Built Application
- **Windows**: Windows 10 or later (64-bit)
- **macOS**: macOS 10.13 or later
- **Linux**: Ubuntu 18.04+, Fedora 32+, Debian 10+
- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: 500MB free space

### For Development
- **Node.js**: 18.x or later
- **npm**: 9.x or later
- **Git**: Latest version
- **Operating System**: Windows, macOS, or Linux

## 🚀 Installation & Setup

### Option 1: Download Pre-built Application (Recommended)

1. Go to [Releases](https://github.com/orgofjs/tubenotes/releases)
2. Download the installer for your platform:
   - Windows: `TubeNotes-Setup-0.1.0.exe`
   - macOS: `TubeNotes-0.1.0.dmg`
   - Linux: `TubeNotes-0.1.0.AppImage` or `.deb`
3. Run the installer and follow the prompts
4. Launch TubeNotes from your applications menu

### Option 2: Build from Source

#### 1. Clone the Repository
```bash
git clone https://github.com/orgofjs/tubenotes.git
cd tubenotes
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Run Development Server (Web)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

#### 4. Run Electron Development (Desktop)
```bash
npm run electron-dev
```

#### 5. Build for Production

**Windows:**
```bash
npm run build-win
```
Output: `dist/TubeNotes Setup 0.1.0.exe`

**macOS:**
```bash
npm run build-mac
```
Output: `dist/TubeNotes-0.1.0.dmg`

**Linux:**
```bash
npm run build-linux
```
Output: `dist/TubeNotes-0.1.0.AppImage` and `.deb`

## 📂 Project Structure

```
tubenotes/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Main application page
├── components/             # React components
│   ├── Dashboard.tsx      # Video grid and add video UI
│   ├── Editor.tsx         # Tiptap rich text editor
│   ├── ErrorMessage.tsx   # Error display component
│   ├── LoadingSpinner.tsx # Loading state component
│   ├── NotePage.tsx       # Note editing page
│   ├── Sidebar.tsx        # Navigation and folder tree
│   ├── ThemeSwitcher.tsx  # Theme selection UI
│   └── VideoCard.tsx      # Individual video card
├── lib/                   # Utility functions
│   ├── storage.ts        # localStorage CRUD operations
│   └── youtube.ts        # YouTube API integration
├── types/                 # TypeScript type definitions
│   └── index.ts          # Core interfaces (VideoNote, Folder, etc.)
├── public/                # Static assets
│   ├── manifest.json     # PWA manifest
│   └── *.png             # App icons
├── data/                  # User data (gitignored)
│   └── data.json         # localStorage backup
├── main.js               # Electron main process
├── package.json          # Dependencies and scripts
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── tailwind.config.ts    # Tailwind CSS configuration (if exists)
```

## 🎯 Usage Guide

### Adding a Video
1. Click the **"+ Add New Video"** button
2. Paste a YouTube URL
3. Click **"Add Video"**
4. Metadata will be fetched automatically

### Creating Folders
1. In the sidebar, click **"+ Add Folder"**
2. Enter folder name and press Enter
3. Create subfolders by clicking the folder icon next to any folder

### Taking Notes
1. Click on any video card
2. Use the rich text editor toolbar for formatting
3. Notes auto-save after 3 seconds of inactivity
4. Click **"← Back to Dashboard"** to return

### Changing Status
1. Hover over any video card
2. Click status buttons: **Unwatched** / **Watching** / **Watched**
3. Toggle **Important** flag (star icon)
4. Toggle **Completed** checkmark

### Searching
1. Use the search box in the sidebar
2. Search works across video titles, channels, and note content
3. Combine with quick filters for refined results

### Changing Theme
1. Click the theme dropdown in the sidebar
2. Select: **Dark**, **Navy**, or **Light**
3. Theme preference is saved automatically

## 🔧 Configuration

### Customizing Themes

Edit [app/globals.css](app/globals.css) to modify theme colors:

```css
:root[data-theme="dark"] {
  --color-bg: #0a0a0a;
  --color-primary: #ff0000;
  /* ... more variables */
}
```

### YouTube API Configuration

The app uses YouTube's public oEmbed API (no API key required). To modify metadata fetching, edit [lib/youtube.ts](lib/youtube.ts).

### Data Storage Location

- **Web**: Browser localStorage
- **Desktop**: 
  - Windows: `%APPDATA%/TubeNotes/data`
  - macOS: `~/Library/Application Support/TubeNotes/data`
  - Linux: `~/.config/TubeNotes/data`

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Bug Reports & Feature Requests

Please use [GitHub Issues](https://github.com/orgofjs/tubenotes/issues) to report bugs or request features.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/orgofjs">orgofjs</a></p>
  <p>
    <a href="https://github.com/orgofjs/tubenotes/stargazers">⭐ Star this repo</a> |
    <a href="https://github.com/orgofjs/tubenotes/issues">🐛 Report Bug</a> |
    <a href="https://github.com/orgofjs/tubenotes/issues">💡 Request Feature</a>
  </p>
</div>

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Usage

### Adding Videos
1. Click the **"ADD VIDEO"** button
2. Paste a YouTube URL (supports multiple formats)
3. System automatically fetches video metadata
4. Video appears in your current folder

### Creating Folders
1. Click the **folder plus icon** in sidebar
2. Enter folder name
3. Press Enter or click **"EKLE"**

### Taking Notes
1. Click any video card
2. Use the rich text editor
3. Notes auto-save every 3 seconds
4. Click **"BACK TO LIBRARY"** to return

### Video Status
Hover over any video card to access status buttons:
- 👁️‍🗨️ **Unwatched**: Not viewed yet (gray)
- 👁️ **Watching**: Currently watching (orange)
- ✅ **Watched**: Completed (green)
- ⭐ **Important**: Starred/priority (yellow)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Editor**: Tiptap
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Date Formatting**: date-fns
- **Storage**: localStorage (browser)
- **API**: YouTube oEmbed API

## 📁 Project Structure

```
tubenotes/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main app logic
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── Sidebar.tsx         # Folder navigation
│   ├── Dashboard.tsx       # Video grid view
│   ├── VideoCard.tsx       # Individual video card
│   ├── NotePage.tsx        # Note editing page
│   └── Editor.tsx          # Tiptap rich text editor
├── lib/
│   ├── storage.ts          # localStorage utilities
│   └── youtube.ts          # YouTube API utilities
├── types/
│   └── index.ts            # TypeScript interfaces
└── data/
    └── data.json           # Initial data structure
```

## 🎨 Design Philosophy

Following the **Brutalist-Editorial** aesthetic:
- **Typography**: Distinctive display font (Bebas Neue) paired with refined monospace (Space Mono)
- **Color**: Bold primary (#ff3366) with sharp accents
- **Motion**: Purposeful animations on hover and page transitions
- **Composition**: Grid-breaking elements with generous negative space
- **Details**: Brutal borders, geometric shadows, grid noise texture

## 🔮 Roadmap

- [ ] Search functionality
- [ ] Bi-directional linking `[[Note Name]]`
- [ ] Slash commands `/h1`, `/todo`, `/code`
- [ ] Drag & drop folder organization
- [ ] Export/Import JSON data
- [ ] Theme switcher (Brutalist, Minimalist, Dark)
- [ ] Video duration tracking
- [ ] Tags and filters
- [ ] Recent videos section
- [ ] Keyboard shortcuts

## 🐛 Known Issues

- Thumbnails may not load for private or removed videos
- Auto-save interval is fixed at 3 seconds
- No undo/redo for folder operations

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design principles inspired by Brutalist web design
- Built with guidance from Claude Frontend Design principles
- YouTube API by Google

---

**Made with 💙 for knowledge seekers and video enthusiasts**

