import { useEffect, useState } from "react"
import "./index.css"

export const LifeCycleLogger = () => {
    const [count, setCount] = useState(0)
    const appendChilds = (newElement) => {
        document.getElementById("console").appendChild(document.createElement("hr"))
        document.getElementById("console").appendChild(newElement)
    }

    useEffect(() => {
        const newElement = document.createElement("span")
        newElement.innerHTML = "Елемент завантажено"

        appendChilds(newElement)
        return () => {
            const newElement = document.createElement("span")
            newElement.innerHTML = "Елемент відвантажено"

            appendChilds(newElement)
        }
    }, [])

    useEffect(() => {
        setCount((pv) => pv++)

        const newElement = document.createElement("span")
        newElement.innerHTML = "Лічильник змінено на: " + count

        appendChilds(newElement)
    }, [count])

    return (
        <>
            <button onClick={() => setCount((pv) => pv + 1)}>+1</button>
            <div id="console"></div>
        </>
    )
}