import { useEffect, useState } from 'react'

import './Spinner.css'

const Spinner = () => {

  const [active,setActive] = useState(false)

  // const arrowCoords = arrow.getBoundingClientRect()

  let spinTime = Math.floor((Math.random() * 3500) + 1)

  const spinWheel = () => {
    const wheel = document.querySelector('.wheel ')
    const spinBtn = document.querySelector('.spin-btn')
    const arrow = document.querySelector('#arrow')
    let dataRotation = parseInt(wheel.getAttribute('data-rotation'))
    const divider = 360 / foodList.length
    let sliceValue = ''

    wheel.style.transform = `rotate(${spinTime}deg)`
    spinTime += Math.floor((Math.random() * 3500) + 1)
    setTimeout(() => {
      // After spinTime is complete get value of selected wheel slice
      sliceValue = foodList[Math.floor(Math.round(dataRotation % 360) / divider)]
      // CheckOverlap
      getCoordinates(arrow)
      // arrow.getBoundingClientRect()
      // alert(`After ${spinTime}, the wheel has chosen ${sliceValue}!`)
      // setActive(!active)
    }, spinTime)
    console.log(`spinTime: ${spinTime}`)
  }

  // check overlap helper function
  const isOverlapping = (point, slice) => {
    // const objOne=pointA,
    //   objTwo=pointB
    //   offsetOne = objOne.offset(),
    //   offsetTwo = objTwo.offset(),
    //   topOne=offsetOne.top,
    //   topTwo=offsetTwo.top,
    //   leftOne=offsetOne.left,
    //   leftTwo=offsetTwo.left,
    //   widthOne = objOne.width(),
    //   widthTwo = objTwo.width(),
    //   heightOne = objOne.height(),
    //   heightTwo = objTwo.height()
    // const leftTop = leftTwo > leftOne && leftTwo < leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,             rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
    // console.log( leftTop || rightTop || leftBottom || rightBottom )
    // console.log(objOne.o)
  }

  // let screenLog = document.querySelector('.spinner-section');
  
  // const logKey = (e) => {
  //   console.log(`
  //   Screen X/Y: ${e.screenX}, ${e.screenY}
  //   Client X/Y: ${e.clientX}, ${e.clientY}`)
  //   isOverlapping()
  //   // console.log(`arrow coords`)
  //   // console.log(arrowCoords)
  //   e.preventDefault()
  // }

  const getCoordinates = (obj) => {
    const coords = obj.getBoundingClientRect()
    console.log(coords)
    return coords
  }

  // Next feature: Make Food list editable by others
  const foodList = [
    'Sushi',
    'Mexican',
    'Poke',
    'Burgers',
    'Dim Sum',
    'Korean BBQ',
    'Wings',
    'Vietnamese',
    'Pizza',
    'Hot Pot',
    'Hawaiian',
    'Thai'
  ]

  const foodListUrl = (categoryName) => {
    let categoryUrlString = categoryName.split(' ').join('-').toLowerCase()
    return categoryUrlString
  }

  const pieColors = [
    '#FFC312',
    '#F79F1F',
    '#EE5A24',
    '#B53471',
    '#833471',
    '#9980FA',
    '#D980FA',
    '#12CBC4',
    '#1289A7',
    '#0652DD',
    '#006266',
    '#009432',
    '#A3CB38'
  ]

  useEffect(() => {
    console.log('foodList')
    console.log(foodList)
    // document.addEventListener('click', logKey);
    // console.log(`arrow coordinates: ${arrowCoords}`)
  }, [])

  return (
    <div className='spinner-section'>
      {/* <p>Move your mouse to see its position.</p> */}
      <div className='spinner-container'>
        <div className='arrow' id='arrow' aria-label='Wheel Selector Arrow'></div>
        <button
          className='spin-btn'
          onClick={spinWheel}
          aria-label='Spin the wheel'>Spin
        </button>
        <div className='wheel'>
          {foodList.map((f,index) => (<a
            key={index}
            className={active ? 'active' : 'disabled'}
            tabIndex={active ? index + 10 : -1}
            href={`/food-places/${foodListUrl(foodList[index])}`}
            name={!active ? `Inactive ${foodList[index]} link}` : `${foodList[index]}`}>
              <div className='wheel-slice-btn'
                style={{
                  '--pieSliceDeg': `${360 / foodList.length}deg`,
                  '--i': `${index + 1}`,
                  backgroundColor: `${pieColors[index]}`}}>
                <span
                  className='wheel-slice-btn-text'
                  spellCheck='false'>
                  {foodList[index]}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Spinner