export const calculator = (calcData) => {
    const {bankName, downPayment, id, initialLoan, interestRate, loanTerm} = calcData
    const p = initialLoan - downPayment;
    const i = (interestRate / 100) / 12;
    const n = loanTerm;
    const x = Math.pow((1 + i), n);
    const m = Number(p * ((i * x) / (x - 1))).toFixed(2);
    return {bankName, downPayment, id, initialLoan, interestRate, loanTerm, monthlyPayment: m}
}
