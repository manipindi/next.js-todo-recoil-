import { usdValAtom } from "@/recoil/atom/currency-convert/convertAtom";
import { inrValSelector } from "@/recoil/selector/currency-convert/convertSelector";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";

export default function CurrencyConverter() {
  const [usdVal, setUSD] = useRecoilState(usdValAtom);
  const [inrVal, setINRVal] = useRecoilState(inrValSelector);

  const handleTodoChange = (e: any) => {
    setUSD(e.target.value);
  };

  const handleINRChange = (e: any) => {
    setINRVal(e.target.value);
  };

//   console.log(usdVal, "usdVal");
  

  return (
    <div>
      <Form
        style={{ display: "flex", gap: "10px", marginTop: 10, padding: 20 }}
      >
        <Form.Group
          controlId="formBasicEmail"
          style={{ display: "flex", gap: "10px" }}
        >
          <div>
            <Form.Label>USD:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter USD"
              value={usdVal}
              onChange={handleTodoChange}
            />
          </div>
          <div>
            <Form.Label>INR:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter INR"
              value={inrVal}
              onChange={handleINRChange}
            />
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
