import { RefObject } from "react"

interface DontCaracterModalProps{
    modalRef: RefObject<HTMLDivElement>
    closeDontCaracterModal: () => void
}

export function DontCaracterModal({
    modalRef,
    closeDontCaracterModal
}:DontCaracterModalProps){
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div ref={modalRef} className="max-h-full overflow-auto rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
                <span>Selecione mais personagens</span>
                <div className="flex items-center justify-center">
                    <button onClick={closeDontCaracterModal} className="bg-red-500 px-3 py-1 rounded text-white">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    )
}