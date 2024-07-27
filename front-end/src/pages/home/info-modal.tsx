import { RefObject } from "react"

interface Hero {
    id: number;
    nome: string;
    forca: number;
    inteligencia: number;
    velocidade: number;
    defesa: number;
    img: string;
    descricao: string;
    titulo: string;
}

interface InfoCaracterModalProps{
    modalRef:  RefObject<HTMLDivElement>
    InfoCaracteres: Hero[]
    closeInforModal: () => void
}

export function InfoCaracterModal({
    modalRef,
    InfoCaracteres,
    closeInforModal
}: InfoCaracterModalProps){
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div ref={modalRef} className="max-h-full overflow-auto rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
                {InfoCaracteres.map(hero => 
                    <div>
                        <div className="py-2">
                            <h1 className="font-bold text-2xl">{hero.nome}</h1>
                            <p className="font-serif text-zinc-600">{hero.titulo}</p>
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            <img className="rounded-md" src={hero.img} alt={hero.nome} />
                            <span>
                                <p><strong>Força</strong>: {hero.forca}</p>
                                <p><strong>Defesa</strong>: {hero.defesa}</p>
                                <p><strong>Velocidade</strong>: {hero.velocidade}</p>
                                <p><strong>Inteligencia</strong>: {hero.inteligencia}</p>
                            </span>
                        </div>
                        <div className="py-3">
                            <span>
                                {hero.descricao}
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <button onClick={closeInforModal} className="bg-red-500 px-3 py-1 rounded text-white">
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}