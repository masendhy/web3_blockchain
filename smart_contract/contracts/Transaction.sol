// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transaction {
    uint256 transactionCounter;

    event Transfer(
        address from,
        address reciver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address reciver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    TransferStruct[] transaction;

    function addToblockchain() public {}

    function getAllTransaction() public view returns (TransferStruct[] memory) {
        // return transactions;
    }

    function getAllTransactionCount() public view returns (uint256) {
        // return transactionCount;
    }
}
