import { useState } from "react";
import Text from "../components/text.tsx";
import imgKauan from "../assets/images/1768418275548.jpg";
import imgPadreRomeu from "../assets/images/486772425_2180222339102982_6590822658095949303_n.jpg";
import Button from "../components/button.tsx";
import { CiShare1 } from "react-icons/ci";

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);

    const img1 = imgKauan;
    const img2 = imgPadreRomeu;

    const handleGoToContato = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
};

    function calcularIdade(){
        const nascimento = new Date(2006, 7, 1)
        const hoje = new Date()
        let idade = hoje.getFullYear() - nascimento.getFullYear()

        const aindaNaoFezAniversario = hoje.getMonth() < 7 || (hoje.getMonth() === 0 && hoje.getDate() < 11)

        if (aindaNaoFezAniversario){
            idade--
        }

        return idade
    }
    
    return (
        <section className="w-full bg-black-initial flex flex-col md:flex-row items-center justify-center md:h-135 h-auto py-8 sm:py-0">
            <div className="px-4 sm:px-6 gap-4 space-y-3 text-center md:text-left">
                <Text as="h1" variant="body-bold-title" className="transition-opacity duration-500">{isHovered ? "Meu Padre é Romeu" : "Kauan Henrique"}</Text>
                <Text as="h2" variant="body-bold-subtile">Dev ServiceNow - EDX | ADS - UNIT</Text>
                <Text as="h5" variant="body-bold-text">Tenho {calcularIdade()} anos, sou Pernambucano de Recife <br />e sou apaixonado pela computação desde criança.</Text>
                <div className="app gap-4 space-y-3 flex md:text-left justify-center md:justify-start">
                    <Button onClick={handleGoToContato} variant="secondary">Entre em contato</Button>
                    <a href="https://docs.google.com/document/d/1KNPrDSo3YscS7MV94Gu_6UiMQ4OrPv24_vGh_9Sm6cw/edit?usp=sharing" target="_blank"><Button variant="secondary" icon={CiShare1}>Ver meu CV</Button></a>
                </div>
                <Text variant="body-sm-italic" className="text-center">{isHovered ? "A Torre é minha vida; se eu sair daqui um dia, que eu saia sem falar mais - Romeu da Fonte" : "Todos nascem originais, mas muitos morrem como fotocópias - São Carlo Acutis"}</Text>
            </div>

            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="md:ml-45 mt-6 md:mt-0 shrink-0">
                <img src={isHovered ? img2 : img1} alt="imagem Kauan Henrique" className="h-86 w-86 rounded-4xl object-cover transition-opacity duration-500" />           
            </div>
        </section>
    )
}