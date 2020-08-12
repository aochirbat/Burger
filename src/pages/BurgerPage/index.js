import React, {Component} from 'react';
import style from './style.module.css';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls'
import Modal from '../../components/General/Modal';
import OrderSummary from '../../components/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 150,
    cheese: 250,
    bacon: 800,
    meat: 1500
};
const INGREDIENT_MNNAMES = {
    salad: 'Салад',
    cheese: 'Бяслаг',
    bacon: 'Гахайн мах',
    meat: 'Үхрийн мах'
};

class BurgerBuilder extends Component {
    // constructor(){     super(); }
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasing: false,
        confirmOrder: false
    };
    showConfirmModal = () => {
        this.setState({confirmOrder: true});
    };
    hideConfirmModal = () => {
        this.setState({confirmOrder: false});
    };
    ortsNemeh = (type) => {
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type]++;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState(
            {purchasing: true, ingredients: newIngredients, totalPrice: newPrice}
        );

    };
    ortsHasah = (type) => {
        if (this.state.ingredients[type] > 0) {
            const newIngredients = {
                ...this.state.ingredients
            };
            newIngredients[type]--;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({
                purchasing: newPrice > 0,
                ingredients: newIngredients,
                totalPrice: newPrice
            });

        }
    };

    render() {
        const disabledIngredients = {
            ...this.state.ingredients
        };
        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }
        return (
            <div>
                <Modal hideConfirmModal={this.hideConfirmModal} show={this.state.confirmOrder}>
                    <OrderSummary
                        INGREDIENT_MNNAMES={INGREDIENT_MNNAMES}
                        ingredients={this.state.ingredients}/>
                </Modal>
                <div>
                    <Burger orts={this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls
                        showConfirmModal={this.showConfirmModal}
                        INGREDIENT_MNNAMES={INGREDIENT_MNNAMES}
                        disabledIngredients={disabledIngredients}
                        price={this.state.totalPrice}
                        ortsNemeh={this.ortsNemeh}
                        ortsHasah={this.ortsHasah}
                        disabled={!this.state.purchasing}/>
                </div>
            </div>
        )
    }
};

export default BurgerBuilder;