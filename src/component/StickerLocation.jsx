import React, {useState} from "react";

const StickerLoction = () => {
  const [dexNumber, setDexNumber] = useState(0);
  const [position, setPosition] = useState('앞면');
  const [pageIndex, setPAgeIndex] = useState(0)

  function calcPosition(pokeIdx) {
    console.log('calcPosition', pokeIdx)
    const result = pokeIdx / 9
    let position = Math.floor(result) % 2 === 0;
    const firstPoint = getDecima(result)

    let index = 9;
    if (firstPoint) {
      index = firstPoint;
    } else {
      position = !position
    }

    setText(position ? "앞면" : "뒷면", index)
  }

  // 소수점 첫자리 구하기
  function getDecima(number) {
    const point = number.toString().split(".")

    if (point.length > 1) {
      return Number(point[1].substring(0, 1));
    } else {
      return 0;
    }
  }

  function setText(position, pageIndex) {
    setPosition(position)
    setPAgeIndex(pageIndex)
  }

  return (
    <div className="sticker-laction">
      <input name="myInput" value={dexNumber} onChange={e => setDexNumber(e.target.value)}/>
      <button onClick={() => calcPosition(dexNumber)}>자리 찾기</button>

      <h2>{position} {pageIndex}번째</h2>
    </div>
  )
}

export default StickerLoction