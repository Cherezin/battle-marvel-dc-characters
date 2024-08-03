import { Info } from "lucide-react";

interface Hero {
    id: number;
    nome: string;
    forca: number;
    inteligencia: number;
    velocidade: number;
    defesa: number;
    img: string;
  }

interface ListHeroProps{
    isFilteredHeros: Hero[]
    addHerosSelect: (id: number) => void
    openInfoModal: (id: number) => void
}

export function ListHero({
    isFilteredHeros,
    addHerosSelect,
    openInfoModal
 }: ListHeroProps){
    return(
        <div className="flex justify-center items-center pt-24">
            <ul className="py-5 px-5 max-w-7xl rounded-md flex justify-center flex-wrap gap-3">
                {isFilteredHeros.map(hero => (
                    <li className="bg-zinc-200 rounded-md px-3 py-2 hover:bg-zinc-300" key={hero.id}>
                        <div className="flex flex-col items-center justify-center space-y-2 h-full">
                            <h2 className="font-semibold">{hero.nome}</h2>
                            <button onClick={() => addHerosSelect(hero.id)} >
                                <img className="rounded-md" src={hero.img} alt={hero.nome} />
                            </button>
                            <div>
                                <button onClick={() => openInfoModal(hero.id)}>
                                    <Info className="size-5 text-yellow-950 hover:text-yellow-500" />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}