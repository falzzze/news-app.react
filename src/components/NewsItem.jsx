const DEFAULT_IMAGE =
  "https://assets2.cbsnewsstatic.com/hub/i/r/2023/12/02/eb264586-a561-4a00-ac8b-da89dfc5bd81/thumbnail/1200x630/e3883a2e9c168f2ba8a764eb2325e96e/gettyimages-1815032065.jpg?v=2a3c5d91939c9bf28fa0bc6fdfacfdd4";

function NewsItem({ title, urlToImage, description, url }) {
  return (
    <>
      <div
        className="card my-3 mx-3 mb-3 d-inline-block px-2 py-2 text-dark"
        style={{
          maxWidth: 350,
        }}
      >
        <img
          src={urlToImage ? urlToImage : DEFAULT_IMAGE}
          className="card-img-top"
          style={{ width: 330, height: 200 }}
          alt={urlToImage}
        />
        <div className="card-body">
          <h4 className="card-title">{title.slice(0, 40)}</h4>
          <p className="card-text">
            {description && description.slice(0, 80) + "..."}
          </p>
          <a href={url} target="_blank" className="btn btn-primary">
            More
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
