
const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-10 text-center shadow-xl space-y-6">

        {/* Profile Information */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">
            About Me
          </h1>

          <h2 className="text-lg font-semibold text-sky-400">
            Jonard Nagal
          </h2>

          <p className="text-slate-400 text-sm">
            Vibe Coder
          </p>

          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
            A bit about my background, passion, and technical skillset.
          </p>
        </div>

        <div className="border-t border-slate-700" />

        {/* My Story */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white">
            My Story
          </h2>

          <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
            <p>
              As a beginner programmer, I believe every story has
              a lesson that we can apply to our daily lives. Just
              like programming, a story has different parts that
              work together to create a meaningful result.
            </p>

            <p>
              A story teaches us that learning takes time, and we
              should not give up when we face challenges. In
              programming, we sometimes encounter errors and
              problems in our code, but we learn from our mistakes
              and find ways to fix them.
            </p>

            <p>
              For me, the main lesson is that success comes from
              patience, hard work, and continuous learning. Just
              like a programmer, we need to be curious, creative,
              and willing to improve ourselves.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700" />

        {/* Skills */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Skills & Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-sm px-4 py-2 hover:bg-slate-700 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700 pt-4">
          <p className="text-slate-500 text-xs">
            © 2026 Jonard Nagal. All Rights Reserved.
          </p>
        </div>

      </div>
    </main>
  );
}
