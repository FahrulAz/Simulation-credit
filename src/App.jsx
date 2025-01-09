import React, { useState } from "react";
import InputField from "./components/InputField";
import { calculateInstallment } from "./utils/calculateInstallment";

const App = () => {
  const [otr, setOtr] = useState(240000000);
  const [dp, setDp] = useState(20);
  const [duration, setDuration] = useState(18);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const calculation = calculateInstallment(
      parseFloat(otr),
      parseFloat(dp),
      parseInt(duration)
    );
    setResult(calculation);
  };

  return (
    <div className="max-w-screen h-full rounded-md py-16 px-8 m-10 flex items-center ">
      <div className="w-1/2 ">
        <img
          src="https://cdn.prod.website-files.com/62a3558d1a7510cfd014d40d/67333654041357053d125eee_seller-img-1.webp"
          alt="image-car"
        />
      </div>
      <div className="bg-white p-8 rounded shadow-lg border-2 border-gray-200 w-1/2 ">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Angsuran Calculator
        </h1>

        <InputField
          label="Harga Mobil (OTR)"
          value={otr}
          onChange={setOtr}
          type="text"
          format={true}
        />
        <InputField
          label="Down Payment (%)"
          value={dp}
          onChange={setDp}
          type="number"
        />
        <InputField
          label="Jangka Waktu (bulan)"
          value={duration}
          onChange={setDuration}
          type="number"
        />

        <button
          onClick={handleCalculate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Hitung Angsuran
        </button>

        {result && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
            <p>
              Harga Mobil (OTR): <strong>Rp {result.otr}</strong>
            </p>
            <p>
              Jumlah DP: <strong>Rp {result.downPayment}</strong>
            </p>
            <p>
              Lama Cicilan: <strong>{result.duration} bulan</strong>
            </p>
            <p>
              Angsuran Per Bulan:{" "}
              <strong>Rp {result.monthlyInstallment}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
