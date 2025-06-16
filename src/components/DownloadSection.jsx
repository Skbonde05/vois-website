export const DownloadSection = () => {
  return (
    <section id="download" className="py-16 px-6 bg-muted text-foreground">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">Download VOIS for Windows</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Install VOIS on your laptop and experience hands-free voice control.
          Lightweight, secure, and runs automatically at startup.
        </p>

        {/* Download Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1_2pARy8rTGigYABf2IE4xSbxvi-h9lNJ" target="_blank"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg text-lg font-semibold shadow hover:bg-primary/90 transition"
        >
          📥 Download for Windows (.exe)
        </a>

        {/* System Requirements as Cards */}
<div className="mt-10">
  <h3 className="text-2xl font-semibold mb-6 text-center">System Requirements</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {[
      { label: "Windows 10 or Higher", icon: "🪟" },
      { label: "Built-in or External Microphone", icon: "🎙️" },
      { label: "100MB Free Disk Space", icon: "💾" },
      { label: "Minimum 2GB RAM", icon: "🧠" },
      { label: "Optional Internet Access", icon: "🌐" },
      { label: "Auto-Starts on Boot", icon: "⚙️" },
    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 shadow-sm"
      >
        <span className="text-2xl">{item.icon}</span>
        <p className="text-sm text-muted-foreground">{item.label}</p>
      </div>
    ))}
  </div>
</div>


        {/* Trust Badges */}
        <div className="mt-8 flex justify-center gap-4 text-sm text-muted-foreground">
          <span className="bg-card px-4 py-2 rounded-full border">✅ No Ads</span>
          <span className="bg-card px-4 py-2 rounded-full border">🔒 Secure & Private</span>
          <span className="bg-card px-4 py-2 rounded-full border">⚡ Lightweight</span>
        </div>

        {/* Installation Guide Button */}
        <div className="mt-8">
          <a
            href="/vois_installation_guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-secondary text-primary border border-primary rounded-md font-medium hover:bg-secondary/90 transition"
          >
            📄 View Installation Guide (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};
