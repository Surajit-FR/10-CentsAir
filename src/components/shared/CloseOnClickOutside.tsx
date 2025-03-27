import React, { ReactNode, SetStateAction, useEffect, useRef } from 'react'

interface Props {
    children: ReactNode
    show: boolean
    setShow: React.Dispatch<SetStateAction<boolean>>
}


const CloseOnClickOutside = ({ children, show, setShow }: Props) => {
    const wrapperRef = useRef<any>()
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShow(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef, setShow]);
    return (

        <>
            {show ? <div ref={wrapperRef}>
                {children}
            </div> : <></>}
        </>
    )
}

export default CloseOnClickOutside