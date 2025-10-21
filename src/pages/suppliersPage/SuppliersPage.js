import React, { useEffect, useState } from "react";
import SupplierForm from "../../components/componentSuppliers/SupplierForm"
import SuppliersList from "../../components/componentSuppliers/SupplierList";
import { fetchSuppliers } from "../../apis/suppliersApi";
import "./SuppliersPage.css";

export default function SupliersPage() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchSuppliers();
      setSuppliers(data);
    }
    loadData();
  }, []);

  function handleAdd(newSupplier) {
    setSuppliers((prev) => [...prev, newSupplier]);
  }

  function handleDelete(id) {
    setSuppliers((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <section className="suppliers-page">
      <h1>Fornecedores</h1>
      <SupplierForm onAdd={handleAdd} />
      <SuppliersList suppliers={suppliers} onDelete={handleDelete}  setSuppliers={setSuppliers}
 />
    </section>
  );
}
