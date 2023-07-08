pragma solidity ^0.8.0;

contract GlobalFunctionsContract {
    uint private counter;

    function incrementCounter() public {
        counter = counter + 1;
    }

    function getCounter() public view returns (uint) {
        return counter;
    }

    function getMessageSender() public view returns (address) {
        return msg.sender;
    }

    function getMessageValue() public view returns (uint) {
        return msg.value;
    }

    function getGasPrice() public view returns (uint) {
        return tx.gasprice;
    }

    function getMessageData() public view returns (bytes calldata) {
        return msg.data;
    }

    function getMessageGas() public view returns (uint) {
        return gasleft();
    }
}
