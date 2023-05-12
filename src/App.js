import './App.css';
import StarsIcon from '@mui/icons-material/Stars';
import img from './images/img1.jpg';
function App() {
  return (
    <div className="wrapper">
      <div className="top-wrapper">
        <div className="main-text">
          <h1>10,000+ of our users love our products.</h1>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </div>
        <div className="ratings">
          <div className="rating rating-1">
            <div className="stars">
              
              <StarsIcon/><StarsIcon/><StarsIcon/><StarsIcon/><StarsIcon/>
            </div>
            <div class="text">Rated 5 Stars in Reviews</div>
          </div>
          <div className="rating rating-2">
            <div className="stars">
            <StarsIcon/><StarsIcon/><StarsIcon/><StarsIcon/><StarsIcon/>
            </div>
            <div className="text">Rated 5 Stars in Report Guru</div>
          </div>
          <div className="rating rating-3">
            <div className="stars">
            <StarsIcon/><StarsIcon/><StarsIcon/><StarsIcon/><StarsIcon/>
            </div>
            <div className="text">Rated 5 Stars in BestTech</div>
          </div>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="buyer buyer-1">
          <img src={img} alt="" />
          <h5>
            Colton Smith<br /><span className="verified">Verified Buyer</span>
          </h5>
          <div className="buyer-feedback">
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </div>
        </div>
        <div className="buyer buyer-2">
          <img src={img} alt="" />
          <h5>
            Irene Roberts<br /><span class="verified">Verified Buyer</span>
          </h5>
          <div className="buyer-feedback">
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </div>
        </div>
        <div className="buyer buyer-3">
          <img src={img} alt="" />
          <h5>
            Anne Wallace<br /><span class="verified">Verified Buyer</span>
          </h5>
          <div className="buyer-feedback">
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
