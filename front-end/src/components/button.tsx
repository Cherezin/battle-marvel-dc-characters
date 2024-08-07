import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
    base: 'rounded-lg px-5 font-medium flex items-center justify-center gap-2',

    variants:{
        variant: {
            primary:'bg-amber-200 text-zinc-950 hover:bg-amber-300',
            secundary: 'bg-emerald-200 text-zinc-950 hover:bg-emerald-300'
        },

        size: {
                default: 'py-2',
                full: 'w-full h-11'
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