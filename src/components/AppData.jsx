// Naming -1 AppData is impossible to understand to what part of the app it belongs?
export default function AppData({ last_updated }) {
  //Properties
  const lastUpdate = new Date(last_updated).toString();

  return (
    <article className="details-article">
      <h2>App Data</h2>
      <h3>last update</h3>
      <p>{lastUpdate}</p>
    </article>
  );
}
