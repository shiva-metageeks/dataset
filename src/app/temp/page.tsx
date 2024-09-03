"use client";
import React, { useState, useEffect } from "react";
import FolderTree from "../../componenets/FolderTree";

const App: React.FC = () => {
  const [fileData, setFileData] = useState<any>(null);

  useEffect(() => {
    fetch("/file.json")
      .then((response) => response.json())
      .then((data) => setFileData(data))
      .catch((error) => console.error("Error loading file data:", error));
  }, []);

  if (!fileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>File Structure</h1>
      <FolderTree data={fileData} />
    </div>
  );
};

export default App;
