const button = document.querySelector("button");
const age = document.querySelector(".Age");
const outputmsg = document.querySelector(".ShowPrice span");
button.addEventListener("click", () => {
  AgeValue = age.value;
  console.log(Number(AgeValue));

  if (Number(AgeValue)) {
    console.log("型態為數字");
  } else {
    age.value = "";
    outputmsg.innerText = "";
    alert("請輸入數字");
    return;
  }

  if (AgeValue <= 12) {
    outputmsg.innerText = "兒童票100元";
  } else if (65 >= AgeValue && AgeValue > 12) {
    outputmsg.innerText = "成人票250元";
  } else {
    outputmsg.innerText = "敬老票150元";
  }
});
