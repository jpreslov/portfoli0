import { useEffect, useState } from 'react'

const XPSection = () => {
    useEffect(() => {
        const getXP = async () => {
            const res = await fetch('/api/xp')
            const xpVals = await res.json()
            return xpVals
        }
    }, [])
    return (
        xp.map(item => {
            return (
                <div>
                    <p>
                        {item}
                    </p>
                </div>
            )
        })
    )
}

export default XPSection