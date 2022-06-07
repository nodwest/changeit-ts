import React, {FC} from 'react';
import {IBlogStatePosts} from "../FromBlog";

interface PostRenderBlogProps {
    posts: IBlogStatePosts[]
    handleDeleteBlogPost: (id: number) => void
}

const PostRenderBlog: FC<PostRenderBlogProps> = ({posts, handleDeleteBlogPost}) => {
    return (
        <>
            {posts.map(item => {
                return (
                    <div key={item.id} className="asnwer__item">

                        <div className={'asnwer__item__container_setting'}>
                            <div className="asnwer__item__title">
                                {item.title}
                            </div>

                            <div className={'cursor-pointer'} onClick={() => handleDeleteBlogPost(item.id)}>
                                ❌
                            </div>
                        </div>

                        <div className="asnwer__item__text">
                            {item.text}
                        </div>


                        <div className="asnwer__item__date">
                            {item.date}
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default PostRenderBlog;
