import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: Montserrat;
  width: 360px;
 `
 // get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
function Home() {
    const [transaction, updateTransaction] = useState(getLocalData());
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);
    // const [item, setItem] = useState(getLocalData());

    const addTranscation = (payload) =>{
        const transactionArray = [...transaction];
        transactionArray.push(payload)
        updateTransaction(transactionArray)
    }
    const calculateBalance = () =>{
      let exp = 0;
      let inc = 0;
      transaction.map((payload)=>{
        payload.type === "EXPENSE" ? (exp = exp + payload.amount) : (inc = inc + payload.amount)
      })
      updateExpense(exp)
      updateIncome(inc)
    }
    useEffect(()=> calculateBalance(), [transaction])
    useEffect(() => {
      localStorage.setItem("mytodolist", JSON.stringify(transaction));
    }, [transaction]);
  return (
    <>
    <Container>
        <OverViewComponent addTranscation={addTranscation} expense={expense} income={income}/>
        <TransactionsComponent transaction={transaction}/>
    </Container>
    </>
  )
}

export default Home
