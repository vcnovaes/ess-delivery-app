import React, { useState } from "react";
import { Promotion } from "./promotion.type";
import styled from "styled-components";
import axios from "axios";
interface PromotionFormProps {
    onSubmit: (promotion: Promotion) => void;
}

const API_URL = "http://localhost:8081/promotions";
const PromotionForm = ({ onSubmit }: PromotionFormProps) => {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [value, setValue] = useState(0);
    const [isPercent, setIsPercent] = useState(false);
    const [category, setCategory] = useState("");
    const [active, setActive] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ name, userEmail: user, value, isPercent, category, active });
        addPromotion({ name, userEmail: user, value, isPercent, category, active })
        setName("");
        setUser("");
        setValue(0);
        setIsPercent(false);
        setCategory("");
        setActive(false);

    };
    const addPromotion = async (promotion: Promotion) => {
        try {
            console.info(promotion)
            const response = await axios.post<Promotion>(API_URL, promotion, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.info(response)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <h2>Add Promotion</h2>
            <StyledFormGroup>
                <StyledLabel htmlFor="name">Name:</StyledLabel>
                <StyledInput
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="user">User:</StyledLabel>
                <StyledInput
                    type="text"
                    id="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="value">Value:</StyledLabel>
                <StyledInput
                    type="number"
                    id="value"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />
                <StyledCheckbox
                    type="checkbox"
                    id="isPercent"
                    checked={isPercent}
                    onChange={(e) => setIsPercent(e.target.checked)}
                />
                <StyledLabel htmlFor="isPercent">Percentage</StyledLabel>
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="category">Category:</StyledLabel>
                <StyledInput
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledCheckbox
                    type="checkbox"
                    id="active"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                />
                <StyledLabel htmlFor="active">Active</StyledLabel>
            </StyledFormGroup>
            <StyledButton type="submit">Add</StyledButton>
        </StyledForm>
    );
}
export default PromotionForm;
const StyledForm = styled.form`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  `;

const StyledCheckbox = styled.input`margin-right: 10px; `

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
  background-color: #3e8e41;
  }}`