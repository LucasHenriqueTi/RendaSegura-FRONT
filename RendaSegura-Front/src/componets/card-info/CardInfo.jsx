import './CardInfo.css';

const CardInfo = () => {
    return (
         // Classes do Tailwind para o container do card
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">
        Card de Informação
      </h3>
      <p className="text-gray-500 mb-4">
        Este card foi estilizado usando Tailwind CSS e um arquivo CSS dedicado.
      </p>

      {/* Este botão usa uma classe CSS customizada */}
      <button className="card-info-button">
        Saiba Mais
      </button>
    </div>
    )
}

export default CardInfo;