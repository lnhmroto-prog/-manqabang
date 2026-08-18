import CoverImage from "./CoverImage";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] lg:min-h-[500px]">
        <CoverImage
          src="/DecorMaq.png"
          alt="Decorated table setting overlooking Lake Maqalika"
          className="min-h-[280px] lg:min-h-full"
          fade={["right"]}
          priority
        />

        <div className="flex flex-col items-center justify-center text-center px-5 sm:px-8 py-8 lg:py-6 bg-cream">
          <h1 className="font-display font-medium text-espresso text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight">
            &apos;Manqabang
          </h1>

          <p className="mt-3 font-script text-xl sm:text-2xl text-terracotta">
            Stay. Gather. Discover.
          </p>

          <div className="fade-rule mt-[0.55rem]" />

          <div className="mt-3 max-w-md space-y-2 font-body text-[0.98rem] leading-relaxed text-espresso/90">
            <p>
              On the banks of Lake Maqalika, just minutes from the heart of Maseru, sits
              my family&apos;s most well-kept secret.
            </p>
            <p>
              This land was once the home of my great-grandmother, <span className="italic text-terracotta">&apos;Manqabang</span>.
              It then became the home of her only daughter, <span className="italic text-terracotta">Nthabiseng</span>.
              Over the years, our family has used the house and grounds for our own gatherings and
              celebrations and, from time to time, opened it to others.
            </p>
            <p>
              We are now opening our home more broadly as{" "}
              <span className="italic text-terracotta">&apos;Manqabang</span>,
              an intimate lakeside hospitality property and a base from which visitors can
              discover more of Lesotho.
            </p>
          </div>

          <p className="mt-3 font-script text-[0.85rem] text-terracotta">
            The name takes us back to where it all began.
          </p>
        </div>

        <CoverImage
          src="/WeddingRes.png"
          alt="Portrait of 'Manqabang's family, on the family grounds"
          className="min-h-[280px] lg:min-h-full"
          fade={["left"]}
        />
      </div>
    </section>
  );
}