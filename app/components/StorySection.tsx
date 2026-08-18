import CoverImage from "./CoverImage";

export default function StorySection() {
  return (
    <section className="w-full bg-cream border-t border-espresso/10">
      {/* Row 1 — Why 'Manqabang? / What, Exactly? */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1.3fr_1fr]">
        <div className="px-6 sm:px-10 py-12 flex flex-col">
          <h2 className="font-display text-2xl tracking-wide text-terracotta uppercase mb-2">
            Why &apos;Manqabang?
          </h2>
          <div className="mt-1 max-w-md space-y-2 font-body text-[0.98rem] leading-relaxed text-espresso/90">
            <p>
              &apos;Manqabang was an entrepreneur well ahead of her time, running, among others,
              a brick-making business. Unfortunately, her life ended tragically on these grounds when 
              she died in a hous fire the year I was born. Over the genereations since, however, this
              has remained a family home and gradually also become a place of gathering and celebration.
              We have celebrated here ourselves and welcomed others to hold weddings and other 
              special occasions here, turning <span className="italic text-terracotta">a place
                that holds a sad part of our family history into one that brings and holds 
                so much joy</span>.
            </p>
            <p>
              For almost twenty years, I worked in international development across countries
              and sectors. Then political developments in the United States suddenly changed the course of
              my career and forced me to think seriously about everything I was losing, what remains, and what comes next.
            </p>
            <p>
              When I lost my job due to the dismantling of USAID, I asked myself: what are the things that help me stay resilient?
              <span className="italic text-terracotta">My heritage and my hope</span>.
            </p>
            <p>
              And what do I love as much as branding, storytelling, and inspiring others? My home
              country, Lesotho. The beautiful brand that is the Kingdom in the Sky.
            </p>
            <p>
              So I am home to build. <span className="italic text-terracotta">For &apos;Manqabang, whose 
                land gave us a place to begin, and from which to uplift others. And for the memory of 
                Nthabiseng, who gave us the world, and whom I promised I would one day bring the world
                home through this property</span>.
            </p>
          </div>
        </div>

        {/* Wedding photo */}
        <div className="flex flex-col">
          <CoverImage
            src="/grandma.jpg"
            alt="A wedding previously hosted on the property, overlooking Lake Maqalika"
            className="h-150 sm:h-160"
            fade={["top"]}
          />
          <div className="px-6 py-4 bg-sand">
            <p className="mt-3 font-body text-sm text-espresso/80 leading-snug mb-3">
              Nkhono &apos;Manqabang Mabitle
            </p>
          </div>
        </div>

        {/* WHAT, EXACTLY? */}
        <div className="px-6 sm:px-10 py-12 flex flex-col">
          <h2 className="font-display text-2xl tracking-wide text-terracotta uppercase mb-2">
            What, Exactly?
          </h2>
          <div className="mt-1 max-w-md space-y-2 font-body text-[0.98rem] leading-relaxed text-espresso/90">
            <p>The immediate plan is fairly simple. We will renovate and expand my
              family&apos;s existing home, add intimate guest accommodation, landscape
              the grounds, and build on the experience we already have of welcoming
              people here for gatherings and celebrations. But this is not a resort where
              visitors arrive, enjoy the lake, and leave having seen little else.
            </p>
            <p>
              <span className="italic text-terracotta">
                &apos;Manqabang is the anchor. Lesotho is the destination.</span>.
            </p>
            <p>
              Before moving to the United States, I spent over a decade working across Lesotho,
              including in rural communities around the country. I know a Lesotho that 
              extends far beyond Maseru, and I want our guests to experience it.
            </p>
            <p>
              Working with local people, guides and businesses, we will develop and arrange 
              experiences into our mountains and communities, to cultural and historical sites, 
              skiing in the Maloti Mountains, experiencing elevation at the highest pub in Africa, 
              eating our food, meeting our people and discovering some of the places that make the 
              Kingdom in the Sky unlike anywhere else.
            </p>
          </div>
          </div>

        <div className="flex flex-col">
          <CoverImage
            src="/Ntlo.jpg"
            alt="The family home the resort is being built on"
            className="h-150 sm:h-160"
          />
          <div className="px-6 py-4 bg-sand">
            <p className="mt-3 font-body text-sm text-espresso/80 leading-snug mb-3">
              Our family home. The place we are building on.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 — Seshoeshoe */}
      <div className="items-center justify-center text-center px-5 bg-cream">
        <h2 className="font-display text-3xl tracking-wide text-terracotta uppercase mb-2">
          Why Being In Lesotho Matters
        </h2>
        <div className="flex flex-col items-center justify-center text-center px-5 sm:px-8 py-8 lg:py-6 bg-cream">
          <p>
            I originally imagined building much of this from the United States. But one of my core objectives is to create 
            opportunities for Basotho businesses and communities, being in Lesotho puts me in a much better position to do it.
          </p>
          <p>
            I will be closer to the designers and tailors. Closer to tourism businesses and guides. Closer to farmers, 
            cooks, artists, makers, and other small businesses. Closer to the communities, the stories. And closer to 
            understanding where the opportunities actually are to help create more income, opportunity and reasons for 
            young Basotho to see a future at home.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2.0fr_2.5fr] border-t border-espresso/10">
        <div className="px-6 sm:px-12 lg:px-16 py-12 lg:py-16 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="mt-2 font-script text-1xl sm:text-2xl text-terracotta">
            Building Around &apos;Manqabang
          </h2>
          <div className="max-w-xl space-y-2 font-body text-lg text-[0.98rem] leading-relaxed text-espresso/90">
            <p>
              Lesotho&apos;s traditional fabric, Seshoeshoe, will be a big part of life at
              &apos;Manqabang and the initiatives that grow around it. Years ago, after seeing
              a young British girl wearing a Seshoeshoe dress in London, I decided I wanted to 
              help take Seshoeshoe to the world. Being based in Lesotho makes that ambition 
              much more tangible. Working with Basotho designers, tailors and other businesses, 
              we want guests to encounter Seshoeshoe at &apos;Manqabang not simply as something 
              to buy, but through the people, stories and skills behind it. We hope they leave as 
              ambassadors for Seshoeshoe and for Lesotho. Associated online initiatives will help 
              make it more accessible beyond Lesotho.
            </p>
            <p>
              Through this and other marketing initiatives—including a small podcast studio 
              overlooking the lake, where we can tell our own stories, hear those of others, and 
              bear witness to one another&apos;s lives—we will create new ways for to take Lesotho 
              to the world, and bring the world to Lesotho. 
            </p>
            <p>
              Tourism can be an important driver of Lesotho&apos;s economy, building on what we 
              already have, our landscape, culture and heritage, and turning more of it into 
              income and opportunity for local businesses and communities. &apos;Manqabang is 
              one small contribution to that.
            </p>
            <p>
              After almost twenty years in aid and international development, I have seen the 
              disadvantages countries like Lesotho face because of their small size and their 
              dependence on decisions and resources from elsewhere. I don&apos;t imagine one 
              business changes that, but I do believe we can build businesses that generate 
              income here, buy from other businesses here, and help more people discover what 
              Lesotho already has.
            </p>
          </div>
        </div>

        {/* Grounds photo — left edge fades into the text column, echoing the hero */}
        <div className="order-1 lg:order-2">
          <CoverImage
            src="/OutsideMaqalika.png"
            alt="The lakeside grounds overlooking Lake Maqalika"
            className="h-full min-h-[320px] lg:min-h-[440px]"
            fade={["left"]}
          />
        </div>
      </div>
      <div className="items-center justify-center text-center px-5 bg-cream">
        <h2 className="mt-4 font-display text-3xl tracking-wide text-terracotta uppercase mb-2">
          What Comes Next
        </h2>
        <div className="flex flex-col items-center justify-center text-center px-5 sm:px-8 py-8 lg:py-6 bg-cream">
          <p>
            The next step is turning this vision into a viable first phase. I intend to contribute what I can in terms of skills and other resources, even though working with USAID as a contractor meant that with its shutdown, my departure did not come with a substantial separation package. The unexpected transition that followed also required me to deplete my personal savings to survive in the United States. 
          </p>
          <p className="">
            The funding support would go directly into &apos;Manqabang itself:
          </p>
          <div className="mt-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 py-8 lg:py-6 bg-cream">
          <p className="mt-2">
            Renovating and upgrading the existing family home and structures
          </p>
          <p>
            Adding guest accommodation
          </p>
          <p>
            Landscaping and developing the grounds
          </p>
          <p>
            Developing our food and hospitality offering
          </p>
          <p>
            Building the website, booking systems and other business infrastructure
          </p>
          <p>
            Using our international networks to market &apos;Manqabang and Lesotho to audiences beyond our borders
          </p>
          <p>
            Capacity building for all involved in the makings and running of &apos;Manqabang
          </p>
          </div>
          <p>
            There is much more I hope this can eventually become. But &apos;Manqabang is my starting point.
          </p>
        </div>
      </div>
    </section>
  );
}
