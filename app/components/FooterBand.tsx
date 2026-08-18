export default function FooterBand() {
  return (
    <footer className="w-full bg-sand-deep border-t border-espresso/10">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="mt-1 font-display text-lg sm:text-xl tracking-[0.15em] text-terracotta uppercase">
          &apos;Manqabang
        </p>
        <p className="mt-2 font-script text-1xl sm:text-2xl text-terracotta">
          Stay. Gather. Discover.
        </p>
        <p className="mt-2 font-body text-lg text-espresso/90">
        Let&apos;s Connect:{" "} 
        <a href="#email" className="hover:text-terracotta transition-colors">
            rmmabejane@gmail.com, {" "}
          </a>
          <span aria-hidden="true"></span>
          <a href="#contact" className="hover:text-terracotta transition-colors">
            +1 571 376 1911
          </a>
        </p>
      </div>
    </footer>
  );
}
