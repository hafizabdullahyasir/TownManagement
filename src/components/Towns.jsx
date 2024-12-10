import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Towns = () => {
  const [towns, setTowns] = useState(() => {
    const savedTowns = localStorage.getItem("towns");
    return savedTowns ? JSON.parse(savedTowns) : [];
  });
  const [newTown, setNewTown] = useState({ id: "", name: "" });

  useEffect(() => {
    localStorage.setItem("towns", JSON.stringify(towns));
  }, [towns]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTown({ ...newTown, [name]: value });
  };

  const handleAddTown = () => {
    if (!newTown.id || !newTown.name) {
      alert("Please provide both ID and Name for the town.");
      return;
    }
    if (towns.some((town) => town.id === parseInt(newTown.id))) {
      alert("Town with this ID already exists.");
      return;
    }
    setTowns([...towns, { id: parseInt(newTown.id), name: newTown.name }]);
    setNewTown({ id: "", name: "" });
  };

  const handleDeleteTown = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this town?"
    );
    if (confirmDelete) {
      const updatedTowns = towns.filter((town) => town.id !== id);
      setTowns(updatedTowns);
    }
  };

  return (
    <div className="bg-blue-600 min-h-screen">
      <div className="bg-blue-600">
        <Navbar />
      </div>
      <h1 className="text-3xl text-center font-Montserrat font-bold mb-6 text-white mt-5">
        Manage Towns
      </h1>

      {/* Form to add a new town */}
      <div className="bg-white shadow-lg rounded-md p-6 mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-Montserrat font-bold mb-4 text-gray-900">
          Create Town
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="number"
            name="id"
            value={newTown.id}
            onChange={handleChange}
            placeholder="Town ID"
            className="flex-1 border font-Montserrat font-bold border-gray-300 p-2 rounded-md focus:outline-blue-600"
          />
          <input
            type="text"
            name="name"
            value={newTown.name}
            onChange={handleChange}
            placeholder="Town Name"
            className="flex-1 border font-Montserrat font-bold border-gray-300 p-2 rounded-md  focus:outline-blue-600"
          />
          <button
            onClick={handleAddTown}
            className="bg-blue-500 text-white px-4 py-2 font-Montserrat font-bold rounded-md hover:bg-blue-700 transition"
          >
            Add Town
          </button>
        </div>
      </div>

      {/* Display the list of towns */}
      <div className="max-w-4xl mx-auto">
        {towns.length === 0 ? (
          <p className="text-center font-Montserrat font-bold text-white">
            No Towns Added Yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-5">
            {towns.map((town) => (
              <div
                key={town.id}
                className="bg-blue-50 p-6 rounded-md shadow-white hover:shadow-2xl transition text-center text-blue-600  font-Montserrat font-bold"
              >
                <div className="text-lg">{town.name}</div>
                <div className="text-sm text-gray-800">ID: {town.id}</div>
                <button
                  onClick={() => handleDeleteTown(town.id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 font-Montserrat font-bold rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Towns;
