import { useEffect, useRef, useState } from 'react'

export default function CustomBlobCursor(systemTheme) {
    const cursorRef = useRef(null)
    const [shouldShowComponent, setShouldShowComponent] = useState(true)

    useEffect(() => {
        function handleResize() {
            const shouldShow = window.innerWidth >= 968
            setShouldShowComponent(shouldShow)
        }
        if (cursorRef.current == null || cursorRef == null) return

        window.onpointermove = (event) => {
            const { clientX, clientY } = event
            if (typeof blob !== 'undefined') {
                blob.animate(
                    {
                        left: `${clientX}px`,
                        top: `${clientY}px`,
                    },
                    { duration: 3000, fill: 'forwards' }
                )
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return shouldShowComponent ? (
        <div
            className="blob-background-on-light-theme dark:blob-background-on-dark-theme z-0"
            id="blob"
            ref={cursorRef}
        ></div>
    ) : null
}
