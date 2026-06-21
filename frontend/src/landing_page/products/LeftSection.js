import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return( 
    <div className="container">
        <div className="row">
            <div className="col-6 p-3">
                <img src={imageURL}/>
            </div>
            <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDiscription}</p>
                <div>
                    <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} style={{marginLeft:"80px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="mt-1">
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>

                    <a href={appStore} style={{marginLeft:"30px"}}><img src="media/images/appstoreBadge.svg"/></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
