import React, { useState } from "react";
import { createSupplier } from "../../../apis/suppliersApi";
import './SupplierForm.css'

export default function SupplierForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", city: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newSupplier = await createSupplier(form);
    onAdd(newSupplier);
    setForm({ name: "", email: "", city: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        name="name"
        placeholder="Nome"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="city"
        placeholder="Cidade"
        value={form.city}
        onChange={handleChange}
      />
      <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded-xl">
        Adicionar
      </button>
    </form>
  );
}
