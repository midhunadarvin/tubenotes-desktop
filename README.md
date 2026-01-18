# 🎬 TubeNotes - Visual Video Knowledge Base

<div align="center">
  <h3>Modern YouTube Video Note-Taking Application</h3>
  <p>A powerful desktop and web application for organizing, annotating, and managing your YouTube video knowledge base with a brutalist-editorial design aesthetic.</p>
</div>

---

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

