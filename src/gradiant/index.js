import React, { useState } from 'react';
import styles from "./styles.module.css";

export default function Gradiant() {

    const [color1, setColor1] = useState("#00F260");
    const [color2, setColor2] = useState("#0575e6");

    return (
        <div 
            className={styles.container}
            style={{background: `linear-gradient(75deg, ${color1}, ${color2})`}}
        >
            <div className={styles.inputGroup}>
                <label>请选择第一个颜色</label>
                <input 
                    type="color" 
                    value={color1} 
                    name="color1" 
                    className={styles.inputColor} 
                    onInput={event => setColor1(event.target.value)}
                />
            </div>
            <div className={styles.inputGroup}>
                <label>请选择第二个颜色</label>
                <input 
                    type="color" 
                    value={color2} 
                    name="color2" 
                    className={styles.inputColor}
                    onInput={event => setColor2(event.target.value)}
                />
            </div>
            <button onClick={() => {
                setColor1("#00F260");
                setColor2("#0575e6");
            }} className={styles.button}>重置为默认</button>
        </div>
    )
}