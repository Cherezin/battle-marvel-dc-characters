import { useEffect, useRef, useState } from "react";
import heros from "../../data/heros.json";
import '../../index.css';
import { BattleModal } from "./battle-modal";
import { ListHero } from "./list-heros";
import { InfoCaracterModal } from "./info-modal";
import { DontCaracterModal } from "./dont-caracter-modal";
import { Header } from "./header";

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

  function filterAll(){
    setIsFilteredHeros(heros)
    setIsSearch('')
  }

  function filterMarvel(){
    const marvel = heros.filter(hero => {
      return hero.tags.some(tag => tag.includes('marvel'))
    })

    setIsFilteredHeros(marvel)
    setIsSearch('')
  }

  function filterDC(){
    const dc = heros.filter(hero => {
      return hero.tags.some(tag => tag.includes('dc'))
    })

    setIsFilteredHeros(dc)
    setIsSearch('')
  }

  function filterMan(){
    const man = heros.filter(hero => {
      return hero.tags.some(tag => tag.includes('homem'))
    })
    
    setIsFilteredHeros(man)
    setIsSearch('')
  }

  function filterWoman(){
    const woman = heros.filter(hero => {
      return hero.tags.some(tag => tag.includes('woman'))
    })
    
    setIsFilteredHeros(woman)
    setIsSearch('')
  }

  function filterHero(){
    const heroi = heros.filter(hero => {
      return hero.tags.some(tag => tag.includes('herói'))
    })
    
    setIsFilteredHeros(heroi)
    setIsSearch('')
  }

  function filterVillain(){
    const vilao = heros.filter(hero => {
      return hero.tags.some(tag => tag.includes('vilão'))
    })
    
    setIsFilteredHeros(vilao)
    setIsSearch('')
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
      
        <Header
          isSearch={isSearch}
          handleSearchCharacter={handleSearchCharacter}
          filterAll={filterAll}
          filterMarvel={filterMarvel}
          filterDC={filterDC}
          filterMan={filterMan}
          filterWoman={filterWoman}
          filterHero={filterHero}
          filterVillain={filterVillain}
          battleHeros={battleHeros}
         />
      

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
