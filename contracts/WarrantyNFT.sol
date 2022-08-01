// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.6.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.6.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.6.0/utils/Counters.sol";

contract WarrantyNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // Metadata information for each stage of the NFT on IPFS.
    string[] IpfsUri = [
        "https://raw.githubusercontent.com/NabarunKar/dNFT-metadata/main/1.json",
        "https://raw.githubusercontent.com/NabarunKar/dNFT-metadata/main/2.json",
        "https://raw.githubusercontent.com/NabarunKar/dNFT-metadata/main/3.json"
    ];

    uint256 public lastTimeStamp;
    uint256 public interval;
    uint256[] public lastTimeStampList;
    uint256[] public intervalList;

    uint256 public currentTimeStamp;
    uint256[] public holder;
    uint256 public tracker;

    uint256[] public ids; // stores ids of all tokens that are in warranty
    // uint256 public expiredTokens;
    uint256 public mintedTokens;
    // bool public first;
    // uint256 quantity;

    constructor() ERC721("WarrantyNFT", "WNFT") {
        interval = 16743307675; // extreme date -> Thursday, 29 July 2500 6:47:55 AM or 531 years
        // lastTimeStamp = block.timestamp;
        mintedTokens = 0;
        tracker = 0;
        // expiredTokens = 0;
        // first = true;
    }

    function getCurrentTimeStamp() public view returns(uint256) {
        return block.timestamp;
    }


    function remove(uint index) public{
        ids[index] = ids[ids.length - 1];
        ids.pop();
    }

    function checkTimeStamp() public returns(uint256) {
        require(ids.length>=1, "No tokens to expire.");
