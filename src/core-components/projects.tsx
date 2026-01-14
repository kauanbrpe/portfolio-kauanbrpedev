import Text from "../components/text";
import Button from "../components/button";
import { IoIosBusiness } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";

export default function Projects() {
    return (
        <section id="projeto" className="bg-black-initial text-white py-10">
            <div className="max-w-5xl mx-auto px-6">
                <Text
                as="h2"
                variant="body-bold-title-pages"
                className="text-2xl md:text-4xl text-center"
                >
                Projetos
                </Text>
            </div>

            <div className="px-21 py-5">
                <Text variant="body-md-bold" className="border-l-6 border-l-white pl-2">Residência Tecnológica do Porto Digital</Text>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6">
                <div className="bg-black-initial max-w-3xl mx-auto px-6 gap-4 space-y-3 py-5 rounded-2xl border border-white">
                    <div>
                        <Text variant="body-md" className="border-l-6 border-l-white pl-2">LÍS | Saúde da Mulher - Kickoff 2025.1</Text>
                    </div>
                    <IoIosBusiness size={24} className="inline-block mb-1 mr-2" />
                    <Text>Porto Digital</Text>
                    <br />
                    <CiLocationOn size={24} className="inline-block mb-1 mr-2" />
                    <Text>Recife, Pernambuco</Text>
                    <br />
                    <FaCalendarAlt size={24} className="inline-block mb-1 mr-2" />
                    <Text variant="body-small">Maio 2025 - Junho 2025</Text>
                    <br />
                    <MdGroups size={24} className="inline-block mb-1 mr-2" />
                    <Text variant="body-small">Aniele R., Kauan Henrique, Letícia Guedes, Rafael Demetrio, Samuel Souza, Silas Jose, Thaís Karol, Vitória Celeste</Text>
                    <br />
                    <br />
                    <Text variant="body-sm">
                        A LÍS é um aplicativo que é focado no bem-estar da mulher. Ele oferece calendários detalhados para monitorar os ciclos menstrual, folicular, de ovulação e lúteo. Além disso, inclui um modo parceiro, permitindo que um amigo, um familiar ou o próprio parceiro acompanhe e compreenda o estado de sua companheira, promovendo o apoio mútuo.
                        <br />
                        <br />
                        Fui o responsável pelo design do projeto, fazendo o Figma, o Slide e os post's da Rede Social.
                        <br />
                        <br />
                        Esse projeto foi finalista do Demoday do Kickoff 2025.1, representando, com mais dois projetos, o Centro Universitário Tiradentes - Recife, ficando na 7º colocação.
                        <br />
                        <br />
                        No segundo semestre de 2025, a LÍS foi uma das selecionadas para apresentar na Arena Educação no REC'n'Play 2025, o maior evento gratuito de tecnologia do Brasil.
                    </Text>
                    <br />
                    <br />
                    <Text variant="body-sm">Tecnologias:</Text>
                    <div className="flex gap-3 py-2 items-center">
                        <Button variant="secondary" size="small">Figma</Button>
                    </div>
                    <div className="flex gap-3 py-2 items-center justify-center">
                        <a href="https://www.behance.net/gallery/228664279/LIS-Kickoff-20251-UNIT-Pernambuco-Porto-Digital" target="_blank"><Button variant="secondary">Confira o Projeto</Button></a>
                    </div>
                </div>

                <div className="bg-black-initial max-w-3xl mx-auto px-6 gap-4 space-x- space-y-3 py-5 rounded-2xl border border-white">
                    <div>
                        <Text variant="body-md" className="border-l-6 border-l-white pl-2">ControlDesk - RiseUp 2025.2</Text>
                    </div>
                    <IoIosBusiness size={24} className="inline-block mb-1 mr-2" />
                    <Text>EDX - Digital Experience, Porto Digital</Text>
                    <br />
                    <CiLocationOn size={24} className="inline-block mb-1 mr-2" />
                    <Text>Recife, Pernambuco</Text>
                    <br />
                    <FaCalendarAlt size={24} className="inline-block mb-1 mr-2" />
                    <Text variant="body-small">Novembro 2025 - Dezembro 2025</Text>
                    <br />
                    <MdGroups size={24} className="inline-block mb-1 mr-2" />
                    <Text variant="body-small">Arthur Correia, Edmilson Ronaldy, Hugo Henrique, Lucas Antônio, Lucas Matheus, Kauan Henrique</Text>
                    <br />
                    <br />
                    <Text variant="body-sm">O ControlDesk é uma aplicação voltada para requisição de Equipamentos de TI, com a automação proposta pela ServiceNow, contêm automações que informa ao usuário final em qual parte da sua solicitação ela está. Esse projeto foi um Desafio proposto pela EDX - Digital Experience, pela Residência Tecnológica do Porto Digital.
                                            <br />
                                            <br />
                                            Fui o responsável por toda a programação do projeto, desde das tabelas e Record Producers até os Flow Designers para automação da aplicação.
                                            <br />
                                            <br />
                                            Esse projeto ficou na 4º colocação no SkillUp da EDX 2025.2.
                                            <br />
                                            <br />
                                            <br />
                    </Text>
                    <br />
                    <br />
                    <Text variant="body-sm">Tecnologias:</Text>
                    <div className="flex gap-3 py-2 items-center">
                        <Button variant="secondary" size="small">ServiceNow</Button>
                        <Button variant="secondary" size="small">JavaScript</Button>
                    </div>
                    <div className="flex gap-3 py-2 items-center justify-center">
                        <a href="https://www.behance.net/gallery/241011133/ControlDesk-RiseUp-20252-EDX-UNIT-PE-PD" target="_blank"><Button variant="secondary">Confira o Projeto</Button></a>
                    </div>
                </div>
            </div>

            <div className="py-2"></div>

            <div className="px-21 py-5">
                <Text variant="body-md-bold" className="border-l-6 border-l-white pl-2">Centro Universitário Tiradentes - UNIT</Text>
            </div>

                <div className="bg-black-initial max-w-3xl mx-auto px-6 gap-4 space-y-3 py-5 rounded-2xl border border-white">
                    <div>
                        <Text variant="body-md" className="border-l-6 border-l-white pl-2">B!TE</Text>
                    </div>
                    <FaSchool size={24} className="inline-block mb-1 mr-2" />
                    <Text>2º período</Text>
                    <br />
                    <CiLocationOn size={24} className="inline-block mb-1 mr-2" />
                    <Text>Recife, Pernambuco</Text>
                    <br />
                    <FaCalendarAlt size={24} className="inline-block mb-1 mr-2" />
                    <Text variant="body-small">Outubro 2025 - Dezembro 2025</Text>
                    <br />
                    <MdGroups size={24} className="inline-block mb-1 mr-2" />
                    <Text variant="body-small">Dayane Thaís, Eduardo Henrique, Gustavo Rufino, Kauan Henrique, Letícia Guedes, Lucas Ferreira</Text>
                    <br />
                    <br />
                    <Text variant="body-sm">
                        O B!TE é um marketplace focado na área de doces e brownies.
                        <br />
                        <br />
                        Fui responsável pela documentação do projeto, desde da elevação dos requisitos até seu versionamento, e também dos modelos Conceitual, Lógico e Físico do Banco de Dados.
                    </Text>
                    <br />
                    <br />
                    <Text variant="body-sm">Cadeiras envolvidas:</Text>
                    <div className="flex gap-3 py-2 items-center">
                        <Button variant="secondary" size="small">Front-end</Button>
                        <Button variant="secondary" size="small">Banco de Dados</Button>
                        <Button variant="secondary" size="small">Eng. de Requisitos</Button>
                    </div>
                    <Text variant="body-sm">Tecnologias:</Text>
                    <div className="flex gap-3 py-2 items-center">
                        <Button variant="secondary" size="small">TypeScript</Button>
                        <Button variant="secondary" size="small">React.js</Button>
                        <Button variant="secondary" size="small">SQL Server</Button>
                    </div>
                    <div className="flex gap-3 py-2 items-center justify-center">
                        <a href="https://github.com/dadaysmo/BITE-marketplace" target="_blank"><Button variant="secondary">Repositório GitHub</Button></a>
                    </div>
                </div>
        </section>
    )
}