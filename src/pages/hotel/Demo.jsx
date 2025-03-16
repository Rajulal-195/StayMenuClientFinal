import react from "react"

const Demo = () => {
    const number = [1,2,5,9,7,5,]
    const minNumber = Math.min(...number)
    const maxNumber = Math.max(...number)

//  for (let i = 1; i < number.length; i++)
//   if (number[i] < minNumber){

//       minNumber = number[i]
//     }

const arr = sort(number);



    console.log("min:",minNumber);
    console.log("max",maxNumber);

    return (
        <>
<h1>Demo</h1>


        </>
    )
}
export default Demo;