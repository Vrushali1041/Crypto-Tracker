import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from "@mui/material";
import { convertNumbers } from "../../../Function/convertNumbers";
import { Link } from "react-router-dom";

// function List({ coin }) {
//     return (
//     <Link to={`/coin/${coin.id}`}>
//         <tr className="list-row">
//             <Tooltip title="Coin Logo" placement="bottom-start">
//                 <td className="td-image">
//                     <img src={coin.image} className="coin-logo" alt="img" />
//                 </td>
//             </Tooltip>
//             <Tooltip title="Coin Info" placement="bottom-start">
//                 <td>
//                     <div className="name-col">
//                         <p className="coin-symbol">{coin.symbol}</p>
//                         <p className="coin-name">{coin.name}</p>
//                     </div>
//                 </td>
//             </Tooltip>
//             <Tooltip title="Price Change In 24Hrs" placement="bottom-start">
//                 {coin.price_change_percentage_24h > 0 ?
//                     (
//                         <td className="chip-flex">
//                             <div className="price-chip">
//                                 {coin.price_change_percentage_24h.toFixed(2)}%
//                             </div>
//                             <div className="icon-chip td-icon">
//                                 <TrendingUpRoundedIcon />
//                             </div>
//                         </td>
//                     ) : (
//                         <td className="chip-flex">
//                             <div className="price-chip chip-red">
//                                 {coin.price_change_percentage_24h.toFixed(2)}%
//                             </div>
//                             <div className="icon-chip chip-red td-icon">
//                                 <TrendingDownRoundedIcon />
//                             </div>
//                         </td>
//                     )
//                 }
//             </Tooltip>
//             <Tooltip title="Current Price">
//                 <td>
//                     <h3 className="coin-price td-center-align"
//                         style={{
//                             color:
//                                 coin.price_change_percentage_24h < 0 ?
//                                     "var(--red)" :
//                                     "var(--green)",
//                         }}
//                     >${coin.current_price.toLocaleString()}
//                     </h3>
//                 </td>
             
//             </Tooltip>
//             <Tooltip title="Total Volume" placement="bottom-end">
//                 <td>
//                     <p className="total-volume td-right-align td-total-volume">
//                         {coin.total_volume.toLocaleString()}
//                     </p>
//                 </td>
//             </Tooltip>
//             <Tooltip title="Market Cap">
//                 <td className="desktop-td-mkt">
//                     <p className="total-volume td-right-align" placement="bottom-end">
//                         ${coin.market_cap.toLocaleString()}
//                     </p>
//                 </td>

//             </Tooltip>
//             <Tooltip title="Market Cap">
//                 <td className="mobile-td-mkt">
//                     <p className="total-volume td-right-align" placement="bottom-end">
//                         ${convertNumbers(coin.market_cap)}
//                     </p>
//                 </td>
//             </Tooltip>

//         </tr>
// </Link>
//     )
// }

// export default List;


function List({ coin }) {
    return (
        <Link to={`/coin/${coin.id}`}>
        <tr className="list-row">
            <Tooltip title="Coin Logo" placement="bottom-start">
                <td className="td-image">
                    <img src={coin.image} className="coin-logo" alt="img" />
                </td>
            </Tooltip>
            <Tooltip title="Coin Info" placement="bottom-start">
                <td>
                    <div className="name-col">
                        <p className="coin-symbol">{coin.symbol}</p>
                        <p className="coin-name">{coin.name}</p>
                    </div>
                </td>
            </Tooltip>
            <Tooltip title="Price Change In 24Hrs" placement="bottom-start">
                <td className="chip-flex">
                    {coin.price_change_percentage_24h !== undefined ? (
                        <div className={`price-chip ${coin.price_change_percentage_24h > 0 ? '' : 'chip-red'}`}>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                    ) : (
                        <div className="price-chip">N/A</div>
                    )}
                    <div className="icon-chip td-icon">
                        {coin.price_change_percentage_24h > 0 ? (
                            <TrendingUpRoundedIcon />
                        ) : (
                            <TrendingDownRoundedIcon />
                        )}
                    </div>
                </td>
            </Tooltip>
            <Tooltip title="Current Price">
                <td>
                    {coin.current_price !== undefined ? (
                        <h3 className="coin-price td-center-align"
                            style={{
                                color:
                                    coin.price_change_percentage_24h < 0 ?
                                        "var(--red)" :
                                        "var(--green)",
                            }}
                        >${coin.current_price.toLocaleString()}
                        </h3>
                    ) : (
                        <h3 className="coin-price td-center-align">N/A</h3>
                    )}
                </td>
            </Tooltip>
            <Tooltip title="Total Volume" placement="bottom-end">
                <td>
                    {coin.total_volume !== undefined ? (
                        <p className="total-volume td-right-align td-total-volume">
                            {coin.total_volume.toLocaleString()}
                        </p>
                    ) : (
                        <p className="total-volume td-right-align td-total-volume">N/A</p>
                    )}
                </td>
            </Tooltip>
            <Tooltip title="Market Cap">
                <td className="desktop-td-mkt">
                    {coin.market_cap !== undefined ? (
                        <p className="total-volume td-right-align" placement="bottom-end">
                            ${coin.market_cap.toLocaleString()}
                        </p>
                    ) : (
                        <p className="total-volume td-right-align">N/A</p>
                    )}
                </td>
            </Tooltip>
            <Tooltip title="Market Cap">
                <td className="mobile-td-mkt">
                    {coin.market_cap !== undefined ? (
                        <p className="total-volume td-right-align">
                            ${convertNumbers(coin.market_cap)}
                        </p>
                    ) : (
                        <p className="total-volume td-right-align">N/A</p>
                    )}
                </td>
            </Tooltip>
        </tr>
        </Link>
    );
}

export default List;
