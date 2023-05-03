import React from 'react'

const Transaction = () => {
  return (
    <>
      <div className="maintransactionCard">
        <div className="transactionCard">
        <h3>Pledge Without Reward</h3>
        <form action="">
          <input placeholder='ETH 0.1' type="text" />
        </form>
        <p>
        Support the project for no rewards just because it speaks you
        </p>
        <button>Fund Campaign</button>
        </div>
      </div>
    </>
  )
}

export default Transaction