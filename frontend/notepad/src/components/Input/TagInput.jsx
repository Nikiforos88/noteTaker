/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ( { tags, setTags }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const addNewTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag();
        }
    }

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    }

    return (
      <div>
        {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
            {tags.map((tag, index) => (
                <span key={index} className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded">
                    # {tag}
                    <button onClick={()=>{handleRemoveTag(tag)}}>
                        <MdClose />
                    </button>
                </span>
            ))}
        </div>
        )}

        <div className="flex items-center gap-4 mt-3">
            <input 
            type="text"
            value={inputValue}
            className="bg-beige text-sm border px-3 py-2 rounded outline-none" 
            placeholder="Add tags" 
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            />

        <button 
            className="flex items-center justify-center rounded border bg-beige hover:bg-darkbrown-700 transition-colors duration-300"
            onClick={() => {
                addNewTag();
            }}
        >
            <MdAdd className="text-2xl text-brown hover:bg-brown hover:text-beige transition-colors duration-300" />
        </button>

        </div>
      </div>
    );
};

export default TagInput