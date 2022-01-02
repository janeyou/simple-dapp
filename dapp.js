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

//  2. access to Metamask
const mmEnable = document.getElementById("mm-connect");

mmEnable.onclick = async () => {
  await ethereum.request({ method: "eth_requestAccounts" });

  const mmCurrentAccount = document.getElementById("mm-current-account");

  mmCurrentAccount.innerHTML = "Current account: " + ethereum.selectedAddress;
};
