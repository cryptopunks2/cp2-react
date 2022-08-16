import React, { useEffect,useState } from 'react';
import Cookies from 'universal-cookie'; // should go up in App so can be shared...

import { ethers } from "ethers";
import PUNKS2ABI from './Punks2ABI';
const PUNKS_CONTRACT_ADDR = "0xc02d332AbC7f9E755e2b1EB56f6aE21A7Da4B7AD";

const queryString = require('query-string');


function Metamask(props) {
  
  const [mintPrice, setMintPrice] = useState(Number);
  const [selectedAddress, setSelectedAddress] = useState(String);
  const [provider, setProvider] = useState(Object);
  const [chainId, setChainId] = useState(Number);
  const [ownedPunks, setOwnedPunks] = useState(Number);
  const [toMint, setToMint] = useState(Number);
  const [punksContract, setPunksContract] = useState(Object);
  const cookies = new Cookies();
  
  let ref = "";
  const parsed = queryString.parse(window.location.search);
  const connectToMetamask = (async () => {
    
    setToMint(1);
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    let network  = await provider.getNetwork()
    let accounts = await provider.send("eth_requestAccounts", []);

    console.log(network.chainId);

    setChainId(Number(network.chainId));

    if(network.chainId == 137) {
      setSelectedAddress(accounts[0]);
      setProvider(provider);
      //const web3 = new ethers.providers.Web3Provider(provider);
      //const signer = web3.getSigner();
      const signer = provider.getSigner();

      //let _punksContract = new ethers.Contract(PUNKS_CONTRACT_ADDR, PUNKS2ABI.abi, signer);
      let _punksContract = new ethers.Contract(PUNKS_CONTRACT_ADDR, PUNKS2ABI.abi, signer);

      _punksContract.connect(signer);

      setPunksContract(_punksContract);
        
    } else {
        alert("Wrong network - set your wallet to use Polgyon Mainnet", chainId)
        setSelectedAddress(null);
    }

    let _res = await props.contract.calcMintPrice(1);
    setMintPrice(Number(_res.toString()));

    _res = await props.contract.balanceOf(accounts[0]);
    setOwnedPunks(Number(_res.toString()));
    

  });

  const mintPunks = (async() => {
    if(!isAddress(ref)){
      ref = "0x0000000000000000000000000000000000000000";
    }

    let _mintPrice = await punksContract.calcMintPrice(toMint);
    let mintMatic = (_mintPrice/1e18).toString();
    console.log("MINT MATIC:", _mintPrice, mintMatic);

    let _gas;
    try{
        _gas = await punksContract.estimateGas.mint(Number(toMint), ref, {
        from: selectedAddress,
        value: 
        ethers.utils.parseEther(mintMatic.toLocaleString('fullwide', {useGrouping:false}))
    });
    } catch(e) {
        //inMint = false;
        //toastMessage("A problem with your transaction occured - please check you have the required MATIC and try again", "CryptoPunks2");
        return;
    }

    _gas = (_gas *1.5).toFixed(0);
    
    console.log("GAS:", _gas);
    //console.log("GAS PRICE:", gasPrice);

    try{

      let _res = await punksContract.mint(toMint, ref, {
          from: selectedAddress,
          value: 
          ethers.utils.parseEther(mintMatic.toLocaleString('fullwide', {useGrouping:false})),
          //,
          gasLimit: _gas,
          //gasPrice: ethers.utils.parseUnits(gasPrice, 'gwei')

      });

      {
          
          //inMint = false;
          //toastMessage("You now own new Crypto Punks 2!", "Minting Complete");

      }
  } catch(e) {
    console.log(e);
      //inMint = false;

      //    toastMessage("A problem with your transaction occured - please check you have the required MATIC and try again" , "CryptoPunks2");

  }


  });

  const viewPunksByAddr = ((_addr) => {
    
    window.open("/punks2/owned.html?owner=" + _addr,"_self")
  });

  const updateMintPrice = ((_e) => {
    setToMint(Number(_e.target.value));
  });
  
  const isAddress = ((address) => {
    return (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));
  });

  const renderMetamask = (() => {
    if(parsed['ref']) {
      cookies.set('ref', parsed['ref'], { path: '/' });
      ref = parsed['ref'];
    } else {
      ref = cookies.get("ref");
    }

    if (!selectedAddress) {
      return (
        <a className="btn btn-l btn-warning" href="/#" style={{width: "80%"}} onClick={() => connectToMetamask()}>
            <i className="fas fa-wallet me-2"></i>
            CONNECT WALLET TO MINT
        </a>
      )
    } else {

        return (

              <div id="connected" className="row userInfo mb-3" >
                            <div className="hide">
                            Your Address: <span id="connectedAddress" className="d-none d-md-inline">{selectedAddress}</span>
                            <span id="connectedAddressShort" className="d-lg-none d-md-none d-sm-inline"></span>
                            </div>
    
                            <center>
                            <div className="card" >
                                <img className="card-img-top hide" src="" alt="top"/>
                                <div className="card-body">
                                  <h5 className="card-title">MINT YOUR OWN PUNKS</h5>
                                  <p className="card-text">Current MINT price is <span id="currentPrice">{(mintPrice/1e18) }</span> MATIC/PUNKS2</p>
                                  
    
                                  Mint: <input type="number" id="numberOfPunks" min="1" max="500" 
                                  onChange={updateMintPrice}
                                  style={{borderRadius: "10px", fontSize: "20pt", textAlign: "center"}} 
                                  placeholder="1"/>
                                  PUNKS2<br/>
                                  <span style={{fontSize: "9pt"}}>
                                    Total: <span id="mintCost">{(mintPrice/1e18) * toMint}</span> MATIC ~ giving <span id="pbucksAirdropAmount">{1000000 * toMint}</span> $PBUCKS in the upcoming <a href="https://PBUCKS.finance" style={{color: "blue"}}>airdrop</a> 
                                </span>
                                    <br/><br/>&nbsp;
                                            <a className="btn btn-primary" href="/#" id="mintPunks2"
                                             onClick={mintPunks}>MINT PUNKS2</a>
                                            <a className="btn btn-secondary" href="/#" onClick={() => viewPunksByAddr(selectedAddress)}
                                              id="yourPunks2Btn">YOUR PUNKS2</a>
                                    <br/>
                                    You currently own: <span id="punks2Balance">{ownedPunks}</span> PUNKS2 
                                  
                                    <br/>
                                    <span style={{fontSize: "10pt"}}>
                                    <i>
                                        (If you are on mobile and having trouble sending a MINT please try on desktop with Metamask)
                                    </i></span>
                                  
                                </div>
                            </div>
    
                        </center>
    
    
                            
                        </div>
          );
    }
  });

//            <p>Welcome {this.state.selectedAddress} - [{this.state.chainId}]</p>


  return(
      <div>
        {renderMetamask()}
      </div>
    );

}

export default Metamask;