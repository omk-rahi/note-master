import Editor from "../components/Editor";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "react-query";
import { createNote } from "../services/noteServices";
import toast from "react-hot-toast";

const NewNote = () => {
  const [editorValue, setEditorValue] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: (data) => {
      if (!editorValue) return;

      const note = {
        ...data,
        content: editorValue,
        userId: "d77cab97-0ed5-49fc-a93a-74e521376c4d",
      };

      createNote(note);
    },

    onSuccess: () => {
      toast.success("Note saved!");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <div className="rounded-md bg-white px-8 py-4 pb-20 shadow-sm">
      <h2 className="mb-2 text-2xl font-semibold">Create new note</h2>

      <div className="grid grid-cols-[2fr_1fr] gap-8">
        <Editor editorValue={editorValue} setEditorValue={setEditorValue} />
        <form onSubmit={handleSubmit((data) => mutate(data))}>
          <Input
            name="title"
            errors={errors}
            register={register}
            label="Note title"
            validationSchema={{ required: "Please choose a title" }}
          />
          <div className="my-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="isPublic"
              className="h-6 w-6 accent-slate-900"
              {...register("isPublic")}
            />
            <label htmlFor="isPublic">Public</label>
          </div>

          <Button type="primary">Save</Button>
        </form>
      </div>
    </div>
  );
};

export default NewNote;
