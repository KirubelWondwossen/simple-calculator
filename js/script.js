const outputField = document.querySelector(".screen-output");
const clearBtn = document.querySelector(".clear-btn");
const percentBtn = document.querySelector(".percent-btn");
const backBtn = document.querySelector(".back-btn");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const mulBtn = document.querySelector(".mult-btn");
const divBtn = document.querySelector(".division-btn");
const dotBtn = document.querySelector(".dot-btn");
const equal = document.querySelector(".equal-btn");

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
let numsCollection = [];

const uiUpdate = function (nums) {
  numsCollection.push(nums.textContent);
  outputField.textContent = numsCollection.join("");
};

clearBtn.addEventListener("click", function (e) {
  outputField.textContent = "0";
  numsCollection = [];
});

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

nums00Btn.addEventListener("click", function (e) {
  uiUpdate(nums00Btn);
});
nums0Btn.addEventListener("click", function (e) {
  uiUpdate(nums0Btn);
});
nums1Btn.addEventListener("click", function (e) {
  uiUpdate(nums1Btn);
});
nums2Btn.addEventListener("click", function (e) {
  uiUpdate(nums2Btn);
});
nums3Btn.addEventListener("click", function (e) {
  uiUpdate(nums3Btn);
});
nums4Btn.addEventListener("click", function (e) {
  uiUpdate(nums4Btn);
});
nums5Btn.addEventListener("click", function (e) {
  uiUpdate(nums5Btn);
});
nums6Btn.addEventListener("click", function (e) {
  uiUpdate(nums6Btn);
});
nums7Btn.addEventListener("click", function (e) {
  uiUpdate(nums7Btn);
});
nums8Btn.addEventListener("click", function (e) {
  uiUpdate(nums8Btn);
});
nums9Btn.addEventListener("click", function (e) {
  uiUpdate(nums9Btn);
});
