import { ArrowUp, X } from "lucide-react";
import logo from "/logo1.png";
import { useState } from "react";

export const Footer = () => {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <>
      
      <footer className="py-10 px-4 bg-card border-t border-border mt-12 relative z-10">
        {/* Top Row */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Left: Logo + VOIS */}
          <div className="flex items-center gap-6 ml-12 mt-6">
            <img src={logo} alt="VOIS Logo" className="h-12 w-12 object-contain" />
            <span className="text-4xl font-bold">VOIS</span>
          </div>

          {/* Right: Legal Link */}
          <div className="flex gap-9 pr-8 pt-8 items-center text-sm text-muted-foreground">
            <button onClick={() => setShowLegal(true)} className="hover:underline">
              Legal Info
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} VOIS. All rights reserved.
        </div>
      </footer>
      

      {/* Modal */}
      {showLegal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-card text-foreground shadow-lg max-w-2xl w-full p-6 rounded-md relative animate-fade-in my-10 max-h-[85vh]">
            {/* Close Button OUTSIDE scrollable */}
            <button
              onClick={() => setShowLegal(false)}
              className="absolute top-4 right-15 text-gray-500 hover:text-white focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[75vh] pr-4 custom-scrollbar">
              {/* Privacy Policy */}
              <h2 className="text-2xl font-bold mb-4 text-left">Privacy Policy</h2>
              <div className="text-sm space-y-4 text-left mb-8">
                <p><strong>Effective Date:</strong> June 2025</p>
                <p>Thank you for using VOIS — your personal voice assistant for laptops.</p>
                <p>This Privacy Policy explains how your information is handled when you use the VOIS application or visit any related content shared by the developer.</p>
                <h3 className="font-semibold">1. Data Collection</h3>
                <p>VOIS does not collect, store, or transmit any personal data. All voice processing and system interactions happen locally on your device.</p>
                <h3 className="font-semibold">2. Microphone Access</h3>
                <p>VOIS requires microphone access to function as a voice assistant. The microphone is used only while the assistant is active and is never recorded or shared.</p>
                <h3 className="font-semibold">3. Tracking</h3>
                <p>VOIS does not use cookies, analytics, or any online tracking. All functionality is offline and secure.</p>
                <h3 className="font-semibold">4. Security</h3>
                <p>Since VOIS runs entirely offline, no user data is ever transmitted to external servers. You are responsible for ensuring your device’s operating system and environment are secure.</p>
                <h3 className="font-semibold">5. Changes</h3>
                <p>This policy may be updated in future versions of VOIS. Any updates will be reflected in the downloaded software package or its documentation.</p>
                <p>For questions, email: <a href="mailto:voisassistant@gmail.com" className="text-primary underline">voisassistant@gmail.com</a></p>
              </div>

              {/* Terms of Use */}
              <h2 className="text-2xl font-bold mb-4 text-left">Terms of Use</h2>
              <div className="text-sm space-y-4 text-left">
                <p><strong>Effective Date:</strong> June 2025</p>
                <p>Please read these terms before using VOIS. By downloading and using VOIS, you agree to these terms.</p>
                <h3 className="font-semibold">1. Usage</h3>
                <p>You may use VOIS for personal or educational purposes. Redistribution, reverse-engineering, or commercial use without permission is prohibited.</p>
                <h3 className="font-semibold">2. Acceptance</h3>
                <p>By downloading and using VOIS, you agree to these terms. If you do not agree, do not use the software.</p>
                <h3 className="font-semibold">3. Disclaimer</h3>
                <p>VOIS is provided "as is" without warranty. The developer is not liable for damages.</p>
                <h3 className="font-semibold">4. Purpose</h3>
                <p>VOIS is a voice assistant application developed for educational and personal productivity use on Windows-based laptops.</p>
                <h3 className="font-semibold">5. Updates</h3>
                <p>The developer may modify or discontinue VOIS at any time. Updates will be shared through official channels only.</p>
                <h3 className="font-semibold">6. Contact</h3>
                <p>For issues or suggestions, email: <a href="mailto:voisassistant@gmail.com" className="text-primary underline">voisassistant@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
