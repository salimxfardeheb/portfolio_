'use client'
import { useState, useEffect } from "react";

const page = () => {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("operationSuccess") === "true") {
      setMessage(true);
      localStorage.removeItem("operationSuccess"); // Nettoyer après affichage
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem("operationSuccess", "true");
    window.location.reload(); // Recharge la page
  };

  return (
    <div>
      <button onClick={handleClick} className="bg- bg-redOrange">Exécuter l'opération</button>
      {message && <p style={{ color: "green" }}>L'opération a été exécutée avec succès !</p>}
    </div>
  );
}

export default page;
