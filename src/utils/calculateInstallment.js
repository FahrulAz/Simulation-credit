export const calculateInstallment = (otr, dp, duration) => {
  const downPayment = (dp / 100) * otr;
  const principalDebt = otr - downPayment;
  let interestBank = 0;

  if (duration <= 12) {
    interestBank = 0.12;
  } else if (duration > 12 && duration <= 24) {
    interestBank = 0.14;
  } else {
    interestBank = 0.165;
  }

  const totalInterest = principalDebt * interestBank;
  const totalWithInterest = principalDebt + totalInterest;  
  const monthlyInstallment = totalWithInterest / duration;

  return {
    otr: formatNumber(otr),
    downPayment: formatNumber(downPayment),
    duration,
    monthlyInstallment: formatNumber(monthlyInstallment),
  };
};


const formatNumber = (value) => {
  return value ? parseInt(value).toLocaleString("id-ID") : "";
};
