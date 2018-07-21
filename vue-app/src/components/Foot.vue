<template>
  <div class='footer'>
    <div class='footer__content'>
      <div class='footer__content--top'>
        <div class='container clear-fix'>
          <div class='row'>
            <div class='col-sm-6'>
              <div class='left-content'>
                <h3>Sign up for newsletter</h3>
                <p>Enter your email to receive relevant messaging tips and examples.</p>
                <form action='#'>
                  <input class='form-control' type='email'
                  required='required' placeholder='Enter Your Email Id'>
                  <input type='submit' class='btn'>
                </form>
              </div>
            </div>
            <div class='col-sm-6'>
              <h3>We Accept</h3>
              <p>Enter your email to receive relevant messaging tips and examples.</p>
              <div class='payment-card'>
                <ul>
                  <li v-for='n in 6' :key='n'>
                    <img src='../assets/images/none.svg' alt='Image' class='img-fluid'>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='footer__content--bottom'>
      <div class='container'>
        <div class='footer__content--widget'>
          <div class='footer-logo'>
            <a href='#'>
              <img src='../assets/images/none.svg' alt='Logo' class='img-fluid'>
            </a>
          </div>
        </div>
        <div  class='footer__content--widget'
              v-for='footerSection in footerLinks'
              :key='footerSection.id'>
          <h3>{{footerSection.name}}</h3>
          <ul>
            <li v-for='footerLink in footerSection.links' :key='footerLink.id'>
              <a :href='footerLink.href'>{{footerLink.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'Foot',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      footerLinks: [
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
      ],
    };
  },
};
</script>

<style scoped>
.footer__content--top,
.footer__content--bottom {
  padding: 70px 0;
}

.footer__content--top {
  background-color: #2d333b;
}

.footer__content--top .left-content {
  max-width: 490px;
}

.footer__content--top form,
.payment-card {
  position: relative;
  margin-top: 30px;
  overflow: hidden;
}

.footer__content--top form .form-control {
  margin-bottom: 0;
}

.footer__content--top form .btn {
  position: absolute;
  top: 10px;
  right: 20px;
  padding: 0;
  width: 22px;
  height: 24px;
  cursor: pointer;
  text-indent: 999999px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  font-size: 24px;
  color: #aaa;
  transition: inherit !important;
}

.footer__content--top h3 {
  font-size: 24px;
  color: #fff;
  margin: 0 0 15px;
}
@media (max-width: 991px) {
  .footer__content--top {
    padding-top: 120px;
  }
}
.payment-card ul li {
  float: left;
  margin-right: 22px;
  border-radius: 4px;
  overflow: hidden;
}

.payment-card ul li:last-child {
  margin-right: 0;
}

/* footer__content--bottom */

.footer__content--bottom {
  overflow: hidden;
  background-color: #22272d;
}

.footer__content--widget {
  width: 20%;
  float: left;
}

.footer__content--widget span {
  display: block;
  margin-top: 15px;
}

.footer-logo {
  margin-bottom: 40px;
}

.footer__content--widget h3 {
  font-size: 14px;
  color: #fff;
  margin: 0 0 25px;
  text-transform: uppercase;
}

.footer__content--widget li {
  margin-bottom: 10px;
}

.footer__content--widget li:last-child {
  margin-bottom: 0;
}

.footer__content--widget li i {
  width: 30px;
}

.footer__content--widget a:hover {
  color: #fff;
}
</style>
