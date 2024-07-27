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
}

export function ListHero({
    isFilteredHeros,
    addHerosSelect
 }: ListHeroProps){
    return(
        <div className="flex justify-center items-center">
            <ul className="py-5 px-5 max-w-7xl rounded-md flex justify-center flex-wrap gap-3">
                {isFilteredHeros.map(hero => (
                    <li key={hero.id}>
                    <button onClick={() => addHerosSelect(hero.id)} className="bg-zinc-200 rounded-md px-3 py-2 h-full hover:bg-zinc-300">
                        <h2 className="font-semibold">{hero.nome}</h2>
                        <img className="rounded-md" src={hero.img} alt={hero.nome} />
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}