import * as Yup from "yup";

export const validationSchemaForBanksManagementPage = Yup.object().shape({
    bankName: Yup.string().required("Field is Required!"),
    interestRate: Yup.number().required("Field is Required!"),
    maximumLoan: Yup.number().required("Field is Required!"),
    minimumDownPayment: Yup.number(),
    loanTerm: Yup.number().required("Field is Required!"),
});

export const validationSchemaForBanksCalculatePage = Yup.object().shape({
    initialLoan: Yup.number().required("Field is Required!"),
    downPayment: Yup.number().required("Field is Required!"),
    bankId: Yup.string().required("Field is Required!"),
});
