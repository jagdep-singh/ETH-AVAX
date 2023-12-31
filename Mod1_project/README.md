# ErrorHandlingContract

ErrorHandlingContract is a Solidity smart contract that demonstrates error handling mechanisms using `require()`, `assert()`, and `revert()` statements. It provides a counter variable that can be incremented by a specified amount, with various error checks in place to ensure valid operations.

## Getting Started

To use and interact with the ErrorHandlingContract, you will need a Solidity development environment.

### Prerequisites

- Solidity compiler (compatible with version ^0.8.0)
- Ethereum development environment or an online Solidity IDE

### Deployment

1. Compile the `ErrorHandlingContract.sol` file using the Solidity compiler of your choice. Make sure the compiler version is compatible with ^0.8.0.
2. Deploy the compiled contract to an Ethereum network of your choice using your preferred development environment or online Solidity IDE.
3. Take note of the deployed contract address for further interactions.

## Contract Functions

### `incrementCounter(uint amount)`

Increments the counter by the specified `amount`. The function includes error handling mechanisms to ensure valid operations.

- Parameters:
  - `amount`: The amount by which to increment the counter.

- Error Handling:
  - The function uses a `require()` statement to check if `amount` is greater than zero. If `amount` is zero or negative, the transaction is reverted with the error message "Amount must be greater than zero."
  - An `assert()` statement is used to ensure that the new counter value (`newCounter`) is greater than or equal to the previous value. If it is not, the transaction is reverted, indicating an unexpected state.
  - If the value of the counter exceeds 100 after incrementing, a `revert()` statement is used to revert the transaction with the error message "Counter value cannot exceed 100."

### `getCounter()`

Returns the current value of the counter.

- Return Value:
  - `uint`: The current value of the counter.
