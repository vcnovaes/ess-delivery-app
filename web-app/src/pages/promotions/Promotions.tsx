import axios from "axios";
import React, { useEffect, useState } from "react";
import { Promotion } from "./promotion.type";
import PromotionForm from "./PromotionsForm";
import PromotionList from "./PromotionsList";

const Promotions = () => {
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
    }

    const handleUpdatePromotion = (updatedPromotion: Promotion) => {
        const updatedPromotions = promotions.map((promotion) => {
            if (promotion.id === updatedPromotion.id) {
                return updatedPromotion;
            }
            return promotion;
        });
        setPromotions(updatedPromotions);
    };

    const handleDeletePromotion = (id: number) => {
        const filteredPromotions = promotions.filter(
            (promotion) => promotion.id !== id
        );
        setPromotions(filteredPromotions);
    };

    return (
        <div>
            <h1>Promotions</h1>
            <PromotionForm onSubmit={fetchPromotions} />
            <PromotionList
                promotions={promotions}
            />
        </div>
    );
};

export default Promotions;