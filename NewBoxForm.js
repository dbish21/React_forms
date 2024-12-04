import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  // ... form render with inputs for width, height, backgroundColor
}

export default NewBoxForm; 