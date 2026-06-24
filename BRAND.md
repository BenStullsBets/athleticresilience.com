# Brand Guide — Athletic Resilience

> ⚠️ **Provisional.** This palette and voice are derived from the current Kajabi site
> (athleticresilience.mykajabi.com) as a faithful starting point. The product and messaging
> are expected to change — all colors live as CSS custom properties in `styles.css`
> (`:root`), so a re-skin is a token swap, not a rewrite.

A quick reference for voice, naming, and visual identity.

## Name

**Athletic Resilience** is the trade name and wordmark — use it in the header, titles, OG,
footer, and schema. The site lives at **athleticresilience.com**. Founders are
**Dr. Lee Schuster (DC, ATC)** and **Dr. Greg (DPT)** — keep in bios, about, and schema.

## Taglines & approved phrases

| Slot | Phrase | Where it goes |
| --- | --- | --- |
| **Headline / display** | Build strength. Prevent injury. Recover faster. | Hero `<h1>` |
| **Tagline** | Easy. Effective. For Everyone. | Hero sub, brand subtitle |
| **Philosophy** | Train. Recover. Perform. | Hero note, philosophy band |
| **Motto** | Be Resilient. | Quotes, about, sign-offs |
| **Body promise** | Recovery that's smarter, training that's sustainable, and strategies that work in real life — not just on paper. | Sub-headlines, intros |
| **Belief** | The body works in fascial movement patterns that connect you from head to toe. | Philosophy, about |

**Guidelines**
- Athletic Resilience is **clinician-led education for everyday athletes** — practical,
  not clinical-cold. Credentialed but approachable.
- Voice is **clear, confident, encouraging** — a knowledgeable coach, not a lecture.
- Body copy may use **"we"** and refer to **Dr. Lee** / **Dr. Greg** by name where personal.

## Audiences & positioning (three buyers)

Athletic Resilience sells to three distinct buyers — keep them distinct in copy and IA:

1. **Athletes** (end consumers) — athletes, parents, coaches. Self-serve courses + 1-on-1.
   Top-of-funnel; price-sensitive (~$50–$300 one-time). Current core.
2. **Clinicians** — ATs, PTs, DCs, LMTs, trainers buying **accredited CE / certification**.
   The high-margin moat, anchored by **Dr. Lee's taping IP**. Benchmark ~$200–$600/seat
   (cf. RockTape FMT). The highest-leverage wedge — it also raises the whole brand's credibility.
3. **Teams / schools / clubs** — live workshops, on-site clinics, seasonal retainers. Premium
   per-engagement; leverages Lee's ATC credential and B2B network.

**Founder split:** Dr. Lee (DC, ATC) = field credibility + taping/signature IP + on-site/event
work. Dr. Greg (DPT) = clinical authority, return-to-play/rehab, performance & recovery. Together
they span the **prevent → perform → recover → rehab** continuum — sold as knowledge, not chair time.

> Open positioning question: lead consumer-first (current) or lead with the clinician/taping-cert
> wedge. The site currently lists athletes → clinicians → teams; easy to reorder.

## The three pillars

1. **Build strength** — sustainable training that holds up in real life.
2. **Prevent injury** — practical movement and taping skills that keep you in the game.
3. **Recover faster** — smarter recovery and self-treatment routines.

## Color (provisional — semantic tokens in `styles.css`)

| Token | Hex | Role |
| --- | --- | --- |
| `--ink` | `#0f2033` | Primary anchor — text, dark sections, footer |
| `--ink-soft` | `#2b3f55` | Secondary text on light |
| `--slate` | `#4f6072` | Muted body text |
| `--accent` | `#e8552b` | Energy & action — primary CTAs, accents (athletic orange) |
| `--accent-dk` | `#c4421d` | Links & hover |
| `--accent-br` | `#ff6a3c` | Brighter accent on dark backgrounds |
| `--calm` | `#2f93a6` | Contrast & calm — data, badges, recovery cues (athletic teal) |
| `--ground` | `#3f6b5f` | Grounding — section accents (clinical green) |
| `--bg` / `--bg-alt` | `#ffffff` / `#f3f6f9` | Page canvas / cool alt sections |

Usage: **ink** anchors text and dark bands · **accent (orange)** drives CTAs, eyebrows, and
energy · **calm (teal)** signals recovery/data · **ground (green)** for section grounding.

## Type

- **Display + body:** **Inter** (self-hosted, `fonts/`). Heavy weights (700–800) for athletic
  headlines; 400–600 for body and UI. CSS stack:
  `'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`.
- Sizes: H1 clamp ~2.6–4.4rem (800), H2 ~1.9–2.8rem (800), body 17px.

## Logo

The site mark/favicon (`favicon.svg`) is an **upward chevron** (orange — strength, performance,
rising) over a **pulse line** (teal — recovery, sports medicine) on an ink rounded square.
