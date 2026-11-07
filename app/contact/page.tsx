
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-10 text-center shadow-xl space-y-6">

        {/* Introduction */}
        <div className="space-y-2">
          <div className="flex justify-center">
            <div className="p-3 bg-slate-800 rounded-full text-sky-400">
              <Mail className="h-8 w-8" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white">
            Contact Me
          </h1>

          <p className="text-slate-400 text-sm">
            Have a question, collaboration idea, or project in mind?
            Feel free to reach out!
          </p>
        </div>

        <div className="border-t border-slate-700" />

        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            My Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            {/* Email */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
              <Mail className="h-6 w-6 text-sky-400 mx-auto" />
              <p className="text-xs text-slate-400 font-medium">
                Email
              </p>
              <p className="text-sm font-semibold text-white break-all">
                jnagal@ncf.edu.ph
              </p>
            </div>

            {/* Phone */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
              <Phone className="h-6 w-6 text-sky-400 mx-auto" />
              <p className="text-xs text-slate-400 font-medium">
                Phone
              </p>
              <p className="text-sm font-semibold text-white">
                +1 (69) 8101-95973
              </p>
            </div>

            {/* Location */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
              <MapPin className="h-6 w-6 text-sky-400 mx-auto" />
              <p className="text-xs text-slate-400 font-medium">
                Location
              </p>
              <p className="text-sm font-semibold text-white">
                Milaor, Camarines Sur, Philippines
              </p>
            </div>

          </div>
        </div>

        <div className="border-t border-slate-700" />

        {/* Message Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Send a Message
          </h2>

          <p className="text-slate-400 text-sm">
            Fill out the form below to send me a message.
          </p>

          <form className="space-y-4 text-left">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-sky-400 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-sky-400 transition"
                />
              </div>

            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project Inquiry / Hello"
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-sky-400 transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Message
              </label>

              <textarea
                rows={3}
                placeholder="Your message here..."
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-sky-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition duration-300"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>

          </form>
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
