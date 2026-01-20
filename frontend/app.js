let web3;
let voting;
let account;

const contractAddress = "PASTE_CONTRACT_ADDRESS_HERE";
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [{"internalType":"uint256","name":"","type":"uint256"}],
    "name": "candidates",
    "outputs": [
      {"internalType":"uint256","name":"id","type":"uint256"},
      {"internalType":"string","name":"name","type":"string"},
      {"internalType":"uint256","name":"voteCount","type":"uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType":"uint256","name":"_candidateId","type":"uint256"}],
    "name": "vote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

window.onload = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await ethereum.request({ method: "eth_requestAccounts" });

        const accounts = await web3.eth.getAccounts();
        account = accounts[0];
        document.getElementById("account").innerText =
            "Connected account: " + account;

        voting = new web3.eth.Contract(abi, contractAddress);

        loadCandidates();
    } else {
        alert("Please install MetaMask");
    }
};

async function loadCandidates() {
    const c1 = await voting.methods.candidates(1).call();
    const c2 = await voting.methods.candidates(2).call();

    document.getElementById("candidate1").innerText =
        c1.name + " - Votes: " + c1.voteCount;

    document.getElementById("candidate2").innerText =
        c2.name + " - Votes: " + c2.voteCount;
}

async function vote(id) {
    await voting.methods.vote(id).send({ from: account });
    loadCandidates();
}
