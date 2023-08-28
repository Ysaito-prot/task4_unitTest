// フォーカス外れた時にエラーメッセージ表示
let nameForm = document.querySelector('#name');
let huriganaForm = document.querySelector('#hurigana');
let companyNameForm = document.querySelector('#companyName');
let addressForm = document.querySelector('#address');
let mailAddressForm = document.querySelector('#mailAddress');
let telForm = document.querySelector('#tel');
let urlForm = document.querySelector('#url');
let budgetForm = document.querySelector('#budget');
let messageForm = document.querySelector('#message');

let errorName =  document.querySelector('.error-name');
let errorHurigana =  document.querySelector('.error-hurigana');
let errorCompanyName =  document.querySelector('.error-companyName');
let errorAddress =  document.querySelector('.error-address');
let errorMailAddress =  document.querySelector('.error-mailAddress');
let errorTel =  document.querySelector('.error-tel');
let errorUrl = document.querySelector('.error-url');
let errorBudget =  document.querySelector('.error-budget');
let errorMessage =  document.querySelector('.error-message');

nameForm.addEventListener(`blur`, () => {
  if (nameForm.value.length > 10) {
    errorName.innerHTML = "10文字以内で入力してください";
    errorName.style.color = "red";
  } else {
    errorName.innerHTML = "";
  }
});
huriganaForm.addEventListener(`blur`, () => {
  if (huriganaForm.value.length > 10) {
    errorHurigana.innerHTML = "10文字以内で入力してください";
    errorHurigana.style.color = "red";
  } else {
    errorHurigana.innerHTML = "";
  }
});
companyNameForm.addEventListener(`blur`, () => {
  if (companyNameForm.value.length > 10) {
    errorCompanyName.innerHTML = "10文字以内で入力してください";
    errorCompanyName.style.color = "red";
  } else {
    errorCompanyName.innerHTML = "";
  }
});
addressForm.addEventListener(`blur`, () => {
  if (addressForm.value.length > 30) {
    errorAddress.innerHTML = "30文字以内で入力してください";
    errorAddress.style.color = "red";
  } else {
    errorAddress.innerHTML = "";
  }
});
mailAddressForm.addEventListener(`blur`, () => {
  if (mailAddressForm.value.length > 30) {
    errorMailAddress.innerHTML = "30文字以内で入力してください";
    errorMailAddress.style.color = "red";
  } else {
    errorMailAddress.innerHTML = "";
  }
});
telForm.addEventListener(`blur`, () => {
  if (telForm.value.length > 16) {
    errorTel.innerHTML = "16文字以内で入力してください";
    errorTel.style.color = "red";
  } else {
    errorTel.innerHTML = "";
  }
});
urlForm.addEventListener(`blur`, () => {
  if (urlForm.value.length > 50) {
    errorUrl.innerHTML = "50文字以内で入力してください";
    errorUrl.style.color = "red";
  } else {
    errorUrl.innerHTML = "";
  }
});
budgetForm.addEventListener(`blur`, () => {
  if (budgetForm.value.length > 9) {
    errorBudget.innerHTML = "9文字以内で入力してください";
    errorBudget.style.color = "red";
  } else {
    errorBudget.innerHTML = "";
  }
});
messageForm.addEventListener(`blur`, () => {
  // 記号が含まれていたらエラー表示
  if (messageForm.value.match(/[ !?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]/)) {
    errorMessage.innerHTML = "記号は入力しないでください";
    errorMessage.style.color = "red";
            } else if
  (messageForm.value.length > 200) {
    errorMessage.innerHTML = "200文字以内で入力してください";
    errorMessage.style.color = "red";
  } else {
    errorMessage.innerHTML = "";
  }
});

// 問い合わせサービス項目のバリデーションチェック
function isCheck() {
  let arr_checkBoxes = document.getElementsByClassName("check");
  let arr_checkBoxes2 = document.getElementById("contact2");
  let contactError =  document.querySelector('#contactError');
  let emailElems =  document.querySelectorAll('.email');

  let count = 0;
  for (let i = 0; i < arr_checkBoxes.length; i++) {
      if (arr_checkBoxes[i].checked) {
          count++;
      }
  }
  if (count > 0) {
    contactError.innerHTML = "";
      return true;
  } else {
    scrollTo(0, window.innerHeight * 2);
    contactError.innerHTML = "1つ以上選択してください";
      return false;
  };
}
