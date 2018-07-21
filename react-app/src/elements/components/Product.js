import React from 'react';
import '../../css/components/Product.css';

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            subtitle: '',
            title: '',
            price: ''
        }
    }

    componentDidMount() {
        this.setState( { 
            imageUrl: this.props.imageUrl,
            subtitle: this.props.subtitle,
            title: this.props.title,
            price: this.props.price
        });
    }
    render() {
        return (
            <div className='product'>
                <article className='product__content'>
                    <img className='product__content--img' src={this.state.imageUrl} alt='' />
                    <span className='product__content--tag'>{this.state.subtitle}</span>
                    <a href='' className='product__content--title'>{this.state.title}</a>
                    <p className='product__content--review'>
                        <span className='margin-left-10'>5 Review(s)</span>
                    </p>
                    <div className='product__content--price'>{this.state.price}</div>
                    <a href='' className='product__content--cart'> </a>
                </article>
            </div>
        );
    }
}

export default Product;
