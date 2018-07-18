var abiArray = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            },
            {
                "name": "playerID",
                "type": "uint8"
            }
        ],
        "name": "migrationGetPlayer",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "boardCost",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            },
            {
                "name": "name",
                "type": "bytes32"
            },
            {
                "name": "boardDescription",
                "type": "string"
            }
        ],
        "name": "changeBoardMetadata",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            },
            {
                "name": "playerName",
                "type": "bytes32"
            }
        ],
        "name": "removePlayerFromBoard",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "name",
                "type": "bytes32"
            },
            {
                "name": "boardDescription",
                "type": "string"
            }
        ],
        "name": "addNewBoard",
        "outputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            },
            {
                "name": "playerName",
                "type": "bytes32"
            },
            {
                "name": "score",
                "type": "uint256"
            }
        ],
        "name": "addBoardScore",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            },
            {
                "name": "playerID",
                "type": "uint8"
            }
        ],
        "name": "getPlayerByBoard",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "playerCost",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            }
        ],
        "name": "getBoardByHash",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            }
        ],
        "name": "migrationGetBoard",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "numBoards",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            },
            {
                "name": "playerName",
                "type": "bytes32"
            }
        ],
        "name": "confirmBoardScore",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "name",
                "type": "bytes32"
            },
            {
                "name": "admin",
                "type": "address"
            }
        ],
        "name": "createBoardHash",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "balance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            },
            {
                "name": "name",
                "type": "bytes32"
            },
            {
                "name": "boardDescription",
                "type": "string"
            },
            {
                "name": "numPlayers",
                "type": "uint8"
            },
            {
                "name": "boardOwner",
                "type": "address"
            }
        ],
        "name": "migrationSetBoard",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "costBoard",
                "type": "uint256"
            },
            {
                "name": "costPlayer",
                "type": "uint256"
            }
        ],
        "name": "setCosts",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            },
            {
                "name": "playerID",
                "type": "uint256"
            },
            {
                "name": "playerName",
                "type": "bytes32"
            },
            {
                "name": "playerAddress",
                "type": "address"
            },
            {
                "name": "score",
                "type": "uint256"
            },
            {
                "name": "score_unconfirmed",
                "type": "uint256"
            },
            {
                "name": "isActive",
                "type": "uint256"
            }
        ],
        "name": "migrationSetPlayer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "boardHash",
                "type": "bytes32"
            },
            {
                "name": "playerName",
                "type": "bytes32"
            }
        ],
        "name": "addPlayerToBoard",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Withdrawal",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "boardHash",
                "type": "bytes32"
            }
        ],
        "name": "newBoardCreated",
        "type": "event"
    }
];