import React from 'react'
import './button.css'

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <button>
            <div className="btnContainer" style={{
                background: bg,
                padding: bPad,
                borderRadius: bRad,
                color: color,
            }} onClick={onClick}>
                {icon}
                {name}
            </div>

        </button>

    )
}
export default Button