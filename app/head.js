export default function Head() {
  return (
    <>
      <title>My Portfolio</title>
      <meta name="description" content="My personal website" />
      <link
        rel="icon"
        href={`/LOGO.jpg?v=${new Date().getTime()}`} // cache-buster
      />
    </>
  );
}
