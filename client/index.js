import './styles/main.scss';
import 'bootstrap';
import * as intlTelInput from 'intl-tel-input';
import * as $ from 'jquery';

$(document).ready(() => {
  const $input = $('#verifyPhoneNumber > div > input');
  if ($input.length > 0) {
    intlTelInput($input[0], {
      hiddenInput: 'full_phone',
      preferredCountries: ['us', 'gb', 'co', 'de'],
    });
  }
});
