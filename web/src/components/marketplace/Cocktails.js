import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddCocktail from "./AddCocktail";
import Cocktail from "./Cocktail";
import Loader from "../utils/Loader";
import { Dropdown, Row } from "react-bootstrap";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import {
    getCocktails as getCocktailList,
    buyCocktail,
    createCocktail,
} from "../../utils/marketplace";

const Cocktails = () => {
    const account = window.walletConnection.account();
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState()
    const [sort, setSort] = useState("nameAsc")

    const getCocktails = useCallback(async () => {
        try {
            setLoading(true);
            setCocktails(applySort(await getCocktailList()))
        } catch (error) {
            console.log({ error });
        } finally {
            setLoading(false);
        }
    });

    const addCocktail = async (data) => {
        try {
            setLoading(true);
            createCocktail(data).then((resp) => {
                getCocktails();
            });
            toast(<NotificationSuccess text="Cocktail added successfully." />);
        } catch (error) {
            console.log({ error });
            toast(<NotificationError text="Failed to create a Cocktail." />);
        } finally {
            setLoading(false);
        }
    };

    const buy = async (id, price) => {
        try {
            await buyCocktail({
                id,
                price,
            }).then((resp) => getCocktails());
            toast(<NotificationSuccess text="Cocktail bought successfully" />);
        } catch (error) {
            toast(<NotificationError text="Failed to purchase Cocktail." />);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCocktails();
    }, []);

    useEffect(() => {
        setCocktails(applySort(cocktails))
    }, [sort]);


    const applySearch = (c) => {
        if(!search) return true

        let s = search.toLowerCase()

        return c.name.toLowerCase().includes(s) || c.ingredients.toLowerCase().includes(s) || c.recipe.toLowerCase().includes(s) || c.decoration.toLowerCase().includes(s)
    }

    const applySort = (unsortedCocktails) => {

        if(!unsortedCocktails) return []

        const sortedCocktails = [...unsortedCocktails]
        
        sortedCocktails.sort((c1, c2) => {
            if(sort === "nameAsc") return c1.name.toLowerCase().localeCompare(c2.name.toLowerCase())
            else return c2.name.toLowerCase().localeCompare(c1.name.toLowerCase())
        })

        return sortedCocktails
    }

    return (
        <>
            {!loading ? (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1 className="fs-4 fw-bold mb-0 text-light">Cocktails</h1>
                        <input 
                            style={{ 
                                height: "40px", 
                                width: "80%",
                                border: "none",
                                outline: "none",
                                padding: "5px",
                                backgroundColor: "black",
                                color: "white",
                                borderBottom: "1px solid white",
                                margin: "0px 15px"
                            }} 
                            placeholder="search cocktails ..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" bg="dark">
                                Sort
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {
                                    setSort("nameAsc")
                                }}>Name [A-Z]</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setSort("nameDesc")
                                }}>Name [Z-A]</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {account.accountId === "lewisjacobs.testnet" && <AddCocktail save={addCocktail} />}
                    </div>
                    <Row xs={2} sm={2} lg={3} xl={4} className="g-3  mb-5 g-xl-4 g-xxl-5">
                        {
                            cocktails.filter((c) => applySearch(c)).map((c) => <Cocktail cocktail={c} buy={buy}/>)
                        }
                    </Row>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Cocktails;