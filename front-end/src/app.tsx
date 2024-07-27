import { useEffect, useRef, useState } from "react";
import heros from "./data/heros.json";
import './index.css';

interface Hero {
  id: number;
  nome: string;
  forca: number;
  inteligencia: number;
  velocidade: number;
  defesa: number;
  img: string;
}

export function App() {
  const [isFilteredHeros, setIsFilteredHeros] = useState(heros)
  const [herosSelect, setHerosSelect] = useState<Hero[]>([]);
  const [topHero, setTopHero] = useState<Hero | null>(null);
  const [isBattleModal, setIsBattleModal] = useState(false);
  const [isSearch, setIsSearch] = useState('')
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const results = heros.filter(hero => {
      return hero.tags.some(tag => tag.toLowerCase().includes(isSearch.toLowerCase()))
    })

    setIsFilteredHeros(results)
  },[isSearch])

  function addHerosSelect(id: number) {
    const herosFilter = heros.filter(hero => hero.id === id);

    setHerosSelect(prevHeros => [
      ...prevHeros,
      ...herosFilter
    ]);
  }

  function totalPower(hero: Hero) {
    return hero.forca + hero.defesa + hero.inteligencia + hero.velocidade;
  }

  function battleHeros() {
    if (herosSelect.length === 0) return;
    const heroTotals = herosSelect.map(hero => ({
      ...hero,
      total: totalPower(hero)
    }));

    const topHero = heroTotals.reduce(
      (bestHero, hero) =>
        hero.total > bestHero.total ? hero : bestHero, heroTotals[0]
    );

    setTopHero(topHero);
    setIsBattleModal(true); 
  }

  function closeBattleModal() {
    setIsBattleModal(false);
    setHerosSelect([]);
    setTopHero(null);
  }

  function handleSearchCharacter(e: string){
    setIsSearch(e)
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeBattleModal();
      }
    }

    if (isBattleModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBattleModal]);

  return (

    <div>
      <div className="bg-amber-950 py-7 flex items-center justify-center">
        <input 
        className="rounded-md w-1/3" 
        placeholder="Pesquise o nome do personagem"
        value={isSearch}
        onChange={(e) => handleSearchCharacter(e.target.value)}
        type="text" />
      </div>
      <div className="py-6 px-5">
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

      <div className="flex items-center justify-center">
        <button className="bg-zinc-500 px-5 py-2 rounded-lg text-zinc-50" onClick={battleHeros}>
          Iniciar Luta
        </button>
      </div>

      {isBattleModal && topHero && (
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
      )}
    </div>
    </div>
  );
}

export default App;