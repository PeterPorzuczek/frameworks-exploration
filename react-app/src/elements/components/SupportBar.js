import React from 'react';
import '../../css/components/SupportBar.css';

const SupportBar = () => {
    const options = ['+0123 45 67 89', 'support@cart.com', 'Live Chat'].map( (option) => <div className="options__container col row ml-auto"><a href="">{option}</a></div> );
    const languages = ['FIN', 'ENG'].map( (language) => <li>{language}</li> );
    const language = 'ENG';
    const currencies = ['USD', 'AUD', 'GBP', 'EUR'].map( (currency) => <option>{currency}</option> );
    return (
        <div className="bar">
            <div className="support__bar">
                <div className="bar__content container clear-fix row">
                    <div className="bar__content--left col row">
                        <div className="language">
                            <div className="menu__dropdown">
                                <a data-toggle="dropdown" href="">{language}</a>
                                <span className="dropdown-toggle"></span>
                                <ul className="menu__dropdown--list">
                                    {languages}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bar__content--right row">
                        <div className="options ml-auto row">
                            {options}
                        </div>
                        <div className="currency ml-auto">
                            <select className="currency__select">
                                {currencies}
                            </select>
                            <span className="currency__span--toggle"></span>
                        </div>
                        <div className="help ml-auto">
                            <button className="help__button">Customer Center</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default SupportBar;
