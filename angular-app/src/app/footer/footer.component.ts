import { Component, Input } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css' ]
})
export class FooterComponent {
    footerLinks:Array<any> = [];
    constructor (){
        this.footerLinks= [
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
    }
}
