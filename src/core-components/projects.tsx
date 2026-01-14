import Text from "../components/text";
import logoLis from "../assets/images/LIS LOGO SEM FUNDO.png"
import logoControlDesk from "../assets/images/Imagem do WhatsApp de 2025-11-26 à(s) 13.47.51_b063add1-depositphotos-bgremover (1).png"
import Button from "../components/button";

export default function Projects() {
    return (
        <section id="projeto" className="bg-black-initial text-white py-10">
            <div className="max-w-5xl mx-auto px-6">
                <Text
                as="h2"
                variant="body-bold-title-pages"
                className="text-2xl md:text-4xl text-center mb-12"
                >
                Projetos
                </Text>

                <div className="space-y-4">
                <div className="flex">
                    <Text
                    variant="body-bold-title-pages"
                    className="inline-block border-l-6 border-l-white pl-2"
                    >
                    LÍS | Saúde da Mulher
                    </Text>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-5 space-y-4 md:space-y-0 py-5">
                    <img
                    src={logoLis}
                    alt="Logo LÍS"
                    className="w-[130px] h-[173.25px] shrink-0 object-contain"
                    />
                    <Text as="p" variant="body-small" className="text-center md:text-left">
                    A LÍS é um aplicativo que é focado no bem-estar da mulher. Ele
                    oferece calendários detalhados para monitorar os ciclos menstrual,
                    folicular, de ovulação e lúteo. Além disso, inclui um modo
                    parceiro, permitindo que um amigo, um familiar ou o próprio
                    parceiro acompanhe e compreenda o estado de sua companheira,
                    promovendo o apoio mútuo.
                    <br />
                    <br />
                    Fui o responsável pelo design do projeto, fazendo o Figma, o Slide e
                    os post's da Rede Social.
                    <br />
                    <br /> Esse projeto foi finalista do Demoday do Kickoff 2025.1,
                    representando, com mais dois projetos, o Centro Universitário
                    Tiradentes - Recife, ficando na 7º colocação.
                    <br />
                    <br />
                    No segundo semestre de 2025, a LÍS foi uma das selecionadas para
                    apresentar na Arena Educação no REC'n'Play 2025, o maior evento
                    gratuito de tecnologia do Brasil.
                    </Text>
                </div>

                <div className="flex justify-center">
                    <a
                    href="https://www.behance.net/gallery/228664279/LIS-Kickoff-20251-UNIT-Pernambuco-Porto-Digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Button variant="secondary">Confira o projeto</Button>
                    </a>
                </div>
                </div>

                <div className="border-t border-white my-8"></div>

                <div className="space-y-4 py-5">
                <div className="flex">
                    <Text
                    variant="body-bold-title-pages"
                    className="inline-block border-l-6 border-l-white pl-2"
                    >
                    ControlDesk
                    </Text>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 space-y-4 md:space-y-0 py-5">
                    <img
                    src={logoControlDesk}
                    alt="Logo ControlDesk"
                    className="w-[175px] h-[171.25px] shrink-0 object-contain"
                    />
                    <Text as="p" variant="body-small" className="text-center md:text-left">
                    O ControlDesk é uma aplicação voltada para requisição de
                    Equipamentos de TI, com a automação proposta pela ServiceNow, contêm
                    automações que informa ao usuário final em qual parte da sua
                    solicitação ela está. Esse projeto foi um Desafio proposto pela EDX
                    - Extreme Digital, pela Residência Tecnológica do Porto Digital.
                    <br />
                    <br />
                    Fui o responsável por toda a programação do projeto, desde das
                    tabelas e Record Producers até os Flow Designers para automação da
                    aplicação.
                    <br />
                    <br />
                    Esse projeto ficou na 4º colocação no SkillUp da EDX 2025.2.
                    </Text>
                </div>

                <div className="flex justify-center">
                    <a
                    href="https://www.behance.net/gallery/241011133/ControlDesk-RiseUp-20252-EDX-UNIT-PE-PD"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Button variant="secondary">Confira o projeto</Button>
                    </a>
                </div>
                </div>
            </div>
        </section>
    )
}