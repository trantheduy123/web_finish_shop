import { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import SliderCarousel from "../components/SliderCarousel";
import Imgnav from "../components/Imgnav";
import BrandLogo from "../components/BrandLogo";

//import data from '../data';
import { Helmet } from "react-helmet-async";
import MessageBox from "./../components/MessageBox";
import Slider from "../components/Slider";
import Advertisement from "../components/Advertisement";
import About from "../components/About";
import Delivery from "../components/Delivery";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen({ theme }) {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  //onst [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Men's</title>
      </Helmet>
      <h1>Online Shopping</h1>
      <Delivery />
      <h1>Big Event</h1>
      <div>
        <Row>
          <Col>
            <SliderCarousel />
          </Col>
          <Col>
            <Advertisement />
          </Col>
        </Row>
      </div>
      
      <h1>Featured Products</h1>
      <div className='products'>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (
          <Row>
            {products.map((item) => (
              <Col key={item.slug} sm={6} md={4} lg={3} className='mb-3'>
                <Product item={item}> </Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
      <Slider />
      <BrandLogo />
      <About />
    </div>
  );
}

export default HomeScreen;
