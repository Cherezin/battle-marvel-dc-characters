import { RefObject } from "react"

interface Hero {
    id: number;
    nome: string;
    forca: number;
    inteligencia: number;
    velocidade: number;
    defesa: number;
    img: string;
  }

interface BattleModalProps{
    modalRef:  RefObject<HTMLDivElement>
    closeBattleModal: () => void
    topHero: Hero
}

export function BattleModal({
    modalRef,
    closeBattleModal,
    topHero
}: BattleModalProps){
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div ref={modalRef} className="max-h-full overflow-auto rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
            <h1 className="font-bold text-2xl">E o vencedor é...</h1>
            <h2 className="font-semibold text-xl">{topHero.nome}</h2>
            <img className="rounded-md" src={topHero.img} alt={topHero.nome}/>
            <div className="flex justify-center items-center">
                <button onClick={closeBattleModal} className="bg-red-500 px-3 py-1 rounded text-white">
                Fechar
                </button>
            </div>
            </div>
        </div>
    )
}