import React, { useState, useEffect } from "react";
import { get100Coins } from "../../../Function/get100Coins";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import "./style.css"


function SelectCoins({crypto1, crypto2, handleCoinChange}) {
    const [allCoins, setAllCoins] = useState([]);


    const style = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
    }

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const myCoins = await get100Coins();
        setAllCoins(myCoins);
    }
    return (
        <div className="coins-flex">
            <p>Crypto 1</p>
            <Select
                sx={style}
                value={crypto1}
                label="Crypto 1"
                onChange={(event) => handleCoinChange(event, false)}
            >
                {allCoins.filter((item)=> item.id !== crypto2).map((coin, i) => (
                    <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
                ))}
            </Select>

            <p>Crypto 2</p>
            <Select
                sx={style}
                value={crypto2}
                label="Crypto 2"
                onChange={(event) => handleCoinChange(event, true)}
            >
                {allCoins.filter((item)=> item.id !== crypto1).map((coin, i) => (
                    <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
                ))}
            </Select>

        </div>
    )
}


export default SelectCoins;