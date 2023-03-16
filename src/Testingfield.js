import React, { useState } from 'react'; 

const Testingfield = () => {
  const [jumlahOtak, setJumlahOtak] = useState(1);
  console.log(jumlahOtak );

  return (
    <div>
      <h1>Otak saya ada: {jumlahOtak}</h1>
      <button onClick={() => setJumlahOtak((prev) => prev + 1)}>tambah otak</button>
    </div>
  );
}
export default Testingfield;