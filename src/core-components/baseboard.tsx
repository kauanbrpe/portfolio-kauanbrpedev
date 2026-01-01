import logoImg from '../assets/images/LOGOS - Projeto Santa Luzia (22).png'
import Text from '../components/text.tsx'

export default function Baseboard() {
    return (
        <div className="w-full h-20 flex items-center px-4 sm:px-6 gap-4 border-b bg-gray-extremities relative">
            <img src={logoImg} alt="Logo Kauan Henrique" className='w-15 h-15' />
            <Text variant="body-md" className="text-white">Kauan Henrique</Text>
            <div className='ml-auto flex gap-6'>
                <Text variant="body-baseboard">© Todos os direitos reservados</Text>
            </div>
        </div>
    )
}