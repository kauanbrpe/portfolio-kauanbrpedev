import Text from "../components/text";
import Button from "../components/button";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentAttachSharp } from "react-icons/io5";
import Lattes from "../assets/icons/lattes.svg?react"

export default function Links() {
    return (
        <section id="contato" className="bg-black-initial text-white py-10">
            <div className="max-w-5xl mx-auto px-6">
                <Text as="h2" variant="body-bold-title-pages" className="text-2xl md:text-4xl text-center mb-12">
                Contato
                </Text>

                <div className="px-4 gap-6 flex flex-wrap justify-center items-center">
                    <a href="https://www.instagram.com/kauanbrpe.dev/" target="_blank" rel="noopener noreferrer" className="m-2">
                        <Button variant="secondary" size="medium" icon={FaInstagram}>@kauanbrpe.dev</Button>
                    </a>

                    <a href="https://github.com/kauanbrpe" target="_blank" rel="noopener noreferrer" className="m-2">
                        <Button variant="secondary" size="medium" icon={FaGithub}>/kauanbrpe</Button>
                    </a>

                    <a href="https://www.linkedin.com/in/kauanbrpe/" target="_blank" rel="noopener noreferrer" className="m-2">
                        <Button variant="secondary" size="medium" icon={FaLinkedinIn}>/kauanbrpe</Button>
                    </a>

                    <a href="mailto:kauanbrpe.dev@hotmail.com" className="m-2">
                        <Button variant="secondary" size="medium" icon={MdEmail}>kauanbrpe.dev@hotmail.com</Button>
                    </a>

                    <a href="https://docs.google.com/document/d/1KNPrDSo3YscS7MV94Gu_6UiMQ4OrPv24_vGh_9Sm6cw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="m-2">
                        <Button variant="secondary" size="medium" icon={IoDocumentAttachSharp}>Currículo</Button>
                    </a>

                    <a href="https://lattes.cnpq.br/6860961717611650" target="_blank" rel="noopener noreferrer" className="m-2">
                        <Button variant="secondary" size="medium" icon={Lattes}>Lattes</Button>
                    </a>
                </div>
            </div>
        </section>
    )
}