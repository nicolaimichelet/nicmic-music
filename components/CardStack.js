import React, { useState, useEffect } from 'react'
import SongCard from './SongCard'

const CardStack = ({ cards }) => {
    const [currentCard, setCurrentCard] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % cards.length)
        }, 5000)

        return () => clearInterval(intervalId)
    }, [cards.length])

    return (
        <div className="relative">
            {cards.map((card, index) => {
                const getRotationAngle = (index) => {
                    switch (index) {
                        case 0:
                            return 'rotate(10deg)'
                        case 1:
                            return 'rotate(-10deg)'
                        case 2:
                            return 'rotate(5deg)'
                        case 3:
                            return 'rotate(355deg)'
                        case 4:
                            return 'rotate(0)'
                        default:
                            return 'rotate(0)'
                    }
                }
                return (
                    <SongCard
                        key={index}
                        source={card.source}
                        alt={card.alt}
                        description={card.description}
                        isActive={index === currentCard}
                        className={index === currentCard ? 'active' : ''}
                        style={{ transform: getRotationAngle(index) }} // Apply rotation effect to each card
                    />
                )
            })}
        </div>
    )
}

export default CardStack
