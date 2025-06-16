import { Mic, Rocket, Wrench } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">VOIS</span>
        </h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="gradient-border p-10 min-h-[280px] card-hover text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 bg-white dark:bg-[#1e1e1e]">
            <div className="flex flex-col items-center gap-4">
              <Mic className="h-10 w-10 text-primary drop-shadow-[0_0_6px_rgba(128,90,213,0.5)]" />
              <h4 className="text-xl font-semibold">What is VOIS?</h4>
              <p className="text-muted-foreground text-sm">
                VOIS is a smart laptop voice assistant that listens and responds instantly, helping you multitask effortlessly.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="gradient-border p-10 min-h-[280px] card-hover text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 bg-white dark:bg-[#1e1e1e]">
            <div className="flex flex-col items-center gap-4">
              <Rocket className="h-10 w-10 text-primary drop-shadow-[0_0_6px_rgba(128,90,213,0.5)] " />
              <h4 className="text-xl font-semibold">Why VOIS?</h4>
              <p className="text-muted-foreground text-sm">
                VOIS boosts productivity by automating tasks, offering hands-free operation, and enhancing accessibility.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="gradient-border p-10 min-h-[280px] card-hover text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 bg-white dark:bg-[#1e1e1e]">
            <div className="flex flex-col items-center gap-4">
              <Wrench className="h-10 w-10 text-primary drop-shadow-[0_0_6px_rgba(128,90,213,0.5)]" />
              <h4 className="text-xl font-semibold">How VOIS Works</h4>
              <p className="text-muted-foreground text-sm">
                VOIS uses speech recognition and AI to process commands, control apps, search data, and execute tasks in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
