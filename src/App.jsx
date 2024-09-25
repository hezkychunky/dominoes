import { useEffect, useRef, useState } from 'react'

function App() {

  const source = [[6,1],[4,3],[5,1],[3,4],[1,1],[3,4],[1,2]]

  const [doubleNumber, setDoubleNumber] = useState(0)
  const [card, setCard] = useState(source)

  const inputRef = useRef(0)

  const [inputValue, setInputValue] = useState(0)
  function handleChange(e) {
    setInputValue(e.target.value)
  }

  const handleAscending = card.toSorted((a,b) => a[0] - b[0]).toSorted((a,b) => a.reduce((acc,curr) => acc + curr, 0) - b.reduce((acc,curr) => acc + curr, 0))

  const handleDescending = card.toSorted((a,b) => b[0] - a[0])
  .toSorted((a,b) => b.reduce((acc,curr) => acc + curr, 0) - a.reduce((acc,curr) => acc + curr, 0))

  const handleFlip = card.map((item) => {return [item[1], item[0]]})

  const uniqueCard = []
  for(let i = 0; i < card.length; i++) {
    for(let j = 0; j < card.length; j++) {

    }
  }

  const sortedCard = card.map((item) => item.toSorted((a,b) => a - b, 0))
  const jsonCard = card.map((item) => JSON.stringify(item))
  const jsonCardSet = [...new Set(jsonCard)]
  console.log(jsonCardSet, 'jsonCardSet');
  const arrayCardSet = jsonCardSet.map((item) => JSON.parse(item))
  console.log([arrayCardSet], 'arrayCardSet');
  
  
  // console.log(card[3][0] === card[5][0]);
  
  
  const handleRemoveSum = card.filter((item) => item.reduce((acc, curr) => acc + curr, 0) !== parseInt(inputValue))

  useEffect(() => {
    const doubleNumberList = card.filter((item) => item[0] === item[1])
    setDoubleNumber(doubleNumberList.length)

  },[card])
  

  return (

    <div className='flex min-h-screen justify-center py-5 bg-gradient-to-r from-emerald-500 via-indigo-500 to-yellow-500'>
      <div className='w-3/4 h-auto bg-gray-900 rounded-lg shadow-lg py-5 px-10 backdrop-blur-md bg-opacity-70' >
        <h1 className='text-3xl font-sans font-semibold text-white'>Dominoes</h1>
          <div className='w-auto h-auto rounded-lg border-2 border-emerald-500 py-1 px-2 my-5'>
            <h1 className='font-semibold text-white text-lg'>Source</h1>
            <h2 className='text-yellow-500 font-semibold'>{JSON.stringify(source)}</h2>
          </div>
          <div className='w-auto h-auto rounded-lg border-2 border-emerald-500 py-1 px-2 my-5'>
            <h1 className='font-semibold text-white text-lg'>Double Number</h1>
            <h2 className='text-yellow-500 font-semibold'>{doubleNumber}</h2>
          </div>
        <div className='flex flex-wrap gap-2'>
          {
            card.map((item, index) => {

            return (
              <div key={index} className='w-12 h-28 flex flex-col text-yellow-500 font-semibold mb-3'>
                <div className='border-2 border-emerald-500 w-full h-full flex items-center justify-center rounded-t-md'>{item[0]}</div>
                <div className='border-2 border-emerald-500 w-full h-full flex items-center justify-center rounded-b-md border-t-0'>{item[1]}</div>
              </div>
            )
          })
          }
        </div>
        <div className='flex flex-wrap gap-2'>
          <button className='bg-yellow-500 text-sm my-2 font-sans font-medium text-white shadow-lg rounded-lg p-1 hover:scale-110 min-w-24' onClick={() => setCard(handleAscending)}>Sort {`(ASC)`}</button>
          <button className='bg-yellow-500 text-sm my-2 font-sans font-medium text-white shadow-lg rounded-lg p-1 hover:scale-110 min-w-24' onClick={() => setCard(handleDescending)}>Sort {`(DESC)`}</button>
          <button className='bg-yellow-500 text-sm my-2 font-sans font-medium text-white shadow-lg rounded-lg p-1 hover:scale-110 min-w-24' onClick={() => setCard(handleFlip)}>Flip</button>
          <button className='bg-yellow-500 text-sm my-2 font-sans font-medium text-white shadow-lg rounded-lg p-1 hover:scale-110 min-w-24'onClick={() => setCard(arrayCardSet)}>Remove Dup</button>
          <button className='bg-yellow-500 text-sm my-2 font-sans font-medium text-white shadow-lg rounded-lg p-1 hover:scale-110 min-w-24' onClick={() => setCard(source)}>Reset</button>
        </div>
        <div className='flex flex-col mt-4 gap-1'>
          <input id='remove' onChange={handleChange} ref={inputRef} type="text" placeholder='input number' className='min-w-32 max-w-52 px-2 border-2 border-emerald-500 rounded-lg'/>
          <button className='bg-yellow-500 text-sm mt-1 font-sans font-medium text-white shadow-lg rounded-lg p-1 hover:scale-110 max-w-24' onClick={() => setCard(handleRemoveSum)}>Remove</button>
        </div>
      </div>
    </div>

  )
}

export default App
