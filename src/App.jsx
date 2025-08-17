import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(availableVoices[0].name);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [selectedVoice]);

  const handleSpeak = () => {
    if (text.trim() === "") {
      alert("Please enter some text!");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = voices.find((v) => v.name === selectedVoice);
      if (voice) utterance.voice = voice;
      utterance.rate = rate;
      utterance.pitch = pitch;

      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsLoading(false);
      };
      utterance.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }, 300);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
              <span className="text-3xl">🎙️</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
              Voice Synthesizer
            </h1>
            <p className="text-white/70 text-lg">Transform your text into speech</p>
          </div>

          {/* Text Input */}
          <div className="mb-6">
            <label className="block text-white/90 font-medium mb-3 text-lg">Your Message</label>
            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here and watch it come to life..."
                className="w-full h-36 p-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none text-lg"
              />
              <div className="absolute bottom-3 right-3 text-white/50 text-sm">
                {text.length} characters
              </div>
            </div>
          </div>

          {/* Controls Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Voice Selection */}
            <div>
              <label className="block text-white/90 font-medium mb-3 text-lg">Voice</label>
              <div className="relative">
                <select
                  value={selectedVoice || ""}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                >
                  {voices.map((voice, idx) => (
                    <option key={idx} value={voice.name} className="bg-gray-800 text-white">
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Speed and Pitch Controls */}
            <div className="space-y-4">
              {/* Rate Control */}
              <div>
                <label className="block text-white/90 font-medium mb-2">
                  Speed: <span className="text-purple-300 font-bold">{rate.toFixed(1)}x</span>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(parseFloat(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Pitch Control */}
              <div>
                <label className="block text-white/90 font-medium mb-2">
                  Pitch: <span className="text-purple-300 font-bold">{pitch.toFixed(1)}</span>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={pitch}
                    onChange={(e) => setPitch(parseFloat(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleSpeak}
              disabled={isLoading || isSpeaking}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-w-[140px]"
            >
              <div className="flex items-center justify-center gap-3">
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : isSpeaking ? (
                  <div className="flex gap-1">
                    <div className="w-1 h-5 bg-white rounded-full animate-pulse"></div>
                    <div className="w-1 h-5 bg-white rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-1 h-5 bg-white rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                ) : (
                  <span className="text-xl">🔊</span>
                )}
                <span>
                  {isLoading ? "Preparing..." : isSpeaking ? "Speaking..." : "Speak"}
                </span>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={handleStop}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[140px]"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl">⏹️</span>
                <span>Stop</span>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Status Indicator */}
          {isSpeaking && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Audio playing...</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-white/50">
          <p className="text-sm">Built with Web Speech API • Modern voice synthesis</p>
        </div>
      </div>
    </div>
  );
}

export default App; 