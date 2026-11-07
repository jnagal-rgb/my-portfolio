
import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Naga College Foundation",
    period: "2025 - 2026",
    description:
      "Currently learning programming, web development, database management, and software development.",
    achievements: [
      "Web Development",
      "Programming Fundamentals",
      "Database Management",
      "System Development",
    ],
  },
];

export default function Education() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-10 text-center shadow-xl space-y-6">

        {/* Introduction */}
        <div className="space-y-2">
          <div className="flex justify-center">
            <div className="p-3 bg-slate-800 rounded-full text-sky-400">
              <GraduationCap className="h-8 w-8" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white">
            Education
          </h1>

          <p className="text-slate-400 text-sm">
            Academic background and formal training.
          </p>
        </div>

        <div className="border-t border-slate-700" />

        {/* Education Information */}
        {educationList.map((item, idx) => (
          <div key={idx} className="space-y-5">

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold text-sky-400">
                {item.degree}
              </h2>

              <p className="text-white font-medium">
                {item.institution}
              </p>

              <span className="inline-block px-4 py-1 bg-slate-800 border border-slate-700 rounded-full text-sky-400 text-sm">
                {item.period}
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {item.description}
            </p>

            <div className="border-t border-slate-700" />

            {/* Key Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <Award className="h-5 w-5 text-sky-400" />
                Key Highlights
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                {item.achievements.map((ach, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sky-400 text-sm hover:bg-slate-700 transition"
                  >
                    {ach}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

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
