import './styles/main.scss';
import 'bootstrap';
import * as intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/js/utils';
import * as $ from 'jquery';

$(document).ready(() => {
  const $input = $('#verifyPhoneNumber > div > input');
  if ($input.length > 0) {
    intlTelInput($input[0], {
      hiddenInput: 'fullPhone',
      preferredCountries: ['us', 'gb', 'co', 'de'],
    });
  }
});
