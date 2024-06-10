/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import moment from "moment";
// import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";


// eslint-disable-next-line react/prop-types
const NoteCard = ( { title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return (
        <div className="border-2 rounded p-4 bg-beige hover:shadow-xl transition-all ease-in-out">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-xs text-slate-500">{moment(date).format('Do MMM YYYY')}</span>
                </div>

            </div>

            <p className="text-xs text-slate-600 mt-2">{content?.slice(0,60)}</p>

            <div className="flex items-center justify-between mt-3">
                <div className="text-xs text-slate-500">{tags.map((item) => `#${item}`)}</div>
            </div>
            <div className="flex items-center gap-2 mt-3 justify-between">
                    <MdCreate
                        className="text-darkgray icon-btn hover:text-green-500"
                        onClick={onEdit}
                    />
                    <MdDelete
                        className="text-darkgray icon-btn hover:text-red-500"
                        onClick={onDelete}
                    />
                <MdOutlinePushPin 
                    style={{ color: isPinned ? '#8B8000' : 'gray' }} 
                    onClick={onPinNote} 
                />
                </div>
        </div>
        

    )
}

export default NoteCard