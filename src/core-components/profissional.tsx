import Text from "../components/text";
import Button from "../components/button";
import { IoIosBusiness } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";

export default function Profissional() {
    return (
        <section id="experiencia" className="bg-black text-white py-10">
            <div className="max-w-5xl mx-auto px-6">
                <Text as="h2" variant="body-bold-title-pages" className="text-2xl md:text-4xl text-center mb-12">
                    Experiência Profissional
                </Text>
            </div>

            <div className="bg-black max-w-5xl mx-auto px-6 gap-4 space-y-3 py-5 rounded-2xl border border-white">
                <div className="">
                    <Text variant="body-md" className="border-l-6 border-l-white pl-2">Estagiário em ServiceNow</Text>
                </div>
                <IoIosBusiness size={24} className="inline-block mb-1 mr-2" />
                <Text>Extreme Digital Experience</Text>
                <br />
                <CiLocationOn size={24} className="inline-block mb-1 mr-2" />
                <Text>Recife, Pernambuco</Text>
                <br />
                <FaCalendarAlt size={24} className="inline-block mb-1 mr-2" />
                <Text variant="body-small">Fevereiro 2026 - Presente</Text>
                <br />
                <br />
                <Text variant="body-sm">Atuo no desenvolvimento de aplicações na plataforma ServiceNow e envolve apoiar a parametrização de ferramentas, funcionalidades e interfaces, além de auxiliar na implementação de fluxos de trabalho e no desenvolvimento de soluções na plataforma.</Text>
                <br />
                <br />
                <Text variant="body-sm">Tecnologias:</Text>
                <div className="flex gap-3 py-2 items-center">
                    <Button variant="primary" size="small">ServiceNow</Button>
                    <Button variant="primary" size="small">JavaScript</Button>
                    <Button variant="primary" size="small">Angular.js</Button>
                </div>
            </div>
        </section>
    )  
}
