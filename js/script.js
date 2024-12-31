const outputField = document.querySelector(".screen-output");
const outputField2 = document.querySelector(".screen-output2");
const clearBtn = document.querySelector(".clear-btn");
const percentBtn = document.querySelector(".percent-btn");
const backBtn = document.querySelector(".back-btn");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const mulBtn = document.querySelector(".mult-btn");
const divBtn = document.querySelector(".division-btn");
const dotBtn = document.querySelector(".dot-btn");
const equalBtn = document.querySelector(".equal-btn");

const nums1Btn = document.querySelector(".nums1-btn");
const nums2Btn = document.querySelector(".nums2-btn");
const nums3Btn = document.querySelector(".nums3-btn");
const nums4Btn = document.querySelector(".nums4-btn");
const nums5Btn = document.querySelector(".nums5-btn");
const nums6Btn = document.querySelector(".nums6-btn");
const nums7Btn = document.querySelector(".nums7-btn");
const nums8Btn = document.querySelector(".nums8-btn");
const nums9Btn = document.querySelector(".nums9-btn");
const nums0Btn = document.querySelector(".nums0-btn");
const nums00Btn = document.querySelector(".nums00-btn");

///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//Keyboard input
document.addEventListener("keydown", function (e) {
  if (e.key === "1") {
    uiUpdate(nums1Btn);
  } else if (e.key === "2") {
    uiUpdate(nums2Btn);
  } else if (e.key === "3") {
    uiUpdate(nums3Btn);
  } else if (e.key === "4") {
    uiUpdate(nums4Btn);
  } else if (e.key === "5") {
    uiUpdate(nums5Btn);
  } else if (e.key === "6") {
    uiUpdate(nums6Btn);
  } else if (e.key === "7") {
    uiUpdate(nums7Btn);
  } else if (e.key === "8") {
    uiUpdate(nums8Btn);
  } else if (e.key === "9") {
    uiUpdate(nums9Btn);
  } else if (e.key === "0") {
    uiUpdate(nums0Btn);
  }
});
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

//Variable Declaration

let uiResult = []; //important
let operationArr = []; //important
let result, nums, btns;

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//Functions

const arrJoin = function (arr) {
  nums = +arr.reduce((acc, cur) => (acc += cur));
  return nums;
};

const uiUpdate = function (nums) {
  uiResult.push(nums.textContent);
  outputField.textContent = uiResult.join("");
};

const uiUpdateScreen2 = function (op) {
  outputField2.textContent = op.textContent;
  outputField2.style.opacity = 100;
};

const calculator = function (btn) {
  if (operationArr.length >= 2) {
    if (btn === plusBtn) {
      result = operationArr.reduce((acc, curr) => (acc += curr));
    } else if (btn === minusBtn) {
      result = operationArr.reduce((acc, curr) => (acc -= curr));
    } else if (btn === divBtn) {
      result = operationArr.reduce((acc, curr) =>
        curr !== 0 ? (acc /= curr) : (outputField.textContent = "ERROR")
      );
    } else if (btn === mulBtn) {
      result = operationArr.reduce((acc, curr) => (acc *= curr));
    }
    outputField.textContent = result;
  }
};

const outputFix = function (btn) {
  nums = arrJoin(uiResult);
  operationArr.push(nums);
  uiResult = [];
  uiUpdateScreen2(btn);
  calculator(btn);
};

const eventHandler = function (btn) {
  btn.addEventListener("click", function (e) {
    outputFix(btn);
    btns = btn;
  });
};

const check = function () {
  if (btns && uiResult.length > 0) {
    outputFix(btns);
  } else {
    alert("Field is Empty");
  }
  btns = "";
};
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//Operations
eventHandler(plusBtn);
eventHandler(minusBtn);
eventHandler(mulBtn);
eventHandler(divBtn);

//input from keyboard
document.addEventListener("keydown", function (e) {
  if (e.key === "+") {
    outputFix(plusBtn);
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "-") {
    outputFix(minusBtn);
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "*") {
    outputFix(mulBtn);
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "/") {
    outputFix(divBtn);
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    check();
  }
});
////////////////////////////////////////////////////////////
// Event Listners
const eventHandlerForNums = function (btn) {
  btn.addEventListener("click", function (e) {
    uiUpdate(btn);
  });
};

eventHandlerForNums(nums00Btn);
eventHandlerForNums(nums0Btn);
eventHandlerForNums(nums1Btn);
eventHandlerForNums(nums2Btn);
eventHandlerForNums(nums3Btn);
eventHandlerForNums(nums4Btn);
eventHandlerForNums(nums5Btn);
eventHandlerForNums(nums6Btn);
eventHandlerForNums(nums7Btn);
eventHandlerForNums(nums8Btn);
eventHandlerForNums(nums9Btn);
eventHandlerForNums(dotBtn);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

clearBtn.addEventListener("click", function (e) {
  outputField.textContent = "0";
  uiResult = [];
  operationArr = [];
  outputField2.style.opacity = 0;
});

equalBtn.addEventListener("click", function () {
  check();
});

backBtn.addEventListener("click", function () {
  uiResult.pop();
});
