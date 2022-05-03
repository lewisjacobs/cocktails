import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddCocktail from "./AddCocktail";
import Cocktail from "./Cocktail";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
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

    const getCocktails = useCallback(async () => {
        try {
            setLoading(true);
            setCocktails(await getCocktailList());
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

    return (
        <>
            {!loading ? (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1 className="fs-4 fw-bold mb-0 text-light">Cocktails</h1>
                        {account.accountId ?
                            <AddCocktail save={addCocktail} />
                            :
                            null
                        }
                    </div>
                    <Row xs={1} sm={2} lg={3} xl={4} className="g-3  mb-5 g-xl-4 g-xxl-5">
                        {cocktails.map((_cocktail) => (
                            <Cocktail
                                cocktail={{
                                    ..._cocktail,
                                }}
                                buy={buy}
                            />
                        ))}
                    </Row>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Cocktails;