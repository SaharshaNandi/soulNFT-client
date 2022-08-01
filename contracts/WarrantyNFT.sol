// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.6.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.6.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.6.0/utils/Counters.sol";

contract WarrantyNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // Metadata information for each stage of the NFT.
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
    uint256 public mintedTokens;

    constructor() ERC721("WarrantyNFT", "WNFT") {
        interval = 16743307675; // extreme date -> Thursday, 29 July 2500 6:47:55 AM or 531 years
        // lastTimeStamp = block.timestamp;
        mintedTokens = 0;
        tracker = 0;
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
        currentTimeStamp = getCurrentTimeStamp();
        for(uint j=0; j<ids.length; j++) {
            if((currentTimeStamp-lastTimeStampList[ids[j]])>=intervalList[ids[j]]) {
                    expireNFT(ids[j]);
                    remove(ids[j]);
                }
            }
        return 0;
    }

    function safeMint(address to, uint256 quantity, uint256 _interval) public returns(uint256) {
        
        lastTimeStamp = block.timestamp;
        interval = _interval;

        for(uint i = 0; i<quantity; i++) {
            uint256 tokenId = _tokenIdCounter.current();
            _tokenIdCounter.increment();
            _safeMint(to, tokenId);
            _setTokenURI(tokenId, IpfsUri[0]);
            lastTimeStampList.push(lastTimeStamp);
            intervalList.push(interval);
            ids.push(tokenId);
        }
        mintedTokens += quantity;
        holder.push(mintedTokens);
        tracker += 1;
        return _tokenIdCounter.current();
    }

    function expireNFT(uint256 _tokenId) public {
        if (warrantyState(_tokenId) >= 2) {
            return;
        }
        // Get the current stage of the token and add 1
        uint256 newVal = warrantyState(_tokenId) + 1;
        // store the new URI
        string memory newUri = IpfsUri[newVal];
        // Update the URI
        _setTokenURI(_tokenId, newUri);
        // exists[_tokenId] = false;
    }

    // determine the stage of the warranty
    function warrantyState(uint256 _tokenId) public view returns (uint256) {
        string memory _uri = tokenURI(_tokenId);
        // In warranty
        if (compareStrings(_uri, IpfsUri[0])) {
            return 0;
        }
        // Out of warranty
        if (compareStrings(_uri, IpfsUri[1])) {
            return 1;
        }
        // // Other
        return 2;
    }

    /*
     ********************
     * HELPER FUNCTIONS *
     ********************
     */
    // helper function to compare strings
    function compareStrings(string memory a, string memory b)
        public
        pure
        returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
