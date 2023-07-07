import React from 'react'
import { Link } from 'react-router-dom';

const blog = [
    {
        id: 1,
        img: "/assets/images/blogimage.png",
        date: "Sept,02,2022",
        title:
            "How to convince recruiters and get your dream job. Get behind the wheel!",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
        name: "Sarah Harding",
        blogimage: "/assets/images/test-1.png",
    },
    {
        id: 2,
        img: "/assets/images/blogimage.png",
        date: "Sept,02,2022",
        title:
            "How to convince recruiters and get your dream job. Get behind the wheel!",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
        name: "Sarah Harding",
        blogimage: "/assets/images/test-1.png",
    },
    {
        id: 3,
        img: "/assets/images/blogimage.png",
        date: "Sept,02,2022",
        title:
            "How to convince recruiters and get your dream job. Get behind the wheel!",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
        name: "Sarah Harding",
        blogimage: "/assets/images/test-1.png",
    },

];

const NewsBlog = () => {
    return (
        <>
            <div className='md:py-16 py-8'>
                <div className="flex flex-col md:gap-0 justify-center items-center container mx-auto px-5 pb-10">
                    <h2 className="text-secondary text-2xl font-s-bold">News and Blog</h2>
                    <p className="text-lg pt-1">Get the Latest News, Updates and Tips</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto justify-items-center px-5">
                    {blog.map((item) => (
                        <div className="border border-secondary rounded-2xl h-full p-3">
                            <img alt="blogimage" src={item.img} className="w-full h-48" />
<div className='flex '>
                            <div className="py-1 rounded-md px-5 bg-secondary text-white mt-2">
                                {item.date}
                            </div>
                            </div>
                            <h4 className="text-sm font-s-bold pt-2">{item.title}</h4>
                            <p className="text-sm pt-2 text-gray-500">{item.para}</p>
                            <div className="py-2">
                                <div className="flex items-center space-x-3">
                                    <img alt="" src={item.blogimage} className="w-12 " />
                                    <h6 className="text-sm">{item.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center pt-8'>
                    <Link to="/blog" className='px-4 py-3 text-blue-600 border-blue-600 border rounded-lg font-semibold'>
                        Browse All Article
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NewsBlog