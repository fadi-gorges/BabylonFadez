import React from 'react'

const StackDecor = ({colorOne, colorTwo, children}: {
    colorOne?: string,
    colorTwo?: string,
    children: React.ReactNode
}) => {

    return (
        <div className="stack h-full w-full">
            {children}
            <div className={`w-full h-full ${colorOne ?? 'bg-gray-400'} card`}/>
            <div className={`w-full h-full ${colorTwo ?? 'bg-gray-300'} card`}/>
        </div>
    )
}

export default StackDecor