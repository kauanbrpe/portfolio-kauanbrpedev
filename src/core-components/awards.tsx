import Text from "../components/text";

export default function Awards() {
    return (
        <section id="awards" className="bg-black text-white py-10">
            <div className="max-w-5xl mx-auto px-6">
                <Text as="h2" variant="body-bold-subtile" className="text-center mb-12">
                    Condecorações
                </Text>
                
                <div className="space-y-4">
                    <div className="flex">
                        <Text
                            variant="body-bold-title-pages"
                            className="inline-block border-l-6 border-l-white pl-2"
                            >
                            7º lugar no Demoday do Kickoff - 2025.1
                            </Text>
                    </div>
                </div>

                <div className="my-8"></div>

                <div className="space-y-4">
                    <div className="flex">
                        <Text
                            variant="body-bold-title-pages"
                            className="inline-block border-l-6 border-l-white pl-2"
                            >
                            Aluno Destaque da Residência Tecnológica do Porto Digital - 2025.2
                            </Text>
                    </div>
                </div>
                
            </div>
        </section>
    )
}