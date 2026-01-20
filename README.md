# 🗳️ Blockchain Voting System

A decentralized voting application (DApp) built using **Ethereum smart contracts**, **Truffle**, **Ganache**, **React**, and **MetaMask**. This project demonstrates how blockchain can be used to create a **transparent, secure, and tamper-proof voting system**.

---

## 🚀 Features

* ✅ Decentralized voting using Ethereum smart contracts
* 👤 One vote per account (prevents double voting)
* 📊 Live vote count from the blockchain
* 🦊 MetaMask wallet integration
* 🔗 Local blockchain using Ganache
* ⚛️ Modern React frontend
* 💼 Resume & GitHub showcase ready

---

## 🏗️ Project Structure

```
blockchain-voting/
│
├── contracts/              # Solidity smart contracts
│   ├── Voting.sol
│   └── Migrations.sol
│
├── migrations/             # Truffle migration scripts
│   └── 1_deploy_contracts.js
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.js
│   │   └── abi/Voting.json
│   └── package.json
│
├── truffle-config.js       # Truffle configuration
├── .gitignore
└── README.md
```

---

## ⚙️ Tech Stack

* **Solidity** – Smart contract language
* **Truffle** – Contract compilation & deployment
* **Ganache** – Local Ethereum blockchain
* **React.js** – Frontend UI
* **Web3.js** – Blockchain interaction
* **MetaMask** – Wallet & transaction signing

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/blockchain-voting.git
cd blockchain-voting
```

### 2️⃣ Install Truffle & Ganache

```bash
npm install -g truffle
```

Download Ganache GUI and start a workspace.

---

### 3️⃣ Deploy Smart Contracts

```bash
truffle compile
truffle migrate --reset
```

---

### 4️⃣ Setup Frontend

```bash
cd client
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🦊 MetaMask Configuration

* Install MetaMask browser extension
* Add **Ganache network**

  * RPC URL: `http://127.0.0.1:7545`
  * Chain ID: `1337`
* Import an account using Ganache private key

---

## 🧪 How Voting Works

1. User connects wallet via MetaMask
2. Smart contract loads from Ganache
3. Candidates are displayed
4. User votes for one candidate
5. Vote is recorded on blockchain
6. Live vote count updates

---

## 🔐 Smart Contract Highlights

* Prevents double voting
* Stores candidates securely
* Immutable vote records

---



## 📌 Future Improvements

* 🔐 Admin panel to add candidates
* 🌍 Deploy on testnet (Sepolia)
* 📱 Responsive mobile UI
* ⏱️ Real-time updates using events
* 🔒 Identity verification

---

## 👩‍💻 Author

**Jeevani Koya**
Blockchain & Full Stack Developer

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you like this project, give it a star on GitHub!
