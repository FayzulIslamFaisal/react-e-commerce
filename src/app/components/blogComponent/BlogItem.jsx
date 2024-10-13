import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blogItem }) => {
  return (
    <div className="bg-gray-700 px-4 py-5">
      <div className="w-full h-[230px] relative mb-4">
        <Link href={`/blog/${blogItem?.id}`}>
          <Image src={blogItem?.imgUrl} alt={blogItem?.id} fill />
        </Link>
      </div>
      <h4 className="mb-4 capitalize font-semibold">
        <Link href={`/blog/${blogItem?.id}`}>{blogItem?.title}</Link>
      </h4>
      <p>{blogItem?.desc}</p>
      <div className="flex justify-between pt-3">
        <Link className="bg-gray-800 px-4 py-2" href={`/blog/${blogItem?.id}`}>
          {blogItem?.btnText}
        </Link>
        <span>Comments ({blogItem?.commentCount})</span>
      </div>
    </div>
  );
};

export default BlogItem;
