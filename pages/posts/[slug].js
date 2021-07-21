export default function SinglePost({ slug }) {
  return (
    <>
      <div>single post page</div>
      <div>slug : {slug}</div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  return {
    props: { slug },
  };
}
