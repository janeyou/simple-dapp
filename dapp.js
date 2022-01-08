const ssAddress = "0xf1482a219afbf8f4b3e015c9992f9eade9927c2e";

const ssABI = [
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

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

// 3. send a transaction / update
const ssSubmit = document.getElementById("ss-input-button");

var web3 = new Web3(window.ethereum);

const simpleStorage = new web3.eth.Contract(ssABI, ssAddress);

//simpleStorage.setProvider(window.ethereum);

ssSubmit.onclick = async () => {
  const ssValue = document.getElementById("ss-input-box").value;
  console.log(ssValue);

  await simpleStorage.methods
    .store(ssValue)
    .send({ from: ethereum.selectedAddress });
};

// 4. read state from a contract
const ssGetValue = document.getElementById("ss-get-value");

ssGetValue.onclick = async () => {
  console.log("clicked get value button");
  var value = await simpleStorage.methods.retrieve().call();
  console.log(value);

  const ssDisplay = document.getElementById("ss-display-value");

  ssDisplay.innerHTML = "Current Simple Storage Value: " + value;
};
