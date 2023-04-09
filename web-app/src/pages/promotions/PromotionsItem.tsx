import React, { useState } from "react";
import { Promotion } from "./promotion.type";

interface PromotionItemProps {
    promotion: Promotion;
    onSave: (promotion: Promotion) => void;
    onDelete: () => void;
}

const PromotionItem = ({ promotion, onSave, onDelete }: PromotionItemProps) => {
    const [name, setName] = useState(promotion.name);
    const [value, setValue] = useState(promotion.value);
    const [category, setCategory] = useState(promotion.category);
    const [active, setActive] = useState(promotion.active);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const updatedPromotion = {
            ...promotion,
            name,
            value,
            category,
            active,
        };
        const comparePromotions = (newPromotion: Promotion, oldPromotion: Promotion) => {
            const oldPromotionsValues = Object.values(oldPromotion)
            return Object.values(newPromotion).filter((newPromoValue, idx) => {
                return oldPromotionsValues[idx] !== newPromoValue
            }).length > 0;
        }
        if (comparePromotions(updatedPromotion, promotion)) {
            alert("Promoção modificada")
            onSave(updatedPromotion);
        }
    }
    return (
        <li>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Value:
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                    />
                </label>
                <label>
                    Category:
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </label>
                <label>
                    Active:
                    <input
                        type="checkbox"
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                    />
                </label>
                <button type="submit">Save</button>
                <button type="button" onClick={onDelete}>
                    Delete
                </button>
            </form>
        </li>
    );
};
export default PromotionItem;