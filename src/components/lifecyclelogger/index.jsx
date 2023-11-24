import { useEffect, useState } from "react"
import "./index.css"

export const LifeCycleLogger = () => {
    const [count, setCount] = useState(0)
    const hr = () => {
        document.getElementById("console").appendChild(document.createElement("hr"))
    }

    useEffect(() => {
        const newElement = document.createElement("span")
        newElement.innerHTML = "Елемент завантажено"

        document.getElementById("console").appendChild(newElement)
        hr()
        return () => {
            const newElement = document.createElement("span")
            newElement.innerHTML = "Елемент відвантажено"

            document.getElementById("console").appendChild(newElement)
            hr()
        }
    }, [])

    useEffect(() => {
        setCount((pv) => pv++)

        const newElement = document.createElement("span")
        newElement.innerHTML = "Лічильник змінено на: " + count

        document.getElementById("console").appendChild(newElement)
        hr()
    }, [count])

    return (
        <>
            <button onClick={() => setCount((pv) => pv + 1)}>+1</button>
            <div id="console"></div>
        </>
    )
}