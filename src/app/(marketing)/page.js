import Button from "@/components/ui/Button";
import Text from "@/components/ui/Typography";
import Link from "next/link";

const outcomes = [
  {
    no: "01",
    title: "Build credibility online",
    text: "Give people a clearer understanding of your business, what you offer and why they should take you seriously.",
    tags: [
      "Business websites",
      "Landing pages",
      "Website redesigns",
      "Portfolios",
    ],
  },
  {
    no: "02",
    title: "Make buying easier",
    text: "Create a smoother journey from discovering a product to completing a purchase, whether through an online store or a custom e-commerce experience.",
    tags: ["Shopify stores", "E-commerce websites", "Shopping experiences"],
  },
  {
    no: "03",
    title: "Make everyday operations easier",
    text: "Replace repetitive manual processes and disconnected tools with systems designed around how your business works.",
    tags: [
      "Custom web applications",
      "Dashboards",
      "Business platforms",
      "Portals",
    ],
  },
  {
    no: "04",
    title: "Make transactions work reliably",
    text: "Connect the services and systems your business depends on, with payment experiences designed around verification, reliability and a smoother customer journey.",
    tags: ["Payment integrations", "APIs"],
  },
];

const faqs = [
  {
    q: "Do you work with businesses outside Nigeria?",
    a: "Yes. I'm based in Nigeria and open to working with businesses, founders and teams internationally.",
  },
  {
    q: "Can you work on an existing website or application?",
    a: "Yes. I can help improve, redesign, extend or integrate features into an existing digital product, depending on its technology and condition.",
  },
  {
    q: "Can you build an online store?",
    a: "Yes. I work on e-commerce experiences, including custom storefronts and Shopify store setup.",
  },
  {
    q: "How much does a project cost?",
    a: "Pricing depends on the problem, scope, complexity and requirements. After understanding what you need, I'll provide a clear proposal and project estimate.",
  },
  {
    q: "How do we get started?",
    a: "Send me a message explaining what you're trying to achieve. We'll discuss the project and determine the best next step.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
        <Text variant="eyebrow" Tag="p">
          Independent software engineer · Lagos, Nigeria
        </Text>
        <Text Tag="h1" variant="heading">
          Growth deserves a technical partner, not just a developer.
        </Text>

        <Text Tag="p" variant="paragraph">
          I&apos;m Emmanuel Udeme. I work with startups and growing businesses
          to get found, earn trust and get paid online, building the websites,
          stores and systems that carry the next stage of growth.
        </Text>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            variant="solid"
            href="/contact"
            buttonText="Let's discuss your project"
          />

          <Button variant="outline" href="/work" buttonText="Explore my Work" />
        </div>
        <Text Tag="p" variant="caption">
          Based in Nigeria · Open to working with businesses worldwide
        </Text>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Good businesses deserve technology that works as hard as they do.
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-lg leading-8 text-ink/70">
            <p>
              A confusing website can make a potential customer hesitate. A
              difficult checkout can interrupt a purchase. Disconnected
              processes can slow down an otherwise productive team.
            </p>
            <p className="font-semibold text-ink">
              These aren&apos;t just technical problems. They&apos;re business
              problems.
            </p>
            <p>
              I work with businesses and founders to identify these challenges
              and build practical digital solutions around what they actually
              need.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT CHANGES (outcomes first, services are only the small tags) */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Better digital experiences. More efficient operations. Room to grow.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {outcomes.map((item) => (
            <article
              key={item.no}
              className="rounded-2xl border border-ink/10 bg-paper p-8 transition hover:border-forest/40"
            >
              <p className="font-mono text-sm font-semibold text-forest">
                {item.no}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-ink/70">{item.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-mint px-3 py-1 font-mono text-xs text-forest"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 4. SELECTED WORK */}
      <section className="bg-forest text-mint">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Ideas turned into working solutions.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-mint/80">
            Every project starts with a problem worth solving. Explore selected
            projects to see the challenges, decisions and technology behind the
            work.
          </p>
          <div className="mt-10 rounded-2xl border border-mint/20 p-8">
            <h3 className="font-display text-2xl font-bold text-paper">
              ACE Leadership Hub
            </h3>
            <p className="mt-3 max-w-xl leading-7 text-mint/80">
              A digital platform for leadership programmes, events and course
              enrolment.
            </p>
            <Link
              href="/work"
              className="mt-6 inline-block rounded-full bg-bright px-6 py-3 font-semibold text-ink transition hover:brightness-95"
            >
              View project
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Thoughtful engineering. Practical solutions.
        </h2>
        <div className="mt-8 max-w-2xl space-y-4 text-lg leading-8 text-ink/70">
          <p>
            I&apos;m Emmanuel Udeme, an independent software engineer working at
            the intersection of business needs and technology.
          </p>
          <p>
            I care about understanding the problem before choosing the
            technology. Whether it&apos;s a business website, an e-commerce
            experience or a custom application, my goal is to build something
            useful, reliable and appropriate for the people who will use it.
          </p>
        </div>
        <Link
          href="/about"
          className="mt-8 inline-block font-semibold text-forest underline underline-offset-4 hover:text-ink"
        >
          More about me
        </Link>
      </section>

      {/* 6. HOW I WORK: turned off on purpose (copy leads with outcomes, not process).
          OLD (kept for reference):
          Understand / Define / Build / Deliver steps. Bring back only if you want it. */}

      {/* 7. FAQ */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink">
                  {item.q}
                  <span className="ml-4 text-forest transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-ink/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="bg-bright">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-3xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Something about your business could work better.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/80">
            Maybe it&apos;s your website. Maybe it&apos;s the way customers make
            purchases, or a process that takes more time than it should.
            Whatever the challenge, let&apos;s talk about what a practical
            solution could look like.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition hover:bg-forest"
          >
            Let&apos;s talk about your project
          </Link>
        </div>
      </section>
    </>
  );
}
