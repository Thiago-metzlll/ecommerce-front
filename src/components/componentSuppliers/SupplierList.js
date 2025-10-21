import React from "react";
import SupplierCard from "./SupplierCard";
import { updateSupplier } from "../../apis/suppliersApi";
import "./SuppliersC.css";


export default function SuppliersList({ suppliers, onDelete, setSuppliers }) {
  async function handleUpdate(id, updatedSupplier) {
    const updated = await updateSupplier(id, updatedSupplier);
    setSuppliers(prev => prev.map(s => (s.id === id ? updated : s)));
  }

  return (
    <div className="suppliers-list">
      {suppliers.map(s => (
        <SupplierCard
          key={s.id}
          supplier={s}
          onDelete={() => onDelete(s.id)}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}
