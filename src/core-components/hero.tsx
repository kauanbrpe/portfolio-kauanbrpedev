import Text from "../components/text.tsx";
import imgKauan from "../assets/images/1768418275548.jpg";
import Button from "../components/button.tsx";
import { CiShare1 } from "react-icons/ci";

export default function Hero() {
    const handleGoToContato = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
};
    
    return (
        <section className="w-full bg-black-initial flex flex-col md:flex-row items-center justify-center md:h-135 h-auto py-8 sm:py-0">
            <div className="px-4 sm:px-6 gap-4 space-y-3 text-center md:text-left">
                <Text as="h1" variant="body-bold-title">Kauan Henrique</Text>
                <Text as="h2" variant="body-bold-subtile">Dev Back-end | ADS - UNIT</Text>
                <Text as="h5" variant="body-bold-text">Tenho 19 anos, sou Pernambucano de Recife e <br />sou apaixonado pela computação desde criança.</Text>
                <div className="app gap-4 space-y-3 flex md:text-left justify-center md:justify-start">
                    <Button onClick={handleGoToContato} variant="secondary">Entre em contato</Button>
                    <a href="https://docs.google.com/document/d/1KNPrDSo3YscS7MV94Gu_6UiMQ4OrPv24_vGh_9Sm6cw/edit?usp=sharing" target="_blank"><Button variant="secondary" icon={CiShare1}>Ver meu CV</Button></a>
                </div>
            </div>

            <div className="md:ml-45 mt-6 md:mt-0 shrink-0">
                <img src={imgKauan} alt="imagem Kauan Henrique" className="h-86 w-86 rounded-4xl object-cover" />
            </div>
        </section>
    )
}