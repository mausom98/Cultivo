# cultivo - products



## Start

```
# Install dependencies - From the root of your project
npm i
# Create a new development blockchain network  - From the root of your project
npm run env:restart
# Install your smart contract
npm run cc:start -- products
# Make a testing call to create a record in the ledger
# Beware that the first call may fail with a timeout! Just happens the first time
hurl invoke products products_create "{\"name\":\"my first request\",\"id\":\"0001\",\"created\":0,\"modified\":0}"
```





`npm i -g @worldsibu/hurley`



```
# Use the same package
# Install a new chaincode with the same source code but the name 'anothernameforyourcc'
hurl install anothernameforyourcc node
```

Other complex tasks you may need is installing to a different channel.

```
# Use the same package
# Be sure you started your environment with more than one channel running 'hurl new --channels 2'. Otherwise this will throw an error.
hurl install anothernameforyourcc node --channel ch2
```

---

If you don't want to, don't worries! This project works right away.



### Bring your project to life 

```
# Install dependencies - From the root of your project
npm i
# Create a new development blockchain network  - From the root of your project
hurl new
```

###  Install and upgrade chaincodes

```
# Package your smart contract's code  - From the root of your project
npm run cc:package -- products org1
# Install to your blockchain - From the root of your project
hurl install products node -P ./chaincode-products
# Install in debug mode, this will run the chaincode server locally so you can debug
hurl install products node -P ./chaincode-products --debug

# Upgrade your existing chaincode - From the root of your project
hurl upgrade products node 1.2 -P ./chaincode-products
```

## Start - if you don't have Hurley globally

### Bring your project to life 

```
# Install dependencies - From the root of your project
npm i
# Create a new development blockchain network  - From the root of your project
npm run env:restart
```

###  Install and upgrade chaincodes

```
# Install to your blockchain - From the root of your project
npm run cc:start -- products





