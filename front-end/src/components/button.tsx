import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
    base: 'rounded-lg px-5 font-medium flex items-center justify-center gap-2',

    variants:{
        variant: {
            primary:'bg-zinc-50 text-zinc-950 hover:bg-zinc-300',
            secundary: 'bg-orange-400 text-zinc-950 hover:bg-orange-500',
            marvel: 'bg-red-600'
        },

        size: {
                default: 'py-2',
                full: 'w-full h-11',
                marvel: 'p-0 w-20',
                dc: 'py-0.5 w-20',
                caracter: 'p-1 w-20'
        }
    },


    defaultVariants: {
        variant: 'primary',
        size: 'default'
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
    children: ReactNode
}

export function Button({children, size, variant, ...props} : ButtonProps){
    return (
        <button {...props} className= {buttonVariants({ variant, size })}>
            {children}
        </button>
    )
}