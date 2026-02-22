import Text from "../components/text";
import Button from "../components/button";
/* Back-end */
import { FaJava } from "react-icons/fa6";
import CSharp from "../assets/icons/icons8-c-sharp-logo.svg?react"
import { SiDotnet } from "react-icons/si";
import { FaPython } from "react-icons/fa";
/* Front-end */
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
/* Banco de Dados */
import { GrMysql } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";
import SqlDeveloper from "../assets/icons/file_type_sql_icon_130152.svg?react"
import { SiSqlite } from "react-icons/si";
/* Nuvem e DevOps */
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import ServiceNow from "../assets/icons/ServiceNow_idGUxIPT8-_0.svg?react";
import { IoLogoVercel } from "react-icons/io5";
/* Versionamento e Documentação */
import { FaGitAlt } from "react-icons/fa6";
import { SiSwagger } from "react-icons/si";
import { SiPostman } from "react-icons/si";
/* Outros */
import { FaFigma } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { SiLinuxmint } from "react-icons/si";
import { SiN8N } from "react-icons/si";
import { SiGooglesheets } from "react-icons/si";
import PowerBi from "../assets/icons/powerbi-svgrepo-com.svg?react"

export default function Stacks() {
    return (
        <section id="stacks" className="bg-black-initial text-white py-10">
            <div className="max-w-5xl mx-auto px-6">
                <Text as="h2" variant="body-bold-title-pages" className="text-2xl md:text-4xl text-center mb-12">
                    Stacks
                </Text>

                <div className="max-w-5xl mx-auto px-6 gap-4 space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-y-6">
                    {/* Back-end */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Back-end</Text>
                        <div className="flex gap-3 items-center">
                            <Button variant="secondary" icon={FaJava}>Java</Button>
                            <Button variant="secondary" icon={FaPython}>Python</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Button variant="secondary" icon={CSharp}>C Sharp</Button>
                            <Button variant="secondary" icon={SiDotnet}>DotNet</Button>
                        </div>
                    </div>

                    {/* Front-end */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Front-end</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={FaHtml5}>HTML5</Button>
                        <Button variant="secondary" icon={IoLogoCss3}>CSS3</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={IoLogoJavascript}>JavaScript</Button>
                        <Button variant="secondary" icon={SiTypescript}>TypeScript</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={RiTailwindCssFill}>Tailwind CSS</Button>
                        <Button variant="secondary" icon={FaReact}>React.js</Button>
                        </div>
                    </div>

                    {/* Banco de Dados */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Banco de Dados</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={GrMysql}>MySQL</Button>
                        <Button variant="secondary" icon={DiMsqlServer}>SQL Server</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={SqlDeveloper}>SQL Developer</Button>
                        <Button variant="secondary" icon={SiSqlite}>SQLite</Button>
                        </div>
                    </div>

                    {/* Nuvem e DevOps */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Nuvem e DevOps</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={FaDocker}>Docker</Button>
                        <Button variant="secondary" icon={ServiceNow}>ServiceNow</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={FaAws}>Amazon Web Services</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={IoLogoVercel}>Vercel</Button>
                        </div>
                    </div>

                    {/* Versionamento e Documentação */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Versionamento e Documentação</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={FaGitAlt}>Git</Button>
                        <Button variant="secondary" icon={SiSwagger}>Swagger</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={SiPostman}>Postman</Button>
                        </div>
                    </div>

                    {/* Outros */}
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <Text variant="body-stacks" className="border-l-6 border-l-white pl-2">Outros</Text>
                        <div className="flex gap-3 items-center">
                        <Button variant="secondary" icon={FaFigma}>Figma</Button>
                        <Button variant="secondary" icon={SiLinuxmint}>Linux Mint</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Button variant="secondary" icon={FaUbuntu}>Ubuntu</Button>
                            <Button variant="secondary" icon={SiN8N}>N8N</Button>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Button variant="secondary" icon={SiGooglesheets}>Excel</Button>
                            <Button variant="secondary" icon={PowerBi}>Power BI</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}