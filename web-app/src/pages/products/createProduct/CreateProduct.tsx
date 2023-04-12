import { useState, useEffect } from "react";
import { AddItem } from "../../../types/item";
import { Category } from "../../../types/category";
import "./CreateProduct.css";
import CategoryService from "../../../services/api/category.service";
import ItemService from '../../../services/api/item.service'

import Plus from "../assets/Plus.png"
import magnifyingGlass from "../assets/magnifying-glass.png"

export const CreateProduct = ({ user, getItems }: any) => {
  const [formData, setFormData] = useState<Partial<AddItem>>({ categories: [] });
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const inputChangeHandler = (key: "picture" | "name" | "desc" | "price" | "inStock" | "supplierId" | "categories", value: any) => {
    const newValue = { ...formData };
    if(newValue["categories"] && key === "categories") newValue[key]![0] = value;
    else newValue[key] = value;

    setFormData(newValue);
  };

  const categoryService = new CategoryService('');
  const itemService = new ItemService(user?.token)

  const getCategories = async () => {
    let response: any = null;

    try {
      response = await categoryService.getAll();
      console.log(response);

      if (response.errorType) {
        setFeedback(response.message);
        setError(true);
      } else {
        setCategories(response);
      }
    } catch (e) {
      setFeedback(response.message);
      setError(true);
    }

  };

  const createHandler = async () => {
    let response: any = null

    try {
      response = await itemService.add(formData)
      setFeedback(response.message)
      if (response.errorType) setError(true)
    } catch (e) {
      setFeedback(response.message)
      setError(true)
    }

    getItems();
  }

  useEffect(() => {
    getCategories();
  }, []);

	return (
		<div className="createProduct-main-div">
      <div className="createProduct-right-header">
        <h2>Criar produto</h2>
        <div className="createProduct-line"/>
      </div>

      <div className="createProduct-content">
        <div className="createProduct-left-column">
          <label htmlFor="firstImg">
            <i>
              <img src={Plus}/>
            </i>
          </label>
          <input
            type="file" id="firstImg" accept=".png, .jpg, .jpeg"
            style={{ display: "none" }}
            onChange={(e) => inputChangeHandler("picture", e.target.value)}
            value={formData.picture}
          />
        </div>

        <div className="createProduct-right-column">
          <div className="createProduct-top">
            <div className="createProduct-input" data-cy="name-input">
              <h4 className="createProduct-align-left">Nome do produto</h4>
              <input
                type="text"
                onChange={(e) => inputChangeHandler("name", e.target.value)}
                value={formData.name}
              />
            </div>
          </div>
          <div className="createProduct-bottom">
            <div>
              <h4 className="createProduct-align-left" data-cy="price-input">Preço</h4>
              <input
                type="number"
                onChange={(e) => inputChangeHandler("price", e.target.value)}
                value={formData.price}
              />
            </div>
            <div>
              <h4 className="createProduct-align-left" data-cy="stock-input">Estoque</h4>
              <input
                type="number"
                onChange={(e) => inputChangeHandler("inStock", e.target.value)}
                value={formData.inStock}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="createProduct-last-content">
        <div className="createProduct-input">
          <h4 className="createProduct-align-left" data-cy="desc-input">Descrição</h4>
          <textarea
            placeholder="Insira aqui"
            onChange={(e) => inputChangeHandler("desc", e.target.value)}
            value={formData.desc}
          />
        </div>

        <div className="createProduct-insert-categories">
          <h4 className="createProduct-align-left">Inserir categorias</h4>
          <div className="createProduct-search-bar">
            <select
              value={formData.categories ? formData.categories[0] : undefined}
              placeholder="Selecione a categoria."
              onChange={(e) => inputChangeHandler("categories", e.target.value)}
            >
              {
                categories?.map(cat => (<option value={cat.id}>{cat.name}</option>))
              }
            </select>
          </div>

        </div>
      </div>

      {error && feedback ? <div data-cy="error">{feedback}</div> : null}

      <div className="createProduct-button" data-cy="create-button">
        <button
          type="button"
          onClick={createHandler}
        >
          Cadastrar
        </button>
      </div>
    </div>
	);
};