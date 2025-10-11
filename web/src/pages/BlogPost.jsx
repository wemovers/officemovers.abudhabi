import { useParams } from 'react-router-dom';
import blogData from '../data/blogData.json';
import { Helmet } from 'react-helmet';
import '../assets/css/BlogPost.css';
import { Link } from 'react-router-dom';

// Import all images
const images = import.meta.glob('../assets/img/*', { eager: true });

const getImagePath = (filename) => {
  const matchedPath = Object.keys(images).find((path) => path.includes(filename));
  return matchedPath ? images[matchedPath].default : '';
};


const BlogPost = () => {
  const { slug } = useParams();
  // Find the blog post that matches the slug
  const post = blogData.posts.find((p) => p.slug === slug);
  if (!post) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription || post.content[0]?.text?.slice(0, 200)} />
      </Helmet>
      <div className="travel-blog-container">
        <article className="travel-blog-post">
          <div className="post-header">
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
            </div>
            <h1 className="post-title">{post.title}</h1>

            {post.featuredImage && (
              <img
                src={getImagePath(post.featuredImage)}
                alt="Best Movers and Packers in Abu Dhabi"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            )}
          </div>

          <div className="post-content">
            {post.content.map((section, index) => {
              switch (section.type) {
                case 'paragraph':
                  return <p key={index} className="post-paragraph" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: section.text }} />;
                case 'heading':
                  return <h2 key={index} className="post-heading" dangerouslySetInnerHTML={{ __html: section.text }} />;
                case 'subheading':
                  return <h3 key={index} className="post-subheading" dangerouslySetInnerHTML={{ __html: section.text }} />;
                case 'image':
                  return (
                    <figure key={index} className="post-image">
                      <img src={getImagePath(section.src)} alt={section.alt || 'Blog image'} />
                      {section.caption && <figcaption>{section.caption}</figcaption>}
                    </figure>
                  );
                case 'list':
                  return (
                    <ul
                      key={index}
                      className="post-list"
                      dangerouslySetInnerHTML={{
                        __html: section.items
                          .map((item) => `<li>${item}</li>`)
                          .join("")
                      }}
                    ></ul>

                  );
                default:
                  return null;
              }
            })}
          </div>

          <footer className="post-footer">

          </footer>
        </article>

        <aside className="related-posts">
          <h3 className="related-title">You Might Also Like</h3>
          <div className="related-grid">
            {post.relatedPosts.map((related) => (
              <Link key={related.id} to={related.url} className="related-post">
                <img src={getImagePath(related.thumbnail)} alt={related.title} />
                <h4>{related.title}</h4>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default BlogPost;