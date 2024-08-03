import { useEffect, useRef, useState } from "react";
import heros from "../../data/heros.json";
import '../../index.css';
import { BattleModal } from "./battle-modal";
import { ListHero } from "./list-heros";
import { InfoCaracterModal } from "./info-modal";
import { DontCaracterModal } from "./dont-caracter-modal";

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

export function CreateBattleHeros() {
  const [isFilteredHeros, setIsFilteredHeros] = useState<Hero[]>(heros)
  const [herosSelect, setHerosSelect] = useState<Hero[]>([]);
  const [InfoCaracteres, setInfoCaracteres] = useState<Hero[]>([]);
  const [topHero, setTopHero] = useState<Hero | null>(null);
  const [isBattleModal, setIsBattleModal] = useState(false);
  const [isInfoModal, setIsInfoModal] = useState(false)
  const [isDontCaracterModal, setIsDontCaracterModal] = useState(false)
  const [isSearch, setIsSearch] = useState('')
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const results = heros.filter(hero => {
      return hero.tags.some(tag => tag.toLowerCase().includes(isSearch.toLowerCase()))
    })

    setIsFilteredHeros(results)
  },[isSearch])

  function addHerosSelect(id: number) {
    setHerosSelect(prevHeros => {
        const isAlreadySelected = prevHeros.some(hero => hero.id == id)

        if(isAlreadySelected){
          return prevHeros.filter(hero => hero.id !== id)
        } else{
          const herosFilter = heros.filter(hero => hero.id === id );
          return [...prevHeros, ...herosFilter]
        }
   
    })
  }

  function totalPower(hero: Hero) {
    return hero.forca + hero.defesa + hero.inteligencia + hero.velocidade;
  }

  function battleHeros() {
    if (herosSelect.length <= 1) return setIsDontCaracterModal(true)
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

  function closeDontCaracterModal(){
    setIsDontCaracterModal(false)
  }

  function handleSearchCharacter(e: string){
    setIsSearch(e)
  }

  function openInfoModal(id: number){
    const infoCaracterFiltered = heros.filter(hero => hero.id === id)

    setInfoCaracteres(infoCaracterFiltered)
    setIsInfoModal(true)
  }

  function closeInforModal(){
    setIsInfoModal(false)
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeBattleModal();
        closeInforModal();
        closeDontCaracterModal()
      }
    }

    if (isBattleModal || isInfoModal || isDontCaracterModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBattleModal, isInfoModal, isDontCaracterModal]);

  return (

    <div>
      <div className="fixed top-0 left-0 w-full bg-amber-950 py-7 flex items-center justify-center gap-3 z-50">
        <div className="bg-zinc-100 rounded-md px-2 w-1/6 py-2">
          <input 
          className="bg-transparent w-full outline-none"
          placeholder="Pesquise o nome do personagem"
          value={isSearch}
          onChange={(e) => handleSearchCharacter(e.target.value)}
          type="text" 
          />
        </div>
        <div className="flex items-center justify-center">
            <button 
            className="bg-emerald-200 px-5 py-2 rounded-lg text-zinc-950 hover:bg-emerald-300" 
            onClick={battleHeros}>
              Iniciar Luta
            </button>
        </div>
      </div>

        <div className="py-6 px-5">
            
            <ListHero
                isFilteredHeros={isFilteredHeros}
                addHerosSelect={addHerosSelect}
                openInfoModal={openInfoModal}
                herosSelect={herosSelect}
            />

            
            
            {isBattleModal && topHero && (
                <BattleModal
                    modalRef={modalRef}
                    topHero={topHero}
                    closeBattleModal={closeBattleModal}
                />
            )}

            {isDontCaracterModal &&(
                <DontCaracterModal
                modalRef={modalRef}
                closeDontCaracterModal={closeDontCaracterModal}
                />
            )}

            {isInfoModal && ( 
                <InfoCaracterModal
                    modalRef={modalRef}
                    InfoCaracteres={InfoCaracteres}
                    closeInforModal={closeInforModal}
                />
            )}
        </div>
    </div>
  );
}
