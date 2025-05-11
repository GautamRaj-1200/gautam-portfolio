import React, { useState, useEffect } from "react";
import axios from "axios";

const SpotifyDashboard = () => {
  const [spotifyData, setSpotifyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Update this to your deployed backend URL
  const BACKEND_URL = "https://spotify-portfolio-production.up.railway.app";

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/spotify`);
        setSpotifyData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data || err.message);
        setLoading(false);
      }
    };

    fetchSpotifyData();
  }, []);

  if (loading) {
    return <div>Loading Spotify data...</div>;
  }

  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <pre>{JSON.stringify(error, null, 2)}</pre>
        {error.login_url && (
          <div>
            <a href={`${BACKEND_URL}${error.login_url}`}>Login to Spotify</a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2>Spotify Data</h2>
      <pre style={{ textAlign: "left", overflowX: "auto" }}>
        {JSON.stringify(spotifyData, null, 2)}
      </pre>
    </div>
  );
};

export default SpotifyDashboard;
