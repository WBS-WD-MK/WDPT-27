import { useState } from 'react';
import { toast } from 'react-toastify';

const RequestForm = ({ messages, setMessages, setTotalRequests }) => {
  const [loading, setLoading] = useState(false);
  const [{ message, stream }, setFormState] = useState({
    message: '',
    stream: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!message) return alert('Please enter a message.');
      const newMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        content: message,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setFormState((prev) => ({ ...prev, message: '' }));
      const headers = new Headers();
      headers.append('provider', import.meta.env.VITE_AI_PROVIDER);
      headers.append('mode', import.meta.env.VITE_OPENAI_PROXY_MODE);
      headers.append('Authorization', import.meta.env.VITE_OPENAI_API_TOKEN);
      headers.append('Content-Type', 'application/json');
      const res = await fetch(`${import.meta.env.VITE_OPENAI_PROXY}/api/v1/chat/completions`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          model: import.meta.env.VITE_AI_MODEL,
          messages: [...messages, newMessage],
          stream,
        }),
      });
      if (stream) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder('utf-8');

        let result = false;
        const newMessageId = crypto.randomUUID();

        while (!(result = await reader.read()).done) {
          const chunk = decoder.decode(result.value, { stream: true });
          const lines = chunk.split('\n');

          lines.forEach((line) => {
            if (line.startsWith('data:')) {
              const jsonStr = line.replace('data:', '');
              const data = JSON.parse(jsonStr);
              const content = data.choices[0]?.delta?.content;

              if (content) {
                setMessages((prev) => {
                  const isMessageAlreadyAdded = prev.find((m) => m.id === newMessageId);
                  if (isMessageAlreadyAdded)
                    return prev.map((m) =>
                      m.id === newMessageId ? { ...m, content: `${m.content}${content}` } : m,
                    );

                  return [...prev, { id: newMessageId, role: 'assistant', content }];
                });
              }
            }
          });
        }
      } else {
        const { message } = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            ...message,
          },
        ]);
      }
      setTotalRequests((prev) => prev + 1);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='label cursor-pointer flex justify-end gap-2'>
        <span className='label-text'>Stream response?</span>
        <input
          type='checkbox'
          name='stream'
          checked={stream}
          onChange={handleChange}
          className='checkbox'
        />
      </label>
      <div className='flex items-center gap-2'>
        <textarea
          name='message'
          value={message}
          rows='2'
          onChange={handleChange}
          placeholder='Ask me anything...'
          className='w-full textarea textarea-bordered'
          disabled={loading}
        ></textarea>
        <button type='submit' className='btn btn-primary btn-circle' disabled={loading}>
          {loading ? (
            <span className='loading loading-spinner'></span>
          ) : (
            <span role='img' aria-label='sparkles'>
              ✨
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default RequestForm;
