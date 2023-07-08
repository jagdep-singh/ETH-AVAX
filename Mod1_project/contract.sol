pragma solidity ^0.8.0;

contract ErrorHandlingContract {
    uint private counter;

    function incrementCounter(uint amount) public {
        // require 
        require(amount > 0, "Amount must be greater than zero."); 

        uint newCounter = counter + amount;
        // assert 
        assert(newCounter >= counter); 

        counter = newCounter;
        
        if (counter > 100) {
            // revert 
            revert("Counter value cannot exceed 100."); 
        }
    }

    function getCounter() public view returns (uint) {
        return counter;
    }
}
