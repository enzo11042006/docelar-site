import {
  ArrowRight,
  Camera,
  Gift,
  Home,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  ToyBrick,
  Utensils,
} from "lucide-react";

const categorias = [
  {
    nome: "Cozinha",
    descricao: "Utilidades para facilitar seu dia a dia.",
    icon: Utensils,
  },
  {
    nome: "Presentes",
    descricao: "Ideias para presentear quem você gosta.",
    icon: Gift,
  },
  {
    nome: "Brinquedos",
    descricao: "Diversão para todas as idades.",
    icon: ToyBrick,
  },
  {
    nome: "Casa",
    descricao: "Itens para deixar seu lar ainda mais especial.",
    icon: Home,
  },
];

export default function HomePage() {  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#332723]">

      {/* MENU */}
      <header className="border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <div>
            <h1 className="text-2xl font-bold text-[#d94c69]">
              Docelar
            </h1>

            <p className="text-[10px] uppercase tracking-[3px] text-gray-500">
              Americana
            </p>
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#inicio" className="hover:text-[#d94c69]">
              Início
            </a>

            <a href="#categorias" className="hover:text-[#d94c69]">
              Categorias
            </a>

            <a href="#sobre" className="hover:text-[#d94c69]">
              Sobre
            </a>

            <a href="#contato" className="hover:text-[#d94c69]">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/5519992115346"
            className="hidden items-center gap-2 rounded-full bg-[#332723] px-5 py-3 text-sm font-semibold text-white md:flex"
          >
            <MessageCircle size={17} />

            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden py-24 md:py-32"
      >
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ffdce4] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#ffe8ed] px-4 py-2 text-sm font-medium text-[#d94c69]">
              <Sparkles size={16} />
              Um pouquinho de tudo para você
            </div>

            <h2 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Tudo para deixar sua casa mais{" "}
              <span className="text-[#d94c69]">
                Doce Lar.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#776861]">
              Utilidades, presentes, brinquedos, decoração e muitas
              novidades para deixar sua casa e seus momentos ainda mais
              especiais.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#categorias"
                className="flex items-center gap-2 rounded-full bg-[#d94c69] px-7 py-4 font-semibold text-white transition hover:-translate-y-1"
              >
                Conheça nossos produtos
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/5519992115346"
                className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 font-semibold"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

            </div>

          </div>

          {/* ILUSTRAÇÃO TEMPORÁRIA */}
          <div className="relative">

            <div className="flex min-h-[500px] items-center justify-center rounded-[50px] bg-gradient-to-br from-[#ffdce4] via-[#fff0e5] to-[#f5d99c]">

             <img
  src="/images/logo-docelar.png"
  alt="Logo Docelar Utilidades"
  className="w-full max-w-[360px] object-contain"
/>

            </div>

          </div>

        </div>
      </section>

      {/* CATEGORIAS */}
      <section
        id="categorias"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          <p className="text-sm font-bold uppercase tracking-[3px] text-[#d94c69]">
            Explore
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row">

            <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
              Um pouquinho de tudo em um só lugar.
            </h2>

            <p className="max-w-md text-[#776861]">
              Produtos escolhidos para facilitar sua rotina,
              decorar sua casa e presentear pessoas especiais.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {categorias.map((categoria) => {

              const Icon = categoria.icon;

              return (
                <div
                  key={categoria.nome}
                  className="group rounded-[30px] border border-black/5 bg-[#fffaf7] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffe5eb] text-[#d94c69]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {categoria.nome}
                  </h3>

                  <p className="mt-3 leading-7 text-[#776861]">
                    {categoria.descricao}
                  </p>

                  <button className="mt-6 flex items-center gap-2 font-semibold text-[#d94c69]">
                    Ver produtos
                    <ArrowRight size={17} />
                  </button>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* DESTAQUE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="relative overflow-hidden rounded-[45px] bg-[#d94c69] px-8 py-16 text-white md:px-16">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[50px] border-white/10" />

            <div className="relative max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[3px] text-white/70">
                Docelar Americana
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Encontrou algo que gostou?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Entre em contato pelo WhatsApp para consultar
                disponibilidade, preços e novidades da loja.
              </p>

              <a
                href="https://wa.me/5519992115346"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#d94c69]"
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="bg-[#f7ece7] py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div className="flex min-h-[450px] items-center justify-center rounded-[50px] bg-[#ead9d2]">

            <Home
              size={100}
              strokeWidth={1}
              className="text-[#d94c69]"
            />

          </div>

          <div>

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#d94c69]">
              Sobre a Docelar
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Tem sempre uma novidade esperando por você.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#776861]">
              A Docelar reúne utilidades, presentes, brinquedos,
              decoração e diversos produtos para tornar o seu dia
              a dia mais prático e especial.
            </p>

            <a
              href="https://www.instagram.com/docelar.americana/"
              target="_blank"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#d94c69]"
            >
            <Camera
               size={35}
               className="mx-auto text-[#d94c69]"
/>

              Conheça nosso Instagram

              <ArrowRight size={17} />
            </a>

          </div>

        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">

          <Camera
            size={35}
            className="mx-auto text-[#d94c69]"
          />

          <p className="mt-5 font-bold text-[#d94c69]">
            @docelar.americana
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
            Acompanhe todas as novidades.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#776861]">
            Siga a Docelar no Instagram e fique por dentro
            dos novos produtos, promoções e novidades.
          </p>

          <a
            href="https://www.instagram.com/docelar.americana/"
            target="_blank"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#332723] px-7 py-4 font-semibold text-white"
          >
           <Camera size={18} />
            Seguir no Instagram
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 md:flex-row md:items-center">

          <div>
            <p className="text-xl font-bold text-[#d94c69]">
              Docelar
            </p>

            <p className="text-sm text-gray-500">
              Americana • SP
            </p>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 Docelar. Todos os direitos reservados.
          </p>

        </div>

      </footer>

      {/* WHATSAPP FIXO */}
      <a
        href="https://wa.me/5519992115346"
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>

    </main>
  );
}