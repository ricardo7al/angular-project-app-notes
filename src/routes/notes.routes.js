const { Router } = require("express");
const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderNote,
  renderEditForm,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");

const { isAuthenticated } = require("../helpers/auth");

//new note
router.get("/notes/add", isAuthenticated, renderNoteForm);

router.post("/notes/new-note", isAuthenticated, createNewNote);

//get all note
router.get("/notes", isAuthenticated, renderNote);

//update note
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

router.put("/notes/edit/:id", isAuthenticated, updateNote);

// delete note
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = router;
