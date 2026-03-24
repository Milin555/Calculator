import React, { useState } from 'react'

export const Calculator = () => {

    const [data, setData] = useState("")

    const getvalue = (e) => {
        const val = e.target.value

        if (val === "AC") {
            setData("")
        }
        else if (val === "Back") {
            setData(data.slice(0, -1))
        }
        else if (val === "=") {
            try {
                setData(eval(data))
            } catch {
                setData("Error")
            }
        }
        else {
            setData(data + val)
        }
    }

    return (
        <>
            <div className='container'>

                <input value={data} placeholder='0' readOnly />

                <div className='buttons'>

                    <button onClick={getvalue} value="(">(</button>
                    <button onClick={getvalue} value=")">)</button>
                    <button onClick={getvalue} value="%">%</button>
                    <button onClick={getvalue} value="AC">AC</button>

                    <button onClick={getvalue} value="7">7</button>
                    <button onClick={getvalue} value="8">8</button>
                    <button onClick={getvalue} value="9">9</button>
                    <button onClick={getvalue} value="*">*</button>

                    <button onClick={getvalue} value="4">4</button>
                    <button onClick={getvalue} value="5">5</button>
                    <button onClick={getvalue} value="6">6</button>
                    <button onClick={getvalue} value="-">-</button>

                    <button onClick={getvalue} value="1">1</button>
                    <button onClick={getvalue} value="2">2</button>
                    <button onClick={getvalue} value="3">3</button>
                    <button onClick={getvalue} value="+">+</button>

                    <button onClick={getvalue} value="0">0</button>
                    <button onClick={getvalue} value="Back">Back</button>
                    <button onClick={getvalue} value="=">=</button>
                    <button onClick={getvalue} value="/">/</button>

                </div>

            </div>
        </>
    )
}