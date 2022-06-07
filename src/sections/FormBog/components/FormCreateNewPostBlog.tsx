import React, {FC, useState} from 'react';
import InputBlog from "./InputBlog";
import {IBlogState} from "../FromBlog";

export interface FormCreateNewPostBlogProps {
    propsBlogState: [blogState: IBlogState, setBlogState: (blogState: IBlogState) => void]
}

interface IInputBlogPostState {
    title: string
    text: string
    idPost: number
}

const FormCreateNewPostBlog: FC<FormCreateNewPostBlogProps> = ({propsBlogState}) => {
    const [blogState, setBlogState] = propsBlogState
    const [inputBlogPost, setInputBlogPost] = useState<IInputBlogPostState>({
        title: '',
        text: '',
        idPost: +new Date()
    })

    const handleCreatePost = () => {
        const objPostToPushBlogPosts = {
            id: inputBlogPost.idPost,
            title: inputBlogPost.title,
            text: inputBlogPost.text,
            date: new Date().toDateString(),
            dateParse: +new Date().getTime()
        }
        setBlogState({...blogState, posts: [...blogState.posts, objPostToPushBlogPosts], inputSearch: ''})
        setInputBlogPost({...inputBlogPost, text: '', title: '', idPost: inputBlogPost.idPost + 1,})
    }

    return (
        <form onClick={e => e.preventDefault()}
              id="blog"
              className="form-form background-white">

            <InputBlog
                label={'Title'}
                placeholder={'Enter Your Title'}
                value={inputBlogPost.title}
                onChange={(e) => setInputBlogPost({...inputBlogPost, title: e.target.value})}
            />

            <InputBlog
                label={'Text'}
                placeholder={'Enter Your Text'}
                value={inputBlogPost.text}
                onChange={(e) => setInputBlogPost({...inputBlogPost, text: e.target.value})}
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
