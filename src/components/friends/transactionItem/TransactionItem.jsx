
export const TransactionItem = ({type, amount, currency}) => {
  return (
   <tbody>
    <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
   </tbody>
  )
}
