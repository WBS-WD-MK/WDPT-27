import { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, telephone, message } = form;
    if (!name || !email || !telephone || !message) {
      alert('Please fill the form');
    } else {
      console.log(form);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input name='name' value={form.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input
          type={showPassword ? 'text' : 'password'}
          name='email'
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <button type='button' onClick={() => setShowPassword((prev) => !prev)}>
        show password
      </button>
      <br />
      <label>
        Telephone:
        <input name='telephone' value={form.telephone} onChange={handleChange} />
      </label>
      <br />
      <label>
        Message:
        <textarea name='message' value={form.message} onChange={handleChange} />
        <br />
      </label>
      <button>Submit</button>
    </form>
  );
};
export default Form;
