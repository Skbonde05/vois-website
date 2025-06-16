import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  Lock,
  Mic,
  Settings,
  FileText,
  Globe,
  Music,
  AlertTriangle,
  Zap,
  Monitor,
  Clock,
} from "lucide-react";

const iconMap = {
  security: <Lock className="h-5 w-5 text-primary" />,
  interaction: <Mic className="h-5 w-5 text-primary" />,
  system: <Settings className="h-5 w-5 text-primary" />,
  productivity: <FileText className="h-5 w-5 text-primary" />,
  web: <Globe className="h-5 w-5 text-primary" />,
  media: <Music className="h-5 w-5 text-primary" />,
  emergency: <AlertTriangle className="h-5 w-5 text-primary" />,
  automation: <Zap className="h-5 w-5 text-primary" />,
  monitoring: <Monitor className="h-5 w-5 text-primary" />,
  utilities: <Clock className="h-5 w-5 text-primary" />,
};

const features = [
  { name: "Voice Authentication", category: "security" },
  { name: "Noise Tolerant Matching", category: "security" },
  { name: "Multi-Attempt Verification", category: "security" },
  { name: "Speech to Text", category: "interaction" },
  { name: "Text to Speech (Multilingual)", category: "interaction" },
  { name: "Voice Recording", category: "interaction" },
  { name: "Shutdown / Restart / Sleep", category: "system" },
  { name: "Brightness & Volume Control", category: "system" },
  { name: "Hotspot / Wi-Fi / Bluetooth", category: "system" },
  { name: "System Apps (CMD, Explorer)", category: "system" },
  { name: "Wallpaper Changer", category: "system" },
  { name: "File/Folder Management", category: "productivity" },
  { name: "Read Text/PDF/DOCX", category: "productivity" },
  { name: "Document Dictation", category: "productivity" },
  { name: "Clipboard Actions", category: "productivity" },
  { name: "Reminders & Alarms", category: "productivity" },
  { name: "Math Calculations", category: "productivity" },
  { name: "Email via Gmail", category: "web" },
  { name: "Open Websites", category: "web" },
  { name: "Web Search", category: "web" },
  { name: "News & Weather", category: "web" },
  { name: "Music Playback", category: "media" },
  { name: "Camera & Photos", category: "media" },
  { name: "Take Screenshots", category: "media" },
  { name: "Emergency SMS via Twilio", category: "emergency" },
  { name: "Phone Dialing (via system)", category: "emergency" },
  { name: "Mouse/Keyboard Automation", category: "automation" },
  { name: "App Launcher", category: "automation" },
  { name: "Astrology Predictions", category: "automation" },
  { name: "CPU / RAM / Battery Reports", category: "monitoring" },
  { name: "File Search (PDFs, etc.)", category: "monitoring" },
  { name: "Date / Time Announcement", category: "utilities" },
  { name: "Desktop Notifications", category: "utilities" },
  { name: "Voice Match", category: "utilities" },
];

const categories = [
  "all",
  "security",
  "interaction",
  "system",
  "productivity",
  "web",
  "media",
  "emergency",
  "automation",
  "monitoring",
  "utilities",
];

export const FeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFeatures = features.filter(
    (feature) => activeCategory === "all" || feature.category === activeCategory
  );

  return (
    <section id="features" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What can <span className="text-primary">VOIS</span> Do?
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-sm border border-border card-hover transition-transform hover:scale-[1.02] flex items-center gap-3"
            >
              <div>{iconMap[feature.category]}</div>
              <h3 className="font-semibold text-base">{feature.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
