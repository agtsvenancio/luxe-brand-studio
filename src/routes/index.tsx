import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo.webp";
import model1 from "@/assets/model-1.jpg";
import model2 from "@/assets/model-2.jpg";
import model3 from "@/assets/model-3.jpg";
import model4 from "@/assets/model-4.jpg";
import model5 from "@/assets/model-5.jpg";
import model6 from "@/assets/model-6.jpg";
import model7 from "@/assets/model-7.jpg";
import model8 from "@/assets/model-8.jpg";

const WHATSAPP =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20me%20candidatar%20ao%20casting%20masculino%20da%20BOSSA%20Mgt.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casting Masculino | BOSSA Mgt" },
      {
        name: "description",
        content:
          "A BOSSA Mgt seleciona modelos masculinos de 16 a 40 anos para campanhas, editoriais e desfiles. Inscrição gratuita e resposta em 48 horas.",
      },
      { property: "og:title", content: "Casting Masculino | BOSSA Mgt" },
      {
        property: "og:description",
        content:
          "Casting masculino aberto na BOSSA Mgt. Book profissional, clientes reais e carreira acompanhada. Inscrição gratuita.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GALLERY = [
  { src: model1, alt: "Modelo com blazer de linho claro", span: "col-span-1 aspect-[3/4]" },
  {
    src: model2,
    alt: "Editorial masculino em preto e branco",
    span: "col-span-1 mt-10 aspect-[3/4]",
  },
  {
    src: model6,
    alt: "Ensaio externo com carro clássico",
    span: "col-span-2 aspect-[16/10]",
  },
  { src: model4, alt: "Retrato de casting em estúdio", span: "col-span-1 aspect-[3/4]" },
  {
    src: model5,
    alt: "Modelo com camisa polo preta",
    span: "col-span-1 mt-8 aspect-[3/4]",
  },
  {
    src: model8,
    alt: "Modelo em look de alfaiataria clara",
    span: "col-span-2 aspect-[16/10]",
  },
  {
    src: model3,
    alt: "Modelo com tricô marrom em estúdio",
    span: "col-span-1 aspect-[3/4]",
  },
  {
    src: model7,
    alt: "Retrato masculino com iluminação dramática",
    span: "col-span-1 mt-12 aspect-[3/4]",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-paper font-sans text-bone antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-bone/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-16">
          <img src={logo} alt="BOSSA Mgt" className="h-5 w-auto brightness-0 invert opacity-90" />
          <nav className="hidden items-center gap-9 md:flex">
            <a
              href="#pilares"
              className="grow-underline text-[12px] uppercase tracking-[0.22em] text-ash"
            >
              Pilares
            </a>
            <a
              href="#galeria"
              className="grow-underline text-[12px] uppercase tracking-[0.22em] text-ash"
            >
              Galeria
            </a>
            <a
              href="#requisitos"
              className="grow-underline text-[12px] uppercase tracking-[0.22em] text-ash"
            >
              Requisitos
            </a>
            <a
              href="#processo"
              className="grow-underline text-[12px] uppercase tracking-[0.22em] text-ash"
            >
              Processo
            </a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-bone/25 px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.2em] text-bone transition-colors hover:border-bone/70 hover:bg-bone/5"
          >
            Inscrever-se
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="gloss">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 px-6 pt-16 pb-20 lg:grid-cols-12 lg:gap-16 lg:px-16 lg:pt-24 lg:pb-28">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.34em] text-oxblood">
              Casting · Masculino
            </p>
            <h1 className="mt-7 font-serif text-[2.6rem] leading-[0.98] font-light tracking-[-0.02em] text-balance text-bone sm:text-6xl lg:text-[4.6rem]">
              Modelos que <span className="text-ash italic">carregam</span> silêncio.
            </h1>
            <p className="mt-8 max-w-[40ch] text-base leading-relaxed text-pretty text-ash">
              Procuramos homens de 16 a 40 anos. Presença, postura e uma luz própria —
              não um rosto de catálogo. A inscrição é gratuita e a resposta, em 48 horas.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-bone px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper ring-1 ring-bone transition-colors hover:bg-bone/90"
              >
                Enviar ficha
                <span aria-hidden="true" className="text-base leading-none">
                  →
                </span>
              </a>
              <a
                href="#pilares"
                className="grow-underline text-[13px] uppercase tracking-[0.18em] text-ash"
              >
                Ver o processo
              </a>
            </div>
            <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-bone/10 pt-8">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-ash">Idade</dt>
                <dd className="mt-2 font-serif text-2xl font-light text-bone">16 – 40</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-ash">
                  Altura
                </dt>
                <dd className="mt-2 font-serif text-2xl font-light text-bone">1,78m +</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-ash">
                  Inscrição
                </dt>
                <dd className="mt-2 font-serif text-2xl font-light text-bone">Gratuita</dd>
              </div>
            </dl>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="group relative aspect-[4/5] overflow-hidden outline-1 -outline-offset-1 outline-bone/10">
              <img
                src={model6}
                alt="Retrato editorial de modelo masculino da BOSSA Mgt"
                className="img-zoom absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.24em] text-bone/40">
                Fig. 01 — São Paulo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section id="pilares" className="border-t border-bone/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-16 lg:py-32">
          <div className="flex items-end justify-between border-b border-bone/10 pb-8">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-lg font-light text-oxblood">01</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-ash">
                Pilares
              </span>
            </div>
            <span className="hidden text-[11px] uppercase tracking-[0.28em] text-ash sm:block">
              O que fazemos
            </span>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-3">
            {[
              {
                n: "I",
                t: "Seleção real",
                d: "Nada de promessa vaga. Analisamos perfil, corpo e presença de cada ficha — e devolvemos uma resposta concreta em 48 horas.",
              },
              {
                n: "II",
                t: "Carreira acompanhada",
                d: "Do book profissional às campanhas, você não caminha sozinho. A agenda, os contratos e os direitos, a gente cuida.",
              },
              {
                n: "III",
                t: "Clientes que pagam",
                d: "Acesso direto a marcas e estúdios que contratam de verdade. Sem intermediários, sem promessas de oportunidades vazias.",
              },
            ].map((p) => (
              <div key={p.n}>
                <p className="font-serif text-4xl font-light text-bone/25">{p.n}</p>
                <h3 className="mt-6 font-serif text-2xl font-light text-bone">{p.t}</h3>
                <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-pretty text-ash">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="border-t border-bone/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-16 lg:py-32">
          <div className="flex items-end justify-between border-b border-bone/10 pb-8">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-lg font-light text-oxblood">02</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-ash">
                Galeria
              </span>
            </div>
            <span className="hidden text-[11px] uppercase tracking-[0.28em] text-ash sm:block">
              Retratos
            </span>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {GALLERY.map((img) => (
              <div
                key={img.alt}
                className={`group relative overflow-hidden outline-1 -outline-offset-1 outline-bone/10 ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="img-zoom absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUISITOS */}
      <section id="requisitos" className="border-t border-bone/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:px-16 lg:py-32">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-lg font-light text-oxblood">03</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-ash">
                Requisitos
              </span>
            </div>
            <h2 className="mt-8 font-serif text-4xl leading-[1.02] font-light tracking-[-0.02em] text-balance text-bone">
              O que procuramos
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-bone/10">
              {[
                "Entre 16 e 40 anos",
                "Altura a partir de 1,78 m",
                "Comunicação e postura",
                "Disponibilidade para ensaios",
              ].map((r, i) => (
                <li
                  key={r}
                  className="flex items-baseline gap-6 border-b border-bone/10 py-6"
                >
                  <span className="w-8 shrink-0 font-serif text-sm text-ash">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl font-light text-bone">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="border-t border-bone/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-16 lg:py-32">
          <div className="flex items-end justify-between border-b border-bone/10 pb-8">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-lg font-light text-oxblood">04</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-ash">
                Processo
              </span>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
            {[
              {
                n: "1",
                t: "Envie a ficha",
                d: "Fotos simples e suas medidas, direto no WhatsApp. Sem burocracia, sem custo.",
              },
              {
                n: "2",
                t: "Resposta em 48h",
                d: "Analisamos o perfil e respondemos com clareza: avança ou não. Sempre com fundamento.",
              },
              {
                n: "3",
                t: "Carreira sob acompanhamento",
                d: "Book profissional, acesso a clientes reais e uma agenda que cresce com você.",
              },
            ].map((s) => (
              <div key={s.n} className="border-t border-bone/10 pt-8">
                <span className="font-serif text-5xl font-light text-bone/30">{s.n}</span>
                <h3 className="mt-6 font-serif text-2xl font-light text-bone">{s.t}</h3>
                <p className="mt-4 max-w-[32ch] text-[15px] leading-relaxed text-pretty text-ash">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gloss border-t border-bone/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-16 lg:py-40">
          <p className="text-[11px] uppercase tracking-[0.34em] text-oxblood">
            05 — Vaga aberta
          </p>
          <h2 className="mt-8 max-w-[24ch] font-serif text-5xl leading-[1] font-light tracking-[-0.02em] text-balance text-bone sm:text-6xl lg:text-7xl">
            Pronto para <span className="text-ash italic">entrar</span> na cena.
          </h2>
          <p className="mt-8 max-w-[46ch] text-base leading-relaxed text-pretty text-ash">
            Inscrição gratuita, resposta em 48 horas e uma equipe que trata a sua imagem
            com o cuidado que ela merece.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-4 bg-bone px-9 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-paper ring-1 ring-bone transition-colors hover:bg-bone/90"
          >
            Inscrever-se no WhatsApp
            <span aria-hidden="true" className="text-base leading-none">
              →
            </span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-bone/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-16">
          <div>
            <img src={logo} alt="BOSSA Mgt" className="h-5 w-auto brightness-0 invert opacity-90" />
            <p className="mt-4 max-w-[30ch] text-[13px] leading-relaxed text-pretty text-ash">
              Agência de moda para o perfil masculino. São Paulo — casting aberto o ano
              inteiro.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-[12px] uppercase tracking-[0.2em] text-ash">
            <a href="#pilares" className="grow-underline">
              Pilares
            </a>
            <a href="#galeria" className="grow-underline">
              Galeria
            </a>
            <a href="#requisitos" className="grow-underline">
              Requisitos
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="grow-underline text-bone"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-bone/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-[11px] uppercase tracking-[0.2em] text-ash/70 sm:flex-row sm:justify-between lg:px-16">
            <span>© {new Date().getFullYear()} BOSSA Mgt</span>
            <span>São Paulo, BR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
