


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
  const [user, setUser] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    address: {
      dNo: '456',
      street: '123 Main St',
      city: 'Cityville',
      district: 'Districtville',
      state: 'Stateland',
    },
  });

  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});

  const handleEditClick = () => {
    setEditMode(true);
    setEditedData({
      phoneNumber: user.phoneNumber,
      address: { ...user.address },
    });
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setEditedData({});
  };

  const handleSaveClick = () => {
    setUser({
      ...user,
      phoneNumber: editedData.phoneNumber,
      address: { ...editedData.address },
    });
    setEditMode(false);
    setEditedData({});
  };

  const handleInputChange = (e, field) => {
    setEditedData({ ...editedData, [field]: e.target.value });
  };

  const handleAddressInputChange = (e, field) => {
    setEditedData({
      ...editedData,
      address: {
        ...editedData.address,
        [field]: e.target.value,
      },
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h2>Welcome </h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                id="username"
                value={user.username}
                className="form-control"
                style={{ width: '300px' }}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="text"
                id="email"
                value={user.email}
                className="form-control"
                style={{ width: '300px' }}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                value={editMode ? editedData.phoneNumber || '' : user.phoneNumber}
                onChange={(e) => handleInputChange(e, 'phoneNumber')}
                className="form-control"
                style={{ width: '300px' }}
                readOnly={!editMode}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fullAddress" className="form-label">Address:</label>
              {editMode ? (
                <>
                  <div className="mb-2">
                    <label htmlFor="dNo">Door No:</label>
                    <input
                      type="text"
                      id="dNo"
                      value={editedData.address.dNo || ''}
                      onChange={(e) => handleAddressInputChange(e, 'dNo')}
                      className="form-control"
                      placeholder="Door No"
                      style={{ width: '300px' }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="street">Street:</label>
                    <input
                      type="text"
                      id="street"
                      value={editedData.address.street || ''}
                      onChange={(e) => handleAddressInputChange(e, 'street')}
                      className="form-control"
                      placeholder="Street"
                      style={{ width: '300px' }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="city">City:</label>
                    <input
                      type="text"
                      id="city"
                      value={editedData.address.city || ''}
                      onChange={(e) => handleAddressInputChange(e, 'city')}
                      className="form-control"
                      placeholder="City"
                      style={{ width: '300px' }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="district">District:</label>
                    <input
                      type="text"
                      id="district"
                      value={editedData.address.district || ''}
                      onChange={(e) => handleAddressInputChange(e, 'district')}
                      className="form-control"
                      placeholder="District"
                      style={{ width: '300px' }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="state">State:</label>
                    <input
                      type="text"
                      id="state"
                      value={editedData.address.state || ''}
                      onChange={(e) => handleAddressInputChange(e, 'state')}
                      className="form-control"
                      placeholder="State"
                      style={{ width: '300px' }}
                    />
                  </div>
                </>
              ) : (
                <textarea
                  id="fullAddress"
                  value={`${user.address.dNo}, ${user.address.street}, ${user.address.city}, ${user.address.district}, ${user.address.state}`}
                  className="form-control"
                  rows="3"
                  readOnly
                  style={{ width: '300px' }}
                />
              )}
            </div>
            <div className="mb-3">
              {editMode ? (
                <>
                  <button type="button" onClick={handleSaveClick} className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" onClick={handleCancelClick} className="btn btn-secondary ms-2">
                    Cancel
                  </button>
                </>
              ) : (
                <button type="button" onClick={handleEditClick} className="btn btn-info">
                  Edit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;






