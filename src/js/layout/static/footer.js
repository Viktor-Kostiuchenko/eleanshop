import refs from '../../refs/refs.js';
import { scrollTo } from '../../components/blockHelp/blockHelp';
import {
  catalogRender,
  fittingRender,
  brandRender,
  productRender,
  contactRender,
  reviewsRender,
  deliveryRender,
  favoritesRender,
  showroomRender,
  checkoutRender,
} from '../../call-list';
import { id } from 'postcss-selector-parser';
import { indexOf } from 'lodash';

const {
  closeOpenPlus,
  inputStorageMobile,
  inputStorageDesktop,
  checkBoxIcon,
  agreeActive,
  mobileSubmitBtn,
  desktopSubmitBtn,
  desktop,
  linkMenuFooterDesktop,
  linkMenuFooterMobile,
  dropDownList,
  dataActionCollection
} = refs;
checkBoxIcon.addEventListener('click', onAgreeCheckBox);
mobileSubmitBtn.addEventListener('submit', onSubmitBtnMobile);
desktopSubmitBtn.addEventListener('submit', onSubmitBtnDesktop);
desktopSubmitBtn.addEventListener('click', onSubmitVerificationDesktop);



//=== smooth scrolling on  desktop
desktop.forEach(evt => {
  evt.addEventListener('click', el => {
    scrollTo(0, 700);
    if (el.target) {
    }
  });
});

//=== addEventListener Footer__Desktop on dataAction and LockalStorage===//
linkMenuFooterDesktop.forEach(evt => {
  evt.addEventListener('click', el => {
    const selected = el.target.dataset.atribute;
    if (selected) localStorage.setItem('footer-filter-desktop', selected);
  });
});

//=== addEventListener Footer__Mobile on id and LockalStorage===//
linkMenuFooterMobile.forEach(evt => {
  evt.addEventListener('click', el => {
    const selected = el.target.dataset.atribute;
    if (selected) localStorage.setItem('content', selected);
  });
});
// === drop-down menu-list ===
closeOpenPlus.forEach(evt => {
  evt.addEventListener('click', el => {
    const idMuneClickMobile = evt.id;
    const dropDown = document.querySelector('.open-menu');
    if (!el.target.nextElementSibling) {
      scrollTo(0, 700);
      localStorage.setItem('footer-filtr-mobile', idMuneClickMobile);
    } else {
      el.preventDefault();
    }
    if (el.target.nextElementSibling) {
      console.log(el.target.nextElementSibling);

      if (dropDown) {
        dropDown.classList.toggle('open-menu');
        dropDown.nextElementSibling.classList.toggle('js-dropdown-none');
        if (el.target === dropDown) {
          return;
        } else if (el.target === dropDownList) {
          dropDown.parentElement.classList.remove('.js-dropdown-none')
        };
      }
      el.target.classList.toggle('open-menu');
      el.target.nextElementSibling.classList.toggle('js-dropdown-none');
    } return;
  });
});

//==== Hiding the menu when switching to another block
linkMenuFooterMobile.forEach(evt => {
  evt.addEventListener('click', el => {
    scrollTo(0, 700);
    el.preventDefault();
    const dropDown = document.querySelector('.js-dropdown-none');
    if (el.target) {
      const openMenu = document.querySelector('.open-menu');
      dropDown.classList.remove('js-dropdown-none');
      openMenu.classList.remove('open-menu');
    }
  });
});

// Activation deactivation checkbox
function onAgreeCheckBox(evt) {
  const iconCheck = evt.currentTarget;
  if (iconCheck) {
    agreeActive.classList.toggle('js-show-and-remove');
    desktopSubmitBtn.toggleAttribute("disabled")
  }
}

// inputStorageMobile.forEach(evt => {
//   const idInputMobile = evt.id;
//   evt.addEventListener('input', el => {
//     const subscribe = el.currentTarget.value;
//     if (subscribe) localStorage.setItem(idInputMobile, subscribe);
//   });
// });

// Appointment localStorage on input mobile
class MobileLocalStorage {
  constructor(idInputMobile, subscribe) {
    this.idInputMobile = idInputMobile;
    this.subscribe = subscribe;
  }
  get idInputMob() {
    return this.idInputMobile
  }
  set idInputMob(value) {
    inputStorageMobile.forEach(evt => {
      this.idInputMobile = evt.id;
      console.log(this.idInputMobile);
      evt.addEventListener('input', el => {
        this.subscribe = el.currentTarget.value;
        if (this.subscribe) localStorage.setItem(this.idInputMobile, this.subscribe);
      });
    });
  }
}
const mobileLocalStorage = new MobileLocalStorage()
mobileLocalStorage.idInputMob = 'idInputMobile', 'subscribe';





// Appointment localStorage на input desktop
inputStorageDesktop.forEach(evt => {
  const idInputDesktop = evt.id;
  evt.addEventListener('input', el => {
    const subscribe = el.currentTarget.value;
    if (subscribe) localStorage.setItem(idInputDesktop, subscribe);
  });
});

//   Remuve localStorage on input mobile
function onSubmitBtnMobile(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('user_subscribe');
}

//   Remuve localStorage on input desktop
function onSubmitBtnDesktop(evt) {
  evt.preventDefault();
  onSubmitVerificationDesktop()
}

//=== RENDER ===//
dataActionCollection.forEach(evt => {
  evt.addEventListener('click', el => {
    const targetLink = el.target.dataset.atribute;
    //==== MobileRender ===//

    //==== catalogRender ===//
    if (
      targetLink === 'autumn-winter' ||
      targetLink === 'evening-sets' ||
      targetLink === 'wedding-and-graduation' ||
      targetLink === 'tux' ||
      targetLink === 'costumes' ||
      targetLink === 'pants' ||
      targetLink === 'blouses'
    ) catalogRender();

    //==== brandRender ===//
    if (
      targetLink === 'about-the-brand' ||
      targetLink === 'about-founders' ||
      targetLink === 'blog'
    ) brandRender();

    //==== showroomRender ===//
    if (targetLink === 'showroom') showroomRender();

    //==== deliveryRender ===//
    if (targetLink === 'delivery' || targetLink === 'return' || targetLink === 'payment') deliveryRender();


    //==== showroomRender ===//
    if (targetLink === 'showroom' || targetLink === 'showroom') showroomRender();

    //==== formFittingInShowroom ===//
    if (targetLink === 'fitting') fittingRender();


    //==== reviewsRender ===//
    if (targetLink === 'reviews') reviewsRender();

    //==== renderDesktop ===//

    //==== DeliveryRender ===//
    if (targetLink === 'delivery' || targetLink === 'payment' || targetLink === 'return') deliveryRender();

    //==== FittingRender ===//
    if (targetLink === 'fitting') fittingRender();
    //==== ContactsRender ===//
    if (targetLink === 'contacts') contactRender();
  });
});

export function classBody(value) {
  const BodyClass = 'footer-switch';
  if (BodyClass === value) {
    document.body.classList.add(value);
  } else {
    document.body.classList.remove(BodyClass);
  }
}

function onSubmitVerificationDesktop(evt) {
  localStorage.removeItem('name');
  localStorage.removeItem('email');
}

