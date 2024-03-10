import type { Editor } from '@tiptap/react';
import { Button, Divider, Input } from 'antd';
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  BulletListIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  ItalicIcon,
  OrderListIcon,
  RedoIcon,
  StrikethroughIcon,
  UndoIcon,
} from 'icons';

const Toolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div className="flex gap-1 flex-wrap">
      <Button
        disabled={!editor.can().chain().focus().undo().run()}
        icon={<UndoIcon />}
        onClick={() => editor.chain().focus().undo().run()}
      />
      <Button
        disabled={!editor.can().chain().focus().redo().run()}
        icon={<RedoIcon />}
        onClick={() => editor.chain().focus().redo().run()}
      />
      <Button
        disabled={!editor.can().chain().focus().toggleBold().run()}
        icon={<BoldIcon />}
        onClick={() => editor.chain().focus().toggleBold().run()}
        type={editor.isActive('bold') ? 'primary' : 'default'}
      />
      <Button
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        icon={<ItalicIcon />}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        type={editor.isActive('italic') ? 'primary' : 'default'}
      />
      <Button
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        icon={<StrikethroughIcon />}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        type={editor.isActive('strike') ? 'primary' : 'default'}
      />
      <Button
        icon={<BulletListIcon />}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        type={editor.isActive('bulletList') ? 'primary' : 'default'}
      />
      <Button
        icon={<OrderListIcon />}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        type={editor.isActive('orderedList') ? 'primary' : 'default'}
      />
      <Button
        icon={<AlignLeftIcon />}
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        type={editor.isActive({ textAlign: 'left' }) ? 'primary' : 'default'}
      />
      <Button
        icon={<AlignCenterIcon />}
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        type={editor.isActive({ textAlign: 'center' }) ? 'primary' : 'default'}
      />
      <Button
        icon={<AlignRightIcon />}
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        type={editor.isActive({ textAlign: 'right' }) ? 'primary' : 'default'}
      />
      <Button
        icon={<H1Icon />}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        type={editor.isActive('heading', { level: 1 }) ? 'primary' : 'default'}
      />
      <Button
        icon={<H2Icon />}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        type={editor.isActive('heading', { level: 2 }) ? 'primary' : 'default'}
      />
      <Button
        icon={<H3Icon />}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        type={editor.isActive('heading', { level: 3 }) ? 'primary' : 'default'}
      />
      <Input
        className="max-w-[140px]"
        onInput={(event) =>
          editor
            .chain()
            .focus()
            .setColor((event.target as HTMLInputElement).value)
            .run()
        }
        type="color"
        value={editor.getAttributes('textStyle').color}
      />

      <Divider className="my-2" />
    </div>
  );
};

export default Toolbar;
