import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Wake Word Detection",
    description: "VOIS listens for your custom wake word (e.g., 'Hey VOIS') and activates instantly.",
    image: "/image.png",
    tags: ["Speech", "Wake Word", "Activation"],
  },
  {
    id: 2,
    title: "Voice Understanding",
    description: "Converts your voice to text using AI and processes the command intelligently.",
    image: "/voice.PNG",
    tags: ["NLP", "Voice to Text", "AI"],
  },
  {
    id: 3,
    title: "Task Execution",
    description: "Performs tasks like opening apps, reading emails, or searching the web—all hands-free.",
    image: "/task.PNG",
    tags: ["Automation", "System Control", "Productivity"],
  },
];

export const WorkingSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          How <span className="text-primary">VOIS</span> Works
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here's a simple breakdown of how the VOIS assistant works from start to finish.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-border"
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {step.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Updated Button with PDF download */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="/vois_use.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get VOIS Commands & Steps <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
