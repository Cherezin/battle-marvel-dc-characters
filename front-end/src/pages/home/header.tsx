import { Button } from "../../components/button";

interface HeaderProps {
    isSearch: string
    handleSearchCharacter: (e: string) => void
    filterAll: () => void
    filterMarvel: () => void
    filterDC: () => void
    filterMan: () => void
    filterWoman: () => void
    filterHero: () => void
    filterVillain: () => void
    battleHeros: () => void
}

export function Header ({
    isSearch,
    handleSearchCharacter,
    filterAll,
    filterMarvel,
    filterDC,
    filterMan,
    filterWoman,
    filterHero,
    filterVillain,
    battleHeros
} : HeaderProps){
    return(
        <div className="fixed top-0 left-0 w-full bg-amber-950 py-4 flex flex-col items-center justify-center gap-6 z-50">
        <div className="flex items-center justify-center mt-3 gap-3">
          <div className="bg-zinc-100 rounded-md px-2 w-64 py-2">
            <input 
            className="bg-transparent w-full outline-none"
            placeholder="Pesquise o nome do personagem"
            value={isSearch}
            onChange={(e) => handleSearchCharacter(e.target.value)}
            type="text" 
            />
          </div>

          <div className='w-px h-6 bg-zinc-50'></div>
        
          <Button onClick={filterAll}>
            Todos
          </Button>
          <Button onClick={filterMarvel}>
            Marvel
          </Button>
          <Button onClick={filterDC}>
            DC
          </Button>
          <Button onClick={filterMan}>
            Homens
          </Button>
          <Button onClick={filterWoman}>
            Mulheres
          </Button>
          <Button onClick={filterHero}>
            Heróis
          </Button>
          <Button onClick={filterVillain}>
            Vilões
          </Button>

        </div>

        <div className="flex items-center justify-center">
            <Button onClick={battleHeros} variant="secundary">
             Iniciar Luta
            </Button>
        </div>
        
      </div>
    )
}