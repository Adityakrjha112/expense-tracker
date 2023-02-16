import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-size: 16px;
  width: 100%;
`;

const BalanceBox = styled.div`
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AddTranscation = styled.div`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;

const AddTranscationContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  padding: 15px 20px;
  width: 100%;
  margin: 20px;
  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;

const RedioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  & {
    width: unset;
    margin: 0 10px;
  }
`;
const AddTranscationView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  const addTranscation = () => {
    props.addTranscation({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    props.hide();
  };
  return (
    <AddTranscationContainer>
      <input
        placeholder="Add Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Add Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RedioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </RedioBox>
      <AddTranscation onClick={addTranscation}>Add Transaction</AddTranscation>
    </AddTranscationContainer>
  );
};

const ExpenseContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin: 20px;
    width: 100%;
    /* justify-content: space-around; */
`
const ExpenseBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
    padding: 15px 20px;
    width: 135px;
    font-size: 14px;
    & span{
        font-weight: bold;
        font-size: 20px;
        color: ${props=> props.isIncome?'green':'red'};
    }
`
function OverViewComponent(props) {
  const [show, hide] = useState(false);
  return (
    <>
      <Container>
        <BalanceBox>
          Balance: ₹{props.income - props.expense}
          <AddTranscation onClick={() => hide(!show)}>
            {show ? "Cancel" : "ADD"}
          </AddTranscation>
        </BalanceBox>
        {show && (
          <AddTranscationView
            hide={hide}
            addTranscation={props.addTranscation}
          />
        )}
        <ExpenseContainer>
                <ExpenseBox isIncome={false}>
                Expense<span>₹{props.expense}</span>
                </ExpenseBox>
                <ExpenseBox isIncome={true}>
                Income<span>₹{props.income}</span>
                </ExpenseBox>
        </ExpenseContainer>
      </Container>
    </>
  );
}

export default OverViewComponent;
