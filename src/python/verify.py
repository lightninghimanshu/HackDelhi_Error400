from web3 import Web3
w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545", request_kwargs={'timeout': 60}))
print(w3.eth.accounts)
# print(Web3.contract.Contract("0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097"))