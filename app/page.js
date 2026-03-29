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
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="section-title mt-2">{title}</h2>
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
        <div className="container-width relative z-10 py-4 sm:py-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-lg font-bold tracking-wide text-white sm:text-xl">ASPIRE | The Agency</p>
              <p className="text-xs text-white/70 sm:text-sm">Events & conferences in Dublin</p>
            </div>
            <a
              href="tel:0876837592"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-mist"
            >
              Call now
            </a>
          </div>

          <div className="grid gap-6 py-10 sm:gap-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/85 sm:text-xs">
                5.0 rating • Dublin based • event planning
              </div>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl">
                Event and conference planning in Dublin for businesses that need it done properly
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-lg sm:leading-7">
                A polished local agency presentation focused on business events, conferences and
                professional planning support.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <a
                  href="tel:0876837592"
                  className="rounded-full bg-violet px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:opacity-95 sm:text-base"
                >
                  Call 087 683 7592
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/15 sm:text-base"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div className="card rounded-[2rem] border-white/10 bg-white/10 p-4 text-white backdrop-blur sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-4 text-ink">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet">Location</p>
                  <p className="mt-2 text-lg font-bold leading-tight">Fonthill Retail Park</p>
                  <p className="mt-1 text-sm text-slate-600">Lucan, Dublin</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Hours</p>
                  <p className="mt-2 text-lg font-bold leading-tight">09:00–17:30</p>
                  <p className="mt-1 text-sm text-white/70">Monday to Thursday</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Business type</p>
                  <p className="mt-2 text-lg font-bold leading-tight">Events & conferences</p>
                </div>
                <div className="rounded-3xl bg-white p-4 text-ink">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet">Google rating</p>
                  <p className="mt-2 text-lg font-bold leading-tight">5.0</p>
                  <p className="mt-1 text-sm text-slate-600">Current listing score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-mist py-5 sm:py-7">
        <div className="container-width">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {details.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container-width grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Services"
              title="Built for business event enquiries"
              copy="For this type of agency, the page should feel polished, efficient and easy to contact. The layout keeps the key information compact, especially on mobile."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {serviceCards.map((card) => (
                <div key={card.title} className="card p-5">
                  <div className="mb-3 h-2.5 w-12 rounded-full bg-violet" />
                  <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80"
              alt="Conference and event atmosphere"
              className="h-full min-h-[280px] w-full object-cover sm:min-h-[360px]"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="pb-10 sm:pb-14">
        <div className="container-width">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="card p-5 sm:p-7">
              <SectionHeading
                eyebrow="Contact"
                title="Call the agency or get directions"
                copy="The essentials are kept tight so the mobile version stays clean and fast to use."
              />

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet">Address</p>
                  <p className="mt-2 text-base font-medium text-ink sm:text-lg">
                    Unit 5 The Courtyard, Unit 19 Fonthill Rd, Ballyowen, Lucan, Co. Dublin, D22 Y9Y9
                  </p>
                  <p className="mt-2 text-sm text-slate-600">Location: Fonthill Retail Park</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet">Phone</p>
                  <a href="tel:0876837592" className="mt-2 inline-block text-base font-semibold text-ink underline decoration-violet underline-offset-4 sm:text-lg">
                    087 683 7592
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet">Opening hours</p>
                  <div className="mt-2 space-y-1 text-sm text-slate-600 sm:text-[15px]">
                    <p>Monday – Thursday: 09:00–17:30</p>
                    <p>Friday: Closed</p>
                    <p>Saturday: Closed</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:0876837592"
                    className="rounded-full bg-violet px-6 py-3.5 text-center text-sm font-semibold text-white sm:text-base"
                  >
                    Call now
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Unit+5+The+Courtyard+Unit+19+Fonthill+Rd+Ballyowen+Lucan+Co.+Dublin+D22+Y9Y9"
                    className="rounded-full border border-slate-300 px-6 py-3.5 text-center text-sm font-semibold text-ink sm:text-base"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden p-3">
              <div className="h-[280px] overflow-hidden rounded-[1.5rem] sm:h-[360px] lg:h-full">
                <iframe
                  title="ASPIRE | The Agency map"
                  src="https://www.google.com/maps?q=Unit+5+The+Courtyard+Unit+19+Fonthill+Rd+Ballyowen+Lucan+Co.+Dublin+D22+Y9Y9&z=15&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="container-width">
          <div className="rounded-[2rem] bg-navy px-5 py-8 text-white shadow-soft sm:px-8 sm:py-10">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">ASPIRE | The Agency</p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Planning a business event or conference in Dublin?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                  Call the agency directly to discuss your event and the next steps.
                </p>
              </div>

              <a
                href="tel:0876837592"
                className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink transition hover:bg-mist sm:text-base"
              >
                Call 087 683 7592
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="container-width flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-ink">ASPIRE | The Agency</p>
            <p>Event and conference agency in Dublin</p>
          </div>
          <div className="sm:text-right">
            <p>Unit 5 The Courtyard, Unit 19 Fonthill Rd, Lucan, Co. Dublin</p>
            <p>087 683 7592</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
