import { useState } from "react"
const Count = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 w-full gap-4 mb-2 px-12 my-20 text-3xl">
                <button
                    className="bg-red-600 h-20 text-center"
                    onClick={() => {
                        setCount(count - 1)
                    }}> - </button>
                <button className="bg-white border-2 text-center">{count}</button>
                <button
                    className="bg-green-600 text-center"
                    onClick={() => {
                        setCount(count + 1)
                    }}> + </button>

            </div>
        </>
    )
}

export default Count