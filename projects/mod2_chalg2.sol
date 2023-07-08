pragma solidity ^0.8.19;

contract UpgradeableContract {
    uint private value;

    function getValue() public view returns (uint) {
        return value;
    }

    function setValue(uint newValue) public {
        value = newValue;
    }
}

contract ProxyContract {
    address private implementation;
    address private owner;

    constructor(address _implementation) {
        implementation = _implementation;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function.");
        _;
    }

    fallback() external payable {
        address _impl = implementation;
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), _impl, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
            case 0 {
                revert(0, returndatasize())
            }
            default {
                return(0, returndatasize())
            }
        }
    }

    function changeImplementation(address newImplementation) public onlyOwner {
        implementation = newImplementation;
    }
}

