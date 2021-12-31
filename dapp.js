// 1. detect Metamask
window.addEventListener("load", function () {
  if (typeof this.window.ethereum !== "undefined") {
    let mmDetected = document.getElementById("mm-detected");
    mmDetected.innerHTML = "MetaMask Has Been Detected!";
  } else {
    console.log("no wallet!");
    alert("Please install MetaMask or another wallet!");
  }
});

const mmEnable = document.getElementById("mm-connect");

mmEnable.onclick = async () => {
  await console.log("clicked!");
};
