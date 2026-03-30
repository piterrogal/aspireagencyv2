const serviceCards = [
  {
    title: "Conference planning",
    text: "A clear presentation for conference organisation and business event support."
  },
  {
    title: "Corporate events",
    text: "A polished, business-first format for event enquiries and planning calls."
  },
  {
    title: "Professional coordination",
    text: "Built around clients who want a smoother, more organised event process."
  }
];

const details = [
  "5.0 Google rating",
  "Dublin location",
  "Event & conference agency",
  "Mon–Thu 09:00–17:30"
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet sm:text-xs sm:tracking-[0.24em]">
        {eyebrow}
      </p>
      <h2 className="section-title mt-1.5 sm:mt-2">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <main className="overflow-x-hidden bg-white">
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80"
          alt="Business event setup"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.72),rgba(15,23,42,0.88))]" />
        <div className="container-width relative z-10 py-3 sm:py-5">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-base font-bold tracking-wide text-white sm:text-xl">ASPIRE | The Agency</p>
              <p className="text-[11px] text-white/70 sm:text-sm">Events & conferences in Dublin</p>
            </div>
            <a
              href="tel:0876837592"
              className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink transition hover:bg-mist sm:px-4 sm:py-2 sm:text-sm"
            >
              Call now
            </a>
          </div>

          <div className="grid gap-5 py-8 sm:gap-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 sm:mb-4 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em]">
                5.0 rating • Dublin based
              </div>

              <h1 className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-5xl">
                Event and conference planning in Dublin for businesses that need it done properly
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-lg sm:leading-7">
                A polished local agency presentation focused on business events, conferences and
                professional planning support.
              </p>

              <div className="mt-4 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
                <a
                  href="tel:0876837592"
                  className="rounded-full bg-violet px-5 py-3 text-center text-sm font-semibold text-white transition hover:opacity-95 sm:px-6 sm:py-3.5 sm:text-base"
                >
                  Call 087 683 7592
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15 sm:px-6 sm:py-3.5 sm:text-base"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div className="card rounded-xl border-white/10 bg-white/10 p-2 text-white backdrop-blur sm:rounded-[2rem] sm:p-5">
              <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
                <div className="rounded-xl bg-white p-2.5 text-ink sm:rounded-3xl sm:p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-violet sm:text-[11px] sm:tracking-[0.22em]">Location</p>
                  <p className="mt-1 text-[13px] font-bold leading-snug sm:mt-2 sm:text-lg">Fonthill Retail Park</p>
                  <p className="mt-0.5 text-[11px] text-slate-600 sm:mt-1 sm:text-sm">Lucan, Dublin</p>
                </div>
                <div className="rounded-xl bg-white/10 p-2.5 sm:rounded-3xl sm:p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70 sm:text-[11px] sm:tracking-[0.22em]">Hours</p>
                  <p className="mt-1 text-[13px] font-bold leading-snug sm:mt-2 sm:text-lg">09:00–17:30</p>
                  <p className="mt-0.5 text-[11px] text-white/70 sm:mt-1 sm:text-sm">Mon–Thu</p>
                </div>
                <div className="rounded-xl bg-white/10 p-2.5 sm:rounded-3xl sm:p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70 sm:text-[11px] sm:tracking-[0.22em]">Business</p>
                  <p className="mt-1 text-[13px] font-bold leading-snug sm:mt-2 sm:text-lg">Events</p>
                  <p className="mt-0.5 text-[11px] text-white/70 sm:mt-1 sm:text-sm">Conferences</p>
                </div>
                <div className="rounded-xl bg-white p-2.5 text-ink sm:rounded-3xl sm:p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-violet sm:text-[11px] sm:tracking-[0.22em]">Google rating</p>
                  <p className="mt-1 text-[13px] font-bold leading-snug sm:mt-2 sm:text-lg">5.0</p>
                  <p className="mt-0.5 text-[11px] text-slate-600 sm:mt-1 sm:text-sm">Top rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-mist py-4 sm:py-7">
        <div className="container-width">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {details.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-xs font-medium text-slate-700 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-14">
        <div className="container-width grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-6">
          <div>
            <SectionHeading
              eyebrow="Services"
              title="Built for business event enquiries"
              copy="For this type of agency, the page should feel polished, efficient and easy to contact. The layout keeps the key information compact, especially on mobile."
            />
            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
              {serviceCards.map((card) => (
                <div key={card.title} className="card p-4 sm:p-5">
                  <div className="mb-2.5 h-2 w-10 rounded-full bg-violet sm:mb-3 sm:h-2.5 sm:w-12" />
                  <h3 className="text-base font-bold text-ink sm:text-lg">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:leading-6">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80"
              alt="Conference and event atmosphere"
              className="h-full min-h-[220px] w-full object-cover sm:min-h-[360px]"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="pb-8 sm:pb-14">
        <div className="container-width">
          <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-5">
            <div className="card p-4 sm:p-7">
              <SectionHeading
                eyebrow="Contact"
                title="Call the agency or get directions"
                copy="The essentials are kept tight so the mobile version stays clean and fast to use."
              />

              <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet sm:text-xs sm:tracking-[0.22em]">Address</p>
                  <p className="mt-1.5 text-sm font-medium leading-snug text-ink sm:mt-2 sm:text-lg">
                    Unit 5 The Courtyard, Unit 19 Fonthill Rd, Ballyowen, Lucan, Co. Dublin, D22 Y9Y9
                  </p>
                  <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm">Location: Fonthill Retail Park</p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet sm:text-xs sm:tracking-[0.22em]">Phone</p>
                  <a href="tel:0876837592" className="mt-1.5 inline-block text-sm font-semibold text-ink underline decoration-violet underline-offset-4 sm:mt-2 sm:text-lg">
                    087 683 7592
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet sm:text-xs sm:tracking-[0.22em]">Opening hours</p>
                  <div className="mt-1.5 space-y-0.5 text-xs text-slate-600 sm:mt-2 sm:space-y-1 sm:text-[15px]">
                    <p>Monday – Thursday: 09:00–17:30</p>
                    <p>Friday – Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                  <a
                    href="tel:0876837592"
                    className="rounded-full bg-violet px-5 py-3 text-center text-sm font-semibold text-white sm:px-6 sm:py-3.5 sm:text-base"
                  >
                    Call now
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=ASPIRE+The+Agency+Unit+5+The+Courtyard+Unit+19+Fonthill+Rd+Ballyowen+Lucan+Co.+Dublin+D22+Y9Y9+Ireland"
                    className="rounded-full border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-ink sm:px-6 sm:py-3.5 sm:text-base"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden p-2 sm:p-3">
              <div className="h-[240px] overflow-hidden rounded-xl sm:h-[360px] sm:rounded-[1.5rem] lg:h-full">
                <iframe
                  title="ASPIRE | The Agency map"
                  src="https://www.google.com/maps?q=ASPIRE+The+Agency+Unit+5+The+Courtyard+Unit+19+Fonthill+Rd+Ballyowen+Lucan+Co.+Dublin+D22+Y9Y9+Ireland&z=15&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-14">
        <div className="container-width">
          <div className="rounded-2xl bg-navy px-4 py-6 text-white shadow-soft sm:rounded-[2rem] sm:px-8 sm:py-10">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xs sm:tracking-[0.22em]">ASPIRE | The Agency</p>
                <h2 className="mt-1.5 text-xl font-bold sm:mt-2 sm:text-3xl">
                  Planning a business event or conference in Dublin?
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-3 sm:text-base sm:leading-6">
                  Call the agency directly to discuss your event and the next steps.
                </p>
              </div>

              <a
                href="tel:0876837592"
                className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-ink transition hover:bg-mist sm:px-6 sm:py-3.5 sm:text-base"
              >
                Call 087 683 7592
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-5 sm:py-6">
        <div className="container-width flex flex-col gap-2 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:text-sm">
          <div>
            <p className="font-semibold text-ink">ASPIRE | The Agency</p>
            <p>Event and conference agency in Dublin</p>
          </div>
          <div className="sm:text-right">
            <p className="leading-snug">Unit 5 The Courtyard, Unit 19 Fonthill Rd, Lucan, Co. Dublin</p>
            <p>087 683 7592</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
