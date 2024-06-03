import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

export default function IconButton({children, text, color, setOffset, ...props}){
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    useEffect(() => {
        const value = hovered ? ref.current?.offsetWidth || 0 : 0
        setOffset(value)
    },[ref, hovered, setOffset])
    return (
        <button
            onMouseEnter={()=> setHovered(true)}
            onMouseLeave={()=> setHovered(false)}
            className={`flex p-2 items-center rounded-lg text-white ${color || "bg-black"} max-w-52`} {...props}
        >
            {children}
            <div 
                style={{width: hovered ? ref.current?.offsetWidth || 0 : 0}}
                className="overflow-x-hidden transition-all duration-300 ease-out"
            >
                <span ref={ref} className="px-1.5">{text}</span>
            </div>
        </button>
    )
}