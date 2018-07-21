import React from 'react';
import logo from '../../assets/images/logo.svg';
import Search from '../../elements/components/Search'
import Cart from '../../elements/components/Cart'
import '../../css/components/MainBar.css';

const MainBar = () => {
    const items = [
        { id: 1, title: 'Zigzag Watch', color: 'Blue' },
        { id: 2, title: 'Zigzag Phone', color: 'Red' },
        { id: 3, title: 'Zigzag Watch', color: 'Green' },
      ];
    return (
        <div class='bar'>
            <div class='bar__content p-4 container clear-fix row'>
                <div class='bar__content--left col row'>
                    <div class='logo'>
                        <a class='logo__full' href=''>
                            <img class='img-fluid' src={logo} alt='Logo' />
                        </a>
                        <a class='logo__mobile' href=''>
                            <img class='img-responsive' src={logo} alt='Logo' />
                        </a>
                    </div>
                </div>
                <div class='bar__content--center col row'>
                    <Search />
                </div>
                <div class='bar__content--right col row'>
                    <Cart items={items} />
                </div>
            </div>
        </div>
    );
  }

export default MainBar;
