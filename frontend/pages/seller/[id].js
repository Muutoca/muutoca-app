import { useRouter } from 'next/router';

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';

const Seller = (props) => {
  const router = useRouter();

  return (
    <>
      <h1>Seller Page {router.query.id}</h1>
      <Row>
        <Col xs="6" sm="4" style={{ padding: 0 }}>
          <Card style={{ margin: '0 10px' }}>
            <CardImg top={true} style={{ height: 250 }} src="" />
            <CardBody>
              <CardTitle>Seller Name</CardTitle>
              <CardText>Seller Description</CardText>
            </CardBody>
            <div className="card-footer">
              <Button outline color="primary">
                + Add To Cart
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Seller;
