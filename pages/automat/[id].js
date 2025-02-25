import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const AutomatPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [machine, setMachine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchMachine = async () => {
      try {
        const response = await fetch(
          `https://overpass-api.de/api/interpreter?data=[out:json];node(${id});out;`
        );
        const data = await response.json();
        if (data.elements && data.elements.length > 0) {
          setMachine(data.elements[0]);
        } else {
          setError("No machine found with this ID.");
        }
      } catch (err) {
        setError("Error fetching machine data: " + err.message);
      }
      setLoading(false);
    };
    fetchMachine();
  }, [id]);

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://yourdomain.com/automat/${id}`;

  return (
    <div style={styles.pageContainer}>
      <Head>
        <title>Cigarette Machine {id} - Profile</title>
        <meta name="description" content={`Details and location of cigarette machine ${id}`} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`Cigarette Machine ${id}`} />
        <meta property="og:description" content={`Details about cigarette machine ${id}.`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Head>

      {loading ? (
        <div style={styles.loadingContainer}>Loading...</div>
      ) : error ? (
        <div style={styles.errorContainer}>{error}</div>
      ) : (
        <>
          <h1 style={styles.title}>Cigarette Machine Profile</h1>

          <div style={styles.card}>
            <h2 style={styles.machineId}>Machine ID: {machine.id}</h2>
            <p style={styles.location}>
              <strong>Location:</strong> {machine.lat}, {machine.lon}
            </p>
            
            {/* Route Planning Button */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${machine.lat},${machine.lon}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.routeButton}
            >
              Routenplanung starten
            </a>

            {machine.tags && (
              <>
                <h3 style={styles.detailsTitle}>Details</h3>
                <ul style={styles.detailsList}>
                  {Object.keys(machine.tags).map((tag) => (
                    <li key={tag} style={styles.detailItem}>
                      <strong>{tag}:</strong> {machine.tags[tag]}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Navigation Links */}
          <div style={styles.navLinks}>
            {id && (
              <>
                <a href={`/automat/${parseInt(id) - 1}`} passHref>
                  <a style={styles.navLink}>&larr; Previous</a>
                </a>
                <a href={`/automat/${parseInt(id) + 1}`} passHref>
                  <a style={styles.navLink}>Next &rarr;</a>
                </a>
              </>
            )}
          </div>

          {/* Comment Section */}
          <div style={styles.commentSection}>
            <h2 style={styles.commentTitle}>Comments & Discussion</h2>
            <div
              id="cusdis_thread"
              data-host="https://cusdis.com"
              data-app-id="bb4d491f-3224-4d4b-9f93-52be484be1ed"
              data-page-id={machine?.id || "default-page-id"}
              data-page-url={pageUrl}
              data-page-title={`Cigarette Machine ${id}`}
              style={styles.cusdis}
            ></div>
          </div>

          {/* Load Cusdis script */}
          <Script src="https://cusdis.com/js/cusdis.es.js" strategy="lazyOnload" />
        </>
      )}
    </div>
  );
};
// **Styling**
const styles = {
  pageContainer: {
    padding: "30px",
    fontFamily: "'Inter', sans-serif",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  routeButton: {
    display: "inline-block",
    padding: "10px 20px",
    marginTop: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "25px",
    maxWidth: "650px",
    margin: "20px auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  machineId: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#444",
  },
  location: {
    fontSize: "1.1rem",
    marginBottom: "15px",
    color: "#666",
  },
  detailsTitle: {
    fontSize: "1.4rem",
    margin: "15px 0",
    color: "#333",
  },
  detailsList: {
    listStyleType: "none",
    padding: 0,
  },
  detailItem: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    fontSize: "1.1rem",
    color: "#555",
  },
  navLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
  },
  navLink: {
    textDecoration: "none",
    fontSize: "1.1rem",
    color: "#0070f3",
    fontWeight: "600",
    transition: "color 0.3s",
  },
  commentSection: {
    marginTop: "40px",
    padding: "20px",
    maxWidth: "700px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
    margin: "40px auto",
  },
  commentTitle: {
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  },
  cusdis: {
    maxWidth: "100%",
  },
  loadingContainer: {
    padding: "20px",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#555",
    textAlign: "center",
  },
  errorContainer: {
    padding: "20px",
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "red",
    textAlign: "center",
  },
};

export default AutomatPage;
