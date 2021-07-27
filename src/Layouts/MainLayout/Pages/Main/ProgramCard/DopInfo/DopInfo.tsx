import React, { useState } from 'react'
import './DopInfo.scss'
import OutsideClickHandler from 'react-outside-click-handler'

interface DopInfoProps {
  list: string[]
}

export default function DopInfo(props: DopInfoProps) {
  const [show, setShow] = useState<boolean>(false)
  const [mobShow, setMobShow] = useState<boolean>(false)

  return (
    <React.Fragment>
      <div className="DopInfo">
        <div className="DopInfo__img d-none d-sm-flex" onClick={() => setShow(!show)}>
          ?
        </div>

        <div className="DopInfo__img d-flex d-sm-none" onClick={() => setMobShow(!show)}>
          ?
        </div>

        {show && (
          <OutsideClickHandler onOutsideClick={() => setShow(false)}>
            <div className="DopInfo__cont animated animate__fadeIn">
              <ul>
                {props.list.map((el, index) => {
                  return <li key={index}>{el}</li>
                })}
              </ul>
            </div>
          </OutsideClickHandler>
        )}
      </div>

      {mobShow && (
        <OutsideClickHandler onOutsideClick={() => setMobShow(false)}>
          <div className="mobContDopInfo animated animate__fadeInDown">
            <ul>
              {props.list.map((el, index) => {
                return <li key={index}>{el}</li>
              })}
            </ul>
          </div>
        </OutsideClickHandler>
      )}
    </React.Fragment>
  )
}
