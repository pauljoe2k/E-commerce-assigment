import React, { useState } from "react";

const AddressCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState({
    address1: "123 Main Street",
    address2: "Apt 4B",
    zipCode: "62704",
    buildingType: "Home",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Address updated successfully!");
  };

  const handleDelete = () => {
    alert("Address deleted!");
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>Address Details</h3>
      </div>
      <div>
        {isEditing ? (
          <div style={styles.form}>
            <label style={styles.label}>
              Address 1:
              <input
                type="text"
                name="address1"
                value={address.address1}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Address 2:
              <input
                type="text"
                name="address2"
                value={address.address2}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Zip Code:
              <input
                type="text"
                name="zipCode"
                value={address.zipCode}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Building Type:
              <select
                name="buildingType"
                value={address.buildingType}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="School">School</option>
                <option value="Workplace">Workplace</option>
              </select>
            </label>
            <div style={styles.actions}>
              <button style={styles.saveButton} onClick={handleSave}>
                Save
              </button>
              <button
                style={styles.cancelButton}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p style={styles.field}>
              <strong>Address 1:</strong> {address.address1}
            </p>
            <p style={styles.field}>
              <strong>Address 2:</strong> {address.address2}
            </p>
            <p style={styles.field}>
              <strong>Zip Code:</strong> {address.zipCode}
            </p>
            <p style={styles.field}>
              <strong>Building Type:</strong> {address.buildingType}
            </p>
            <div style={styles.actions}>
              <button style={styles.editButton} onClick={handleEdit}>
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "16px auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    maxWidth: "400px",
  },
  header: {
    marginBottom: "16px",
    textAlign: "center",
  },
  field: {
    margin: "8px 0",
    fontSize: "16px",
    color: "#333",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    marginTop: "5px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  select: {
    marginTop: "5px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
  },
  editButton: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  saveButton: {
    backgroundColor: "#28A745",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddressCard;
