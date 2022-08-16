import React from 'react';
import { ethers } from "ethers";
import PUNKS2ABI from './Components/Punks2ABI';
import './App.css';
import Metamask from './Components/Metamask';
import LatestMintsScroller from './Components/LatestMintsScroller';

const RO_CONNECTION_TO_USE = "https://polygon-rpc.com";
const PUNKS_CONTRACT_ADDR = "0xc02d332AbC7f9E755e2b1EB56f6aE21A7Da4B7AD";


class App extends React.Component {
    constructor(props) {
        super(props);
    console.log("PUNKS2ABI:",PUNKS2ABI);
        const ethersProvider = new ethers.providers.JsonRpcProvider(RO_CONNECTION_TO_USE);
        let ro_web3Provider = ethersProvider;
        let ro_punksContract = new ethers.Contract(PUNKS_CONTRACT_ADDR, PUNKS2ABI.abi, ro_web3Provider);

        this.state = {
            PUNKS_CONTRACT: ro_punksContract
        };

        console.log("CONTRACT1:", this.state.PUNKS_CONTRACT);
      }

  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a href="#page-top"><img src="assets/img/cryptopunks2-logo-new-noicon-poweredby-light.png" width="250" style={{maxHeight:"100%"}} alt="Crypto Punks 2 ~ Powered by Polygon"/></a>
                
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#bridge">Bridge</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="https://pbucks.finance">$PBUCKS</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#attributes">Attributes</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#howto">How To</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#referrals">EARN</a></li>

                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#roadmap">ROADMAP</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header className="masthead text-white text-center">
            
            <div className="container d-flex align-items-center flex-column" style={{minHeight: "200px"}}>


                    <div id="latestScroller" className="scrollerMain pixel-border" style={{marginBottom: "20px"}}>


                        <LatestMintsScroller contract={this.state.PUNKS_CONTRACT} articles={30}>
                        </LatestMintsScroller>


                        <div id="prepare">
                            <br/>
                            <Metamask contract={this.state.PUNKS_CONTRACT}/>

                        </div>
    
                        
                    </div>

                    <div className="row mt-0">
                    
                        <div className="col ms-auto">

                            <center>
                                <a className="btn btn-primary btn-social mx-1" href="https://t.me/CryptoPunks2021" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-telegram"></i></a>
                                <a className="btn btn-primary btn-social mx-1" href="https://twitter.com/cryptopunks2021" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-twitter"></i></a>
                                <a className="btn btn-primary btn-social mx-1" href="https://discord.gg/n5Dt3ukZdy" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-discord"></i></a>

                                <br/>
                                <br/>

                                <a href="https://opensea.io/collection/cryptopunks2-v2" title="Buy on OpenSea" target="_blank" rel="noreferrer">
                                    <img style={{width:"160px", borderRadius:"5px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)"}} src="https://storage.googleapis.com/opensea-static/Logomark/Badge%20-%20Available%20On%20-%20Light.png" alt="Available on OpenSea" /></a>

                                    <a href="https://lootex.io/stores/crypto-punks-2" title="Buy on Lootex" target="_blank" rel="noreferrer">
                                        <img style={{width:"160px", borderRadius:"5px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)", backgroundColor: "white"}} 
                                            src="/assets/img/lootex-Logo-horizontal.png" alt="Available on Lootex" /></a>
                            </center>
                            <br/>
                            
                            <center>
                                Featured on:<br/>
                                <a href="https://dappradar.com/polygon/collectibles/crypto-punks-2" title="DappRadar" target="_blank" rel="noreferrer">
                                    <img style={{width:"160px", borderRadius:"5px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)", backgroundColor: "white"}} 
                                    src="/assets/img/dappradar.png" alt="Available on OpenSea" /></a>

                                    <a href="https://www.dapp.com/app/crypto-punks-2" title="Dapp.com" target="_blank" rel="noreferrer">
                                        <img style={{width:"160px", borderRadius:"5px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)", backgroundColor: "white"}} 
                                            src="/assets/img/dapp-com.png" alt="Available on Lootex" /></a>

                                            <a href="https://nftcalendar.io/event/crypto-punks-2-public-minting/" title="NFT Calendar" target="_blank" rel="noreferrer">
                                                <img style={{height: "50px", borderRadius:"5px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)", 
                                                        backgroundColor:"white", paddingLeft: "50px; padding-right: 50px"}} 
                                                    src="/assets/img/nft-cal.png" alt="Featured on NFT Calendar" /></a>
                            </center>
                        
                        </div>
                    </div>

                </div>
            
        </header>

        <section className="page-section portfolio text-light bg-secondary" id="about">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-light mb-0">Crypto Punks 2</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row">
                    <div className="col-lg-4 ms-auto" style={{textAlign: "left"}}>
                        
                        <p className="lead">
                            Crypto Punks 2, a new collection of collectables for the NFT generation only available on the Polygon Matic Blockchain.
                        </p>
                    </div>
                    <div className="col-lg-4 me-auto" style={{textAlign: "left"}}><p className="lead">
                          Get ready to own a unique PUNK from a limited collection of 10,000 unique NFTs.
                      </p>
                      <p className="lead">
                          Each is a unique NFT, evolved from the original Crypto Punk collection - new attributes, new values and a whole new start for those who missed out on the originals!
                      </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 ">&nbsp;</div>
                    <div className="col-lg-8 lead">
                        <h2>Future</h2>
                        
                        <img alt="" src="assets/img/pbucks-logo-light.png"/><br/>

                        <img src="assets/img/pbucks-icon.png" width="150" style={{float: "right"}} alt="pbucks - currency of Crypto Punks 2"/>
                        <p style={{textAlign: "left"}}>
                            Coming in Phase 3 is $PBUCKS ~ the currency of the PUNKS2 metaverse.  
                        </p>
                        <p style={{textAlign: "left"}}>
                            $PBUCKS will open with a Pre-Sale event soon, along with an AIRDROP for all holders of PUNKS2 NFTs!  Every PUNKS2 NFT you earn will 
                            entitle you to an AIRDROP allocation of $PBUCKS ~ even if you don't hold a PUNKS2 NFT you can participate in the $PBUCKS pre-sale event!
                        </p>
                        <p style={{textAlign: "left"}}>
                            Find out more at: <a href="https://pbucks.finance">pbucks.finance</a>
                        </p>
                    </div>
                </div>                

            </div>
        </section>


        <section className="page-section bg-primary text-white mb-0" id="attributes">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-white">PUNK2 ATTRIBUTES</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row">
                    <h4>PUNK2 TYPES</h4>
                    <table className="table table-dark">
                        <thead>
                          <tr>
                            <th scope="col">Atrribute</th>
                            <th scope="col">#</th>
                            <th scope="col">E.g.</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Male</th>
                            <td>6074</td>
                            <td><img  src="/punks2/img/image9986.png" className="punksEg  standardBackground" alt="Crypto Punks2 Male"/></td>
                          </tr>
                          <tr>
                            <th scope="row">Female</th>
                            <td>3926</td>
                            <td><img  src="/punks2/img/image9895.png" className="punksEg  standardBackground" alt="Crypto Punks 2 Female"/></td>
                          </tr>
                          <tr>
                            <th scope="row">Alien</th>
                            <td>9</td>
                            <td><img  src="/punks2/img/image989.png" className="punksEg  standardBackground" alt="Crypto Punks2 Alien"/></td>
                          </tr>
                          <tr>
                            <th scope="row">Zombie</th>
                            <td>121</td>
                            <td><img  src="/punks2/img/image894.png" className="punksEg  standardBackground" alt="Crypto Punks2 Zombie"/></td>
                          </tr>
                          <tr>
                            <th scope="row">Ghost</th>
                            <td>24</td>
                            <td><img  src="/punks2/img/image110.png" className="punksEg  standardBackground" alt="Crypto Punks2 Zombie"/></td>
                          </tr>

                          <tr>
                            <th scope="row">Standard Background</th>
                            <td>9988</td>
                            <td><img  src="/punks2/img/image23.png" className="punksEg standardBackground" alt="Crypto Punks2"/></td>
                          </tr>
                          <tr>
                            <th scope="row">Silver Background</th>
                            <td>8</td>
                            <td><img src="/punks2/img/image267.png" className="punksEg silverBackground" alt="Crypto Punks2"/></td>
                          </tr>
                          <tr>
                            <th scope="row">Gold Background</th>
                            <td>4</td>
                            <td><img  src="/punks2/img/image1713.png" className="punksEg goldBackground" alt="Crypto Punks2"/></td>
                          </tr>                          
                        </tbody>
                    </table>

                    <h4>ATTRIBUTES</h4>
                    <table className="table table-dark">
                        <thead>
                          <tr>
                            <th scope="col">Atrribute</th>
                            <th scope="col">#</th>
                            <th scope="col">E.g.</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr><th scope="row">Red Lipstick</th><td>943</td><td><img src="/punks2/img/image63.png" className="punksEg standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Left Earring</th><td>2468</td><td><img  src="/punks2/img/image473.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Messy Hair</th><td>534</td><td><img  src="/punks2/img/image218.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Space Helmet</th><td>302</td><td><img  src="/punks2/img/image192.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Nose Ring</th><td>5036</td><td><img  src="/punks2/img/image487.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Square shades</th><td>1627</td><td><img  src="/punks2/img/image3040.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Thin Hair</th><td>711</td><td><img  src="/punks2/img/image3081.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Cig</th><td>2422</td><td><img  src="/punks2/img/image8345.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Purple Lipstick</th><td>852</td><td><img  src="/punks2/img/image444.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Asian Eyes</th><td>1766</td><td><img  src="/punks2/img/image246.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Pony Tails</th><td>570</td><td><img  src="/punks2/img/image417.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Sun Glasses</th><td>1662</td><td><img  src="/punks2/img/image8313.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Right Earring</th><td>2533</td><td><img  src="/punks2/img/image1000.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Regular Beard</th><td>531</td><td><img  src="/punks2/img/image580.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Tinfoil hat</th><td>188</td><td><img  src="/punks2/img/image182.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Chinmask</th><td>2435</td><td><img  src="/punks2/img/image8130.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Teeth Smile</th><td>2208</td><td><img  src="/punks2/img/image356.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Two Earrings</th><td>2446</td><td><img  src="/punks2/img/image472.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Mutttonchops Black</th><td>541</td><td><img  src="/punks2/img/image600.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Smile</th><td>2545</td><td><img  src="/punks2/img/image587.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Facemask</th><td>2483</td><td><img  src="/punks2/img/image8126.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Brown Beard</th><td>597</td><td><img  src="/punks2/img/image7.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Emo Hair</th><td>1035</td><td><img  src="/punks2/img/image3201.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Round Eyes</th><td>1692</td><td><img  src="/punks2/img/image35.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Blonde Hair</th><td>526</td><td><img  src="/punks2/img/image526.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Mustache-Beard</th><td>567</td><td><img  src="/punks2/img/image274.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Purple Hair</th><td>1041</td><td><img  src="/punks2/img/image217.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Yellow Glasses</th><td>1574</td><td><img  src="/punks2/img/image2996.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Bald</th><td>738</td><td><img  src="/punks2/img/image3252.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Red Fuzz</th><td>1026</td><td><img  src="/punks2/img/image3254.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Mustache</th><td>596</td><td><img  src="/punks2/img/image501.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Bubble Hair</th><td>763</td><td><img  src="/punks2/img/image3392.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Black Lipstick</th><td>923</td><td><img  src="/punks2/img/image126.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Pink Spikes</th><td>1062</td><td><img  src="/punks2/img/image8264.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Red Mahwak</th><td>755</td><td><img  src="/punks2/img/image8263.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Green Mahawk</th><td>1051</td><td><img  src="/punks2/img/image8186.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                            <tr><th scope="row">Muttonchops</th><td>495</td><td><img src="/punks2/img/image6356.png" className="punksEg  standardBackground" alt="Crypto Punks2"/></td></tr>
                        </tbody>
                    </table>
                </div>
                

                <div className="text-center mt-4">
                    <a className="btn btn-l btn-primary" href="https://discord.gg/n5Dt3ukZdy" target="_blank" rel="noreferrer">
                        <i className="fab fa-discord me-2"></i>
                        JOIN DISCORD
                    </a>
                    <a className="btn btn-l btn-primary" href="https://t.me/CryptoPunks2021" target="_blank" rel="noreferrer">
                        <i className="fab fa-telegram me-2"></i>
                        JOIN TELEGRAM
                    </a>
                </div>

            </div>
        </section>


        <section className="page-section bg-secondary text-white mb-0" id="howto">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-white">HOW TO MINT</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-2 ">&nbsp;</div>
                    <div className="col-lg-8 " style={{textAlign: "left"}}>
                        <p className="lead">
                            1. <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank" rel="noreferrer">
                                Install MetaMask on Chrome</a>. Set up a wallet with a new seed phrase.<br/>
                            <br/>
                            2. Add the Matic Mainnet to your MetaMask wallet... 
                            <a href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/" target="_blank" rel="noreferrer">
                            How to setup Matic on Metamask</a>.<br/>
                            <br/>
                            3. Add funds to your Matic Wallet. You can do this swapping Ethereum to Matic using the Matic Bridge. If your MetaMask ETH wallet is empty, you can buy Ethereum on Coinbase or Trust Wallet and send some to your MetaMask address.<br/>
                            <br/>
                            4. Got MATIC in your Matic wallet and you're ready to MINT some PUNKS! Start <a href="/">minting here</a>.<br/>

                        </p>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <a className="btn btn-l btn-primary" href="https://discord.gg/n5Dt3ukZdy" target="_blank" rel="noreferrer">
                        <i className="fab fa-discord me-2"></i>
                        JOIN DISCORD
                    </a>
                    <a className="btn btn-l btn-primary" href="https://t.me/CryptoPunks2021" target="_blank" rel="noreferrer">
                        <i className="fab fa-telegram me-2"></i>
                        JOIN TELEGRAM
                    </a>
                </div>

            </div>
        </section>


        <section className="page-section bg-primary text-white" id="referrals">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-light mb-0">REFERRAL PROGRAM</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <div className="row" style={{textAlign: "left"}}>
                            <div className="col-lg-6 ms-auto">
                                - Earn 10% MATIC from every Punk MINTED!
                            </div>
                            <div className="col-lg-6 me-auto">
                                - Paid instantly to your wallet, uncapped*!
                            </div>
                        </div>
                        
                        <div className="text-center mt-4" id="prepare2">
                            <a className="btn btn-l btn-primary" href="/#" id="walletConnect" >
                                <i className="fas fa-wallet me-2"></i>
                                CONNECT WALLET TO START
                            </a>
                        </div>

                        <div className="text-center mt-4 border rounded hide" 
                            style={{backgroundColor: "rgba(100,100,100,0.5)"}}
                            id="connected2">
                            <h4>Your Referral URL</h4>
                            
                            <input id="shareURL" style={{width: "95%",
                            textAlign: "center", marginBottom: "10px", backgroundColor: "bisque", borderRadius: "5px"}}
                            />
                            <br/>
                            Start sharing now... referred MINTs pay you 10% in MATIC!
                        </div>

                        <p>
                            <br/>
                            <i><small>* Referral payments paid at 10% of the MINT price whilst MINTING is open, not valid for resales of NFTs</small></i>
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section className="page-section bg-secondary text-white mb-0" id="win">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-white">WIN PUNKS!</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row">
                    <div className="col-lg-2 ">&nbsp;</div>
                    <div className="col-lg-8 " style={{textAlign: "left"}}>
                        <p className="lead">
                            We are giving away 20 Crypto Punks 2 NFTs to everyone takes part in the MINTING EVENT!
                        </p>
                        <p className="">
                            10 will be awarded to people who MINT a Crypto Punk 2, with the remaining 10 given away to 
                            those who referrer on the most MINTERS!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto lead">
                        <h4>MINTING REWARDS</h4>
                        <p className="" style={{textAlign: "left"}}>
                            - Every Crypto Punk 2 MINTED is one ticket into the NFT Giveaway!<br/>
                            - 10 NFTs will be given away at the end of the MINTING EVENT to the lucky winners!
                        </p>
                    </div>
                    <div className="col-lg-4 me-auto lead">
                        <h4>REFERRAL REWARDS</h4>
                        <p className="" style={{textAlign: "left"}}>
                            - As well as earning 10% MATIC commission on every NFT MINTED, referrers also earn 1 ticket into the 
                            Referral Giveaway!<br/>
                            - At the end of MINTING 10 NFTs will be awarded to the lucky winners!
                        </p>
                        </div>
                </div>
                
                <div className="text-center mt-4">
                    <a className="btn btn-l btn-primary" href="https://discord.gg/n5Dt3ukZdy" target="_blank" rel="noreferrer">
                        <i className="fab fa-discord me-2"></i>
                        JOIN DISCORD
                    </a>
                    <a className="btn btn-l btn-primary" href="https://t.me/CryptoPunks2021" target="_blank" rel="noreferrer">
                        <i className="fab fa-telegram me-2"></i>
                        JOIN TELEGRAM
                    </a>
                </div>

            </div>
        </section>


        <section className="page-section bg-primary text-white" id="roadmap">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-white">ROADMAP</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row" style={{textAlign: "left"}}>
                    <div className="col-lg-2 ">&nbsp;</div>
                    <div className="col-lg-8 ">
                        <p className="lead">
                            Public Minting of Crypto Punks 2 is live on the Polygon MATIC network.
                        </p>
                    </div>
                </div>
                <div className="row" style={{textAlign: "left"}}>
                    <div className="col-lg-4 ms-auto lead" >
                        
                        <h4>STAGE 1</h4>
                        <p className="">
                            - The first 2500 PUNKS2 available for Minting at just 10 MATIC each!<br/>
                            - Limit of 500 PUNKS2 per transaction!<br/>
                            - Available for re-sale immediately on OpenSea, Lootex and more!
                        </p>
                    </div>
                    <div className="col-lg-4 me-auto lead">
                        <h4>STAGE 3</h4>
                        <p className="">
                            - Next batch of 2500 PUNKS2 available for Minting at 40 MATIC each!<br/>
                        </p>
                    </div>
                </div>

                <div className="row" style={{textAlign: "left"}}>
                    <div className="col-lg-4 ms-auto lead" 
                        style={{borderRadius:"20px", backgroundColor: "#d9a557"}}>
                        <h4>STAGE 2 ~ In Progress!</h4>
                        <p className="">
                            - Second batch of 2500 PUNKS2 available for Minting at 20 MATIC each!<br/>
                            <br/>
                            <span style={{borderRadius:"20px", backgroundColor: "#d9a557", padding: "5px"}}>
                                NEW ROADMAP ITEM ~ launch of <a href="https://pbucks.finance">$PBUCKS</a>
                            </span>
                        </p>
                    </div>
                    <div className="col-lg-4 me-auto lead">
                        <h4>STAGE 4</h4>
                        <p className="">
                            - Final batch 2500 PUNKS2 available for Minting at 80 MATIC each!<br/>
                        </p>
                    </div>
                </div>

                <div className="row" style={{textAlign: "left"}}>
                    <div className="col-lg-2 ">&nbsp;</div>

                    <div className="col-lg-8 lead">
                        <hr/>
                        
                        <h4>POST LAUNCH</h4>
                        <img alt="" src="assets/img/pbucks-logo-light.png"/><br/>

                        <img src="assets/img/pbucks-icon.png" width="150" alt="pbucks - currency of Crypto Punks 2"
                        style={{maxWidth: "596px", float: "right"}}/>
                        <p className="lead">
                            The future is bright for Crypto Punks 2 ~ our dev team is constantly working away to progress the whole PUNKS2 MetaVerse!
                        </p>
                        <p>
                            First up we will be launching $PBUCKS ~ the currency of the PUNKS2 metaverse.  
                        </p>
                        <p>
                            $PBUCKS will open with a Pre-Sale event soon, along with an AIRDROP for all holders of PUNKS2 NFTs!  Every PUNKS2 NFT you earn will 
                            entitle you to an AIRDROP allocation of $PBUCKS ~ even if you don't hold a PUNKS2 NFT you can participate in the $PBUCKS pre-sale event!
                        </p>
                        <p>
                            Find out more at: <a href="https://pbucks.finance">pbucks.finance</a>
                        </p>

                        <h4>
                            Crypto Punks 2 - The Metaverse development!
                        </h4>
                        <p>
                            The Cyrpto Punk 2 NFT metaverse is a onchain game for both Crypto Punks 2 and other Punk collections!  It will 
                            allow you to play with your own NFTs but also rent(loan) other players NFT Punks too!
                        </p>
                        <p>
                            More news to follow soon ~ this is just a small tease of what we have in development!
                        </p>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <a className="btn btn-l btn-primary" href="https://discord.gg/n5Dt3ukZdy" target="_blank" rel="noreferrer">
                        <i className="fab fa-discord me-2"></i>
                        JOIN DISCORD
                    </a>
                    <a className="btn btn-l btn-primary" href="https://t.me/CryptoPunks2021" target="_blank" rel="noreferrer">
                        <i className="fab fa-telegram me-2"></i>
                        JOIN TELEGRAM
                    </a>
                </div>

            </div>
        </section>


        <footer className="footer text-center">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <p className="lead mb-0">
                            &nbsp;
                        </p>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Our Socials</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://t.me/CryptoPunks2021" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-telegram"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/cryptopunks2021" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://discord.gg/n5Dt3ukZdy" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-discord"></i></a>
                    </div>

                    <div className="col-lg-4">
                        <p className="lead mb-0">
                            &nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </footer>

        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; 2021 Crypto Punks 2<br/>
                Crypto Punks 2 is not affiliated with the original Crypto Punks from Lava Labs but is an evolution of the initial concept</small></div>
        </div>

      </div>
    );
  }
}

export default App;
