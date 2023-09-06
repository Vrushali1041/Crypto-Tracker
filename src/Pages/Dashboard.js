// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import TabsComponents from "../Components/Dashboard/Tabs"
import Search from "../Components/Dashboard/Search";
import PaginationComponent from "../Components/Dashboard/Pagination";
import Loader from "../Components/Common/Loader";
import BackToTop from "../Components/Common/BackToTop";
import {get100Coins} from "../Function/get100Coins";
import Footer from "../Components/Common/Footer";

function DashboardPage() {
    const [coins, setCoins] = useState([]);
    const [paginationCoins, setPaginationCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true)

    const handlePageChange = (event, value) => {
        setPage(value);
        var previousIndex = (value - 1) * 10;
        setPaginationCoins(coins.slice(previousIndex, previousIndex + 10))
    }

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    };

    var filteredCoins = coins.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        getData();
    }, [])

    const getData = async() =>{
        const myCoins = await get100Coins();
        if(myCoins){
            setCoins(myCoins);
            setPaginationCoins(myCoins.slice(0, 10));
            setIsLoading(false)
        }
    }

    return (
        <>
            <Header />
            <BackToTop />
            {
                isLoading ? (<Loader />
                ) : (
                    <div>
                        <Search search={search} onSearchChange={onSearchChange} />
                        <TabsComponents coins={search ? filteredCoins : paginationCoins} />
                        {!search && (
                            <PaginationComponent page={page} handlePageChange={handlePageChange} />
                        )}
                    </div>
                )
            }
            <Footer />
        </>

    )
}


export default DashboardPage;