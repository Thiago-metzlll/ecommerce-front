import React from "react";

export default function SupplierCard({ supplier, onDelete, onUpdate }) {
  const [editing, setEditing] = React.useState(false);
  const [form, setForm] = React.useState(supplier);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSave() {
    await onUpdate(form.id, form);
    setEditing(false);
  }

  return (
    <div className="supplier-card">
      {editing ? (
        <div className="edit-form">
          <input name="name" value={form.name} onChange={handleChange} />
          <input name="email" value={form.email} onChange={handleChange} />
          <input name="city" value={form.city} onChange={handleChange} />
          <button onClick={handleSave}>Salvar</button>
          <button onClick={() => setEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <>
          <div>
            <h3>{supplier.name}</h3>
            <p>{supplier.email}</p>
            <p>{supplier.city}</p>
          </div>
          <div className="card-buttons">
            <button onClick={() => setEditing(true)}>Editar</button>
            <button onClick={onDelete}>Excluir</button>
          </div>
        </>
      )}
    </div>
  );
}
