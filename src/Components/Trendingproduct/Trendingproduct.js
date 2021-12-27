import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Trendingproduct = () => {
    return (
        <div>
            <h1>Trending Products</h1>
            <Row xs={1} md={3} className="g-4">
 
    <Col>
      <Card>
        <Card.Img variant="top" src="/images/pic-1.jpg" />
        <Card.Body>
          <Card.Text>
          Source: L’OrealThis has been one of our go-to drugstore products for years as it’s SO versatile. The super-pigmented creamy formula will instantly illuminate the skin creating a stunning dewy glow. The ultra-lightweight glow drops can be applied alone or added into your foundation to DIY your own glow-enhancing formula. There are two universally flattering shadesa cool or warm tone so you can find the perfect.
          <br />
          <button> Purches </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>


    <Col>
      <Card>
        <Card.Img variant="top" src="/images/pic-2.jpg" />
        <Card.Body>
          <Card.Text>
          Ever since we launched this all over body highlighter, you guys have been obsessed (ditto). The innovative powder is formulated with luminous pearls with a rich satin-like texture that delivers the most radiant glow. Whether you sweep it on for a soft glam vibe or build it up, it melts into the skin and lasts all day long. It might just be one of our favorite Huda Beauty products to date!
          <br />
          <button> Purches </button>

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img variant="top" src="/images/pic-4.jpg" />
        <Card.Body>
          <Card.Text>
          Ever since we created our Glow Coco Hydrating Mist, $25, we’ve been using it daily and it never disappoints. No matter what foundation, highlighter or skincare we use, it always leaves our skin looking hella dewy. Formulated with a refreshing blend of coconut water, milk, and oil, it hydrates and nourishes the skin without feeling greasy or sticky. It’s also great for re-energizing your skin throughout the day.
          <br />
          <button> Purches </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

</Row>

           
        </div>
    );
};

export default Trendingproduct;