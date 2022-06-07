import React, {useEffect, useState} from 'react';
import './FormBlog.css'
import SearchCreateFilterBlog from "./components/SearchCreateFilterBlog";
import FormCreateNewPostBlog from "./components/FormCreateNewPostBlog";
import PostRenderBlog from "./components/PostsRenrderBlog";

export interface IBlogStatePosts {
    id: number
    title: string
    text: string
    date: string
    dateParse: number
}

export interface IBlogState {
    posts: IBlogStatePosts[]
    inputSearch: string
    sortABC: string | null
    sortDate: string | null
}

const FormBlog = () => {
    const [blogState, setBlogState] = useState<IBlogState>({
        posts: [],
        inputSearch: '',
        sortABC: 'abc',
        sortDate: 'abc',
    });
    const [filteredAndSortedPosts, setFilteredAndSortedPosts] = useState<IBlogStatePosts[]>([])
    const newLocalBlogItem = {
        inputSearch: blogState.inputSearch,
        sortABC: blogState.sortABC,
        sortDate: blogState.sortDate,
        pots: blogState.posts
    }

    useEffect(() => {
        const firstLoadBlogState = JSON.parse(localStorage.getItem('localBlogPosts')!) || []
        setBlogState({...blogState, posts: firstLoadBlogState})
    }, []);

    useEffect(() => {
        setFilteredAndSortedPosts(filterAndSaveToLocalStorageBlogPosts())
    }, [blogState.inputSearch, blogState.sortDate, blogState.sortABC, blogState.posts]);

    const handlerDeleteBlogPost = (id: number) => {
        const newPosts = blogState.posts.filter(post => post['id'] !== id)
        setBlogState({...blogState, posts: newPosts})
        localStorage.removeItem(JSON.stringify(newLocalBlogItem))
    }

    const filterAndSortBlogPosts = (state: IBlogState) => {
        let filterAndSortPosts = state.posts.filter(item => item['title'].toLocaleLowerCase().includes(state.inputSearch.toLocaleLowerCase()))

        if (state.sortABC === 'abc') {
            filterAndSortPosts = [...filterAndSortPosts].sort((a, b) => a.title.localeCompare(b.title))
        }
        if (state.sortABC === 'cba') {
            filterAndSortPosts = [...filterAndSortPosts].sort((a, b) => b.title.localeCompare(a.title))
        }
        if (state.sortDate === 'abc') {
            filterAndSortPosts = [...filterAndSortPosts].sort((a, b) => a.dateParse - b.dateParse)
        }
        if (state.sortDate === 'cba') {
            filterAndSortPosts = [...filterAndSortPosts].sort((a, b) => b.dateParse - a.dateParse)
        }
        return filterAndSortPosts
    }

    const filterAndSaveToLocalStorageBlogPosts = () => {
        let posts = []
        let isContains = false

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key === JSON.stringify(newLocalBlogItem)) {
                isContains = true
                posts = JSON.parse(localStorage.getItem(key) as string)
            }
        }
        if (!isContains) {
            posts = filterAndSortBlogPosts(blogState)
            if (posts.length > 0) localStorage.setItem(JSON.stringify(newLocalBlogItem), JSON.stringify(posts))
        }
        localStorage.setItem('localBlogPosts', JSON.stringify(blogState.posts))
        return posts
    }

    return (
        <section className=" blog">
            <div className="blog__title">
                Tell us how you change your life
            </div>
            <FormCreateNewPostBlog propsBlogState={[blogState, setBlogState]}/>
            <SearchCreateFilterBlog propsBlogState={[blogState, setBlogState]}/>
            <PostRenderBlog posts={filteredAndSortedPosts} handlerDeleteBlogPost={handlerDeleteBlogPost}/>
        </section>
    );
};

export default FormBlog;
