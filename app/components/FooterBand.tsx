import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function FooterBand() {
  return (
    <footer className="w-full bg-sand-deep border-t border-espresso/10">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="mt-1 font-display text-lg sm:text-xl tracking-[0.15em] text-terracotta uppercase">
          &apos;Manqabang
        </p>
        <p className="mt-2 font-script text-xl sm:text-2xl text-terracotta">
          Stay. Gather. Discover.
        </p>

        <p className="mt-4 font-body text-lg text-espresso/90">
          Let&apos;s Connect
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-body text-base text-espresso/90">
          <a
            href="mailto:rmmabejane@gmail.com"
            className="inline-flex items-center gap-2 hover:text-terracotta transition-colors"
          >
            <Mail size={17} strokeWidth={1.75} aria-hidden="true" />
            rmmabejane@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/refiloemabejane/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-terracotta transition-colors"
          >
            <FaLinkedin size={16} aria-hidden="true" />
            Refiloe Mabejane
          </a>
          <a
            href="tel:+15713761911"
            className="inline-flex items-center gap-2 hover:text-terracotta transition-colors"
          >
            <Phone size={17} strokeWidth={1.75} aria-hidden="true" />
            +1 571 376 1911
          </a>
        </div>
      </div>
    </footer>
  );
}