export const calculator = (calcData) => {
    const {bankName, downPayment, id, initialLoan, interestRate, loanTerm} = calcData
    const p = initialLoan;
    const r = interestRate;
    const n = loanTerm;
    const m = Number(((p * (r / 12)) * Math.pow((1 + (r / 12)), n) / (Math.pow((1 + (r / 12)), n) - 1)).toFixed(2))
    return {bankName, downPayment, id, initialLoan, interestRate, loanTerm, monthlyPayment: m}
}