import React from 'react';
import none from '../../assets/images/none.svg';
import '../../css/components/Foot.css';

const Foot = () => {
    const footerLinks = [
        { id: 1,
          name: 'PRODUCT',
          links: [
            { id: 1, name: 'Pricing', href: '#' },
            { id: 2, name: 'Features', href: '#' },
            { id: 3, name: 'Customers Chat', href: '#' },
            { id: 4, name: 'One-Click Apps', href: '#' },
            { id: 5, name: 'API', href: '#' },
          ],
        },
        { id: 2,
          name: 'PRODUCT',
          links: [
            { id: 1, name: 'About Us', href: '#' },
            { id: 2, name: 'Blog', href: '#' },
            { id: 3, name: 'Careers', href: '#' },
            { id: 4, name: 'Contact', href: '#' },
          ],
        },
        { id: 3,
          name: 'HELP',
          links: [
            { id: 1, name: 'Getting Started', href: '#' },
            { id: 2, name: 'Feedback', href: '#' },
            { id: 3, name: 'Referral Program', href: '#' },
            { id: 4, name: 'Network Status', href: '#' },
            { id: 5, name: 'FAQ', href: '#' },
          ],
        },
        { id: 4,
          name: 'SOCIAL',
          links: [
            { id: 1, name: 'Facebook', href: '#' },
            { id: 2, name: 'Twitter', href: '#' },
            { id: 3, name: 'LinkedIn', href: '#' },
            { id: 4, name: 'Google', href: '#' },
          ],
        },
      ];
    const footerLinkRender = (footerLink) => ( <li><a href={footerLink.href}>{footerLink.name}</a></li> );
    const footerSectionRender = function(footerSection) {
        const footerLinksRendered = footerSection.links.map( ( item ) => footerLinkRender( item ) );
        return (
            <div className='footer__content--widget'>
                <h3>{footerSection.name}</h3>
                <ul>
                    {footerLinksRendered}
                </ul>
            </div>
        );
    }
    const cards = [...Array(6)].map( ( item ) => <li><img src={none} alt='img' className='img-fluid' /></li> );
    const footerLinksRender = footerLinks.map( ( item ) => footerSectionRender( item ) );
    return (
        <div className='footer'>
            <div className='footer__content'>
                <div className='footer__content--top'>
                    <div className='container clear-fix'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='left-content'>
                                    <h3>Sign up for newsletter</h3>
                                    <p>Enter your email to receive relevant messaging tips and examples.</p>
                                    <form action=''>
                                        <input className='form-control' type='email' required='required' placeholder='Enter Your Email Id' />
                                        <input type='submit' className='btn' />
                                    </form>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <h3>We Accept</h3>
                                <p>Enter your email to receive relevant messaging tips and examples.</p>
                                <div className='payment-card'>
                                    <ul>
                                        {cards}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__content--bottom'>
                <div className='container'>
                    <div className='footer__content--widget'>
                        <div className='footer-logo'>
                            <a href=''>
                                <img src={none} alt='Logo' className='img-fluid' />
                            </a>
                        </div>
                    </div>
                    {footerLinksRender}
                </div>
            </div>
        </div>
    );
  }

export default Foot;
