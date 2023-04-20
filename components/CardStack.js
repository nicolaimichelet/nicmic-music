import React, { useState, useEffect } from 'react'
import SongCard from './SongCard'

const CardStack = ({ cards }) => {
    const [currentCard, setCurrentCard] = useState(0)
    const [inactiveCards, setInactiveCards] = useState([])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextCardIndex = (currentCard + 1) % cards.length
            setCurrentCard(nextCardIndex)
            setInactiveCards((prevInactiveCards) => [
                ...prevInactiveCards,
                currentCard,
            ])
            setTimeout(() => {
                setInactiveCards((prevInactiveCards) =>
                    prevInactiveCards.filter((card) => card !== currentCard)
                )
            }, 4475)
        }, 5000)

        return () => clearInterval(intervalId)
    }, [cards.length, currentCard])
    return (
        <div className="relative inheritedWidth">
            {cards.map((card, index) => {
                const getRotationAngle = (index) => {
                    switch (index) {
                        case 0:
                            return 8
                        case 1:
                            return -10
                        case 2:
                            return 5
                        case 3:
                            return -8
                        case 4:
                            return -5
                        default:
                            return 0
                    }
                }
                const isActive = index === currentCard
                const isInactive = inactiveCards.includes(index)
                const zIndex =
                    currentCard === index ? cards.length : cards.length - index

                return (
                    <SongCard
                        key={index}
                        index={index}
                        source={card.source}
                        alt={card.alt}
                        description={card.description}
                        isActive={isActive}
                        isInactive={isInactive}
                        currentCard={currentCard}
                        className={isActive ? 'active' : ''}
                        rotation={getRotationAngle(index)}
                        style={{
                            zIndex: zIndex,
                        }} // Apply rotation effect to each card
                    />
                )
            })}
        </div>
    )
}

export default CardStack
