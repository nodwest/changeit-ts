import React, {FC} from 'react';
import {FormCreateNewPostBlogProps} from "./FormCreateNewPostBlog";

interface SearchCreateFilterBlogProps extends FormCreateNewPostBlogProps {}

const SearchCreateFilterBlog: FC<SearchCreateFilterBlogProps> = ({propsBlogState}) => {
    const [blogState, setBlogState] = propsBlogState
    return (
        <div className="blog-answer">
            <div className="blog-answer-field">
                <div className="blog-setting">
                    <input
                        className=" blog__search blog__setting__el"
                        type="text"
                        placeholder="Search blog for title"
                        value={blogState.inputSearch}
                        onChange={(e) => setBlogState({...blogState, inputSearch: e.target.value})}
                    />
                    <button
                        className="blog__setting__el active-focus sort-abc"
                        onClick={() => setBlogState({
                            ...blogState,
                            sortDate: null,
                            sortABC: blogState.sortABC === 'abc' ? 'cba' : 'abc'
                        })}
                    >
                        Sort ABC
                    </button>

                    <button
                        className="blog__setting__el active-focus sort-date"
                        onClick={() => setBlogState({
                            ...blogState,
                            sortABC: null,
                            sortDate: blogState.sortDate === 'abc' ? 'cba' : 'abc'
                        })}
                    >
                        Sort date
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchCreateFilterBlog;
