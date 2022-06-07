import React, {FC} from 'react';
import InputBlog from "./InputBlog";
import {IBlogState} from "../FromBlog";

export interface FormCreateNewPostBlogProps {
    propsBlogState: [blogState: IBlogState, setBlogState: (blogState: IBlogState) => void]
}

const FormCreateNewPostBlog: FC<FormCreateNewPostBlogProps> = ({propsBlogState}) => {
    const [blogState, setBlogState] = propsBlogState

    const handleCreatePost = () => {
        const objPostToPushBlogPosts = {
            id: blogState.idPost,
            title: blogState.title,
            text: blogState.text,
            date: new Date().toDateString(),
            dateParse: +new Date().getTime()
        }
        setBlogState({
            ...blogState,
            idPost: blogState.idPost + 1,
            posts: [...blogState.posts, objPostToPushBlogPosts],
            text: '',
            title: '',
            inputSearch: ''
        })
    }

    return (
        <form onClick={e => e.preventDefault()}
              id="blog"
              className="form-form background-white">

            <InputBlog
                label={'Title'}
                placeholder={'Enter Your Title'}
                value={blogState.title}
                onChange={(e) => setBlogState({...blogState, title: e.target.value})}
            />

            <InputBlog
                label={'Text'}
                placeholder={'Enter Your Text'}
                value={blogState.text}
                onChange={(e) => setBlogState({...blogState, text: e.target.value})}
            />

            <input
                className="form__submit background-blue"
                type="submit"
                value='Tell your story'
                onClick={handleCreatePost}
            />
        </form>
    );
};

export default FormCreateNewPostBlog;
