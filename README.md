# Voice Synthesizer

A modern, responsive text-to-speech application built with React and Vite. Transform any text into natural-sounding speech with customizable voice options, speed, and pitch controls.

## ✨ Features

- **Text-to-Speech Conversion**: Convert any text input into speech using the Web Speech API
- **Voice Selection**: Choose from all available system voices with language indicators
- **Speed Control**: Adjust speech rate from 0.5x to 2.0x speed
- **Pitch Control**: Modify voice pitch from 0.5 to 2.0 for different tonal effects
- **Real-time Status**: Visual indicators showing loading, speaking, and idle states
- **Modern UI**: Beautiful gradient design with glassmorphism effects and smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Character Counter**: Real-time character count for text input
- **Audio Controls**: Start and stop speech playback with intuitive buttons

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- A modern web browser with Web Speech API support

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd speakflowtts
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## 🎯 Usage

1. **Enter Text**: Type or paste your text in the textarea (supports up to any length)
2. **Select Voice**: Choose from available system voices in the dropdown menu
3. **Adjust Settings**: 
   - Move the speed slider to control how fast the text is spoken
   - Move the pitch slider to adjust the voice tone
4. **Start Speaking**: Click the "Speak" button to begin text-to-speech conversion
5. **Control Playback**: Use the "Stop" button to halt speech at any time

## 🏗️ Technical Stack

- **React 19.1.1** - UI library for building the user interface
- **Vite 7.1.2** - Fast build tool and development server
- **Tailwind CSS 4.1.12** - Utility-first CSS framework for styling
- **Web Speech API** - Browser API for text-to-speech functionality
- **ESLint** - Code linting and quality assurance

## 🌐 Browser Compatibility

The application uses the Web Speech API, which is supported in:

- ✅ Chrome/Chromium (recommended)
- ✅ Edge
- ✅ Safari (limited voice options)
- ❌ Firefox (limited support)

For the best experience, use Chrome or Chromium-based browsers.

## 📁 Project Structure

```
speakflowtts/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles with Tailwind imports
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in `App.jsx`. The design features:
- Gradient backgrounds
- Glassmorphism effects
- Smooth transitions and animations
- Responsive design patterns

### Voice Settings
Default values can be modified in the component state:
- **Rate**: Default 1.0 (range: 0.5 - 2.0)
- **Pitch**: Default 1.0 (range: 0.5 - 2.0)
- **Voice**: Auto-selects first available voice

## 🔧 Configuration

### Vite Configuration
The project uses a minimal Vite configuration with React and Tailwind CSS plugins. Modify `vite.config.js` for additional build options.

### Tailwind CSS
Tailwind is configured via the Vite plugin. The `src/index.css` file imports the Tailwind directives.

## 🐛 Troubleshooting

### No Voices Available
- Ensure your browser supports the Web Speech API
- Try refreshing the page to reload available voices
- Some browsers load voices asynchronously

### Speech Not Working
- Check browser permissions for microphone/audio
- Verify the Web Speech API is supported
- Try a different browser (Chrome recommended)

### Build Issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Update dependencies: `npm update`
- Check Node.js version compatibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and Vite for optimal development experience
- Styled with Tailwind CSS for rapid UI development
- Uses the Web Speech API for text-to-speech functionality
- Inspired by modern voice assistant interfaces