
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4">

      <div className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-10 text-center shadow-xl space-y-6">

        {/* Introduction */}
        <div className="space-y-2">
          <p className="text-sky-400 text-xs font-semibold tracking-widest uppercase">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Jonard Nagal
          </h1>

          <h2 className="text-lg font-semibold text-sky-400">
            Aspiring Full-Vide Coder
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            Hello! I'm a beginner programmer who enjoys learning
            how to build websites and applications.
          </p>
        </div>

        <div className="border-t border-slate-700" />

        {/* About Me */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">
            About Me
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            I am passionate about technology, programming,
            and creating useful digital experiences. I enjoy
            learning new skills and improving my knowledge as a programmer.
          </p>
        </div>

        <div className="border-t border-slate-700" />

        {/* My Goal */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">
            My Goal
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            My goal is to become a skilled developer,
            create meaningful projects to help other people, and continuously improve
            my programming knowledge.
          </p>
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
