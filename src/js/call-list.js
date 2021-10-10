import refs from './refs/refs.js';
import updateBin from './updateBin.js';
import { classBody } from './layout/static/footer.js';
updateBin();

//======home======//
import home from '../views/layouts/home.hbs';
import { pageHeroSliderMarkup, heroSlider } from './layout/home/hero.js';
import { pageShowroomSliderMarkup, showroomSlider } from './layout/home/ourShowRoom.js';
import { formFittingInShowroom } from './layout/brand/formFittingInShowroom.js';
import { formBrand } from './layout/brand/infoAboutBrand.js';

import {
  pageStarClientsSliderMarkup,
  starClientsSlider,
  starClientsComments,
} from './layout/home/starClients.js';
import { pageInInstagramSliderMarkup, instagramSlider } from './layout/home/inInstagram.js';
import { cardsMarkup, openContent } from './layout/home/content.js';
import { aboutTheBrand_parsing, openAboutTheBrand } from './layout/home/aboutTheBrand.js';
export function homeRender() {
  updateBin();
  classBody()
  const homeMarkup = home({
    pageHeroSliderMarkup,
    cardsMarkup,
    pageShowroomSliderMarkup,
    formBrand,
    pageStarClientsSliderMarkup,
    pageInInstagramSliderMarkup,
    aboutTheBrand_parsing,
  });
  refs.mainEL.innerHTML = homeMarkup;

  heroSlider();
  openContent();
  showroomSlider();
  starClientsSlider();
  starClientsComments();
  instagramSlider();
  blockHelpRender();
  formFittingInShowroom();
  openAboutTheBrand();
}
homeRender(); //========================================================call
//=====brand========//
import brand_page from '../views/layouts/brand.hbs';
import {
  infoAboutBrand,
  brandOurAdvantages,
  videoBrand,
  brandPlayer,
} from './layout/brand/infoAboutBrand.js';


export function brandRender() {
  classBody("footer-switch")
  const contactPageMarkUp = brand_page({
    formBrand,
    brandOurAdvantages,
    contactsContact,
    videoBrand,
  });
  refs.mainEL.innerHTML = contactPageMarkUp;
  formFittingInShowroom();
  infoAboutBrand();
  brandPlayer();
}
// brandRender(); //========================================================call

//=====checkout========//
import { ModalData, createPayment } from './layout/checkout/payment.js';
import { ordering, openOrderingFunction } from './layout/checkout/ordering.js';
import { backdropMarkup } from './layout/checkout/thanksForOrdering.js';
import payment_checkout from '../views/layouts/checkout.hbs';
export function checkoutRender() {
  updateBin();
  classBody()
  const createCheckout = payment_checkout({ createPayment, ordering, backdropMarkup });
  refs.mainEL.innerHTML = createCheckout;
  //refs.mainEL.insertAdjacentHTML('beforeend', createCheckout);
  openOrderingFunction();
  const modalOpen = new ModalData({
    idInputDay: 'js-day',
    idListDay: 'day-list',
    idInputTime: 'js-time',
    idListTime: 'time-list',
  });

  blockHelpRender();
}

//=====favorites========//
import Favorites from './layout/favorites/favorites.js';
// import favorit from './json/favorites.json';

export function favoritesRender() {
  // let data = {};
  // data['fav'] = [...favorit];
  // localStorage.setItem('favorites', JSON.stringify(data));

  // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1');
  const favorites = new Favorites();
  // favorites.updateCount.bind(favorites);

  refs.mainEL.innerHTML = favorites.markcup;
  favorites.init();
}
let data = localStorage.getItem('favorites');
data = JSON.parse(data);
refs.numRef.innerHTML = data['fav'].length;
//=====contact========//

import contact_page from '../views/layouts/contact.hbs';
import { contactsMap, contactsContact } from './layout/contact/contact.js';

export function contactRender() {
  classBody()
  const contactPageMarkUp = contact_page({ formBrand, contactsMap, contactsContact });
  refs.mainEL.innerHTML = contactPageMarkUp;
  //refs.mainEL.insertAdjacentHTML('beforeend', contactPageMarkUp);
  formFittingInShowroom();
}
//contactRender(); //========================================================call==================================

//=====delivery========//
import deliveryMarkUp from '../views/layouts/delivery.hbs';
import { formDeliveryMarkUp, formDelivery } from './layout/delivery/formsQuestion.js';
import { deliveryThreeModal } from './layout/delivery/deliveryTypes.js';
import {
  buttonsDelivery,
  mainImageDelivery,
  descriptionDelivery,
  questionDelivery,
} from './layout/delivery/deliveryTypes.js';

export function deliveryRender() {
  classBody()
  const deliveryPageMarkUp = deliveryMarkUp({
    buttonsDelivery,
    mainImageDelivery,
    descriptionDelivery,
    questionDelivery,
    formDeliveryMarkUp,
  });
  refs.mainEL.innerHTML = deliveryPageMarkUp;
  formDelivery();
  deliveryThreeModal();
}

//deliveryRender(); //========================================================call

import sizeTable_markup from '../views/layouts/fitting.hbs';
import sizeTableMarcup from './components/sizeTable.js';
import { informationAboutFitting_informationCreate } from './layout/fitting/informationAboutFitting.js';
import {
  openVideoSlider,
  fittingVideoSliderPlayer,
  videoSlider_videoSliderCreate,
} from './layout/fitting/videoSlider.js';

export function fittingRender() {
  classBody()
  const fittingMarkUp = sizeTable_markup({
    sizeTableMarcup,
    videoSlider_videoSliderCreate,
    informationAboutFitting_informationCreate,
    formBrand,
  });
  refs.mainEL.innerHTML = fittingMarkUp;
  openVideoSlider();
  fittingVideoSliderPlayer();
  formFittingInShowroom();
}
//fittingRender(); //============================================================call

//=====product========//
import {
  setProductSlider,
  callProductPageFunctional,
  createFullMarkup,
} from './layout/product/infoAboutProduct.js';
import ProductModalAddToCart from './layout/product/productModalAddToCart.js';
import RecomendationsCategory from './layout/product/recomendationsCategory.js';
import cards from './json/catalog.json';
import productMarkup from '../views/layouts/product.hbs';
import HandSewn from './layout/product/productHandSewn.js';
import backdropMarkupTempl from '../views/components/backdrop.hbs';

import modalFormMarkupTempl from '../views/components/thanksForOrdering.hbs';
import { preorderMark, setEventPreorder } from './layout/product/preorderModal.js';
import { tryOnModels, setEventTryOnModels } from './layout/product/tryOnModelsModal.js';

export function productRender() {
  classBody()
  const objRecomendationsCategory = new RecomendationsCategory({
    data: cards,
  });
  const objHandSewn = new HandSewn({
    object: [
      {
        name: '.try-on__backdrop', // a modal selector that is called when the button is clicked
        className: 'is-visible', // the class that hides the modal
      },
    ],
  });
  const objProductModalAddToCart = new ProductModalAddToCart({
    productName: 'ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ',
    objectClose: [
      {
        name: '[data-modal]', // a backdrop selector that is called when the button is clicked
        className: 'is-hidden', // the class that hides the backdrop
      },
    ],
  });
  const modalFormMarkupOrder = modalFormMarkupTempl();
  const modalFormMarkup = modalFormMarkupOrder + objProductModalAddToCart.getMarkup();
  const backdropMarkup = backdropMarkupTempl(modalFormMarkup);
  const obj = {
    infoAboutProduct: createFullMarkup(),
    recomendationCategory: objRecomendationsCategory.getMarkup(),
    handSewn: objHandSewn.getMarkup(),
    backdrop: backdropMarkup,
    modalPreorder: preorderMark,
    tryOnModels: tryOnModels,
  };
  // refs.mainEL.insertAdjacentHTML('beforeend', productMarkup(obj));
  refs.mainEL.innerHTML = productMarkup(obj);
  setProductSlider();
  callProductPageFunctional(objProductModalAddToCart.show);
  document.querySelector('.form__button-сlose').style.display = 'none';
  document.querySelector('.ordering__form').style.display = 'none';
  objRecomendationsCategory.setSlider();
  objRecomendationsCategory.setEvent();
  objHandSewn.setEvent();
  objProductModalAddToCart.setEvent();
  objProductModalAddToCart.setSlider();
  setEventPreorder();
  setEventTryOnModels();
}

// productRender(); //========================================================call

//=====reviews========//
import reviews_page from '../views/layouts/reviews.hbs';
import { formReviews, formReviewsMarkUp } from './layout/reviews/registrationFormForFitting.js';
import {
  setVideoHbs,
  clientStar,
  videosetSlickSettings,
  videoSetPlayer,
} from './layout/reviews/videoSet.js';

export function reviewsRender() {
  classBody()
  const reviewsMarkUp = reviews_page({ setVideoHbs, clientStar, formReviewsMarkUp });
  refs.mainEL.innerHTML = reviewsMarkUp;
  videosetSlickSettings();
  starClientsSlider();
  starClientsComments();
  formReviews();
  videoSetPlayer();
}

// reviewsRender(); //========================================================call

//=====showroom========//
import showroom_page from '../views/layouts/showroom.hbs';
export function showroomRender() {
  classBody()
  const showroomPageMarkUp = showroom_page({ formBrand, pageShowroomSliderMarkup });
  refs.mainEL.innerHTML = showroomPageMarkUp;
  showroomSlider();
  formFittingInShowroom();
}
//showroomRender(); //========================================================call===================

//=====blockHelp========//
import blockHelp_blockHelpTemplate from '../views/components/blockHelp.hbs';
import { blockHelpRenderOpen } from './components/blockHelp/blockHelp.js';
function blockHelpRender() {
  classBody()
  refs.mainEL.insertAdjacentHTML('beforeend', blockHelp_blockHelpTemplate());
  blockHelpRenderOpen();
}

//======catalog=========//
import catalogMarkUp from '../views/layouts/catalog.hbs';
import { filterListMakeup, openFilter } from './layout/сatalog/filter.js';
import { catalogListMarkup, openCategory } from './layout/сatalog/gallery.js';

export function catalogRender() {
  classBody()
  const filterGalleryCatalogMarkup = catalogMarkUp({ filterListMakeup, catalogListMarkup });
  refs.mainEL.innerHTML = filterGalleryCatalogMarkup;
  openFilter();
  openCategory();

  // console.log(filterGalleryCatalogMarkup);
}
//catalogRender(); //========================================================call
