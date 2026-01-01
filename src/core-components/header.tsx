import { useState } from "react";
import Text from "../components/text";
import logoImg from "../assets/images/LOGOS - Projeto Santa Luzia (22).png";
import Button from "../components/button";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleGoToSobreMim = () => {
    document.getElementById("sobremim")?.scrollIntoView({ behavior: "smooth" });
};

const handleGoToProjetos = () => {
    document.getElementById("projeto")?.scrollIntoView({ behavior: "smooth" });
};

const handleGoToStacks = () => {
    document.getElementById("stacks")?.scrollIntoView({ behavior: "smooth" });
};
  
  const handleGoToContato = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <header className="w-full h-20 flex items-center px-4 sm:px-6 gap-4 border-b bg-gray-extremities relative">
      <img src={logoImg} alt="Logo Kauan Henrique" className="w-15 h-15" />
      <Text variant="body-md" className="text-white">Kauan Henrique</Text>

      <div className="ml-auto flex items-center">
        {/* Links visíveis em md+ */}
        <nav className="hidden md:flex gap-6 items-center">
          <Button onClick={handleGoToSobreMim} variant="quarternary">Sobre mim</Button>
          <Button onClick={handleGoToProjetos} variant="quarternary">Projetos</Button>
          <Button onClick={handleGoToStacks} variant="quarternary">Stacks</Button>
          <Button onClick={handleGoToContato} variant="quarternary">Contato</Button>
        </nav>

        {/* Botão hambúrguer em mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          >
            {/* ícone simples de 3 barras */}
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dropdown: aparece apenas quando open === true */}
          {open && (
            <div className="absolute right-4 top-full mt-2 bg-black text-white rounded shadow-md py-2 px-3 flex flex-col gap-2 z-50 min-w-40">
              <a href="#sobremim" onClick={() => {setOpen(false)}}><Text variant="body-sm">Sobre mim</Text></a>
              <a href="#projeto" onClick={() => setOpen(false)}><Text variant="body-sm">Projetos</Text></a>
              <a href="#stacks" onClick={() => setOpen(false)}><Text variant="body-sm">Stacks</Text></a>
              <a href="#contato" onClick={() => setOpen(false)}><Text variant="body-sm">Contato</Text></a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}