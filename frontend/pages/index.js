import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

const Home = () => {
  return (
    <div>
      <section class="jumbotron text-center">
        <Row>
          <Col xs="3">
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Miao Chao</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Chinese Food
                </CardSubtitle>
                <CardText>Featured restaurant.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Miao Chao</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Chinese Food
                </CardSubtitle>
                <CardText>Featured restaurant.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Miao Chao</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Chinese Food
                </CardSubtitle>
                <CardText>Featured restaurant.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Miao Chao</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Chinese Food
                </CardSubtitle>
                <CardText>Featured restaurant.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>
      <Container>
        <Row>
          <Col xs="3">
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Miao Chao</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Chinese Food
                </CardSubtitle>
                <CardText>
                  A little short description about the restaurant.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Miao Chao</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Chinese Food
                </CardSubtitle>
                <CardText>
                  A little short description about the restaurant.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Miao Chao</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Chinese Food
                </CardSubtitle>
                <CardText>
                  A little short description about the restaurant.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Miao Chao</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Chinese Food
                </CardSubtitle>
                <CardText>
                  A little short description about the restaurant.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
