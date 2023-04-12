import axios from "axios";
import React, { useEffect, useState } from "react";
import { Promotion } from "./promotion.type";
import PromotionForm from "./PromotionsForm";
import PromotionList from "./PromotionsList";
import styles from './Promotions.module.css'
import { Header } from "../components/header/Header";
import { Links } from "../components/links/Links";

// using React FC instead of  ReactNode
const Promotions: React.FC = () => {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const fetchPromotions = async () => {
        const newPromotions = await getNewPromotions()
        console.info(newPromotions)
        setPromotions(newPromotions);
    };
    useEffect(() => {
        fetchPromotions();
    }, []);

    const getNewPromotions = async () => {
        const API_URL = "http://localhost:8080/promotions";
        try {
            const response = await axios.get<Promotion[]>(API_URL);
            const newPromotion: Promotion[] = (response.data as any).map((d: any) => {
                return {
                    id: (d as any).id,
                    name: (d as any).name,
                    userEmail: (d as any).user_email,
                    value: (d as any).value,
                    isPercent: true,
                    category: (d as any).category_name,
                    active: (d as any).active
                }
            })
            return newPromotion;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch promotions");
        }
    };

    return (
        <>
            <Header />
            <Links />
            <div style={{ display: 'flex' }} className={styles.promotion}>
                <div style={{ flex: 1 }} >
                    <h2>Create Promotion</h2>
                    <PromotionForm onSubmit={fetchPromotions} />
                </div>
                <div style={{ flex: 1 }}>
                    <PromotionList promotions={promotions} />
                </div>
            </div>
        </>
    );
};

export default Promotions;