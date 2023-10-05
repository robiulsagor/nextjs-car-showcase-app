"use client"

import { CustomButtonProps } from "@/types"

const CustomBtn = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
    const a = ''
    return (
        <button
            disabled={false}
            type={'button'}
            className={`custom-btn ${containerStyles}`}
            onClick={() => { }}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CustomBtn