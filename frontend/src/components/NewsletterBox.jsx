// ✅ This is the file that defines the NewsletterBox component

import React, { useState } from "react";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // sample logic
    console.log("Email submitted:", email);
  };

  return (
    <div>
      <h2>Subscribe to Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

// ✅ Exporting the component as default
export default NewsletterBox;
