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

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function Home() {
  // Simple brand icons.
  function BrowserIcon() {
    return (
      <svg
        viewBox="6 14 84 66"
        className="h-20 w-auto"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="10"
          y="18"
          width="64"
          height="48"
          rx="6"
          className="fill-mint stroke-ink"
          strokeWidth="2.5"
        />
        <line
          x1="10"
          y1="31"
          x2="74"
          y2="31"
          className="stroke-ink"
          strokeWidth="2.5"
        />
        <circle cx="19" cy="24.5" r="2" className="fill-ink" />
        <circle cx="27" cy="24.5" r="2" className="fill-ink" />
        <circle cx="72" cy="62" r="14" className="fill-ink" />
        <text
          x="72"
          y="68"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          className="fill-bright"
        >
          ?
        </text>
      </svg>
    );
  }

  function CartIcon() {
    return (
      <svg
        viewBox="6 9 85 66"
        className="h-20 w-auto"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 22h12l8 32h36l8-24H26"
          className="fill-mint stroke-ink"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle cx="36" cy="66" r="5" className="fill-ink" />
        <circle cx="62" cy="66" r="5" className="fill-ink" />
        <circle cx="74" cy="26" r="13" className="fill-ink" />
        <text
          x="74"
          y="32"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          className="fill-bright"
        >
          !
        </text>
      </svg>
    );
  }

  function DisconnectedIcon() {
    return (
      <svg
        viewBox="2 7 92 61"
        className="h-20 w-auto"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="36"
          width="28"
          height="28"
          rx="6"
          className="fill-mint stroke-ink"
          strokeWidth="2.5"
        />
        <rect
          x="62"
          y="36"
          width="28"
          height="28"
          rx="6"
          className="fill-mint stroke-ink"
          strokeWidth="2.5"
        />
        <line
          x1="34"
          y1="50"
          x2="62"
          y2="50"
          className="stroke-ink"
          strokeWidth="2.5"
          strokeDasharray="4 5"
        />
        <circle cx="48" cy="22" r="11" className="fill-ink" />
        <text
          x="48"
          y="28"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          className="fill-bright"
        >
          !
        </text>
      </svg>
    );
  }

  const problems = [
    {
      Icon: BrowserIcon,
      title: "Hesitant customers",
      text: "A confusing website can make a potential customer hesitate.",
    },
    {
      Icon: CartIcon,
      title: "Interrupted purchases",
      text: "A difficult checkout can interrupt a purchase.",
    },
    {
      Icon: DisconnectedIcon,
      title: "A slowed-down team",
      text: "Disconnected processes can slow down an otherwise productive team.",
    },
  ];

  return (
    <>
      {/* 1. HERO */}
      <section className="mx-auto max-w-[90rem] px-6 pb-20 pt-20 sm:pt-28">
        <Text variant="eyebrow" Tag="p">
          Independent software engineer · Lagos, Nigeria
        </Text>
        <Text Tag="h1" variant="heading">
          Growth deserves a technical partner, not just a developer.
        </Text>

        <Text Tag="p" variant="paragraph">
          I work with startups and growing businesses to get found, earn trust
          and get paid online, building the websites, stores and systems that
          carry the next stage of growth.
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
        <div className="mx-auto max-w-[90rem] px-6 py-28">
          <Text
            Tag="h2"
            variant="subheading"
            className="mx-auto max-w-3xl text-center"
          >
            Good businesses deserve technology that works as hard as they do.
          </Text>

          <div className="mt-14 grid gap-12 sm:grid-cols-3">
            {problems.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center"
              >
                <Icon />
                <Text
                  Tag="h3"
                  variant="paragraph"
                  className="font-semibold text-[18px] text-ink"
                >
                  {title}
                </Text>
                <Text
                  Tag="p"
                  variant="small"
                  className="mt-2 max-w-xs opacity-70"
                >
                  {text}
                </Text>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl space-y-4 text-center">
            <Text Tag="p" variant="paragraph" className="font-semibold">
              These aren&apos;t just technical problems. They&apos;re business
              problems.
            </Text>
            <Text Tag="p" variant="paragraph" className="opacity-70">
              I work with businesses and founders to identify these challenges
              and build practical digital solutions around what they actually
              need.
            </Text>
          </div>
        </div>
      </section>

      {/* 3. WHAT CHANGES (outcomes first, services are only the small tags) */}
      <section className="mx-auto max-w-[90rem] px-6 py-20">
        <Text Tag="h2" variant="subheading">
          Better digital experiences. More efficient operations. Room to grow.
        </Text>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {outcomes.map((item) => (
            <article
              key={item.no}
              className="rounded-2xl border border-ink/10 bg-paper p-8 transition hover:border-forest/40"
            >
              <Text
                Tag="p"
                variant="paragraph"
                className="font-mono text-sm font-semibold text-forest"
              >
                {item.no}
              </Text>
              <Text Tag="h3" variant="titleHead">
                {item.title}
              </Text>
              <Text Tag="p" variant="paragraph">
                {item.text}
              </Text>
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
          {/* <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Ideas turned into working solutions.
          </h2> */}
          <Text Tag="h2" variant="subheading" className="text-white">
            Ideas turned into working solutions.
          </Text>
          <Text Tag="p" variant="paragraph" className="text-white">
            Every project starts with a problem worth solving. Explore selected
            projects to see the challenges, decisions and technology behind the
            work.
          </Text>
          <div className="mt-10 rounded-2xl border border-mint/20 p-8">
            {/* make a variant && stylign for this! */}
            <Text Tag="h3" variant="subheadingText">
              ACE Leadership Hub
            </Text>
            <Text Tag="p" variant="paragraph" className="text-white">
              A digital platform for leadership programmes, events and course
              enrolment.
            </Text>

            <Button
              href="/work"
              variant="bright"
              buttonText="View project"
              className="mt-7 inline-block shadow-[0_8px_30px_rgba(28,242,28,0.25)] inline-block"
            />
          </div>
        </div>
      </section>

      {/* 5. ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Text Tag="h2" variant="subheading">
          Thoughtful engineering. Practical solutions.
        </Text>
        <div className="mt-8 max-w-2xl space-y-4 text-lg leading-8 text-ink/70">
          <Text Tag="p" variant="paragraph">
            I&apos;m Emmanuel Udeme, an independent software engineer working at
            the intersection of business needs and technology.
          </Text>
          <Text Tag="p" variant="paragraph">
            I care about understanding the problem before choosing the
            technology. Whether it&apos;s a business website, an e-commerce
            experience or a custom application, my goal is to build something
            useful, reliable and appropriate for the people who will use it.
          </Text>
        </div>
        <Button href="/about" buttonText="More about me" variant="text" />
      </section>

      {/* 6. HOW I WORK: turned off on purpose (copy leads with outcomes, not process).
          OLD (kept for reference):
          Understand / Define / Build / Deliver steps. Bring back only if you want it. */}

      {/* 7. FAQ */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Text Tag="h2" variant="subheading">
            Frequently asked questions
          </Text>
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink">
                  {item.q}
                  <span className="ml-4 text-forest transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <Text
                  Tag="p"
                  variant="paragraph"
                  className="mt-3 leading-7 text-ink/70"
                >
                  {item.a}
                </Text>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      {/* OLD (kept for reference): flat bg-mint section with a heading, paragraph and one dark button */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink px-8 py-14 sm:px-14 sm:py-16">
          {/* soft green glow in the corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-bright/20 blur-3xl"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Left: the message */}
            <div>
              <Text Tag="p" variant="paragrapgh" className="inline-flex items-center gap-2 rounded-full border border-mint/20 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-mint">
                <span className="h-2 w-2 rounded-full bg-bright" />
                Open to new projects
              </Text>
              <Text Tag="h2" variant="subheading" className="mt-6 text-4xl leading-[1.1] text-paper sm:text-5xl">
                Something about your business could work{" "}
                <span className="text-bright">better.</span>
              </Text>
              <Text Tag="p" variant="paragrapgh" className="max-w-lg text-lg text-paper leading-8">
                Maybe it&apos;s your website. Maybe it&apos;s the way customers
                make purchases, or a process that takes more time than it
                should. Whatever the challenge, let&apos;s talk about what a
                practical solution could look like.
              </Text>
              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-mint/15 pt-6 font-display font-semibold text-paper">
                <li>
                  <span className="text-bright">✓</span> Get found
                </li>
                <li>
                  <span className="text-bright">✓</span> Earn trust
                </li>
                <li>
                  <span className="text-bright">✓</span> Get paid
                </li>
              </ul>
            </div>

            {/* Right: the action card */}
            <div className="rounded-2xl border border-mint/15 bg-paper/5 p-8 text-center backdrop-blur sm:p-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-bright/15 text-bright">
                <MailIcon />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-paper">
                Let&apos;s talk
              </h3>
              <p className="mt-2 text-mint/80 tracking-wide">
                Tell me what you&apos;re trying to achieve. I&apos;ll reply with
                the best next step.
              </p>
              <Button
                variant="bright"
                href="/contact"
                buttonText="Start the conversation"
                className="mt-7 block w-full shadow-[0_8px_30px_rgba(28,242,28,0.25)]"
              />
              <Button
                variant="textLight"
                href="/work"
                buttonText="or see my work →"
                className="mt-5 text-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
