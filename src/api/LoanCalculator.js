export const calculateLoan = async (amount, interestRate, months) => {
    const response = await fetch('http://localhost:5000/api/loan-calculator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: parseFloat(amount),
        interestRate: parseFloat(interestRate) / 100, // Percentage to decimal
        months: parseInt(months),
      }),
    });
  
    const data = await response.json();
    return data.monthlyPayment;
  };
  