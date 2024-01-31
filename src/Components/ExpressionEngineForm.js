import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ExpressionEngineForm = () => {
  const [rules, setRules] = useState([
    { key: "age", output: { value: 60, operator: ">=", score: 50 } },
  ]);
  const [combinator, setCombinator] = useState("and");

  const handleAddExpression = () => {
    setRules([
      ...rules,
      { key: "", output: { value: 0, operator: ">=", score: 0 } },
    ]);
  };

  const handleDeleteExpression = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRules = [...rules];
    updatedRules[index][field] = value;
    setRules(updatedRules);
  };

  return (
    <Container>
      <Form>
        {rules.map((rule, index) => (
          <Row key={index}>
            <Col>
              <Form.Group controlId={`ruleType-${index}`}>
                <Form.Label>Rule Type</Form.Label>
                <Form.Control
                  as="select"
                  value={rule.key}
                  onChange={(e) =>
                    handleInputChange(index, "key", e.target.value)
                  }
                >
                  <option value="age">Age</option>
                  <option value="credit_score">Credit Score</option>
                  <option value="account_balance">Account Balance</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`operator-${index}`}>
                <Form.Label>Operator</Form.Label>
                <Form.Control
                  as="select"
                  value={rule.output.operator}
                  onChange={(e) =>
                    handleInputChange(index, "output.operator", e.target.value)
                  }
                >
                  <option value=">">{">"}</option>
                  <option value="<">{"<"}</option>
                  <option value=">=">{">="}</option>
                  <option value="<=">{"<="}</option>
                  <option value="=">{"="}</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`value-${index}`}>
                <Form.Label>Value</Form.Label>
                <Form.Control
                  type="number"
                  value={rule.output.value}
                  onChange={(e) =>
                    handleInputChange(index, "output.value", e.target.value)
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`score-${index}`}>
                <Form.Label>Score</Form.Label>
                <Form.Control
                  type="number"
                  value={rule.output.score}
                  onChange={(e) =>
                    handleInputChange(index, "output.score", e.target.value)
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Button
                variant="danger"
                onClick={() => handleDeleteExpression(index)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
        <Form.Group controlId="combinator">
          <Form.Label>Combinator</Form.Label>
          <Form.Control
            as="select"
            value={combinator}
            onChange={(e) => setCombinator(e.target.value)}
          >
            <option value="and">AND</option>
            <option value="or">OR</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleAddExpression}>
          Add Expression
        </Button>
      </Form>
    </Container>
  );
};

export default ExpressionEngineForm;