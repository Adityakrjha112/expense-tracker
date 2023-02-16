import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background-color: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;
  }
`;
const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  align-items: center;
  font-weight: normal;
  width: 100%;
  justify-content: space-between;
  border: 1px solid #e6e8e9;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;
const TransactionCell = (props) => {
  // console.log(props.payload.desc);
  return (
    <Cell isExpense={props.payload?.type === "EXPENSE"}>
      <span>{props.payload.desc}</span>
      <span>₹{props.payload.amount}</span>
    </Cell>
  );
};

function TransactionsComponent(props) {
  // const [filter, updateFilter] = useState(props.transaction);
  // const [serach, updateSerach] = useState("");
  // const filterData = (serach) => {
  //   if (!serach || !serach.trim().length) {
  //     updateSerach(props.transaction);
  //     return;
  //   }
  //   let txn = [...props.transaction];
  //   txn = txn.filter((payload) =>
  //     payload.desc.toLowerCase().includes(serach.toLowerCase().trim()),
  //   );
  //   updateFilter(txn);
  // };
  // useEffect(() => {
  //   filterData(serach)
  // }, [props.transaction]);
  return (
    <>
      <Container>
        Transactions
        {/* <input
          type="text"
          placeholder="Search"
          value={serach}
          onChange={(e) => {
            updateSerach(e.target.value);
            filterData(e.target.value);
          }}
        /> */}
        {props.transaction?.length
          ? props.transaction.map((payload) => <TransactionCell payload={payload} />)
          : ""}
          
      </Container>
    </>
  );
}

export default TransactionsComponent;
