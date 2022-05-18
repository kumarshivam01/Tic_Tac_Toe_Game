import React from 'react'
import styles from '../Grid.module.css'
import Circle from './Svg/Circle'
import Cross from './Svg/Cross'
const renderSVG = svg => {
    if (svg === 'cross') {
        return <Cross size={40}/>
    }
    else if (svg === 'circle') {
        return <Circle size={40}/>
    }
    else {
        return null
    }
}
function Grid(props) {

    return (
        <div className={styles.container}>
            {
                props.positions.map((value,index) => {
                    return (
                        <div onClick={() => {
                            props.setPositions(index)
                            
                        }}>
                            {renderSVG(value)} 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Grid