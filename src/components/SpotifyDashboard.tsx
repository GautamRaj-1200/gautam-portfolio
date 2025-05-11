import React, { useState, useEffect } from "react";
import axios from "axios";

interface SpotifyError {
  message?: string;
  login_url?: string;
  [key: string]: unknown;
}

const SpotifyDashboard = () => {
  const [spotifyData, setSpotifyData] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<SpotifyError | null>(null);

  const BACKEND_URL = "https://spotify-portfolio-production.up.railway.app";

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/spotify`);
        setSpotifyData(response.data);
        setLoading(false);
      } catch (err: unknown) {
        let parsedError: SpotifyError = { message: "Unknown error" };

        if (axios.isAxiosError(err)) {
          if (typeof err.response?.data === "object") {
            parsedError = err.response.data;
          } else {
            parsedError = { message: err.message };
          }
        }

        setError(parsedError);
        setLoading(false);
      }
    };

    fetchSpotifyData();
  }, []);

  if (loading) {
    return <pre>Loading Spotify data...</pre>;
  }

  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <pre>{JSON.stringify(error, null, 2)}</pre>
        {error.login_url && (
          <a href={`${BACKEND_URL}${error.login_url}`}>Login to Spotify</a>
        )}
      </div>
    );
  }

  return (
    <pre style={{ textAlign: "left", overflowX: "auto" }}>
      {JSON.stringify(spotifyData, null, 2)}
    </pre>
  );
};

export default SpotifyDashboard;
