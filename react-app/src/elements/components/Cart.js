import React from 'react';
import none from '../../assets/images/none.svg';
import '../../css/components/Cart.css';

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.setState( { 
            items: this.props.items
        });
    }

    render() {
        const itemRender = function(item) {
            return (
                <li>
                    <div className='cartitem__content row'>
                        <span className='cartitem__content--image col-4'>
                            <img src={none} alt='img' className='img-fluid' />
                        </span>
                        <div class='col-8'>
                            <span className='cartitem__content--title'>{item.title}</span>
                            <span className='cartitem__content--color'>{item.color}<br /></span>
                            <span className='cartitem__content--price'><del>$560</del>$299</span>
                        </div>
                    </div>
                </li>
            );
        }
        const listItems = this.state.items.map( ( item ) => itemRender( item ) );
        return (
            <div className='cart ml-auto'>
                <ul className='cart__header'>
                    <li className='cart__header--title'>
                        <h5>Cart</h5>
                    </li>
                    <li className='menu__dropdown'>
                        <span className='cart__header--number'>5</span>
                        <div className='cart__content menu__dropdown--list'>
                            <ul>
                                {listItems}
                            </ul>
                            <div className='cart__content--total-price'>
                                <span>
                                    <strong>Total Price: </strong>$598.00</span>
                            </div>
                            <div className='cart__content--action text-center p-1 row'>
                                <a className='btn btn-primary cart col' href=''>View Cart</a>
                                <a className='btn btn-primary cart col' href=''>Checkout</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
  }

export default Cart;
