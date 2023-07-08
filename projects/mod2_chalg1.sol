pragma solidity ^0.8.19;

contract StorageAndMemoryContract {
    uint private storageValue;
    
    function setStorageValue(uint newValue) public {
        storageValue = newValue;
    }
    
    function getStorageValue() public view returns (uint) {
        return storageValue;
    }
    
    function calculateSum(uint a, uint b) public pure returns (uint) {
        uint memoryValue = a + b;
        return memoryValue;
    }
}
