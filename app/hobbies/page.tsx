import {
  Gamepad2,
  Music,
  Dumbbell,
  TreePalm,
  BookOpen,
  CircleDot,
} from "lucide-react";

const hobbies = [
  {
    title: "Gaming",
    icon: Gamepad2,
    description:
      "Playing RPG games, Strategy Games and MOBA games.",
  },
  {
    title: "Music",
    icon: Music,
    description:
      "Playing Relapse Song, Rap song and Old song.",
  },
  {
    title: "Fitness",
    icon: Dumbbell,
    description:
      "Staying active through workouts to improve my stamina and maintain a healthy lifestyle.",
  },
  {
    title: "Nature",
    icon: TreePalm,
    description:
      "Exploring nature and enjoying the fresh air.",
  },
  {
    title: "Reading",
    icon: BookOpen,
    description:
      "Reading manga and light novels.",
  },
  {
    title: "Basketball",
    icon: CircleDot,
    description:
      "Playing basketball to stay fit and have fun.",
  },
];

export default function Hobbies() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-10 text-center shadow-xl space-y-6">

        {/* Introduction */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">
            Hobbies & Interests
          </h1>

          <p className="text-slate-400 text-sm">
            What I enjoy doing outside of coding.
          </p>
        </div>

        <div className="border-t border-slate-700" />

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {hobbies.map((hobby) => {
            const Icon = hobby.icon;

            return (
              <div
                key={hobby.title}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 space-y-3 hover:border-sky-400 transition duration-300"
              >

                {/* Hobby Icon */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-sky-400">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Hobby Title */}
                <h2 className="text-lg font-bold text-white">
                  {hobby.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {hobby.description}
                </p>

              </div>
            );
          })}

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