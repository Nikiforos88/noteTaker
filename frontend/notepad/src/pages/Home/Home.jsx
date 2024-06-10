/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import Toast from "../../components/ToastMessage/Toast";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../utils/axiosInstance";
import AddNotesImg from "../../assets/images/add-notes.svg";
import NoDatImg from "../../assets/images/no-data.svg";

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        getAllNotes();
        getUserInfo();
    
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null
    });

    const [showToastMsg, setShowToastMsg] = useState({
        isShown: false,
        message: "",
        type: "add"
    });

    const [allNotes, setAllNotes] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [isSearch, setIsSearch] = useState(false);

    const navigate = useNavigate();

    const handleEdit = (noteDetails) => {
        setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit"});
    };

    const showToastMessage = (message, type) => {
        setShowToastMsg({
            isShown: true,
            message,
            type
        });
    };

    const handleCloseToast = () => {
        setShowToastMsg({
            isShown: false,
            message: ""
        });
    };

    // Get User Info
    const getUserInfo = async () => {
        try {
            const response = await axiosInstance.get("/get-user");
            if (response.data && response.data.user) {
                setUserInfo(response.data.user);
            }
        } catch (error) {
            if (error.response.status == 401 ) {
                localStorage.clear();
                navigate("/login")
            }
        }
    };

    // Get all notes
    const getAllNotes = async () => {
        try {
            const response = await axiosInstance.get("/get-all-notes");

            if (response.data && response.data.notes) {
                setAllNotes(response.data.notes);
            }

        } catch (error) {
            console.log("An unecpected error occurred. Please try again.")
        }

    }

    // Delete Note
    const deleteNote = async (data) => {
        const noteId = data._id;
        try {
            const response = await axiosInstance.delete("/delete-note/" + noteId);

            if (response.data && !response.data.error) {
                showToastMessage("Note Deleted Successfully", "delete");
                getAllNotes();
            }
        } catch {
            if (error.response && error.response.data && error.response.data.message) {
                console.log("An unexpected error occurred. Please try again.")
            }
        }
    }

    // Search for a Note
    const onSearchNote = async (query) => {
        try {
            const response = await axiosInstance.get("/search-notes", {
                params: { query }
            })

            if (response.data && response.data.notes) {
                setIsSearch(true);
                setAllNotes(response.data.notes);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateIsPinned = async (noteData) => {
        const noteId = noteData._id;
        try {
            const response = await axiosInstance.put("/update-note-pinned/" + noteId , {
                isPinned: !noteData.isPinned
            });

            if (response.data && response.data.note) {
                showToastMessage("Note Updated Successfully");
                getAllNotes();
            }
        } catch {
           console.log(error)
        }
    }

    const handleClearSearch = () => {
        setIsSearch(false);
        getAllNotes();
    }


    useEffect(()=> {
        getAllNotes();
        getUserInfo();
        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Navbar userInfo={userInfo} onSearchNote={onSearchNote} handleClearSearch={handleClearSearch} />

            <div className="container mx-auto">
                {allNotes.length > 0 ? (<div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4 mt-8`}
                    style={isMobile ? { width: '90%', margin: '1em 1em 5em 1em' } : {}}>
                    {allNotes.map((item) => (
                    <NoteCard 
                    key={item._id}
                        title={item.title} 
                        date={item.createdOn} 
                        content={item.content}
                        tags={item.tags}
                        isPinned={item.isPinned}
                        onEdit={()=>{handleEdit(item)}}
                        onDelete={()=>{deleteNote(item)}}
                        onPinNote={()=>{updateIsPinned(item)}}
                    />
                    ))}
                </div>) : (
                    <EmptyCard 
                        imgSrc={isSearch ? NoDatImg : AddNotesImg} 
                        message={isSearch ? `Oops! No notes found matching your search!` : `Start creating your first note! Click the 'Add' button to join thoughts, ideas and reminders. Let's get started!`}/>
                )}
            </div>

            <button 
                className={`flex items-center justify-center rounded-full bg-brown hover:bg-darkbrown-600 ${
                    isMobile ? 'fixed bottom-5 right-5 w-12 h-12' : 'absolute right-10 bottom-10 w-16 h-16'
                }`} 
                onClick={() => {
                    setOpenAddEditModal({ isShown: true, type: "add", data: null});
                }}>
                <MdAdd className="text-[32px] bg-brown text-beige" />
            </button>


            <Modal  
                isOpen={openAddEditModal.isShown}
                onRequestClose={() => {}}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    content: {
                        width: isMobile ? '95%' : '40%',
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        padding: "20px",
                        margin: "20px"
                    }
                }}
                contentLabel=""
                className="bg-lightbeige rounded-md overflow-scroll" 
            >
                <AddEditNotes 
                    type={openAddEditModal.type}
                    noteData={openAddEditModal.data}
                    onClose={()=> {
                        setOpenAddEditModal({ isShown: false, type: "add", data: null})
                    }}
                    getAllNotes={getAllNotes}
                    showToastMessage={showToastMessage}
                />
            </Modal>

            <Toast 
                isShown={showToastMsg.isShown}
                message={showToastMsg.message}
                type={showToastMsg.type}
                onClose={handleCloseToast}
            />
        </>
    )
}

export default Home