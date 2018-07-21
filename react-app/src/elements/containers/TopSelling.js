import React from 'react';
import axios from 'axios';
import '../../css/components/TopSelling.css';
import Product from '../../elements/components/Product'

class TopSelling extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios
        .get('https://api.jsonbin.io/b/5b537f484d5ea95c8ba7cf73')
        .then(res => this.setState({ items: res.data.items }))
        .catch(err => console.log(err))
    }

    render() {
        const listProducts = this.state.items.map( (item) => <Product imageUrl={item.imageUrl} subtitle={item.subtitle} price={item.price} title={item.title} />);
        return (
            <div class='section padding-top-60 padding-bottom-30'>
                <div class='section__content container'>
                    <div class='section__content--heading'>
                        <h5>Top Selling of the Week</h5>
                    </div>
                    <div class='section__content--column'>
                        {listProducts}
                    </div>
                </div>
            </div>
        );
    }
}

export default TopSelling;

