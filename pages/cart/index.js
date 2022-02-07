import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/Language.Context';
import { cartText } from '../../contents/cart.content';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../redux/cart.slice';
import * as Styled from '../../styles/cart.styles';
import { paymentMethod } from '../../helper/paymentMethodSVGs';

const CartPage = () => {
  const { language } = useContext(LanguageContext);
  const {
    emptyCartTitle,
    emptyCartText,
    totalTitle,
    shippingText,
    totalText,
    yourPayments,
    buyButton,
  } = cartText[language];
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart
      .reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      )
      .toFixed(2);
  };

  return (
    <Styled.Wrapper>
      {cart.length === 0 ? (
        <div>
          <h1>{emptyCartTitle}</h1>
          <p>{emptyCartText}</p>
        </div>
      ) : (
        <>
          <Styled.Cart>
            <Styled.Items>
              {cart.map((item) => (
                <Styled.Item key={item.id}>
                  <Styled.Image src={item.image} />
                  <Styled.ItemTitle>
                    <p>{item.title}</p>
                  </Styled.ItemTitle>
                  <Styled.InfoContainer>
                    <div>
                      <p>
                        {item.quantity} x {item.price}€
                      </p>
                      <div>
                        <Styled.Button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </Styled.Button>
                        <Styled.Button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          -
                        </Styled.Button>
                        <Styled.Button
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          ×
                        </Styled.Button>
                      </div>
                    </div>
                    <h3> {item.quantity * item.price}€</h3>
                  </Styled.InfoContainer>
                </Styled.Item>
              ))}
            </Styled.Items>
            <Styled.Sidebar>
              <Styled.TotalCart>
                <Styled.TotalTitle>{totalTitle}</Styled.TotalTitle>
                <div>
                  <Styled.Shipping>
                    <Styled.ShippingText>{shippingText}</Styled.ShippingText>
                    <Styled.ShippingText>0.00€</Styled.ShippingText>
                  </Styled.Shipping>
                  <Styled.Total>
                    <Styled.TotalText>{totalText}</Styled.TotalText>
                    <Styled.TotalText>{getTotalPrice()}€</Styled.TotalText>
                  </Styled.Total>
                  <Styled.BuyButton>{buyButton}</Styled.BuyButton>
                </div>
                <Styled.PaymentContainer>
                  <p>{yourPayments}</p>
                  <Styled.PaymentMethods>
                    <Styled.PaymentSvg src={paymentMethod('amazon', 'light')} />
                    <Styled.PaymentSvg
                      src={paymentMethod('applepay', 'light')}
                    />
                    <Styled.PaymentSvg src={paymentMethod('paypal', 'light')} />
                    <Styled.PaymentSvg src={paymentMethod('amex', 'light')} />
                    <Styled.PaymentSvg
                      src={paymentMethod('giropay', 'light')}
                    />
                    <Styled.PaymentSvg
                      src={paymentMethod('googlewallet', 'light')}
                    />
                    <Styled.PaymentSvg src={paymentMethod('klarna', 'light')} />
                    <Styled.PaymentSvg
                      src={paymentMethod('maestro', 'light')}
                    />
                    <Styled.PaymentSvg
                      src={paymentMethod('mastercard', 'light')}
                    />
                    <Styled.PaymentSvg src={paymentMethod('visa', 'light')} />
                    <Styled.PaymentSvg src={paymentMethod('sepa', 'light')} />
                  </Styled.PaymentMethods>
                </Styled.PaymentContainer>
              </Styled.TotalCart>
              <Styled.ShoppingInfo></Styled.ShoppingInfo>
            </Styled.Sidebar>
          </Styled.Cart>
        </>
      )}
    </Styled.Wrapper>
  );
};

export default CartPage;
