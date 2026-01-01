import Text from "../components/text";
import imgKauanPequeno from "../assets/images/186141320_1210295672762325_3260778299289279910_n 1.png";

export default function About() {
    return (
        <section id="sobremim" className="bg-black text-white py-10">
        <div className="max-w-5xl mx-auto px-6">
        <Text as="h2" variant="body-bold-title-pages" className="text-2xl md:text-4xl text-center mb-12">
            Sobre Mim
        </Text>

            <div className="grid gap-10 md:grid-cols-2 items-start">
                <div className="text-base md:text-lg leading-relaxed space-y-6">
                    <p>
                        Tenho 19 anos e faço Análise e Desenvolvimento de Sistemas pelo Centro Universitário Tiradentes pelo Programa
                        Embarque Digital, que é um programa em parceria da Prefeitura da Cidade do Recife e o Porto Digital.
                    </p>

                    <p>
                        Também atuo como Designer Gráfico na página LOUD Pernambuco e Fotógrafo pela Pastoral da Comunicação da
                        Paróquia Nossa Senhora do Rosário e Santa Luzia, a Paróquia da Torre.
                    </p>

                    <p>
                        Torcedor fanático do Náutico, fã de Linkin Park, jogador de Valorant. Desde pequeno, fascinado pela
                        computação.
                    </p>
                    </div>

                    <div className="flex flex-col items-start md:items-center">
                    <img
                        src={imgKauanPequeno}
                        alt="foto antiga"
                        className="w-822px h-463px rounded-3xl shadow-md"
                    />

                    <Text variant="body-sm-bold" className="mt-6 text-left md:text-center">
                        Quando é desde pequeno, eu tô falando sério.
                    </Text>

                    <Text variant="body-sm" className="mt-3 text-left md:text-center max-w-sm">
                        Essa foto sou eu e meu primo, mexendo no meu primeiro computador, com 8 anos de idade, só usava para
                        jogar.
                    </Text>
                    </div>
            </div>
        </div>
    </section>
    );
}