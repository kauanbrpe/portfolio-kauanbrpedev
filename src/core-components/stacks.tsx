import Text from "../components/text";
import Button from "../components/button";
/* Back-end */
import { FaJava } from "react-icons/fa6";
import CSharp from "../assets/icons/icons8-c-sharp-logo.svg?react"
import { SiDotnet } from "react-icons/si";
/* Front-end */
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
/* Banco de Dados */
import { SiMysql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import SqlDeveloper from "../assets/icons/file_type_sql_icon_130152.svg?react"
/* Nuvem e DevOps */
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import ServiceNow from "../assets/icons/ServiceNow_idGUxIPT8-_0.svg?react";
/* Versionamento e Documentação */
import { FaGitAlt } from "react-icons/fa6";
import { SiSwagger } from "react-icons/si";
import { SiPostman } from "react-icons/si";
/* Outros */
import { FaFigma } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { SiLinuxmint } from "react-icons/si";
import { SiN8N } from "react-icons/si";

export default function Stacks() {
    return (
        <section id="stacks" className="bg-black text-white py-10">
            <div className="max-w-5xl mx-auto px-6">
                <Text as="h2" variant="body-bold-title-pages" className="text-2xl md:text-4xl text-center mb-12">
                    Stacks
                </Text>

                <div className="max-w-5xl mx-auto px-6 gap-4 space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-y-6">
                    {/* Back-end */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Back-end</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={FaJava}>Java</Button>
                        <Button variant="primary" icon={CSharp}>C Sharp</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Button variant="primary" icon={SiDotnet}>DotNet</Button>
                        </div>
                    </div>

                    {/* Front-end */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Front-end</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={FaHtml5}>HTML5</Button>
                        <Button variant="primary" icon={IoLogoCss3}>CSS3</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={IoLogoJavascript}>JavaScript</Button>
                        <Button variant="primary" icon={SiTypescript}>TypeScript</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={RiTailwindCssFill}>Tailwind CSS</Button>
                        <Button variant="primary" icon={FaReact}>React.js</Button>
                        </div>
                    </div>

                    {/* Banco de Dados */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Banco de Dados</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={SiMysql}>MySQL</Button>
                        <Button variant="primary" icon={DiMsqlServer}>SQL Server</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={SqlDeveloper}>Oracle SQL Developer</Button>
                        </div>
                    </div>

                    {/* Nuvem e DevOps */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Nuvem e DevOps</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={FaDocker}>Docker</Button>
                        <Button variant="primary" icon={ServiceNow}>ServiceNow</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={FaAws}>Amazon Web Services</Button>
                        </div>
                    </div>

                    {/* Versionamento e Documentação */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Versionamento e Documentação</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={FaGitAlt}>Git</Button>
                        <Button variant="primary" icon={SiSwagger}>Swagger</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={SiPostman}>Postman</Button>
                        </div>
                    </div>

                    {/* Outros */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Outros</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="primary" icon={FaFigma}>Figma</Button>
                        <Button variant="primary" icon={SiLinuxmint}>Linux Mint</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Button variant="primary" icon={FaUbuntu}>Ubuntu</Button>
                            <Button variant="primary" icon={SiN8N}>N8N</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}