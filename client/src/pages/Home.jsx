import { useState } from "react";

import { postOriginalUrl } from "../api/api";
import Section from "../shared/Section";
import Form from "../components/Form";

function Home() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    // POST request
    const { shortUrl, msg } = await postOriginalUrl(url);

    if (!shortUrl) {
      setIsError(true);
      setErrorMessage(msg);
      setIsLoading(false);
      return;
    }

    setShortenedUrl(shortUrl);
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  if (isLoading) return <h1>loading...</h1>;

  return (
    <Section>
      <div className="max-w-screen-md w-11/12">
        <h2 className="mb-7 text-4xl md:text-5xl font-bold">
          The <span className="text-violet-700 font-extrabold">shorter, </span>
          the
          <span className="text-violet-700 font-extrabold"> better.</span>
        </h2>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} />
        {/* //TODO: add copy to clipboard here */}
        {!isError ? <h4>{errorMessage}</h4> : <h4>{shortenedUrl}</h4>}
      </div>
    </Section>
  );
}

export default Home;
