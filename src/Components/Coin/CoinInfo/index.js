import React, { useState } from "react";
import "./style.css";

function CoinInfo({ heading, desc }) {
    const sortDesc = desc.slice(0, 300) + "<p style='color:var(--grey)'> Read More...</p>"
    const longDesc = desc + "<p style='color:var(--grey)'> Read Less...</p>";

    const [flag, setFlag] = useState(false)
    return (
        <div className="grey-wrapper">
            <h2 className="coin-info-heading">{heading}</h2>
            {desc.length > 300 ? (
                <p onClick={() => setFlag(!flag)}
                    className="coin-info-desc"
                    dangerouslySetInnerHTML={{ __html: !flag ? sortDesc : longDesc }}>
                </p>) : (
                <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                )}
        </div>
    )
}

export default CoinInfo