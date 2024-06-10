Welcome to NoteTaker

Project Installation Process, Starting Backend and Frontend commands
--------------------------------------------------------------------------------
Backend commands
    -cd backend
    -npm install
    -npm start

Frontend commands
    -cd frontend
    -npm install
    -cd notepad
    -npm run dev


Functionality
--------------------------------------------------------------------------------
With NoteTaker, you can create your own account by clicking "Create an Account" on the homepage, or log in if you already have an account.
You can also create, update, delete, and read (CRUD) your own notes. Additionally, you can pin a note you've created to have it appear at the top of your notes, and it will be displayed in chronological order.
To create a note, click the "+" button located at the bottom right of the screen, whether on desktop or mobile. A menu will open where you need to add a title and the content of your note (otherwise, the user is informed of what needs to be done).
Once the note component is created and displayed, you can see its details and update it by clicking the pencil-shaped button. This will open a window similar to the one for creating a note, where you can make your changes and then click "Update." You can also delete the note by clicking the trash can icon.
As mentioned above, by clicking the pin icon, you can pin the note.
Lastly, you can search for a note by typing part of its title or content into the search bar.


Database Check
--------------------------------------------------------------------------------
Additionally, we can check which users and entries (notes) exist via Studio 3T.
For accessibility reasons, I have not included a .gitignore file in my backend to ensure access to the .env file.
For convenience, you can also create a new connection in Studio 3T using the following connection string:

MONGODB_URI=mongodb+srv://nikiforos:0aJtcdzUmGoikgQ3@notepad.kokwvku.mongodb.net/?retryWrites=true&w=majority&appName=notepad

This way, we can view the database data that has been created in Atlas MongoDB.