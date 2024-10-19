import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const emojis = [
  { emoji: "😃", label: "smile" },
  { emoji: "😊", label: "blush" },
  { emoji: "😎", label: "cool" },
  { emoji: "🤩", label: "starstruck" },
  { emoji: "😍", label: "heart eyes" },
];

function Vote() {
  const [counts, setCounts] = useState(Array(emojis.length).fill(0));
  const [biggerIndex, setBiggerIndex] = useState(null);

  useEffect(() => {
    const savedEmojiIndex = localStorage.getItem("winnerEmojiIndex");
    const savedCount = localStorage.getItem("winnerCount");

    if (savedEmojiIndex !== null && savedCount !== null) {
      const updatedCounts = [...counts];
      updatedCounts[parseInt(savedEmojiIndex, 10)] = parseInt(savedCount, 10);
      setCounts(updatedCounts);
      setBiggerIndex(parseInt(savedEmojiIndex, 10));
    }
  }, []);

  function incrementCount(index) {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  }

  function showResults() {
    const maxCount = Math.max(...counts);
    const maxIndex = counts.indexOf(maxCount);

    const isUniqueMax =
      counts.filter((count) => count === maxCount).length === 1;

    if (maxCount > 0 && isUniqueMax) {
      setBiggerIndex(maxIndex);
      localStorage.setItem("winnerEmojiIndex", maxIndex);
      localStorage.setItem("winnerCount", maxCount);
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        className="p-4 shadow-lg"
        style={{ width: "600px", border: "1px solid #ccc" }}
      >
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <strong>Голосування за найкращий смайлик</strong>
          </Card.Title>

          <Row className="text-center mb-4">
            {emojis.map((item, index) => (
              <Col key={index}>
                <span
                  role="img"
                  aria-label={item.label}
                  style={{ fontSize: "2rem", cursor: "pointer" }}
                  onClick={() => incrementCount(index)}
                >
                  {item.emoji}
                </span>
                <div>{counts[index]}</div>
              </Col>
            ))}
          </Row>

          <div className="d-flex justify-content-center mb-4">
            <Button variant="success" onClick={showResults}>
              Show Results
            </Button>
          </div>

          {biggerIndex !== null && (
            <>
              <Card.Text className="text-center">
                <strong style={{ fontSize: "1.5rem" }}>
                  Результати голосування:
                </strong>
              </Card.Text>
              <Card.Text className="text-center">
                <strong>Переможець:</strong>
              </Card.Text>
              <div className="text-center">
                <span
                  role="img"
                  aria-label={emojis[biggerIndex].label}
                  style={{ fontSize: "4rem" }}
                >
                  {emojis[biggerIndex].emoji}
                </span>
                <div>Кількість голосів: {counts[biggerIndex]}</div>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Vote;
