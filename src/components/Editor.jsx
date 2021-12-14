import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Tiptap = ({ setContent }) => {
	const editor = useEditor({
		extensions: [StarterKit],
		autofocus: true,
		content: `
		  <h1>Enter Title Here</h1>
		  <ol>
			<li>First Item</li> 
			<li>Second Item</li> 
			<li>Third Item</li> 
		  </ol>
		`,
	});

	const MenuBar = ({ editor }) => {
		if (!editor) {
			return null;
		}

		return (
			<>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					className={
						editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
					}
				>
					Title (Please always add)
				</button>
				<button
					onClick={() => editor.chain().focus().toggleBold().run()}
					className={editor.isActive('bold') ? 'is-active' : ''}
				>
					<strong>bold</strong>
				</button>
				<button
					style={{ fontStyle: 'italic' }}
					onClick={() => editor.chain().focus().toggleItalic().run()}
					className={editor.isActive('italic') ? 'is-active' : ''}
				>
					italic
				</button>
				<button
					style={{ textDecoration: 'line-through' }}
					onClick={() => editor.chain().focus().toggleStrike().run()}
					className={editor.isActive('strike') ? 'is-active' : ''}
				>
					strike
				</button>
				<button
					onClick={() => editor.chain().focus().setParagraph().run()}
					className={editor.isActive('paragraph') ? 'is-active' : ''}
				>
					paragraph
				</button>

				<button
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={editor.isActive('bulletList') ? 'is-active' : ''}
				>
					bullet list
				</button>
				<button
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={editor.isActive('orderedList') ? 'is-active' : ''}
				>
					ordered list
				</button>

				<button onClick={() => editor.chain().focus().undo().run()}>
					undo
				</button>
				<button onClick={() => editor.chain().focus().redo().run()}>
					redo
				</button>
			</>
		);
	};

	return (
		<div>
			<MenuBar editor={editor} />
			<form onSubmit={(EditorContent) => setContent(EditorContent)}>
				<EditorContent editor={editor} />
				<button type="submit">Submit List</button>
			</form>
		</div>
	);
};

export default Tiptap;
