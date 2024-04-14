import { Comment } from "@/types/comment";
import { ComponentBaseType } from "../types/base-component.type";

export type CommentProps = Omit<ComponentBaseType,'isDisabled' | 'size'> & Comment;