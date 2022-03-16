function Form({ url, handleSubmit, handleChange }) {
  return (
    <form className="form-url grid gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="url"
        placeholder="Enter your URL"
        className="px-3 py-4 text-black rounded-md"
        value={url}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-violet-700 text-black-700 font-semibold py-4 px-10 rounded-md"
      >
        Shorten
      </button>
    </form>
  );
}

export default Form;
