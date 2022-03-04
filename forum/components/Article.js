import Card from "react-bootstrap/Card"

export default function Article({ article }) {
  return (
    <Card bg="grey" text="black" style={{ marginTop: "15px" }}>
      <Card.Body>
        <Card.Title><a href={`/article?id=${article._id}`} style={{ textDecoration: "none", color: "#C73866" }}>{article.title}</a></Card.Title>
        <Card.Text>{article.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
