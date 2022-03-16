import { useState } from "react";

import { postOriginalUrl } from "../api/api";
import Section from "../shared/Section";
import Form from "../components/Form";
import Result from "../components/Result";

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
    setIsError(false);
    setIsLoading(false);
    setErrorMessage("");
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <Section>
      <div className="max-w-screen-md w-11/12">
        <h2 className="mb-7 text-4xl md:text-5xl font-bold">
          The <span className="text-violet-700 font-extrabold">shorter, </span>
          the
          <span className="text-violet-700 font-extrabold"> better.</span>
        </h2>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} />
        <Result
          isError={isError}
          errorMessage={errorMessage}
          shortenedUrl={shortenedUrl}
        />
      </div>
    </Section>
  );
}

export default Home;
