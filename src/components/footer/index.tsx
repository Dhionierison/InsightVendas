export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur border-t border-gray-200">
      <div className="container mx-auto px-4 py-10 sm:px-5 lg:px-8 min-1 flex-gr">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-600 text-center md:text-left">
            <span className="sr-only">Copyright</span>©{" "}
            {new Date().getFullYear()} Insight Vendas. Desenvolvido por{" "}
            <a
              href="https://dhionierison.github.io/cartao-de-visitas/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black transition-colors"
              aria-label="Link para o portfólio de Dhionierison"
            >
              Dhionierison
            </a>
          </p>

          <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Termos de Serviço"
            >
              Termos de Serviço
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Política de Privacidade"
            >
              Política de Privacidade
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5569992789320&text&type=phone_number&app_absent=0"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Entre em contato"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
