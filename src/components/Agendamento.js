import './Agendamento.css';

function Agendamento() {
  return (
    <section id="contato" className="agendamento">
      <h2>Agende seu horário</h2>
      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="date" required />
        <input type="time" required />
        <textarea placeholder="Observações (opcional)" />
        <button type="submit">Marcar horário</button>
      </form>
    </section>
  );
}

export default Agendamento;
