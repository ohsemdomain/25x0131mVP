import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-sm border border-slate-200 px-3 hover:border-blue-400 active:bg-blue-400/5 focus:bg-blue-400/5 active:border-blue-400 focus:border-blue-400 transition duration-200 ease-in-out disabled:cursor-not-allowed focus:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }