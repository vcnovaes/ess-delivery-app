import React, { useState, useEffect } from "react";
import PromotionItem from "./PromotionsItem";
import axios from "axios";
import styled from "styled-components";
import { Promotion } from "./promotion.type";

const API_URL = "http://localhost:8081/promotions";
interface PromotionListProps {
    promotions: Promotion[];
    onUpdate: (promotion: Promotion) => void;
    onDelete: (id: number) => void;
}

const PromotionList = ({ onUpdate, onDelete }: PromotionListProps) => {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPromotions();
    }, []);

    const fetchPromotions = async () => {
        try {
            console.info("Fetching promoitions")
            const response = await axios.get<Promotion[]>(API_URL);
            console.info(response.data)
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
            setPromotions(newPromotion);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const addPromotion = async (promotion: Promotion) => {
        try {
            console.info(promotion)
            const response = await axios.post<Promotion>(API_URL, promotion);
            setPromotions([...promotions, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    const updatePromotion = async (id: number, promotion: Promotion) => {
        try {
            await axios.put(`${API_URL}/${id}`, promotion);
            const newPromotions = promotions.map((p) =>
                p.id === id ? { ...p, ...promotion } : p
            );
            setPromotions(newPromotions);
        } catch (error) {
            console.error(error);
        }
    };

    const deletePromotion = async (id: number) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            const newPromotions = promotions.filter((p) => p.id !== id);
            setPromotions(newPromotions);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Registred Promotions</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <ul>
                        {promotions.map((promotion: Promotion) => (
                            <PromotionItem
                                key={promotion.id}
                                promotion={promotion}
                                onUpdate={(p) => {
                                    if (p.id)
                                        updatePromotion(p.id, promotion)

                                }}
                                onDelete={() => deletePromotion(promotion.id!)}
                            />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default PromotionList;