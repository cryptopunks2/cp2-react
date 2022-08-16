import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { ethers } from "ethers";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LineProgressBar,AnimatedLineProgressBar  } from '@frogress/line'
import '@splidejs/react-splide/css';



function LatestMintsScroller(props) {

    const LATEST_MINTS_URL = "https://api.cryptopunks2.com/punks2/latest";

    const [latestMints, setLatestMints] = useState([Object]);
    const [hasLatestMints, setHasLatestMints] = useState(Boolean);
    const [marketingMinted, setMarketingMinted] = useState(Number);
    const [mintsRemaining, setMintsRemaining] = useState(Number);
    const [mintingPhase, setMintingPhase] = useState(Number);

    let mintingProgress = 77;

    useEffect(() => {
        
        const  getLatestMints= async ()=> {
          // needs error handling for connection failure
            try{
              const { data } = await axios.get(LATEST_MINTS_URL);
              setLatestMints(data);
              setHasLatestMints(true);
              
              
              
            }catch(e){
              console.log("ERROR - NO NET", e);    
            }
        };
        getLatestMints();

        const getMarketingMints = async() => {
            let _res = await props.contract.currentMarketingMints();
            setMarketingMinted(Number(_res.toString()));

        }

        const getMintsRemaining = async() => {
            let _res = await props.contract.mintsRemaining();
            setMintsRemaining(Number(_res.toString()));
        }

        getMarketingMints();
        getMintsRemaining();

        let tokens_minted = 10000 - (mintsRemaining + marketingMinted);

console.log("MINTED:", tokens_minted);

        if(tokens_minted <= 2500) {

            //if(!countDownStart){
            //    countDownStart = true;
            //    startCountDown(2500 - (tokens_minted));
            //}
            setMintingPhase(1);
            //$('#stageID').html("1");
        } else {
            if(tokens_minted <= 5000){
                
                /*
                //progress_end = ((1 - ((_res.toString()-2500)/2500)) * 100).toFixed(0);
                progress_end = ((tokens_minted-2500)/2500 * 100).toFixed(0);
                //console.log("PROGRESS END:", progress_end, _res.toString());
                startFullProgress();
                
                $('#stageID').html("2");
                if(!countDownStart){
                    countDownStart = true;
                    startCountDown(5000 - (tokens_minted));
                }
                */
                setMintingPhase(2);
            } else {
                if(tokens_minted<= 7500) {

                    /*
                    progress_end = ((tokens_minted-5000)/2500 * 100).toFixed(0);
                    startFullProgress();

                    $('#stageID').html("3");
                    if(!countDownStart){
                        countDownStart = true;
                        startCountDown(7500 - (tokens_minted));
                    }
                    */
                    setMintingPhase(3);
                } else {
                    
                    /*
                    progress_end = ((tokens_minted-7500)/2500 * 100).toFixed(0);
                    startFullProgress();

                    $('#stageID').html("4");
                    if(!countDownStart){
                        countDownStart = true;
                        startCountDown(10000 - (tokens_minted));
                    }
                    */
                    setMintingPhase(4);
                }
            }
        }
        

    }, [props]);

    const viewPunk = ((punkID) => {
        console.log("CLICK:", punkID);
        window.open("/punks2/?id=" + punkID,"_self")
    });
   
    const articleList = (() => {
        let articles = [];
        for(let i =0; i< props.articles; i++) {
            if(hasLatestMints) {
                if(latestMints.latestMints.length > i) {

                    let articleStyle = {
                        background: "#" + latestMints.latestMints[i].bg + " url('/punks2/img/image" + latestMints.latestMints[i].tokenid + ".png') center 10px/50px no-repeat",
                        border: "solid 2px black",
                        minWidth: '100px'
                      };

                    articles.push(<SplideSlide className="article" id={"article" + i} 
                            style={articleStyle}
                            onClick={() => viewPunk(latestMints.latestMints[i].tokenid)}
                            key={"article" + i} 
                            tokenid={latestMints.latestMints[i].tokenid}>
                        <div className="caption" id={"article" + i + "caption"} >
                                {"#" + latestMints.latestMints[i].tokenid}
                        </div>
                        </SplideSlide>)
                } else {
                    articles.push(<SplideSlide id={"article" + i} key={"article" + i} tokenid="0"><div className="caption" id={"article" + i + "caption"}></div></SplideSlide>)
                }
            } else {

            }
            
        }
        return articles;
    });
    
    const articleOptions = {
        type         : 'loop',
        perPage      : 20,
        perMove      : 1,
        gap          : '5px',
        autoplay     : true,
        pauseOnHover : true,
        resetProgress: false,
        height       : '100px',
        interval     : 1000,
        fixedWidth   : '100px',
        pagination   : false,
      };

      
      const ProgressLabel = ({ percent }) => <div className="progressLabel">{percent}% SOLD OUT!</div>;

    return(
        <div>
            <div className="row ajustify-content-center" >
                <center>
                    <img src="assets/img/cryptopunks2-logo-new-dark.png" width="80%" alt="Crypto Punks 2 for Polygon"/>
                    
                    <h5 style={{color: "black"}}>PHASE <span id="stageID">{mintingPhase}</span> NOW OPEN!</h5>
                    
                    <span style={{fontSize: "10pt"}}>
                    A unique collection of 10000 punks for new NFT generation ~ new designs, new rarity, new attributes!!
                </span>
                    <br/>

                    <h5>MINTING PROGRESS: <span id="mintingCount"></span></h5>
                    <div id="pb1">
                        <div id="percent1" style={{columns: 1}}>
                            <div style={{textAlign: "center", width: "100%"}}>
                                PHASE 2 PROGRESS
                            </div>
                        </div>
                    </div>
                    
                </center>
            </div>

            <AnimatedLineProgressBar
                label={(mintingProgress) => <ProgressLabel percent={mintingProgress} />}
                height={36}
                percent={mintingProgress}
                transition={{ easing: 'circOut' }}
                />

            <h6>Latest Punks Minted:</h6>


            <Splide options={articleOptions} aria-label="My Favorite Images">
                {articleList()}
            </Splide>
        </div>
    );

}

export default LatestMintsScroller;